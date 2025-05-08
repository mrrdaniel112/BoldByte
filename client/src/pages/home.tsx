import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Link } from 'wouter';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';
import HealthAppSvg from '@/components/ui/HealthAppSvg';
import BlockchainSvg from '@/components/ui/BlockchainSvg';
import EcommerceSvg from '@/components/ui/EcommerceSvg';
import AiServiceSvg from '@/components/ui/AiServiceSvg';
import AnalyticsSvg from '@/components/ui/AnalyticsSvg';

// Project type definition
type ProjectImage = React.ReactElement | string;

// Component to render either a React component or an image URL
const ProjectImageRenderer = ({ image, title }: { image: ProjectImage, title: string }) => {
  if (React.isValidElement(image)) {
    return (
      <div className="w-full h-48 overflow-hidden">
        {image}
      </div>
    );
  }
  
  return (
    <img 
      src={image as string} 
      alt={title} 
      className="w-full h-48 object-cover object-center"
    />
  );
};

interface Project {
  id: string;
  title: string;
  description: string;
  image: ProjectImage;
  techs: string[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
    initials: string;
  };
}

// Import projects from work page to avoid duplication
const workProjects = [
  {
    image: "https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Modern E-commerce",
    description: "A sleek online store with custom product views and seamless checkout.",
    tags: ["React", "Next.js", "Stripe"],
    categories: ["ecommerce"]
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform for a SaaS company.",
    tags: ["Vue.js", "D3.js", "Firebase"],
    categories: ["dashboard", "saas"]
  },
  {
    image: "https://pixabay.com/get/g7f037d6700f7d39b14559d21add9998ad50e5dfc38787ed5dcbb2d1fa4008417bd6f91c3b6052d5fd7c2d2330dd86e5bfffe26113bddc25ee89c0126f37df0c2_1280.jpg",
    title: "Social Mobile App",
    description: "Community platform connecting enthusiasts in the fitness industry.",
    tags: ["React Native", "GraphQL", "AWS"],
    categories: ["mobile"]
  },
  {
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Project Management Tool",
    description: "Task management system with team collaboration features.",
    tags: ["Angular", "Node.js", "MongoDB"],
    categories: ["saas", "productivity"]
  },
  {
    image: "https://pixabay.com/get/gf9085598c0e1fa8063adaf2bf98498cab0adaa14fba79406c2468b5881e609238c3b172768e917f22a580bc960bf43d82f9f256a236a227d7e5becbf60e92f4c_1280.jpg",
    title: "AI Assistant Platform",
    description: "Conversational AI solution for customer service automation.",
    tags: ["Python", "TensorFlow", "React"],
    categories: ["ai"]
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Corporate Website",
    description: "Brand-focused website with interactive elements for a financial firm.",
    tags: ["WordPress", "Elementor", "PHP"],
    categories: ["website"]
  },
  {
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Restaurant Ordering App",
    description: "Mobile app for table reservations and food ordering with delivery tracking.",
    tags: ["Flutter", "Firebase", "Stripe"],
    categories: ["mobile", "ecommerce"]
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Investment Portfolio Tracker",
    description: "Financial dashboard for tracking investments and market performance.",
    tags: ["React", "Chart.js", "Express"],
    categories: ["dashboard", "fintech"]
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    title: "Educational Platform",
    description: "Online learning platform with course management and progress tracking.",
    tags: ["Next.js", "PostgreSQL", "AWS"],
    categories: ["saas", "education"]
  }
];

