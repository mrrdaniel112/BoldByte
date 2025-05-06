import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  projectType: z.string(),
  budget: z.string(),
  message: z.string(),
});

type ContactFormData = z.infer<typeof formSchema>;

export async function sendContactForm(data: ContactFormData): Promise<boolean> {
  // In a real implementation, we would use EmailJS or another service
  // This is a placeholder that simulates sending the form
  
  // Simulate API call with a delay
  return new Promise((resolve, reject) => {
    // Log form data for debugging
    console.log('Sending form data:', data);
    
    // Simulate a successful form submission after a delay
    setTimeout(() => {
      try {
        // Validate the form data
        formSchema.parse(data);
        
        // Simulate successful form submission
        resolve(true);
      } catch (error) {
        // Handle validation errors
        reject(error);
      }
    }, 1000);
  });
}
