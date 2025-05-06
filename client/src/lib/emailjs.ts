import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string(),
  budget: z.string(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof formSchema>;

export async function sendContactForm(data: ContactFormData): Promise<boolean> {
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
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error from API:', errorData);
      throw new Error(errorData.message || 'Failed to submit form');
    }
    
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Error in sendContactForm:', error);
    throw error;
  }
}
