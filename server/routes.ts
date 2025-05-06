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
      
      // Create email content
      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Project Type:</strong> ${formData.projectType}</p>
        <p><strong>Budget Range:</strong> ${formData.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\\n/g, '<br>')}</p>
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
        to: 'boldbyte.studio@gmail.com',
        subject: `New Project Inquiry from ${formData.name}`,
        html: emailHtml,
        text: emailText,
      });
      
      if (emailSent) {
        res.status(200).json({ success: true, message: 'Form submitted successfully.' });
      } else {
        res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
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
      
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
