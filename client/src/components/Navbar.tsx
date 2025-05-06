import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0B0C10]/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-white">BOLD</span>
            <span className="text-[#66FCF1]">DEV</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" label="Home" currentPath={location} onClick={closeMenu} />
            <NavLink href="/#services" label="Services" currentPath={location} onClick={closeMenu} />
            <NavLink href="/work" label="Work" currentPath={location} onClick={closeMenu} />
            <NavLink href="/book" label="Book" currentPath={location} onClick={closeMenu} />
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <Icon name={isOpen ? "x" : "menu"} className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1F2833] px-6 py-4 border-b border-gray-800">
          <div className="flex flex-col space-y-4">
            <NavLink href="/" label="Home" currentPath={location} onClick={closeMenu} />
            <NavLink href="/#services" label="Services" currentPath={location} onClick={closeMenu} />
            <NavLink href="/work" label="Work" currentPath={location} onClick={closeMenu} />
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
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
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
