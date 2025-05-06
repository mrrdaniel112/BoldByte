import { Request, Response } from 'express';
import { MailService } from '@sendgrid/mail';
import { z } from 'zod';

// Email form schema for validation
const emailFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  projectType: z.string().min(1, 'Project type is required'),
  budget: z.string().min(1, 'Budget range is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Configure SendGrid
if (!process.env.SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY environment variable not set');
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function sendEmail(req: Request, res: Response) {
  try {
    // Validate request body
    const validatedData = emailFormSchema.parse(req.body);
    
    // If no API key, simulate success (for development)
    if (!process.env.SENDGRID_API_KEY) {
      console.log('Simulating email send (no API key):', validatedData);
      return res.status(200).json({ success: true, message: 'Email simulated (no API key)' });
    }
    
    // Create the email message
    const msg = {
      to: 'boldbyte.studio@gmail.com',
      from: 'boldbyte.studio@gmail.com', // Must be a verified sender
      subject: `New Project Inquiry from ${validatedData.name}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Project Type: ${validatedData.projectType}
        Budget Range: ${validatedData.budget}
        Message: ${validatedData.message}
      `,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <h3>Project Details:</h3>
        <p><strong>Project Type:</strong> ${validatedData.projectType}</p>
        <p><strong>Budget Range:</strong> ${validatedData.budget}</p>
        <p><strong>Message:</strong><br>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await mailService.send(msg);
    console.log('Email sent successfully');
    
    // Return success response
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return error response
    return res.status(400).json({ 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error occurred' 
    });
  }
}