const portfolioProjects: Project[] = [
  {
    id: 'storefront',
    title: 'StoreFront E-commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced inventory management for StyleHaven Fashion.',
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    techs: ['React', 'Next.js', 'Stripe'],
    testimonial: {
      quote: "BOLDBYTE transformed our retail business with a custom e-commerce platform that increased our online sales by 200%. The StoreFront project they delivered included advanced inventory management and seamless payment processing that exceeded our expectations.",
      name: "Jamie Smith",
      role: "CEO, StyleHaven Fashion",
      initials: "JS"
    }
  },
  {
    id: 'ai-hub',
    title: 'AI Customer Service Hub',
    description: 'An AI-powered customer service platform that automates responses and improves efficiency for NexGen Solutions.',
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    techs: ['Python', 'TensorFlow', 'React'],
    testimonial: {
      quote: "Our AI Customer Service Hub project was a game-changer. BOLDBYTE integrated advanced natural language processing that automated 75% of our support queries, reducing response times by 40% and significantly improving customer satisfaction scores.",
      name: "Rebecca Liu",
      role: "CTO, NexGen Solutions",
      initials: "RL"
    }
  },
  {
    id: 'analytics',
    title: 'SaaS Analytics Dashboard',
    description: 'A real-time data visualization platform for CloudMetrics that transforms complex data into actionable insights.',
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    techs: ['Vue.js', 'D3.js', 'Firebase'],
    testimonial: {
      quote: "The SaaS Analytics Dashboard BOLDBYTE built for us completely transformed how we visualize customer data. Their attention to detail in the UX design and the custom reporting features has made our internal processes 65% more efficient.",
      name: "Michael Johnson",
      role: "Marketing Director, CloudMetrics",
      initials: "MJ"
    }
  },
  {
    id: 'health-app',
    title: 'HealthTrack Pro Mobile App',
    description: 'A cross-platform fitness and health tracking application with real-time monitoring for FitTech Innovations.',
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    techs: ['React Native', 'GraphQL', 'AWS'],
    testimonial: {
      quote: "BOLDBYTE developed our mobile app 'HealthTrack Pro' with cutting-edge fitness tracking integrations. The app's real-time health monitoring features have helped us attract over 50,000 users in just three months after launch.",
      name: "Sarah Chen",
      role: "Product Manager, FitTech Innovations",
      initials: "SC"
    }
  },
  {
    id: 'supply-chain',
    title: 'SupplyVerify Blockchain System',
    description: 'A blockchain-based supply chain verification platform that ensures authenticity and transparency for EcoTrack Global.',
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
    techs: ['Solidity', 'React', 'Node.js'],
    testimonial: {
      quote: "Working with BOLDBYTE on our blockchain-based supply chain verification system has been exceptional. The solution they developed provides unmatched transparency and has become our competitive advantage in the sustainable products market.",
      name: "David Rodriguez",
      role: "Supply Chain Director, EcoTrack Global",
      initials: "DR"
    }
  },
  {
    id: 'fintech-app',
    title: 'Secure Investment Platform',
    description: 'A financial technology platform with real-time market data, secure transactions, and personalized investment recommendations.',
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    techs: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    testimonial: {
      quote: "BOLDBYTE developed our fintech platform with bank-level security and an intuitive interface. Their work helped us attract $2.3M in initial funding and 10,000+ users in our first 6 months.",
      name: "Sophia Williams",
      role: "COO, Apex Investments",
      initials: "SW"
    }
  },
  {
    id: 'virtual-learning',
    title: 'Interactive Virtual Learning',
    description: 'An immersive educational platform featuring interactive lessons, progress tracking, and personalized learning paths.',
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    techs: ['Vue.js', 'Firebase', 'WebRTC', 'Canvas API'],
    testimonial: {
      quote: "Our virtual learning platform created by BOLDBYTE revolutionized how we deliver online education. Student engagement increased by 78% and course completion rates improved from 43% to 89%.",
      name: "Marcus Thompson",
      role: "Director of Education, LearnSphere",
      initials: "MT"
    }
  },
  {
    id: 'smart-home',
    title: 'Connected Home Management System',
    description: 'An IoT platform that connects and manages smart home devices with voice controls, automation rules, and energy optimization.',
    image: "https://images.unsplash.com/photo-1558002038-1055953a7bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    techs: ['React Native', 'Node.js', 'MQTT', 'AWS IoT'],
    testimonial: {
      quote: "BOLDBYTE delivered a sophisticated yet user-friendly smart home system that seamlessly integrates with over 200 device types. Our customers report an average 32% reduction in energy costs after implementation.",
      name: "Olivia Chen",
      role: "Product Director, HomeConnect Technologies",
      initials: "OC"
    }
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn about your business goals, target audience, and project requirements.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create wireframes and design mockups for your review and approval.',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build your solution with clean, maintainable code and regular progress updates.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy your project and provide training and support to ensure success.',
  }
];

