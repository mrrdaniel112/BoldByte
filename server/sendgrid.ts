import sgMail from '@sendgrid/mail';

// Additional debugging information
console.log('Initializing SendGrid service...');

// Define the verified sender email for SendGrid - using the only verified sender in your account
const VERIFIED_SENDER_EMAIL = 'boldbyte.studio@gmail.com';

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
      from: {
        email: VERIFIED_SENDER_EMAIL, // Use the verified sender email
        name: 'BOLDBYTE Studio' // Adding a friendly name improves deliverability
      }, 
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    };
    
    // Send the email
    const response = await sgMail.send(msg);
    console.log('Email sent successfully to:', params.to);
    console.log('SendGrid response:', response);
    
    if (params.to.includes('gmail.com')) {
      console.log('NOTE: Gmail may delay delivery or filter emails without SPF/DKIM verification.');
    }
    
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