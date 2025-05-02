import React from 'react'

const Skills = () => {
  const skills = [
    {
      title: 'React',
      description: 'Building interactive user interfaces with React',
      icon: <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>,
    },
    {
      title: 'Redux', 
      description: 'State management for complex applications',
      icon: <img width="48" height="48" src="https://img.icons8.com/color/48/redux.png" alt="redux"/>,
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
      icon: <img width="48" height="48" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>,
    },
    {
      title: 'Node.js',
      description: 'Server-side JavaScript runtime for scalable applications',
      icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>,
    },
    {
      title: 'NestJS',
      description: 'Progressive Node.js framework for building server-side applications',
      icon: <img width="48" height="48" src="https://img.icons8.com/color/48/nestjs.png" alt="nestjs"/>,
    },
    {
      title: 'MySQL',
      description: 'Relational database management system',
      icon: <img width="48" height="48" src="https://img.icons8.com/fluency/48/mysql-logo.png" alt="mysql-logo"/>,
    },
    {
      title: 'MongoDB',
      description: 'NoSQL document database for modern applications',
      icon: <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png" alt="mongodb"/>,
    },
    {
      title: 'Authorization',
      description: 'Authorization for protected user informations',
      icon: <img width="48" height="48" src="https://img.icons8.com/color/48/java-web-token.png" alt="java-web-token"/>,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0f0f14]">
      <h3 className="text-4xl font-bold text-center text-white mb-12">Skills</h3>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="border border-[#1a1a24] rounded-lg flex flex-col p-8 hover:border-blue-500/30 transition-colors duration-300 bg-[#121220]/50"
            >
              <div className="flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white text-center">{skill.title}</h3>
              <p className="text-gray-400 text-sm text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
