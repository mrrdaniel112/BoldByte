import sgMail from '@sendgrid/mail';

// Additional debugging information
console.log('Initializing SendGrid service...');

// Check if we have the necessary environment variables
if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is not set. Email functionality will not work.");
} else {
  try {
    // Set the API key for SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    console.log('SendGrid API key was set');
  } catch (error) {
    console.error('Error setting SendGrid API key:', error);
  }
}

if (!process.env.SENDGRID_SID) {
  console.warn("SENDGRID_SID environment variable is not set. This should be the sender email address.");
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
  
  if (!process.env.SENDGRID_SID) {
    console.error('SendGrid SID (sender email) is missing');
    return false;
  }
  
  // For debugging only - never log actual API keys
  console.log('Attempting to send email with SendGrid');
  console.log('Sender email:', process.env.SENDGRID_SID);
  console.log('Recipient email:', params.to);
  
  try {
    // Create email content
    const msg = {
      to: params.to,
      from: process.env.SENDGRID_SID, // This must be a verified sender in your SendGrid account
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    };
    
    // Send the email
    await sgMail.send(msg);
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