import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';

const projects = [
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

export default function Work() {
  useAnimateOnScroll('.animate-item');

  useEffect(() => {
    document.title = "Our Work | BOLDDEV";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-12 px-6 bg-[#0B0C10]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-item">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <div className="section-divider"></div>
            <p className="text-[#C5C6C7] mt-6 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across different industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 bg-[#1F2833]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl bg-[#0B0C10] border border-gray-800 hover:border-[#66FCF1] transition-all duration-300 animate-item"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#C5C6C7] text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-[#1F2833] px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto text-center animate-item">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Build Your Next Project?</h2>
          <p className="text-[#C5C6C7] mb-8 max-w-2xl mx-auto">
            Let's turn your idea into a stunning digital reality. Our team is ready to bring your vision to life.
          </p>
          <Button 
            size="lg" 
            className="bg-[#66FCF1] text-[#0B0C10] hover:bg-[#45A29E] px-8 py-6 text-lg rounded-lg font-medium group"
            asChild
          >
            <Link href="/book">
              <span>Start Your Project</span>
              <Icon name="arrow-right" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
