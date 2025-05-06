import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Icon } from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { sendContactForm } from '@/lib/emailjs';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  projectType: z.string().min(1, { message: 'Please select a project type' }),
  budget: z.string().min(1, { message: 'Please select a budget range' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Book() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  useAnimateOnScroll('.animate-item');

  useEffect(() => {
    document.title = "Book a Project | BOLDBYTE";
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      budget: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await sendContactForm(data);
      toast({
        title: "Form submitted successfully",
        description: "We'll get back to you within 24 hours.",
      });
      setLocation('/success');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error submitting form",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="py-16 px-6 bg-[#1F2833]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-item">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something <span className="text-[#66FCF1]">Bold</span></h1>
              <p className="text-[#C5C6C7] mb-8">
                Ready to transform your idea into reality? Tell us about your project, and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#66FCF1] text-xl mr-4 mt-1">
                    <Icon name="mail" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-[#C5C6C7]">hello@boldbyte.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#66FCF1] text-xl mr-4 mt-1">
                    <Icon name="phone" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-[#C5C6C7]">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#66FCF1] text-xl mr-4 mt-1">
                    <Icon name="map-pin" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-[#C5C6C7]">123 Tech Boulevard, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0B0C10] p-8 rounded-xl border border-gray-800 animate-item">
              <h2 className="text-xl font-bold mb-6">Book Your Project</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="bg-[#1F2833] border-gray-700 focus:border-[#66FCF1] focus:ring-[#66FCF1]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            type="email" 
                            className="bg-[#1F2833] border-gray-700 focus:border-[#66FCF1] focus:ring-[#66FCF1]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[#1F2833] border-gray-700 focus:border-[#66FCF1] focus:ring-[#66FCF1]">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#1F2833] border-gray-700">
                            <SelectItem value="website">Website</SelectItem>
                            <SelectItem value="webapp">Web Application</SelectItem>
                            <SelectItem value="mobileapp">Mobile App</SelectItem>
                            <SelectItem value="ai">AI Solution</SelectItem>
                            <SelectItem value="ecommerce">E-Commerce</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-[#1F2833] border-gray-700 focus:border-[#66FCF1] focus:ring-[#66FCF1]">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#1F2833] border-gray-700">
                            <SelectItem value="under-1k">Under $1,000</SelectItem>
                            <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                            <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k+">$100,000+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project" 
                            className="bg-[#1F2833] border-gray-700 focus:border-[#66FCF1] focus:ring-[#66FCF1]" 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#66FCF1] text-[#0B0C10] hover:bg-[#45A29E] transition-colors duration-300 mt-2 flex items-center justify-center"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Icon name="loader" className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Icon name="send" className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