const testimonials = [
  {
    quote: "BOLDBYTE transformed our retail business with a custom e-commerce platform that increased our online sales by 200%. The StoreFront project they delivered included advanced inventory management and seamless payment processing that exceeded our expectations.",
    name: "Jamie Smith",
    role: "CEO, StyleHaven Fashion",
    project: "StoreFront E-commerce Platform",
    initials: "JS"
  },
  {
    quote: "Our AI Customer Service Hub project was a game-changer. BOLDBYTE integrated advanced natural language processing that automated 75% of our support queries, reducing response times by 40% and significantly improving customer satisfaction scores.",
    name: "Rebecca Liu",
    role: "CTO, NexGen Solutions",
    project: "AI Customer Service Hub",
    initials: "RL"
  },
  {
    quote: "The SaaS Analytics Dashboard BOLDBYTE built for us completely transformed how we visualize customer data. Their attention to detail in the UX design and the custom reporting features has made our internal processes 65% more efficient.",
    name: "Michael Johnson",
    role: "Marketing Director, CloudMetrics",
    project: "SaaS Analytics Dashboard",
    initials: "MJ"
  },
  {
    quote: "BOLDBYTE developed our mobile app 'HealthTrack Pro' with cutting-edge fitness tracking integrations. The app's real-time health monitoring features have helped us attract over 50,000 users in just three months after launch.",
    name: "Sarah Chen",
    role: "Product Manager, FitTech Innovations",
    project: "HealthTrack Pro Mobile App",
    initials: "SC"
  },
  {
    quote: "Working with BOLDBYTE on our blockchain-based supply chain verification system has been exceptional. The solution they developed provides unmatched transparency and has become our competitive advantage in the sustainable products market.",
    name: "David Rodriguez",
    role: "Supply Chain Director, EcoTrack Global",
    project: "SupplyVerify Blockchain System",
    initials: "DR"
  },
  {
    quote: "BOLDBYTE developed our fintech platform with bank-level security and an intuitive interface. Their work helped us attract $2.3M in initial funding and 10,000+ users in our first 6 months.",
    name: "Sophia Williams",
    role: "COO, Apex Investments",
    project: "Secure Investment Platform",
    initials: "SW"
  },
  {
    quote: "Our virtual learning platform created by BOLDBYTE revolutionized how we deliver online education. Student engagement increased by 78% and course completion rates improved from 43% to 89%.",
    name: "Marcus Thompson",
    role: "Director of Education, LearnSphere",
    project: "Interactive Virtual Learning",
    initials: "MT"
  },
  {
    quote: "BOLDBYTE delivered a sophisticated yet user-friendly smart home system that seamlessly integrates with over 200 device types. Our customers report an average 32% reduction in energy costs after implementation.",
    name: "Olivia Chen",
    role: "Product Director, HomeConnect Technologies",
    project: "Connected Home Management System",
    initials: "OC"
  }
];

// Convert work projects to portfolio format
const convertedWorkProjects: Project[] = workProjects
  // Filter out projects that already exist in the portfolio (to avoid duplicates)
  .filter(workProject => 
    !portfolioProjects.some(
      p => p.title.toLowerCase() === workProject.title.toLowerCase() || 
           p.description.toLowerCase() === workProject.description.toLowerCase()
    )
  )
  .map((workProject, index) => {
    // Create a unique ID based on the project title
    const id = workProject.title.toLowerCase().replace(/\s+/g, '-');
    
    // Create default testimonial
    const defaultTestimonial = {
      quote: `${workProject.description} Our team at BOLDBYTE delivered this solution with exceptional attention to detail and technical expertise.`,
      name: "Client Testimonial",
      role: "Project Lead",
      initials: "CL"
    };
    
    return {
      id,
      title: workProject.title,
      description: workProject.description,
      image: workProject.image,
      techs: workProject.tags,
      testimonial: defaultTestimonial
    };
  });

// Merge portfolio projects with converted work projects
const allProjects = [...portfolioProjects, ...convertedWorkProjects];

