import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "React Web Development",
    issuer: "Udemy",
    date: "2024",
    image: "/react-course.jpg",
    description: "Completed an in-depth course on building production-ready React applications. Covered the full component lifecycle, custom hooks, and advanced state patterns.",
    learned: [
      "Built reusable component libraries with proper prop design",
      "Managed complex app state using Context API and useReducer",
      "Implemented client-side routing with React Router v6",
      "Optimised rendering performance with useMemo and useCallback",
    ],
    skills: ["components", "hooks", "state management", "routing"],
    link: "https://www.udemy.com/certificate/UC-REACT2023/"
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    issuer: "Infosys Springboard",
    date: "2024",
    image: "/javascript-course.jpg",
    description: "Deep-dived into modern JavaScript from fundamentals to advanced async patterns. Gained strong understanding of how the runtime, event loop, and APIs interact.",
    learned: [
      "Mastered ES6+ syntax, destructuring, and spread/rest patterns",
      "Understood the event loop, call stack, and microtask queue",
      "Built real-world projects using Fetch API and async/await",
      "Solved algorithmic problems to sharpen logical thinking",
    ],
    skills: ["ES6+", "Async/Await", "DOM", "APIs", "problem solving"],
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_18109698366332810000_shared/1-3224b04d-0d80-498b-ace4-8017f8afd266.pdf"
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    issuer: "SimpliLearn",
    date: "2024",
    image: "/nodejs-course.png",
    description: "Learned how to build scalable server-side applications using Node.js and Express. Covered REST API design, middleware architecture, and secure authentication flows.",
    learned: [
      "Designed and built RESTful APIs with Express and middleware",
      "Implemented JWT-based authentication and role-based access",
      "Connected to databases and handled asynchronous DB queries",
      "Understood the Node.js event-driven non-blocking I/O model",
    ],
    skills: ["Node.js", "Express", "REST APIs", "Authentication"],
    link: "https://simpli-web.app.link/e/H5kJ1spoCFb"
  },
  {
    id: 4,
    title: "MongoDB Database",
    issuer: "MongoDB Academy",
    date: "2024",
    image: "/mongodb-course.jpg",
    description: "Completed the official MongoDB Academy certification, covering document-based data modelling, querying, and building efficient aggregation pipelines for real-world data.",
    learned: [
      "Designed flexible schemas optimised for document storage",
      "Wrote complex aggregation pipelines for analytics use cases",
      "Implemented indexing strategies to improve query performance",
      "Understood data modelling trade-offs: embedded vs referenced",
    ],
    skills: ["collections", "aggregation", "data modeling", "aggregation pipeline"],
    link: "https://learn.mongodb.com/c/DK-8P1nxSUmIqdEXawTD3Q"
  },
  {
    id: 5,
    title: "Anthropic AI Certification",
    issuer: "Anthropic",
    date: "2026",
    image: "/Anthropic-cer.png",
    description: "Earned Anthropic's official certification on working with Claude and large language models. Focused on prompt engineering, responsible AI use, and integrating LLMs into production systems.",
    learned: [
      "Engineered effective prompts for reasoning and structured output",
      "Understood Claude's constitutional AI and safety constraints",
      "Explored multi-turn conversation design and context management",
      "Applied LLMs to real automation and agentic workflow tasks",
    ],
    skills: ["AI", "LLMs", "prompting", "Claude"],
    link: "/Anthropic-cer.png"
  }
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % certificates.length);
  const handlePrevious = () => setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  const goToSlide = (index) => { if (index !== currentIndex) setCurrentIndex(index); };

  const current = certificates[currentIndex];

  return (
    <section id="certificates" className="py-20 lg:py-24">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="mb-14 space-y-5">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            <span className="h-px w-12 bg-cyan-400/80" />
            <span>05 - Credentials</span>
          </div>
          <h2 className="text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl">
            My <span className="text-cyan-400">Certifications</span>
          </h2>
        </div>

        <div
          className="mx-auto max-w-6xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Counter + Nav */}
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Credential Library
            </span>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-slate-500">
                {String(currentIndex + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevious}
                  aria-label="Previous certificate"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/40 bg-slate-950/60 text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next certificate"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/40 bg-slate-950/60 text-slate-400 transition-all hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Two-column layout */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="grid gap-6 lg:grid-cols-2"
            >

              {/* LEFT — Certificate Card */}
              <div className="cyber-border overflow-hidden">
                {/* Browser frame dots */}
                <div className="browser-frame">
                  <div className="browser-dot bg-red-500/80" />
                  <div className="browser-dot bg-yellow-500/80" />
                  <div className="browser-dot bg-green-500/80" />
                  <div className="ml-2 font-mono text-[10px] uppercase tracking-wider text-gray-500 opacity-50">
                    {current.issuer.toLowerCase()}.cert
                  </div>
                </div>

                {/* Certificate image */}
                <div className="relative overflow-hidden bg-[#080d16] px-4 py-6 flex items-center justify-center min-h-[220px]">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-auto max-h-64 object-contain transition-transform duration-700 hover:scale-105 brightness-95 hover:brightness-100"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.opacity = '0'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  {/* Year badge */}
                  <span className="absolute right-3 top-3 rounded-full border border-slate-100/15 bg-slate-950/70 px-3 py-1 text-xs font-bold text-slate-200 backdrop-blur-sm">
                    {current.date}
                  </span>
                  {/* Issuer chip */}
                  <span className="absolute bottom-3 left-3 rounded-full border border-cyan-400/25 bg-slate-950/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-400 backdrop-blur-sm">
                    {current.issuer}
                  </span>
                </div>

                {/* Card footer */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-white leading-snug">
                    {current.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {current.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-bold px-2 py-1 bg-cyan-500/5 text-cyan-400/80 border border-cyan-500/10 rounded uppercase tracking-wider"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-white/5 pt-5">
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="relative">
                        VIEW CERTIFICATE
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all group-hover/link:w-full" />
                      </span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT — Description & What I Learned */}
              <div className="flex flex-col justify-center space-y-8 rounded-xl border border-slate-700/30 bg-[#0b1220]/60 p-8 backdrop-blur-sm lg:p-10">

                {/* About this cert */}
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                    About this Certification
                  </p>
                  <p className="text-base leading-8 text-slate-300">
                    {current.description}
                  </p>
                </div>

                <div className="h-px w-full bg-slate-700/30" />

                {/* What I Learned */}
                <div>
                  <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                    What I Learned
                  </p>
                  <ul className="space-y-4">
                    {current.learned.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.07 }}
                        className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Show certificate ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
