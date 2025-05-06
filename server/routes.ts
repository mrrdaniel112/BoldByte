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
      
      // Instead of sending email, return maintenance message
      // The data is still validated and logged, but we don't try to send via SendGrid
      res.status(200).json({ 
        success: true, 
        maintenance: true,
        message: "Thank you for your submission! Our email service is currently under maintenance. We will contact you soon."
      });
      
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
      
      // Return a generic error that doesn't mention email specifically
      res.status(500).json({ 
        success: false, 
        maintenance: true,
        message: 'Our contact system is currently under maintenance. Please try again later or email us directly at boldbyte.studio@gmail.com.'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
