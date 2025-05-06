import { z } from 'zod';
import { MailService } from '@sendgrid/mail';

// Set up SendGrid with the API key from environment variables
if (process.env.SENDGRID_API_KEY) {
  const mailService = new MailService();
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  projectType: z.string(),
  budget: z.string(),
  message: z.string(),
});

type ContactFormData = z.infer<typeof formSchema>;

export async function sendContactForm(data: ContactFormData): Promise<boolean> {
  // Check if SendGrid is configured
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SendGrid API key not found. Using fallback mode.');
    // Simulate API call with a delay as fallback
    return new Promise((resolve) => {
      console.log('Sending form data (simulated):', data);
      setTimeout(() => resolve(true), 1000);
    });
  }

  try {
    // Validate the form data
    formSchema.parse(data);
    
    // Set up SendGrid mail service
    const mailService = new MailService();
    mailService.setApiKey(process.env.SENDGRID_API_KEY);
    
    // Format message content
    const projectDetails = `
      Project Type: ${data.projectType}
      Budget Range: ${data.budget}
      Message: ${data.message}
    `;
    
    // Create the email
    const msg = {
      to: 'boldbyte.studio@gmail.com',
      from: 'boldbyte.studio@gmail.com', // Must be a verified sender
      subject: `New Project Inquiry from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        ${projectDetails}
      `,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <h3>Project Details:</h3>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget Range:</strong> ${data.budget}</p>
        <p><strong>Message:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await mailService.send(msg);
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
