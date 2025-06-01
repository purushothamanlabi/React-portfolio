import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "2022 - Present",
      description: "Led development of enterprise applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and improved application performance by 40%.",
      tech: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Innovations",
      duration: "2021 - 2022",
      description: "Developed responsive web applications and collaborated with UX designers to implement modern interfaces. Reduced page load time by 60%.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Redux"]
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
              With over 3 years of experience in web development, I've had the opportunity to work on diverse projects and technologies. My journey has been marked by continuous learning and growth, from building responsive user interfaces to architecting full-stack applications. Throughout my career, I've contributed to projects handling millions of users and implemented complex features like real-time data synchronization and advanced analytics.
            </p>
            <p className="text-gray-400 leading-relaxed">
              focusing on creating scalable, maintainable, and user-friendly applications. My experience spans across startups and enterprise environments, giving me a well-rounded perspective on software development. I've led development teams, mentored junior developers, and actively participated in code reviews and architectural decisions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond technical skills, I've developed strong project management abilities, working with cross-functional teams and stakeholders to deliver projects on time and within budget. I'm passionate about staying current with industry trends and regularly contribute to open-source projects and technical communities.
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
