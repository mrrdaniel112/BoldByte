import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export default function Success() {
  useEffect(() => {
    document.title = "Submission Successful | BOLDBYTE";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-16 pb-20">
      <div className="max-w-md w-full text-center">
        <div className="bg-[#1F2833] p-10 rounded-xl border border-gray-800">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#66FCF1]/20 mb-6">
            <Icon name="check" className="h-8 w-8 text-[#66FCF1]" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-[#C5C6C7] mb-8">
            Your project request has been submitted successfully. We'll review your information and get back to you within 24 hours.
          </p>
          <div className="space-y-3">
            <Button 
              className="w-full bg-[#66FCF1] text-[#0B0C10] hover:bg-[#45A29E]"
              asChild
            >
              <Link href="/">Return to Homepage</Link>
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-[#66FCF1] text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#0B0C10]"
              asChild
            >
              <Link href="/work">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
