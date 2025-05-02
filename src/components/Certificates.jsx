import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    {

      id: 1,
      title: "React Web Development",
      issuer: "Udemy",
      date: "2023",
      credential: "UC-REACT2023",
      image: "/react-course.jpg",
      skills: ["React", "JSX", "Hooks", "Redux"]
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      issuer: "Coursera",
      date: "2023",
      credential: "CERT-JS789",
      image: "/javascript-course.jpg",
      skills: ["ES6+", "Async/Await", "DOM", "APIs"]
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      issuer: "Udemy",
      date: "2022",
      credential: "UC-NODE456",
      image: "/nodejs-course.png",
      skills: ["Node.js", "Express", "REST APIs", "Authentication"]
    },
    {
      id: 4,
      title: "MongoDB Database",
      issuer: "MongoDB Academy",
      date: "2022",
      credential: "MDB-CERT012",
      image: "/mongodb-course.jpg",
      skills: ["MongoDB", "NoSQL", "Aggregation", "Data Modeling"]
    },
    {
      id: 4,
      title: "MongoDB Database",
      issuer: "MongoDB Academy",
      date: "2022",
      credential: "MDB-CERT012",
      image: "/mongodb-course.jpg",
      skills: ["MongoDB", "NoSQL", "Aggregation", "Data Modeling"]
    },
    {
      id: 4,
      title: "MongoDB Database",
      issuer: "MongoDB Academy",
      date: "2022",
      credential: "MDB-CERT012",
      image: "/mongodb-course.jpg",
      skills: ["MongoDB", "NoSQL", "Aggregation", "Data Modeling"]
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certificates" className="py-20 bg-[#0f0f14]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Certifications
        </h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/30 rounded-xl overflow-hidden shadow-xl border border-gray-700/50 backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-blue-400">{cert.issuer}</span>
                  <span className="text-gray-500 text-sm">{cert.date}</span>
                </div>
                <div className="mb-4">
                  <p className="text-gray-500 text-sm">Credential ID: {cert.credential}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;