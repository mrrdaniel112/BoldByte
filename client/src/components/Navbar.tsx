import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [portfolioActive, setPortfolioActive] = useState(false);
  const [clientProjectsActive, setClientProjectsActive] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Check if we're in the portfolio section
      if (location === '/' && document.getElementById('portfolio')) {
        const portfolioSection = document.getElementById('portfolio');
        const portfolioRect = portfolioSection?.getBoundingClientRect();
        
        // If portfolio section is in view (with some padding for usability)
        if (portfolioRect && 
            portfolioRect.top <= 100 && 
            portfolioRect.bottom >= 0) {
          setPortfolioActive(true);
        } else {
          setPortfolioActive(false);
        }
      }
      
      // Check if we're in the client projects section
      if (location === '/' && document.getElementById('client-projects')) {
        const clientProjectsSection = document.getElementById('client-projects');
        const clientProjectsRect = clientProjectsSection?.getBoundingClientRect();
        
        // If client projects section is in view (with some padding for usability)
        if (clientProjectsRect && 
            clientProjectsRect.top <= 100 && 
            clientProjectsRect.bottom >= 0) {
          setClientProjectsActive(true);
        } else {
          setClientProjectsActive(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B0C10]/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-white">BOLD</span>
            <span className="text-[#66FCF1]">BYTE</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" label="Home" currentPath={location} onClick={closeMenu} />
            <button 
              className={`transition-colors duration-200 ${
                portfolioActive ? 'text-[#66FCF1]' : 'text-white hover:text-[#66FCF1]'
              }`}
              onClick={() => {
                closeMenu();
                // Find the portfolio section and scroll to it
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  const headerOffset = 80;
                  const elementPosition = portfolioSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                } else {
                  // If not found, likely on a different page
                  window.location.href = '/#portfolio';
                }
              }}
            >
              Portfolio
            </button>
            <NavLink href="/team" label="Team" currentPath={location} onClick={closeMenu} />
            <NavLink href="/book" label="Book" currentPath={location} onClick={closeMenu} />
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="outline" 
              size="icon"
              className="border-[#66FCF1] text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#0B0C10]"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1F2833] px-6 py-4 border-b border-gray-800">
          <div className="flex flex-col space-y-4">
            <NavLink href="/" label="Home" currentPath={location} onClick={closeMenu} />
            <button 
              className={`transition-colors duration-200 text-left ${
                portfolioActive ? 'text-[#66FCF1]' : 'text-white hover:text-[#66FCF1]'
              }`}
              onClick={() => {
                closeMenu();
                // Find the portfolio section and scroll to it
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  const headerOffset = 80;
                  const elementPosition = portfolioSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                } else {
                  // If not found, likely on a different page
                  window.location.href = '/#portfolio';
                }
              }}
            >
              Portfolio
            </button>
            <NavLink href="/team" label="Team" currentPath={location} onClick={closeMenu} />
            <NavLink href="/book" label="Book" currentPath={location} onClick={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
}

type NavLinkProps = {
  href: string;
  label: string;
  currentPath: string;
  onClick: () => void;
};

function NavLink({ href, label, currentPath, onClick }: NavLinkProps) {
  const isActive = 
    href === '/' ? currentPath === '/' : 
    href.startsWith('#') ? currentPath === '/' : 
    currentPath.startsWith(href);

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      // Add a small delay to ensure DOM is fully loaded
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          // Use scrollIntoView for better cross-browser compatibility
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          
          // Add manual offset due to fixed header
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          console.log(`Element with id ${targetId} not found`);
        }
      }, 100);
      
      onClick();
    } else {
      onClick();
    }
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={`transition-colors duration-200 ${
        isActive ? 'text-[#66FCF1]' : 'text-white hover:text-[#66FCF1]'
      }`}
    >
      {label}
    </Link>
  );
}
