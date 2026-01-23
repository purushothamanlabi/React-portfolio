import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Junior Full Stack Developer",
      company: "Finstein Advizory Service LLP",
      duration: "2024 July 10 - Present",
      description: "Working as a Junior Full Stack Developer, where I developed a few products related to cybersecurity and gained strong knowledge in software development and real-world problem solving.",
      tech: ["software development", "automation", "cyber security"]
    },
    {
      id: 2,
      role: "Software Engineer Intern",
      company: "codealpha.tech",
      duration: "2024 Feb - 2024 May",
      description: "Learned the basics of web development and successfully completed the final internship task, earning a certificate for my performance.",
      tech: ["frontend", "backend", "basic software development"]
    },
  ];

  // Animation variants
  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.7 }
    }
  };

  const introVariants = {
    offscreen: { opacity: 0, x: -40 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 0.7 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#0f0f14]">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Introduction - Now first on mobile */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={introVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              My Journey in Tech
            </h3>
            <p className="text-gray-400 leading-relaxed">
              My journey in tech began with a strong curiosity about how software powers the world. I started learning full stack development, and over time, I've worked on multiple real-world projects that strengthened both my frontend and backend skills. During my internship at CodeAlpha, I learned the basics of web development and successfully completed all assigned tasks.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently, I'm working as a Junior Full Stack Developer at Finstein Advizory Service LLP, where I've contributed to developing cybersecurity-related products. This role has helped me understand software development in a real-world setting and improved my ability to solve complex problems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about automation, building efficient solutions, and continuously learning new technologies. I enjoy working in collaborative environments and look forward to contributing to impactful projects that solve real-world challenges.
            </p>
          </motion.div>
          {/* Experience Cards - Now second on mobile */}
          <div className="w-full lg:w-1/2 space-y-3 md:space-y-6 order-2 lg:order-1">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-3 md:p-6 border border-neutral-800"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.10)" }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-1">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-xs md:text-sm text-gray-400 md:mt-0 mt-2">{exp.duration}</span>
                </div>

                <p className="text-gray-400 mb-2 md:mb-4 text-sm md:text-base">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 md:px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
