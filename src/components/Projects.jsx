import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BookNook.in",
      description: "A hotel booking platform developed during college where users can search and book hotels. It also includes an admin panel to manage all bookings.",
      image: "/project/booknook.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      demoLink: "https://booknoook.netlify.app",
      githubLink: "https://github.com/purushothamanlabi/hotel-booking-website"
    },
    {
      id: 2,
      title: "UTest.com",
      description: "A project built to automate unit testing for React applications by generating unit test cases automatically on every Git commit.",
      image: "/project/utest.png",
      tech: ["React", "python", "FastAPI"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Reptix.ai",
      description: "A tool designed to automate the job application process by connecting to multiple job portals and applying on your behalf.",
      image: "/project/reptix.png",
      tech: ["React", "python", "FastAPI", "Mysql", "Tailwind CSS"],
      demoLink: "https://reptix.netlify.app",
      githubLink: "https://github.com/purushothamanlabi/flow-automation"
    },
  ];
  
  // Animation variants
  const variants = [
    {
      offscreen: { opacity: 0, x: -80 },
      onscreen: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.8 } }
    },
    {
      offscreen: { opacity: 0, y: 80 },
      onscreen: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } }
    },
    {
      offscreen: { opacity: 0, x: 80 },
      onscreen: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.8 } }
    }
   
  ];

  return (
    <section id="projects" className="py-20 bg-[#0f0f14]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={variants[index % 3]}
              className="h-full bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-800"
              // whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.15)" }}
            >
              <div className="h-full flex flex-col">
                <div className="relative h-64 -mx-8 -mt-8 mb-6 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      console.error(`Error loading image: ${project.image}`);
                      e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      target='_blank'
                      href={project.demoLink}
                      className="text-sm text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      target='_blank'
                      href={project.githubLink}
                      className="text-sm text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      <span>GitHub</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.026 1.592 1.026 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C19.138 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 