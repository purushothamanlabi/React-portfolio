import React from 'react';
import { motion } from 'framer-motion';

export const Education = () => {
  // Organize data in pairs (left and right for each row)
  const educationRows = [
    // Row 1
    {
      left: {
        id: 1,
        degree: "Bachelor of Technology",
        field: "Computer Science",
        school: "Your University Name", 
        year: "2020 - 2024",
        description: "Data Structures, Algorithms, Web Dev & DBMS. GPA: 3.8/4.0"
      },
      right: {
        id: 2,
        degree: "Professional Certification",
        field: "Web Development",
        school: "Online Platform",
        year: "2023",
        description: "Full-stack development with React, Node.js & MongoDB"
      }
    },
    // Row 2
    {
      left: {
        id: 3,
        degree: "Higher Secondary Education",
        field: "Science",
        school: "Your School Name",
        year: "2018 - 2020", 
        description: "Physics, Chemistry, Math & CS. Score: 92%"
      },
      right: {
        id: 4,
        degree: "International Exchange",
        field: "Computer Science",
        school: "Partner University",
        year: "2022",
        description: "Semester abroad focusing on AI and Machine Learning"
      }
    },
    // Row 3
    {
      left: {
        id: 5,
        degree: "Secondary Education",
        field: "General",
        school: "Your School Name",
        year: "2017 - 2018",
        description: "Excellence in Math & Science. Score: 95%"
      },
      right: {
        id: 6,
        degree: "Industry Internship",
        field: "Software Development",
        school: "Tech Company",
        year: "2021",
        description: "6-month internship developing enterprise applications"
      }
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0f0f14]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Educational Journey
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Center timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
          
          {educationRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="relative mb-14">
              {/* Timeline dot */}
              {/* <div className="absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-blue-500 z-10"></div> */}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left card */}
                <div className="md:pr-8">
                <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="bg-[#1b2738]/20 p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-blue-500/30 backdrop-blur-sm w-full"
>

                    <h3 className="text-2xl font-bold text-white mb-1">{row.left.degree}</h3>
                    <span className="text-blue-400 text-sm px-4 py-1 bg-blue-900/30 rounded-full mb-3 inline-block">
                      {row.left.year}
                    </span>
                    <p className="text-blue-300 mb-2">{row.left.field}</p>
                    <p className="text-gray-400 mb-2">{row.left.school}</p>
                    <p className="text-gray-500 text-sm">{row.left.description}</p>
                  </motion.div>
                </div>
                
                {/* Right card */}
                <div className="md:pl-8">
                <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="bg-[#1b2738]/20 p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-blue-500/30 backdrop-blur-sm w-full"
>

                    <h3 className="text-2xl font-bold text-white mb-1">{row.right.degree}</h3>
                    <span className="text-blue-400 text-sm px-4 py-1 bg-blue-900/30 rounded-full mb-3 inline-block">
                      {row.right.year}
                    </span>
                    <p className="text-blue-300 mb-2">{row.right.field}</p>
                    <p className="text-gray-400 mb-2">{row.right.school}</p>
                    <p className="text-gray-500 text-sm">{row.right.description}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};