import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';

const WHEEL_STEP_THRESHOLD = 70;
const WHEEL_STEP_COOLDOWN = 220;
const VISIBLE_JOURNEY_COUNT = 2;

const journeyPoints = [
  "Built reusable, dynamic React and NestJS components and modules optimized for speed and reduced memory usage, keeping code clean, consistent, and easy to scale across projects.",
  "Implemented OAuth 2.0 with Google, Microsoft, and LinkedIn, plus Twilio, Redis-queued mail microservice, Stripe, and Razorpay for authentication, communication, scalable email delivery, and subscription-based billing.",
  "Designed a drag-and-drop workflow builder similar to Zapier and n8n using ReactFlow, enabling security engineers to visually connect and automate VAPT tools for penetration testing workflows.",
  "Built an AI agentic system to analyze VAPT tool outputs, detect vulnerabilities, and generate remediation recommendations, reducing manual effort by 50%.",
  "Implemented real-time result streaming with WebSockets and Celery plus Redis task queues for asynchronous execution with live visibility into security assessments.",
  "Integrated VAPT tools, vector database semantic retrieval, AWS S3, FastAPI, and PostgreSQL inside a cybersecurity platform.",
  "Built a multi-tenant medical platform using NestJS, PostgreSQL, and Cornerstone.js for medical imaging, with APIs optimized for reliable performance on 3G networks.",
  "Implemented enterprise-grade security standards aligned with production-grade authentication, authorization, data protection, and scalable SaaS architecture.",
];

const useDesktopQuery = () => {
  const [isDesktop, setIsDesktop] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const updateMatch = () => setIsDesktop(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener('change', updateMatch);

    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, []);

  return isDesktop;
};

