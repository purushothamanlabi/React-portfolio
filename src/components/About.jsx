import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('basic');

  // Animate content with framer-motion
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };  

  const tabs = [
    { id: 'basic', label: 'Basic Info' },
    { id: 'education', label: 'Education' },
    { id: 'interest', label: 'Interest' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'basic':
        return (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="space-y-4 p-4 bg-[#1b2738]/10 rounded-xl"
          >
            <p className="text-base text-gray-300 leading-relaxed">
              I pursued Bachelor of Computer Applications at Dhanalakshmi Srinivasan Arts and Science College, Mahabalipuram, from 2021 to 2024, achieving a grade of 62%. In 12th standard at Govt Boys Higher Secondary School, Tirukazhukundram, I secured 71% in 2019-2021.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Certificates</h3>
              <p className="text-base text-gray-300 leading-relaxed">
                I hold a Front-End Web Developer certification with React from Udemy, a JavaScript certificate from Infosys Springboard, and Node.js and Express framework certifications from Simplilearn. Additionally, I completed the 'Introduction to MongoDB Database' course from MongoDB Academy.
              </p>
            </div>
          </motion.div>
        );
      case 'education':
        return (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="space-y-4 p-4 bg-[#1b2738]/10 rounded-xl"
          >
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Applications</h3>
                <p className="text-blue-400 text-base mb-1">2021 - 2024</p>
                <p className="text-gray-300 text-base mb-1">Dhanalakshmi Srinivasan Arts and Science College, Mahabalipuram</p>
                <p className="text-gray-400 text-base">Grade: 62%</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <h3 className="text-xl font-semibold text-white mb-2">Higher Secondary Education</h3>
                <p className="text-blue-400 text-base mb-1">2019 - 2021</p>
                <p className="text-gray-300 text-base mb-1">Govt Boys Higher Secondary School, Tirukazhukundram</p>
                <p className="text-gray-400 text-base">Grade: 71%</p>
              </div>
            </div>
          </motion.div>
        );
      case 'interest':
        return (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="space-y-4 p-4 bg-[#1b2738]/10 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1b2738]/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">Web Development</h3>
                <p className="text-gray-300 text-base">Passionate about creating responsive and user-friendly web applications</p>
              </div>
              <div className="bg-[#1b2738]/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-300 text-base">Interested in designing intuitive and engaging user interfaces</p>
              </div>
              <div className="bg-[#1b2738]/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">Problem Solving</h3>
                <p className="text-gray-300 text-base">Enjoy tackling complex programming challenges and finding efficient solutions</p>
              </div>
              <div className="bg-[#1b2738]/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">Learning</h3>
                <p className="text-gray-300 text-base">Always eager to learn new technologies and improve my skills</p>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-12 bg-[#0f0f14] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-[95vw] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto aspect-[5/6] sm:aspect-[1/1] rounded-lg overflow-hidden p-2 bg-[#111] shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/image.jpeg"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="w-full md:w-1/2">
            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 text-base font-medium ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-[#1b2738]/20 text-gray-300 hover:bg-[#1b2738]/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Content */}
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 