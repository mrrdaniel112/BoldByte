import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is not set. Email functionality may not work.");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_SID) {
    console.error('SendGrid API key or SID missing');
    return false;
  }
  
  // Default sender address if SID is missing (shouldn't happen based on check above)
  const senderEmail = process.env.SENDGRID_SID || 'boldbyte.studio@gmail.com';
  
  try {
    await mailService.send({
      to: params.to,
      from: senderEmail, // SendGrid requires this to be a valid email address
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    });
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}