const JourneyPoint = ({ point, index, isDesktop = false }) => {
  return (
    <Motion.div
      initial={isDesktop ? { opacity: 0, y: 22 } : false}
      animate={isDesktop ? { opacity: 1, y: 0 } : undefined}
      exit={isDesktop ? { opacity: 0, y: -18 } : undefined}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      className={`flex gap-4 rounded-lg border border-cyan-400/15 bg-[#111723]/70 backdrop-blur-sm ${
        isDesktop
          ? 'min-h-[7.5rem] border-0 bg-transparent p-0 backdrop-blur-0'
          : 'min-h-[7.75rem] p-4'
      }`}
    >
      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-xs font-bold text-cyan-300">
        {String(index + 1).padStart(2, '0')}
      </span>
      <p className="text-sm leading-7 text-slate-300 md:text-base">{point}</p>
    </Motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const activeJourneyRef = useRef(0);
  const wheelDeltaRef = useRef(0);
  const lastStepAtRef = useRef(0);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const isDesktop = useDesktopQuery();

  useEffect(() => {
    activeJourneyRef.current = activeJourneyIndex;
  }, [activeJourneyIndex]);

  useEffect(() => {
    if (!isDesktop) return undefined;

    const section = sectionRef.current;
    if (!section) return undefined;

    const setJourneyIndex = (nextIndex) => {
      activeJourneyRef.current = nextIndex;
      setActiveJourneyIndex(nextIndex);
    };

    const isSectionActive = () => {
      const rect = section.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;
    };

    const syncBoundaryIndex = () => {
      const rect = section.getBoundingClientRect();

      if (rect.top > window.innerHeight * 0.8) {
        setJourneyIndex(0);
      }

      if (rect.bottom < window.innerHeight * 0.2) {
        setJourneyIndex(journeyPoints.length - VISIBLE_JOURNEY_COUNT);
      }
    };

    const stepJourney = (direction) => {
      const current = activeJourneyRef.current;
      const nextIndex = current + direction;

      if (nextIndex < 0 || nextIndex >= journeyPoints.length) {
        return false;
      }

      setJourneyIndex(nextIndex);
      return true;
    };

    const handleWheel = (event) => {
      if (!isSectionActive()) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const current = activeJourneyRef.current;
      const lastStartIndex = journeyPoints.length - VISIBLE_JOURNEY_COUNT;
      const canStep =
        (direction > 0 && current < lastStartIndex) ||
        (direction < 0 && current > 0);

      if (!canStep) return;

      event.preventDefault();
      wheelDeltaRef.current += event.deltaY;

      if (Math.abs(wheelDeltaRef.current) < WHEEL_STEP_THRESHOLD) return;

      const now = Date.now();
      if (now - lastStepAtRef.current < WHEEL_STEP_COOLDOWN) return;

      wheelDeltaRef.current = 0;
      lastStepAtRef.current = now;
      stepJourney(direction);
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', syncBoundaryIndex, { passive: true });
    syncBoundaryIndex();

    return () => {
      section.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', syncBoundaryIndex);
    };
  }, [isDesktop]);

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
    <section ref={sectionRef} id="experience" className="py-14 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8 space-y-5">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            <span className="h-px w-12 bg-cyan-400/80" />
            <span>04 - Work Experience</span>
          </div>

          <h2 className="text-3xl font-black leading-[1.04] text-white sm:text-4xl lg:text-5xl">
            Work Experience
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <Motion.div
            className="order-1 w-full lg:order-2"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={introVariants}
          >
            <div className="rounded-lg border border-slate-700/25 bg-[#0B1220]/80 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.35)] backdrop-blur-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-slate-700/25 pb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Journey Highlights
                </span>
                <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 lg:inline">
                  {String(activeJourneyIndex + 1).padStart(2, '0')} - {String(Math.min(activeJourneyIndex + VISIBLE_JOURNEY_COUNT, journeyPoints.length)).padStart(2, '0')} / {String(journeyPoints.length).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mb-2 text-center text-2xl font-bold text-white lg:text-left">
                My Journey in Tech
              </h3>
              <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 lg:text-left">
                Full-stack Developer | 2 yrs | B2B and SaaS
              </p>

              <div className="relative">
                <div className="space-y-4 lg:hidden">
                  {journeyPoints.map((point, index) => (
                    <JourneyPoint key={point} point={point} index={index} />
                  ))}
                </div>

                <div className="relative hidden h-[16rem] lg:block">
                  <AnimatePresence mode="wait">
                    <Motion.div
                      key={activeJourneyIndex}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="absolute inset-0 divide-y divide-slate-700/20"
                    >
                      {journeyPoints
                        .slice(activeJourneyIndex, activeJourneyIndex + VISIBLE_JOURNEY_COUNT)
                        .map((point, offset) => (
                          <div key={`${activeJourneyIndex}-${point}`} className="py-4 first:pt-0 last:pb-0">
                            <JourneyPoint
                              point={point}
                              index={activeJourneyIndex + offset}
                              isDesktop
                            />
                          </div>
                        ))}
                    </Motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-4 hidden items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 lg:flex">
                  <span>{activeJourneyIndex === journeyPoints.length - VISIBLE_JOURNEY_COUNT ? 'Final highlights' : 'Scroll inside this section'}</span>
                  <span className="h-px flex-1 bg-slate-700/30 mx-4"></span>
                  <span>{activeJourneyIndex + VISIBLE_JOURNEY_COUNT >= journeyPoints.length ? 'Release on next scroll' : 'Next pair'}</span>
                </div>
              </div>
            </div>
          </Motion.div>

          <div className="relative order-2 w-full lg:order-1 lg:pl-8">
            <div className="absolute bottom-4 left-3 top-4 hidden w-px bg-gradient-to-b from-cyan-400/45 via-slate-700/45 to-transparent lg:block" />
            <div className="space-y-4 md:space-y-5">
            {experiences.map((exp, idx) => (
              <Motion.div
                key={exp.id}
                className="relative rounded-lg border border-slate-700/25 bg-[#0B1220]/75 p-4 shadow-[0_18px_60px_rgba(2,6,23,0.24)] backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/25 md:p-5"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -4, boxShadow: "0 18px 60px rgba(2, 6, 23, 0.36)" }}
              >
                <span className="absolute -left-[2.13rem] top-6 hidden h-3 w-3 rounded-full border border-cyan-300 bg-cyan-400 shadow-[0_0_0_5px_rgba(6,10,18,1)] lg:block" />
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white md:text-xl">{exp.role}</h4>
                    <p className="mt-1 text-sm font-medium text-cyan-300">{exp.company}</p>
                  </div>
                  <span className="rounded-full border border-slate-700/35 px-3 py-1 text-xs font-medium text-slate-400">{exp.duration}</span>
                </div>

                <p className="mb-4 text-sm leading-7 text-slate-300 md:text-base">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-cyan-400/10 bg-slate-900/70 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
