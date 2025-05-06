import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  // Use SendGrid for contact form emails
  app.post('/api/contact', sendEmail);

  const httpServer = createServer(app);

  return httpServer;
}
