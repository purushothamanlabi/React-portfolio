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
    { id: 'basic', label: 'Basic' },
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
           <div className="space-y-2">
          <p className="text-base text-gray-300 mb-2 mt-10 leading-relaxed">
            As a Computer Science student, I’ve always been deeply interested in <span className="text-cyan-400 font-semibold">technology</span> and <span className="text-cyan-400 font-semibold">cybersecurity</span>. My academic journey helped me explore the fundamentals while growing a strong curiosity for how digital systems work and stay secure.
          </p>
          
          <p className="text-base text-gray-300 mb-2 mt-10 leading-relaxed">
            I'm a <span className="text-cyan-400 font-semibold">self-learner</span> who enjoys exploring new tools, frameworks, and development practices. I’ve enhanced my skills through various online platforms, always seeking to stay up to date with industry trends and best practices.
          </p>
          
          <p className="text-base text-gray-300 mb-2 mt-10 leading-relaxed">
            I'm eager to apply my knowledge by working on <span className="text-cyan-400 font-semibold">real-time applications</span>, contributing to meaningful projects, and continuously growing as a developer in practical, hands-on environments.
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
            <div className="space-y-8">
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Applications - BCA</h3>
                <p className="text-blue-400 text-base mb-1">2021 - 2024</p>
                <p className="text-gray-300 text-base mb-1">Dhanalakshmi Srinivasan Arts and Science College, Mahabalipuram</p>
                <p className="text-gray-400 text-base">CGPA: 6.2</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <h3 className="text-xl font-semibold text-white mb-2">Higher Secondary Education - HSC</h3>
                <p className="text-blue-400 text-base mb-1">2019 - 2021</p>
                <p className="text-gray-300 text-base mb-1">Govt Boys Higher Secondary School, Tirukazhukundram</p>
                <p className="text-gray-400 text-base">Percentage: 71%</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <h3 className="text-xl font-semibold text-white mb-2">High school Education - SSLC</h3>
                <p className="text-blue-400 text-base mb-1">2018 - 2019</p>
                <p className="text-gray-300 text-base mb-1">Govt High school, Oragadam</p>
                <p className="text-gray-400 text-base">Percentage: 85%</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#1b2738]/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">Software Development</h3>
                <p className="text-gray-300 text-base">Passionate about building scalable and efficient software solutions</p>
              </div>
              <div className="bg-[#1b2738]/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300 text-base">Interested in securing applications and implementing robust security measures</p>
              </div>
              <div className="bg-[#1b2738]/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">UI/UX Design</h3>
                <p className="text-gray-300 text-base">Creating intuitive and engaging user experiences through thoughtful design</p>
              </div>
              <div className="bg-[#1b2738]/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">DevOps</h3>
                <p className="text-gray-300 text-base">Streamlining development workflows and implementing CI/CD pipelines</p>
              </div>
              <div className="bg-[#1b2738]/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">Automation</h3>
                <p className="text-gray-300 text-base">Developing automated solutions to improve efficiency and reduce manual tasks</p>
              </div>
              <div className="bg-[#1b2738]/20 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">Agentic Development</h3>
                <p className="text-gray-300 text-base">Building intelligent agents and autonomous systems for enhanced functionality</p>
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
                src="/3426526.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="w-full md:w-1/2">
            {/* Tabs */}
            <div className="flex justify-between mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-1/3 mx-1 first:ml-0 last:mr-0 px-2 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
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