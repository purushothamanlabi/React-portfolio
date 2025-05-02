import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BlurText from "../util/BlurText";
import Circle from "../util/Circle";
import TrueFocus from "../util/textBlur";

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

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Floating Elements */}
      <FloatingElement 
        delay={0} 
        className="absolute top-[20%] left-[15%] z-10"
      >
        <div className="bg-purple-500/90 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
          <span className="text-sm font-medium">React.js</span>
        </div>
      </FloatingElement>

      <FloatingElement 
        delay={0} 
        className="absolute bottom-[20%] left-[15%] z-10"
      >
        <div className="bg-[#800080]/90 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
            <span className="text-sm font-medium">Node.js</span>
        </div>
      </FloatingElement>

      <FloatingElement 
        delay={0.5} 
        className="absolute top-[15%] right-[20%] z-10"
      >
        <div className="bg-emerald-500/90 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
          <span className="text-sm font-medium">Redux.js</span>
        </div>
      </FloatingElement>

      <FloatingElement 
        delay={1} 
        className="absolute bottom-[30%] right-[15%] z-10"
      >
        <div className="bg-orange-500/90 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
          <span className="text-sm font-medium">MySql</span>
        </div>
      </FloatingElement>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-white"
        >
          <TrueFocus
            sentence="Full Stack Web Developer"
            manualMode={true}
            blurAmount={8}
            borderColor="#00ffff"
            glowColor="rgba(0, 255, 255, 0.6)"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-12 text-white"
        >
          <p className="text-xl leading-relaxed">
            I'm a <span className="text-cyan-400 font-semibold">full-stack</span> developer specializing in building <span className="text-cyan-400 font-semibold">exceptional</span> <span className="text-cyan-400 font-semibold">digital</span> experiences. Currently focused on building <span className="text-cyan-400 font-semibold">responsive</span> web applications with <span className="text-cyan-400 font-semibold">modern</span> technologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Circle positioned behind buttons */}
          {/* <div 
            className="absolute left-1/2 top-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 -z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Circle 
              hue={120} 
              hoverIntensity={0.3} 
              rotateOnHover={true}
              forceHoverState={isHovered}
            />
          </div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center gap-4 relative z-10"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Download CV
            </button>
            <button className="bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;