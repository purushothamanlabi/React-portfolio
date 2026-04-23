import { motion as Motion } from 'framer-motion';
import { useState } from 'react';

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

const interests = [
  {
    title: 'Software Development',
    description: 'Building reliable full-stack products with clean implementation and practical value.',
  },
  {
    title: 'Cybersecurity',
    description: 'Designing stronger systems by understanding risk, automation, and secure workflows.',
  },
  {
    title: 'Agentic AI',
    description: 'Exploring autonomous workflows that use context, tools, and reasoning to reduce manual effort.',
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const renderContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <Motion.div
            key="basic"
            initial="hidden"
            animate="visible"
            variants={tabContentVariants}
            className="space-y-5 border-l border-cyan-400/30 pl-5"
          >
            <p className="text-base leading-8 text-slate-300">
              As a Computer Science student, I have always been drawn to technology and
              cybersecurity. That curiosity pushed me to learn how products are built,
              how systems behave under pressure, and how reliable software creates real
              value for people using it every day.
            </p>

            <p className="text-base leading-8 text-slate-300">
              I am a self-learner who keeps sharpening skills across frontend, backend,
              and database layers through projects, online learning, and day-to-day
              development work.
            </p>
          </Motion.div>
        );

      case 'education':
        return (
          <Motion.div
            key="education"
            initial="hidden"
            animate="visible"
            variants={tabContentVariants}
            className="space-y-7 border-l border-cyan-400/30 pl-5"
          >
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                2021 - 2024
              </p>
              <h3 className="text-xl font-semibold text-white">
                Bachelor of Computer Applications - BCA
              </h3>
              <p className="mt-2 text-base leading-7 text-slate-300">
                Dhanalakshmi Srinivasan Arts and Science College, Mahabalipuram
              </p>
              <p className="mt-1 text-sm text-slate-500">CGPA: 6.2</p>
            </div>

            <div className="border-t border-slate-700/30 pt-7">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                2019 - 2021
              </p>
              <h3 className="text-xl font-semibold text-white">
                Higher Secondary Education - HSC
              </h3>
              <p className="mt-2 text-base leading-7 text-slate-300">
                Govt Boys Higher Secondary School, Tirukazhukundram
              </p>
              <p className="mt-1 text-sm text-slate-500">Percentage: 71%</p>
            </div>
          </Motion.div>
        );

      case 'interest':
        return (
          <Motion.div
            key="interest"
            initial="hidden"
            animate="visible"
            variants={tabContentVariants}
            className="divide-y divide-slate-700/30 border-l border-cyan-400/30 pl-5"
          >
            {interests.map((interest, index) => (
              <div key={interest.title} className={`${index === 0 ? 'pb-5' : 'py-5'}`}>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xs font-black text-cyan-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{interest.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-300">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="about" className="overflow-hidden py-14 sm:py-16">
      <div className="container mx-auto px-6">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            <span className="h-px w-12 bg-cyan-400/80" />
            <span>01 - About</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-slate-500">
                Full-stack Developer / Cybersecurity / Agentic AI
              </p>

              <h2 className="text-3xl font-black leading-[1.04] text-white sm:text-4xl lg:text-5xl">
                BUILDING <span className="text-cyan-400">PRODUCTS</span>
                <br />
                THAT WORK
              </h2>

              <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
                <p>
                  I build practical systems across frontend, backend, and database
                  layers, with a focus on automation, cybersecurity, and reliable
                  product experiences.
                </p>

                <p>
                  I learn by building, shipping, and improving. The goal is simple:
                  make software that is efficient, maintainable, and useful for the
                  people who depend on it.
                </p>
              </div>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-2 border-y border-slate-700/30 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <Motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="min-h-[78px] border-slate-700/30 px-3 py-4 text-left odd:border-r sm:border-r sm:last:border-r-0"
                  >
                    <span className="block text-2xl font-black leading-none text-cyan-400">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {stat.label}
                    </span>
                  </Motion.div>
                ))}
              </div>

              <div className="mt-7">
                <div className="flex rounded-lg border border-slate-700/30 bg-slate-950/30 p-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 rounded-md px-3 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-cyan-400 text-slate-950'
                          : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6 min-h-[250px]">{renderContent()}</div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
