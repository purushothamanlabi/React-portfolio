import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TrueFocus from "../Animation/textBlur";

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
        }
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
        }
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="flex flex-col items-center"
        animate={{
          scale: isHovered ? 1.1 : 1,
          color: isHovered ? "#60A5FA" : "#9CA3AF"
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10
        }}
      >
        <motion.span 
          className="text-sm mb-2"
          animate={{
            y: isHovered ? -2 : 0
          }}
        >
          Scroll Down
        </motion.span>
        <motion.svg 
          className="w-6 h-6"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{
            y: isHovered ? 2 : 0
          }}
        >
          <motion.path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
            animate={{
              pathLength: isHovered ? 1 : 0.8,
              opacity: isHovered ? 1 : 0.8
            }}
            transition={{
              duration: 0.3
            }}
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

const LandingPage = () => {

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Floating Elements */}
      <FloatingElement 
        delay={0} 
        className="absolute top-[18%] left-[8%] z-10 sm:top-[20%] sm:left-[15%]"
      >
        <div className="bg-purple-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-white sm:px-4 sm:py-2">
          <span className="text-xs sm:text-sm font-medium">React.js</span>
        </div>
      </FloatingElement>

      <FloatingElement 
        delay={0} 
        className="absolute bottom-[18%] left-[8%] z-10 sm:bottom-[20%] sm:left-[15%]"
      >
        <div className="bg-[#800080]/90 backdrop-blur-sm rounded-lg px-3 py-1 text-white sm:px-4 sm:py-2">
            <span className="text-xs sm:text-sm font-medium">Node.js</span>
        </div>
      </FloatingElement>

      <FloatingElement 
        delay={0.5} 
        className="absolute top-[10%] right-[8%] z-10 sm:top-[15%] sm:right-[20%]"
      >
        <div className="bg-emerald-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-white sm:px-4 sm:py-2">
          <span className="text-xs sm:text-sm font-medium">Redux.js</span>
        </div>
      </FloatingElement>

      <FloatingElement 
        delay={1} 
        className="absolute bottom-[28%] right-[8%] z-10 sm:bottom-[30%] sm:right-[15%]"
      >
        <div className="bg-orange-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-white sm:px-4 sm:py-2">
          <span className="text-xs sm:text-sm font-medium">MySql</span>
        </div>
      </FloatingElement>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto px-2 sm:px-4 relative z-10 select-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 sm:mb-6 text-white"
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

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-4">
          {/* GitHub */}
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-transform duration-200 hover:scale-110">
            <img src="/social/icons8-github-64.png" alt="GitHub" className="w-7 h-7 object-contain" />
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform duration-200 hover:scale-110">
            <img src="/social/icons8-instagram-96.png" alt="Instagram" className="w-7 h-7 object-contain" />
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform duration-200 hover:scale-110">
            <img src="/social/icons8-linkedin-96.png" alt="LinkedIn" className="w-7 h-7 object-contain" />
          </a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8 sm:mb-12 text-white"
        >
          <p className="text-base sm:text-xl leading-relaxed">
            I'm a <span className="text-cyan-400 font-semibold">full-stack</span> developer specializing in building <span className="text-cyan-400 font-semibold">exceptional</span> <span className="text-cyan-400 font-semibold">digital</span> experiences. Currently focused on building <span className="text-cyan-400 font-semibold">responsive</span> web applications with <span className="text-cyan-400 font-semibold">modern</span> technologies.
          </p>
        </motion.div>

        <div className="relative">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 relative z-10"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 rounded-full font-medium transition-colors mb-2 sm:mb-0">
              Hire me
            </button>
            <button className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700 text-white px-6 py-3 sm:px-8 rounded-full font-medium transition-colors">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <ScrollArrow />
    </section>
  );
};

export default LandingPage;