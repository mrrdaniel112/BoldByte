import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Link } from 'wouter';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';

const services = [
  {
    icon: 'code-2',
    title: 'Custom Websites',
    description: 'Stunning websites with responsive design, optimized for all devices and search engines.',
  },
  {
    icon: 'smartphone',
    title: 'Web & Mobile Apps',
    description: 'Powerful applications built with modern frameworks that deliver exceptional user experiences.',
  },
  {
    icon: 'brain-circuit',
    title: 'AI-Driven Platforms',
    description: 'Cutting-edge solutions that leverage artificial intelligence to solve complex problems.',
  },
  {
    icon: 'shopping-bag',
    title: 'E-Commerce Solutions',
    description: 'Complete online stores with secure payment processing and inventory management.',
  },
  {
    icon: 'layout-dashboard',
    title: 'Custom Dashboards',
    description: 'Data visualization and management tools that make complex information accessible.',
  },
  {
    icon: 'mouse-pointer-click',
    title: 'UI/UX Design',
    description: 'User-centered design processes that create intuitive and engaging digital experiences.',
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
    quote: "The team delivered our e-commerce site ahead of schedule and exceeded our expectations in terms of design and functionality.",
    name: "Jamie Smith",
    role: "CEO, Fashion Retailer",
    initials: "JS"
  },
  {
    quote: "Their expertise in AI integration helped us automate customer support, resulting in a 40% reduction in response times.",
    name: "Rebecca Liu",
    role: "CTO, Tech Startup",
    initials: "RL"
  },
  {
    quote: "Working with this team was refreshing. They took the time to understand our business needs and delivered a solution that perfectly matched our vision.",
    name: "Michael Johnson",
    role: "Marketing Director, SaaS Company",
    initials: "MJ"
  }
];

export default function Home() {
  useAnimateOnScroll('.animate-item');

  useEffect(() => {
    document.title = "BOLDDEV | Web & App Development Services";
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
          <a href="#services" className="inline-block animate-bounce">
            <Icon name="chevrons-down" className="text-2xl text-[#66FCF1]" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#1F2833]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-item">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <div className="section-divider"></div>
            <p className="text-[#C5C6C7] mt-6 max-w-2xl mx-auto">
              We specialize in creating digital experiences that are both visually stunning and highly functional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#0B0C10] border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:border-[#66FCF1] group animate-item"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="text-[#66FCF1] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={service.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#C5C6C7]">
                  {service.description}
                </p>
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
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Analytics dashboard interface" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-[#C5C6C7] text-sm mb-4">
                  Real-time data visualization platform for a SaaS company.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">Vue.js</span>
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">D3.js</span>
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-[#0B0C10] border border-gray-800 hover:border-[#66FCF1] transition-all duration-300 animate-item">
              <img 
                src="https://pixabay.com/get/g7f037d6700f7d39b14559d21add9998ad50e5dfc38787ed5dcbb2d1fa4008417bd6f91c3b6052d5fd7c2d2330dd86e5bfffe26113bddc25ee89c0126f37df0c2_1280.jpg" 
                alt="Mobile app user interface" 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Social Mobile App</h3>
                <p className="text-[#C5C6C7] text-sm mb-4">
                  Community platform connecting enthusiasts in the fitness industry.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">React Native</span>
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">GraphQL</span>
                  <span className="text-xs bg-[#1F2833] px-2 py-1 rounded">AWS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-item">
            <Button 
              variant="outline" 
              className="border-[#66FCF1] text-[#66FCF1] hover:bg-[#66FCF1] hover:text-[#0B0C10] group"
              asChild
            >
              <Link href="/work">
                <span>View All Projects</span>
                <Icon name="arrow-right" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[#0B0C10]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-item">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Feedback</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-[#1F2833] p-8 rounded-xl border border-gray-800 animate-item"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex text-[#66FCF1] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="text-[#C5C6C7] mb-6">
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
