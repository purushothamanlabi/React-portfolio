import React from 'react';

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
  

  return (
    <section id="experience" className="py-20 bg-[#0f0f14]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Work Experience
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Introduction - Now first on mobile */}
          <div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-white mb-4">
            My Journey in Tech
          </h3>
          <p className="text-gray-400 leading-relaxed">
            My journey in tech began with a strong curiosity about how software powers the world. I started learning full stack development, and over time, I’ve worked on multiple real-world projects that strengthened both my frontend and backend skills. During my internship at CodeAlpha, I learned the basics of web development and successfully completed all assigned tasks.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Currently, I’m working as a Junior Full Stack Developer at Finstein Advizory Service LLP, where I’ve contributed to developing cybersecurity-related products. This role has helped me understand software development in a real-world setting and improved my ability to solve complex problems.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I'm passionate about automation, building efficient solutions, and continuously learning new technologies. I enjoy working in collaborative environments and look forward to contributing to impactful projects that solve real-world challenges.
          </p>
        </div>
          {/* Experience Cards - Now second on mobile */}
          <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400">{exp.duration}</span>
                </div>
                
                <p className="text-gray-400 mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
