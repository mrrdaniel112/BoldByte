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
        <h2>BOLDBYTE Contact Form Confirmation</h2>
        <p>Hello ${formData.name},</p>
        <p>Thank you for contacting BOLDBYTE! This is a confirmation that we've received your inquiry. We'll get back to you within 24 hours.</p>
        <p>Here's a summary of your submission:</p>
        <hr>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Project Type:</strong> ${formData.projectType}</p>
        <p><strong>Budget Range:</strong> ${formData.budget}</p>
        <p><strong>Your Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>If you need to reach us immediately, please email us at boldbyte.studio@gmail.com</p>
        <p>Regards,<br>The BOLDBYTE Team</p>
      `;
      
      const emailText = `
        BOLDBYTE Contact Form Confirmation
        
        Hello ${formData.name},
        
        Thank you for contacting BOLDBYTE! This is a confirmation that we've received your inquiry. We'll get back to you within 24 hours.
        
        Here's a summary of your submission:
        ----------------------------------
        Name: ${formData.name}
        Email: ${formData.email}
        Project Type: ${formData.projectType}
        Budget Range: ${formData.budget}
        
        Your Message:
        ${formData.message}
        ----------------------------------
        
        If you need to reach us immediately, please email us at boldbyte.studio@gmail.com
        
        Regards,
        The BOLDBYTE Team
      `;
      
      // Send the email using SendGrid
      const emailSent = await sendEmail({
        to: formData.email, // Send directly to the user's provided email
        subject: `BOLDBYTE Project Inquiry Confirmation`,
        html: emailHtml,
        text: emailText,
      });
      
      if (emailSent) {
        res.status(200).json({ 
          success: true, 
          message: 'Thank you for your submission! We just sent a confirmation to your email. We will contact you within 24 hours.'
        });
      } else {
        // If SendGrid fails, still tell the user their form was received
        res.status(200).json({ 
          success: true, 
          maintenance: true,
          message: "Thank you for your submission! There was an issue sending the confirmation email, but we've received your information and will contact you soon."
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
