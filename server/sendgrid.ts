import sgMail from '@sendgrid/mail';

// Additional debugging information
console.log('Initializing SendGrid service...');

// Define default sender email if environment variable is not set
const DEFAULT_FROM_EMAIL = 'boldbyte.studio@gmail.com';

// Check if we have the necessary environment variables
if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is not set. Email functionality will not work.");
} else {
  try {
    // Set the API key for SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log('SendGrid API key was set successfully');
  } catch (error) {
    console.error('Error setting SendGrid API key:', error);
  }
}

interface EmailParams {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  // Double-check environment variables
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SendGrid API key is missing');
    return false;
  }
  
  // For debugging only - never log actual API keys
  console.log('Attempting to send email with SendGrid');
  console.log('Recipient email:', params.to);
  
  try {
    // Create email content
    const msg = {
      to: params.to,
      from: DEFAULT_FROM_EMAIL, // Use a consistent, verified sender email
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    };
    
    // Send the email
    const response = await sgMail.send(msg);
    console.log('Email sent successfully to:', params.to);
    return true;
  } catch (error: any) {
    console.error('SendGrid email error:', error);
    
    // Additional error details for debugging
    if (error.response) {
      console.error('SendGrid error details:');
      console.error('Status code:', error.response.status);
      console.error('Body:', error.response.body);
      console.error('Headers:', error.response.headers);
    }
    
    return false;
  }
}