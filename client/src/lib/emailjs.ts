import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string(),
  budget: z.string(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof formSchema>;

export async function sendContactForm(data: ContactFormData): Promise<{success: boolean; maintenance?: boolean; message?: string}> {
  try {
    // Validate the form data
    formSchema.parse(data);
    
    // Log form data for debugging
    console.log('Sending form data to backend:', data);
    
    // Send data to our backend API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      console.error('Error from API:', result);
      // We'll let the component handle the error details
      return {
        success: false,
        maintenance: result.maintenance || false,
        message: result.message || 'Failed to submit form'
      };
    }
    
    return {
      success: true,
      maintenance: result.maintenance || false,
      message: result.message
    };
  } catch (error) {
    console.error('Error in sendContactForm:', error);
    return {
      success: false,
      message: 'An error occurred while submitting the form. Please try again.'
    };
  }
}
