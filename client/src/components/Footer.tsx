import { Link } from 'wouter';
import { Icon } from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-white">BOLD</span>
              <span className="text-[#66FCF1]">DEV</span>
            </Link>
            <p className="text-[#C5C6C7] mb-6 max-w-md">
              We design and develop custom websites, web applications, and mobile apps that help businesses grow.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="twitter" label="Twitter" />
              <SocialLink href="#" icon="linkedin" label="LinkedIn" />
              <SocialLink href="#" icon="github" label="GitHub" />
              <SocialLink href="#" icon="instagram" label="Instagram" />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/#services" label="Custom Websites" />
              <FooterLink href="/#services" label="Web Applications" />
              <FooterLink href="/#services" label="Mobile Apps" />
              <FooterLink href="/#services" label="AI Solutions" />
              <FooterLink href="/#services" label="E-Commerce" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="About" />
              <FooterLink href="/work" label="Portfolio" />
              <FooterLink href="/#process" label="Process" />
              <FooterLink href="/book" label="Contact" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#C5C6C7] text-sm">© {new Date().getFullYear()} BOLDDEV. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-[#C5C6C7] hover:text-[#66FCF1] text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#C5C6C7] hover:text-[#66FCF1] text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkProps = {
  href: string;
  label: string;
};

function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors duration-200">
        {label}
      </Link>
    </li>
  );
}

type SocialLinkProps = {
  href: string;
  icon: string;
  label: string;
};

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors duration-200" 
      aria-label={label}
    >
      <Icon name={icon} className="text-xl" />
    </a>
  );
}
