import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Link } from 'wouter';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';
import HealthAppSvg from '@/components/ui/HealthAppSvg';
import BlockchainSvg from '@/components/ui/BlockchainSvg';

const portfolioProjects = [
  {
    id: 'storefront',
    title: 'StoreFront E-commerce Platform',
    description: 'A comprehensive e-commerce solution with advanced inventory management for StyleHaven Fashion.',
    image: 'https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
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
    image: 'https://images.unsplash.com/photo-1535378273068-9bb67d5bac41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
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
    image: <HealthAppSvg />,
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
    image: <BlockchainSvg />,
    techs: ['Solidity', 'React', 'Node.js'],
    testimonial: {
      quote: "Working with BOLDBYTE on our blockchain-based supply chain verification system has been exceptional. The solution they developed provides unmatched transparency and has become our competitive advantage in the sustainable products market.",
      name: "David Rodriguez",
      role: "Supply Chain Director, EcoTrack Global",
      initials: "DR"
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
  }
];

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
          <div className="animate-item opacity-0 fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">We Build <span className="text-[#66FCF1]">Bold</span></h1>
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
            {portfolioProjects.slice(0, 3).map((project, index) => (
              <div 
                key={index}
                className="bg-[#0B0C10] border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#66FCF1] group animate-item"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover object-center"
                />
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
            {portfolioProjects.slice(3, 5).map((project, index) => (
              <div 
                key={index + 3}
                className="bg-[#0B0C10] border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#66FCF1] group animate-item"
                style={{ animationDelay: `${0.1 * (index + 4)}s` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover object-center"
                />
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
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-[#0B0C10] border border-gray-800 hover:border-[#66FCF1] transition-all duration-300 animate-item">
              <img 
                src="https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern e-commerce website" 
                className="w-full h-56 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern E-commerce</h3>
                <p className="text-[#C5C6C7] text-sm mb-4">
                  A sleek online store with custom product views and seamless checkout.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">Stripe</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-[#0B0C10] border border-gray-800 hover:border-[#66FCF1] transition-all duration-300 animate-item">
              <div className="w-full h-56 overflow-hidden">
                <BlockchainSvg className="w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blockchain Supply Chain</h3>
                <p className="text-[#C5C6C7] text-sm mb-4">
                  Transparent blockchain-based verification system for product authenticity.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">Solidity</span>
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">Node.js</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-[#0B0C10] border border-gray-800 hover:border-[#66FCF1] transition-all duration-300 animate-item">
              <div className="w-full h-56 overflow-hidden">
                <HealthAppSvg className="w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">HealthTrack Pro App</h3>
                <p className="text-[#C5C6C7] text-sm mb-4">
                  Fitness and health tracking mobile application with real-time health monitoring.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">React Native</span>
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">GraphQL</span>
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">AWS</span>
                </div>
              </div>
            </div>
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
              {portfolioProjects.map((project, index) => (
                project.id === activeTestimonial && (
                  <div 
                    key={index}
                    className="bg-[#1F2833] rounded-xl p-8 border-2 border-[#66FCF1] animate-item transition-all duration-500 shadow-lg shadow-[#66FCF1]/20"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-full md:w-1/3">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-48 object-cover object-center rounded-lg mb-4"
                        />
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
                    id={`${portfolioProjects[index].id}-testimonial`}
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
                {testimonials.slice(3, 5).map((testimonial, index) => (
                  <div 
                    id={`${portfolioProjects[index + 3].id}-testimonial`}
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