export default function Home() {
  useAnimateOnScroll('.animate-item');
  const [activeTestimonial, setActiveTestimonial] = useState<string | null>(null);
  
  // Function to handle scrolling to testimonial
  const scrollToTestimonial = (projectId: string) => {
    // Set active testimonial
    setActiveTestimonial(projectId);
    
    const elementId = 'testimonials-section';
    const element = document.getElementById(elementId);
    
    if (element) {
      // Smooth scroll with offset for the header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    document.title = "BOLDBYTE | Web & App Development Services";
    
    // Handle smooth scrolling to testimonials for anchor links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.includes('-testimonial')) {
        setTimeout(() => {
          const projectId = hash.substring(1).replace('-testimonial', '');
          scrollToTestimonial(projectId);
        }, 100);
      }
    };

    // Smooth scroll on initial load if there's a hash
    if (window.location.hash) {
      handleHashChange();
    }

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-radial"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="animate-item hero-title-container">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 hero-title">
              <span className="inline-block pop-in" style={{ animationDelay: '0.3s' }}>We</span>
              <span className="inline-block pop-in mx-3" style={{ animationDelay: '0.6s' }}>Build</span>
              <span className="text-[#66FCF1] hero-bold hero-title-glow" style={{ animationDelay: '0.9s' }}>Bold</span>
            </h1>
          </div>
          <div className="animate-item opacity-0 fade-up delay-1">
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-8 text-[#C5C6C7]">
              Websites. Web apps. Mobile apps. AI solutions. Designed to impress, built to perform.
            </p>
          </div>
          <div className="animate-item opacity-0 fade-up delay-2">
            <Button 
              size="lg" 
              className="bg-[#66FCF1] text-[#0B0C10] hover:bg-[#45A29E] px-8 py-6 text-lg rounded-lg font-medium group"
              asChild
            >
              <Link href="/book">
                <span>Book a Project</span>
                <Icon name="arrow-right" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-item opacity-0 fade-up delay-4">
          <a href="#portfolio" className="inline-block animate-bounce">
            <Icon name="chevrons-down" className="text-2xl text-[#66FCF1]" />
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-[#1F2833]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-item">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Client Projects</h2>
            <div className="section-divider"></div>
            <p className="text-[#C5C6C7] mt-6 max-w-2xl mx-auto">
              We specialize in creating digital experiences that are both visually stunning and highly functional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.slice(0, 3).map((project, index) => (
              <div 
                key={index}
                className="bg-[#0B0C10] border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#66FCF1] group animate-item"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <ProjectImageRenderer image={project.image} title={project.title} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-[#C5C6C7] text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-[#1F2833] px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-2 border-[#66FCF1] text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#0B0C10]"
                    onClick={() => scrollToTestimonial(project.id)}
                  >
                    Client Testimonial
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.slice(3, 7).map((project, index) => (
              <div 
                key={index + 3}
                className="bg-[#0B0C10] border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#66FCF1] group animate-item"
                style={{ animationDelay: `${0.1 * (index + 4)}s` }}
              >
                <ProjectImageRenderer image={project.image} title={project.title} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-[#C5C6C7] text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-[#1F2833] px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-2 border-[#66FCF1] text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#0B0C10]"
                    onClick={() => scrollToTestimonial(project.id)}
                  >
                    Client Testimonial
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-[#0B0C10]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-item">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative animate-item" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <div className="bg-[#1F2833] rounded-xl p-6 h-full border border-gray-800">
                  <div className="text-4xl font-bold text-[#66FCF1]/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-[#C5C6C7] text-sm">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 text-[#66FCF1]">
                    <Icon name="arrow-right" className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 bg-[#1F2833]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-item">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="section-divider"></div>
            <p className="text-[#C5C6C7] mt-6 max-w-2xl mx-auto">
              Check out some of our recent work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allProjects.slice(8, 11).map((project, index) => (
              <div 
                key={index + 8}
                className="group relative overflow-hidden rounded-xl bg-[#0B0C10] border border-gray-800 hover:border-[#66FCF1] transition-all duration-300 animate-item"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <ProjectImageRenderer image={project.image} title={project.title} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#C5C6C7] text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-[#1F2833] px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-2 border-[#66FCF1] text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#0B0C10]"
                    onClick={() => scrollToTestimonial(project.id)}
                  >
                    Client Testimonial
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials-section" className="py-20 px-6 bg-[#0B0C10]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-item">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <div className="section-divider"></div>
            <p className="text-[#C5C6C7] mt-6 max-w-2xl mx-auto">
              Hear what our clients have to say about working with us
            </p>
          </div>

          {activeTestimonial ? (
            // Show the active testimonial when a project is selected
            <div className="max-w-3xl mx-auto">
              {allProjects.map((project, index) => (
                project.id === activeTestimonial && (
                  <div 
                    key={index}
                    className="bg-[#1F2833] rounded-xl p-8 border-2 border-[#66FCF1] animate-item transition-all duration-500 shadow-lg shadow-[#66FCF1]/20"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-full md:w-1/3">
                        <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                          <ProjectImageRenderer image={project.image} title={project.title} />
                        </div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.techs.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-[#0B0C10] px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="w-full md:w-2/3">
                        <div className="flex text-[#66FCF1] mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} name="star" className="h-5 w-5" />
                          ))}
                        </div>
                        <blockquote className="text-white mb-6 text-lg italic">"{project.testimonial.quote}"</blockquote>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-[#66FCF1]/20 flex items-center justify-center text-[#66FCF1] font-bold mr-3">
                            {project.testimonial.initials}
                          </div>
                          <div>
                            <p className="font-bold text-white">{project.testimonial.name}</p>
                            <p className="text-[#C5C6C7]">{project.testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <Button 
                        variant="ghost" 
                        className="text-[#C5C6C7] hover:text-white"
                        onClick={() => setActiveTestimonial(null)}
                      >
                        View All Testimonials
                      </Button>
                    </div>
                  </div>
                )
              ))}
            </div>
          ) : (
            // Show all testimonials if none is selected
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div 
                    id={`${allProjects[index].id}-testimonial`}
                    key={index} 
                    className="bg-[#1F2833] p-8 rounded-xl border border-gray-800 animate-item hover:border-[#66FCF1] transition-all duration-300"
                    style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  >
                    <div className="flex text-[#66FCF1] mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" className="h-5 w-5" />
                      ))}
                    </div>
                    <div className="mb-3 text-sm font-semibold text-[#66FCF1]">
                      Project: {testimonial.project}
                    </div>
                    <blockquote className="text-[#C5C6C7] mb-6 text-sm">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#0B0C10] flex items-center justify-center text-[#66FCF1] font-bold mr-3">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-[#C5C6C7]">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials.slice(3, 7).map((testimonial, index) => (
                  <div 
                    id={`${allProjects[index + 3].id}-testimonial`}
                    key={index + 3} 
                    className="bg-[#1F2833] p-8 rounded-xl border border-gray-800 animate-item hover:border-[#66FCF1] transition-all duration-300"
                    style={{ animationDelay: `${0.1 * (index + 4)}s` }}
                  >
                    <div className="flex text-[#66FCF1] mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="star" className="h-5 w-5" />
                      ))}
                    </div>
                    <div className="mb-3 text-sm font-semibold text-[#66FCF1]">
                      Project: {testimonial.project}
                    </div>
                    <blockquote className="text-[#C5C6C7] mb-6 text-sm">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#0B0C10] flex items-center justify-center text-[#66FCF1] font-bold mr-3">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-[#C5C6C7]">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1F2833]">
        <div className="max-w-4xl mx-auto text-center animate-item">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-[#C5C6C7] mb-8 max-w-2xl mx-auto">
            Tell us about your idea and we'll help you bring it to life. Our team is ready to turn your vision into reality.
          </p>
          <Button 
            size="lg" 
            className="bg-[#66FCF1] text-[#0B0C10] hover:bg-[#45A29E] px-8 py-6 text-lg rounded-lg font-medium group"
            asChild
          >
            <Link href="/book">
              <span>Book a Consultation</span>
              <Icon name="arrow-right" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}