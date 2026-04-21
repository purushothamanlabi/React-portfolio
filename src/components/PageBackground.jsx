import { motion } from "framer-motion";

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

const PageBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
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

export default PageBackground;
