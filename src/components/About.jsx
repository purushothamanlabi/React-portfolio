import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const tabs = [
    { id: 'basic', label: 'Basic' },
    { id: 'education', label: 'Education' },
    { id: 'interest', label: 'Interest' },
  ];

  const stats = [
    { value: '1+', label: 'Years Exp.' },
    { value: '3+', label: 'Featured Projects' },
    { value: '4+', label: 'Certifications' },
    { value: '2', label: 'Roles Held' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="space-y-6 rounded-lg border border-white/8 bg-[#111723]/70 p-5 sm:p-6"
          >
            <p className="text-base leading-8 text-gray-300">
              As a Computer Science student, I have always been drawn to technology and
              cybersecurity. That curiosity pushed me to learn how products are built,
              how systems behave under pressure, and how reliable software creates real
              value for people using it every day.
            </p>

            <p className="text-base leading-8 text-gray-300">
              I am a self-learner who enjoys exploring new tools, frameworks, and
              development practices. Through projects, online learning, and day-to-day
              development work, I keep sharpening my skills across the frontend,
              backend, and database layers.
            </p>

            <p className="text-base leading-8 text-gray-300">
              I am focused on building practical applications, contributing to meaningful
              products, and growing through hands-on engineering work that solves real
              problems.
            </p>
          </motion.div>
        );

      case 'education':
        return (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="space-y-6 rounded-lg border border-white/8 bg-[#111723]/70 p-5 sm:p-6"
          >
            <div className="space-y-8">
              <div className="border-l-2 border-cyan-400 pl-4 py-1">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Bachelor of Computer Applications - BCA
                </h3>
                <p className="mb-1 text-base text-cyan-400">2021 - 2024</p>
                <p className="mb-1 text-base text-gray-300">
                  Dhanalakshmi Srinivasan Arts and Science College, Mahabalipuram
                </p>
                <p className="text-base text-gray-400">CGPA: 6.2</p>
              </div>

              <div className="border-l-2 border-cyan-400 pl-4 py-1">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Higher Secondary Education - HSC
                </h3>
                <p className="mb-1 text-base text-cyan-400">2019 - 2021</p>
                <p className="mb-1 text-base text-gray-300">
                  Govt Boys Higher Secondary School, Tirukazhukundram
                </p>
                <p className="text-base text-gray-400">Percentage: 71%</p>
              </div>

              <div className="border-l-2 border-cyan-400 pl-4 py-1">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  High School Education - SSLC
                </h3>
                <p className="mb-1 text-base text-cyan-400">2018 - 2019</p>
                <p className="mb-1 text-base text-gray-300">Govt High School, Oragadam</p>
                <p className="text-base text-gray-400">Percentage: 85%</p>
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
            className="rounded-lg border border-white/8 bg-[#111723]/70 p-5 sm:p-6"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-lg border border-cyan-400/20 bg-[#0d1320] p-4 transition-colors duration-300 hover:border-cyan-400/40">
                <h3 className="mb-2 text-lg font-semibold text-white">Software Development</h3>
                <p className="text-base text-gray-300">
                  Building scalable and efficient software solutions with a strong
                  product focus.
                </p>
              </div>

              <div className="rounded-lg border border-cyan-400/20 bg-[#0d1320] p-4 transition-colors duration-300 hover:border-cyan-400/40">
                <h3 className="mb-2 text-lg font-semibold text-white">Cybersecurity</h3>
                <p className="text-base text-gray-300">
                  Securing applications and understanding how robust systems should be
                  designed and protected.
                </p>
              </div>

              <div className="rounded-lg border border-cyan-400/20 bg-[#0d1320] p-4 transition-colors duration-300 hover:border-cyan-400/40">
                <h3 className="mb-2 text-lg font-semibold text-white">UI/UX Design</h3>
                <p className="text-base text-gray-300">
                  Creating interfaces that feel intuitive, clean, and useful in
                  real-world workflows.
                </p>
              </div>

              <div className="rounded-lg border border-cyan-400/20 bg-[#0d1320] p-4 transition-colors duration-300 hover:border-cyan-400/40">
                <h3 className="mb-2 text-lg font-semibold text-white">DevOps</h3>
                <p className="text-base text-gray-300">
                  Improving delivery workflows and learning how systems move smoothly
                  from development to production.
                </p>
              </div>

              <div className="rounded-lg border border-cyan-400/20 bg-[#0d1320] p-4 transition-colors duration-300 hover:border-cyan-400/40">
                <h3 className="mb-2 text-lg font-semibold text-white">Automation</h3>
                <p className="text-base text-gray-300">
                  Reducing manual effort by building repeatable tools and process-driven
                  solutions.
                </p>
              </div>

              <div className="rounded-lg border border-cyan-400/20 bg-[#0d1320] p-4 transition-colors duration-300 hover:border-cyan-400/40">
                <h3 className="mb-2 text-lg font-semibold text-white">Agentic Development</h3>
                <p className="text-base text-gray-300">
                  Exploring intelligent systems and workflows that can act with more
                  autonomy and context awareness.
                </p>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="overflow-hidden bg-[#0f0f14] py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
          className="space-y-10"
        >
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            <span className="h-px w-12 bg-cyan-400/80"></span>
            <span>01 - About</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="w-full">
              <h2 className="text-3xl font-black leading-none text-white sm:text-4xl md:text-5xl xl:text-[4.1rem]">
                BUILDING <span className="text-cyan-400">PRODUCTS</span>
                <br />
                THAT WORK
              </h2>

              <div className="mt-8 w-full space-y-6 text-base leading-8 text-gray-300 sm:text-lg">
                <p>
                  I am a full stack developer who enjoys building practical systems across
                  the frontend, backend, and database layers. My work has focused on
                  real-world applications in automation and cybersecurity, where clean
                  implementation matters as much as the final result.
                </p>

                <p>
                  I learn by building, shipping, and improving. From personal projects to
                  professional experience, I care about making software reliable,
                  efficient, and useful for the people who depend on it.
                </p>
              </div>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex min-h-[96px] flex-col justify-center rounded-lg border border-cyan-500/15 bg-[#111723] px-3 py-4 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.02)] sm:min-h-[104px]"
                  >
                    <span className="text-2xl font-black text-cyan-400 sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:text-[0.62rem]">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <div className="mb-6 flex gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 rounded-lg px-2 py-2 text-sm font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-blue-500 text-white shadow-lg'
                          : 'bg-[#1b2738]/20 text-gray-300 hover:bg-[#1b2738]/40'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {renderContent()}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
