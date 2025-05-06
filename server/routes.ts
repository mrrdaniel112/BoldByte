import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, projectType, budget, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required' });
      }
      
      // In a real implementation, you would:
      // 1. Use a service like EmailJS, SendGrid, etc.
      // 2. Store the inquiry in a database
      
      // For now, just log the request and return success
      console.log('Contact form submission:', { name, email, projectType, budget, message });
      
      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
