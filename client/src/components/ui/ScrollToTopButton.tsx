import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isVisible && (
        <Button
          size="icon"
          variant="secondary"
          onClick={scrollToTop}
          className="h-10 w-10 rounded-full bg-[#1F2833] hover:bg-[#45A29E] transition-all duration-300"
          aria-label="Scroll to top"
        >
          <Icon name="chevron-up" className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
