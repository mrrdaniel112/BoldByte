import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./sendgrid";
import { z } from "zod";

// Contact form schema validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  projectType: z.string().min(1, { message: 'Please select a project type' }),
  budget: z.string().min(1, { message: 'Please select a budget range' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate incoming data with Zod
      const formData = contactFormSchema.parse(req.body);
      
      // Log the form submission for record-keeping
      console.log('Contact form submission received:', { 
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        budget: formData.budget
      });
      
      // Create email content
      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Project Type:</strong> ${formData.projectType}</p>
        <p><strong>Budget Range:</strong> ${formData.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `;
      
      const emailText = `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Project Type: ${formData.projectType}
        Budget Range: ${formData.budget}
        
        Message:
        ${formData.message}
      `;
      
      // Send the email using SendGrid
      const emailSent = await sendEmail({
        to: 'danielgolda@live.com', // Send to the owner's email
        subject: `New Project Inquiry from ${formData.name}`,
        html: emailHtml,
        text: emailText,
      });
      
      if (emailSent) {
        res.status(200).json({ 
          success: true, 
          message: 'Thank you for your submission! We will contact you within 24 hours.'
        });
      } else {
        // If SendGrid fails, still tell the user their form was received
        res.status(200).json({ 
          success: true, 
          maintenance: true,
          message: "Thank you for your submission! Our email system is experiencing issues, but we've received your information and will contact you soon."
        });
      }
      
    } catch (error) {
      console.error('Error processing contact form:', error);
      
      // Check if it's a validation error
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Validation error',
          errors: error.errors.map(e => ({
            path: e.path.join('.'),
            message: e.message
          }))
        });
      }
      
      // Return a generic error
      res.status(500).json({ 
        success: false, 
        message: 'There was a problem processing your request. Please try again later or email us directly at boldbyte.studio@gmail.com.'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
