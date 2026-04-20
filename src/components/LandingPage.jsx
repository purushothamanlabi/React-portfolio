import { motion } from "framer-motion";
import { useState } from "react";
import TrueFocus from "../Animation/textBlur";

const backgroundBoxes = [
  { top: "8%", left: "5%", width: "18%", height: "20%", delay: 0.2, duration: 10 },
  { top: "18%", left: "27%", width: "11%", height: "15%", delay: 0.8, duration: 9 },
  { top: "10%", left: "74%", width: "14%", height: "18%", delay: 0.5, duration: 11 },
  { top: "28%", left: "61%", width: "12%", height: "17%", delay: 1.1, duration: 10 },
  { top: "39%", left: "6%", width: "13%", height: "16%", delay: 1.4, duration: 12 },
  { top: "52%", left: "20%", width: "16%", height: "19%", delay: 0.9, duration: 9 },
  { top: "48%", left: "70%", width: "17%", height: "20%", delay: 1.6, duration: 12 },
  { top: "69%", left: "8%", width: "15%", height: "16%", delay: 0.4, duration: 10 },
  { top: "74%", left: "32%", width: "12%", height: "14%", delay: 1.3, duration: 11 },
  { top: "70%", left: "58%", width: "14%", height: "17%", delay: 0.7, duration: 9 },
  { top: "23%", left: "43%", width: "10%", height: "13%", delay: 1.9, duration: 12, hideOnMobile: true },
  { top: "61%", left: "45%", width: "11%", height: "15%", delay: 1.5, duration: 10, hideOnMobile: true },
];

const AnimatedBoxBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_36%),linear-gradient(180deg,rgba(2,6,23,0.92)_0%,rgba(15,17,21,1)_42%,rgba(2,6,23,0.96)_100%)]" />

      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
          backgroundSize: "clamp(72px, 9vw, 110px) clamp(72px, 9vw, 110px)",
        }}
      />

      <div className="absolute inset-0">
        {backgroundBoxes.map((box, index) => (
          <motion.div
            key={`${box.top}-${box.left}-${index}`}
            className={`absolute rounded-[10px] border border-cyan-400/12 bg-cyan-400/[0.025] shadow-[0_0_30px_rgba(34,211,238,0.04)] ${
              box.hideOnMobile ? "hidden md:block" : ""
            }`}
            style={{
              top: box.top,
              left: box.left,
              width: box.width,
              height: box.height,
            }}
            animate={{
              opacity: [0.08, 0.22, 0.08],
              scale: [1, 1.03, 1],
              y: [0, -8, 0],
            }}
            transition={{
              duration: box.duration,
              delay: box.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-[12%] rounded-[8px] border border-cyan-300/10" />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,17,21,0)_0%,rgba(15,17,21,0.3)_60%,rgba(15,17,21,0.9)_100%)]" />
    </div>
  );
};

const FloatingElement = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: [0, -10, 0],
        opacity: 1,
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          delay,
        },
        opacity: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ScrollArrow = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        y: {
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        },
      }}
      className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 cursor-pointer"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex flex-col items-center"
        animate={{
          scale: isHovered ? 1.1 : 1,
          color: isHovered ? "#60A5FA" : "#9CA3AF",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      >
        <motion.span
          className="mb-2 text-sm"
          animate={{
            y: isHovered ? -2 : 0,
          }}
        >
          Scroll Down
        </motion.span>
        <motion.svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{
            y: isHovered ? 2 : 0,
          }}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
            animate={{
              pathLength: isHovered ? 1 : 0.8,
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{
              duration: 0.3,
            }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

const LandingPage = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      <AnimatedBoxBackground />

      <FloatingElement
        delay={0}
        className="absolute left-[8%] top-[18%] z-10 sm:left-[15%] sm:top-[20%]"
      >
        <div className="rounded-lg bg-purple-500/90 px-3 py-1 text-white backdrop-blur-sm sm:px-4 sm:py-2">
          <span className="text-xs font-medium sm:text-sm">React.js</span>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={0}
        className="absolute bottom-[18%] left-[8%] z-10 sm:bottom-[20%] sm:left-[15%]"
      >
        <div className="rounded-lg bg-[#800080]/90 px-3 py-1 text-white backdrop-blur-sm sm:px-4 sm:py-2">
          <span className="text-xs font-medium sm:text-sm">Node.js</span>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={0.5}
        className="absolute right-[8%] top-[10%] z-10 sm:right-[20%] sm:top-[15%]"
      >
        <div className="rounded-lg bg-emerald-500/90 px-3 py-1 text-white backdrop-blur-sm sm:px-4 sm:py-2">
          <span className="text-xs font-medium sm:text-sm">Redux.js</span>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={1}
        className="absolute bottom-[23%] right-[8%] z-10 sm:bottom-[30%] sm:right-[15%]"
      >
        <div className="rounded-lg bg-orange-500/90 px-3 py-1 text-white backdrop-blur-sm sm:px-4 sm:py-2">
          <span className="text-xs font-medium sm:text-sm">MySql</span>
        </div>
      </FloatingElement>

      <div className="relative z-20 mx-auto max-w-4xl select-none px-2 text-center sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 text-white sm:mb-6"
        >
          <TrueFocus
            sentence="Full Stack web Developer"
            manualMode={true}
            blurAmount={8}
            borderColor="#00ffff"
            glowColor="rgba(0, 255, 255, 0.6)"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
            className="font-black"
          />
        </motion.div>

        <div className="mb-4 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <a
            href="https://www.naukri.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Naukri"
            className="flex items-center transition-transform duration-200 hover:scale-110"
          >
            <img
              src="/social/naukri.png"
              alt="Naukri"
              className="h-7 w-auto max-w-[4.75rem] object-contain sm:h-8"
            />
          </a>

          <a
            href="https://github.com/purushothamanlabi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 transition-transform duration-200 hover:scale-110"
          >
            <img src="/social/icons8-github-90.png" alt="GitHub" className="h-6 w-6 object-contain invert sm:h-7 sm:w-7" />
            <span className="text-[0.95rem] font-medium leading-none text-white sm:text-[1.1rem]">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/purushothaman-d-32b786250"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 transition-transform duration-200 hover:scale-110"
          >
            <img src="/social/icons8-linkedin-96.png" alt="LinkedIn" className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
            <span className="text-[0.95rem] font-medium leading-none text-[#0A66C2] sm:text-[1.1rem]">LinkedIn</span>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <p className="mx-auto max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
            I'm Purushothaman, a full stack developer with 1 year of experience in
            frontend, backend, and database development. I've worked on projects in
            cybersecurity and automation, building efficient and scalable web
            applications.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative z-10 mx-auto flex w-full max-w-xs flex-row justify-between gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
          >
            <button className="w-1/2 rounded-full bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 sm:w-auto sm:px-8 sm:py-3">
              Hire me
            </button>
            <button className="w-1/2 rounded-full bg-gray-800/50 px-4 py-2 font-medium text-white backdrop-blur-sm transition-colors hover:bg-gray-700 sm:w-auto sm:px-8 sm:py-3">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      <ScrollArrow />
    </section>
  );
};

export default LandingPage;
