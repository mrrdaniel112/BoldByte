import { useEffect } from 'react';

interface AnimateOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}

export default function useAnimateOnScroll(
  selector: string,
  options: AnimateOnScrollOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = 'fade-up'
  } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    elements.forEach((el) => {
      el.classList.remove(animationClass);
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [selector, threshold, rootMargin, animationClass]);
}
