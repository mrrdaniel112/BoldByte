import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Icon } from '@/components/ui/icon';
import useAnimateOnScroll from '@/hooks/useAnimateOnScroll';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  }
}

const teamMembers: TeamMember[] = [
  {
    id: "founder",
    name: "Your Name", // Replace with your actual name
    title: "Full Stack Developer / Founder",
    bio: "Founded BOLDBYTE with a vision to create digital experiences that stand out. Passionate about innovative technologies and clean code architecture.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "frontend-lead",
    name: "Alex Morgan",
    title: "Frontend Lead",
    bio: "Expert in React and modern UI frameworks. Passionate about creating intuitive user experiences with a keen eye for design and detail.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "backend-lead",
    name: "Sarah Chen",
    title: "Backend Lead",
    bio: "Specialized in building scalable server architectures and optimizing database performance. Experienced with Node.js, Python, and cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "mobile-dev",
    name: "Michael Patel",
    title: "Mobile Development Specialist",
    bio: "Creates seamless cross-platform mobile experiences with React Native and Flutter. Focused on performance optimization and offline-first strategies.",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "ai-specialist",
    name: "Jamie Rodriguez",
    title: "AI & ML Specialist",
    bio: "Implements cutting-edge machine learning solutions and AI integrations. Experienced in TensorFlow, PyTorch, and natural language processing.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2376&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "ux-designer",
    name: "Taylor Kim",
    title: "UX/UI Designer",
    bio: "Combines artistic vision with user-centered design principles to create beautiful, functional interfaces that elevate the user experience.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "devops",
    name: "Jordan Smith",
    title: "DevOps Engineer",
    bio: "Automation expert who builds and maintains our CI/CD pipelines. Ensures smooth deployments and robust infrastructure across all client projects.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];

export default function Team() {
  useAnimateOnScroll('.animate-item');
  
  useEffect(() => {
    document.title = "Our Team | BOLDBYTE";
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Team Header Section */}
      <section className="py-16 px-6 bg-[#1F2833]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-item">
            Meet Our <span className="text-[#66FCF1]">Team</span>
          </h1>
          <div className="section-divider mx-auto animate-item"></div>
          <p className="text-[#C5C6C7] mt-6 max-w-3xl mx-auto animate-item">
            We're a diverse team of designers, developers, and digital strategists who are passionate about creating 
            exceptional digital experiences. Together, we bring our unique perspectives and specialized skills to 
            every project we undertake.
          </p>
        </div>
      </section>
      
      {/* Founder Highlight Section */}
      <section className="py-20 px-6 bg-[#0B0C10]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 animate-item">
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="w-full h-96 overflow-hidden rounded-xl">
                  <img 
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#1F2833]/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex justify-center gap-4">
                    {teamMembers[0].social.github && (
                      <a href={teamMembers[0].social.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#66FCF1] transition-colors">
                        <Icon name="github" className="h-5 w-5" />
                      </a>
                    )}
                    {teamMembers[0].social.linkedin && (
                      <a href={teamMembers[0].social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#66FCF1] transition-colors">
                        <Icon name="linkedin" className="h-5 w-5" />
                      </a>
                    )}
                    {teamMembers[0].social.twitter && (
                      <a href={teamMembers[0].social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#66FCF1] transition-colors">
                        <Icon name="twitter" className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{teamMembers[0].name}</h2>
              <p className="text-[#66FCF1] font-medium mb-4">{teamMembers[0].title}</p>
              <p className="text-[#C5C6C7] mb-6">
                {teamMembers[0].bio}
              </p>
              <p className="text-[#C5C6C7] italic mb-8">
                "I founded BOLDBYTE with a mission to build digital products that don't just function, but inspire. 
                Our talented team brings this vision to life with every project we undertake."
              </p>
              <Button 
                size="lg" 
                className="bg-[#66FCF1] text-[#0B0C10] hover:bg-[#45A29E] transition-colors duration-300"
                asChild
              >
                <Link href="/book">
                  <span>Work With Us</span>
                  <Icon name="arrow-right" className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Team Section */}
      <section className="py-20 px-6 bg-[#1F2833]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center animate-item">Core Team Members</h2>
          <div className="section-divider mx-auto mb-16 animate-item"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <div 
                key={member.id}
                className="bg-[#0B0C10] rounded-xl overflow-hidden border border-gray-800 hover:border-[#66FCF1] transition-all duration-300 group animate-item"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#66FCF1] text-sm font-medium mb-3">{member.title}</p>
                  <p className="text-[#C5C6C7] text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#66FCF1] transition-colors">
                        <Icon name="github" className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#66FCF1] transition-colors">
                        <Icon name="linkedin" className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#66FCF1] transition-colors">
                        <Icon name="twitter" className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto text-center animate-item">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-[#C5C6C7] mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about creating exceptional digital experiences.
            If you think you'd be a good fit for our team, we'd love to hear from you.
          </p>
          <Button 
            size="lg" 
            className="bg-[#66FCF1] text-[#0B0C10] hover:bg-[#45A29E] px-8 py-6 text-lg rounded-lg font-medium group"
            asChild
          >
            <a href="mailto:careers@boldbyte.com">
              <span>Send Us Your Resume</span>
              <Icon name="arrow-right" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}