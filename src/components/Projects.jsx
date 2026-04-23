import React from 'react';
import { motion as Motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="cyber-border group h-full overflow-hidden"
    >
      <div className="flex h-full flex-col p-0">
        {/* Browser Frame */}
        <div className="browser-frame">
          <div className="browser-dot bg-red-500/80" />
          <div className="browser-dot bg-yellow-500/80" />
          <div className="browser-dot bg-green-500/80" />
          <div className="ml-2 text-[10px] text-gray-500 font-mono tracking-wider opacity-50 uppercase">
            {project.title.toLowerCase()}.exe
          </div>
        </div>

        {/* Image Container with Overlay */}
        <div className="relative h-56 overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-100 grayscale-[0.2] group-hover:grayscale-0"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 pt-5">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-2 py-1 bg-cyan-500/5 text-cyan-400/80 border border-cyan-500/10 rounded uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-2 border-t border-white/5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.demoLink}
                className="text-xs font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group/link"
              >
                <span className="relative">
                  LIVE DEMO
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all group-hover/link:w-full" />
                </span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.githubLink}
                className="text-xs font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group/link"
              >
                <span className="relative">
                  SOURCE CODE
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all group-hover/link:w-full" />
                </span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.026 1.592 1.026 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C19.138 20.17 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BookNook.in",
      description: "A premium hotel booking platform with real-time availability, integrated payments, and a powerful admin dashboard for reservation management.",
      image: "/project/booknook.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      demoLink: "https://booknoook.netlify.app",
      githubLink: "https://github.com/purushothamanlabi"
    },
    {
      id: 2,
      title: "Zerohumans.in",
      description: "A GraphFlow-based multi-agent AI platform where 6 autonomous agents execute full SDLC phases — SRS, UI/UX, Development, Testing & Deployment — with isolated project memory and live WebSocket streaming.",
      image: "/project/zerohumans.png",
      tech: ["Next.js", "FastAPI", "AutoGen", "PostgreSQL", "GraphFlow"],
      demoLink: "https://zerohumans.in",
      githubLink: "https://github.com/purushothamanlabi"
    },
    {
      id: 3,
      title: "Reptix.ai",
      description: "Smart automation tool for job seekers that optimizes applications and automates the process across multiple professional platforms.",
      image: "/project/reptix.png",
      tech: ["React", "python", "FastAPI", "Mysql", "Tailwind CSS"],
      demoLink: "https://reptix.netlify.app",
      githubLink: "https://github.com/purushothamanlabi"
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 space-y-5">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            <span className="h-px w-12 bg-cyan-400/80" />
            <span>03 - Projects</span>
          </div>

          <h2 className="text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl">
            Personal <span className="text-cyan-400">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
