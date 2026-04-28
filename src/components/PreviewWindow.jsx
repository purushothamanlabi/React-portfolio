import { motion } from "framer-motion";

const PreviewWindow = ({ type, isVisible }) => {
  const content = {
    linkedin: {
      image: "/job/linkedin.png",
      displayUrl: "linkedin.com/in/purushothaman",
      color: "#0A66C2",
    },
    github: {
      image: "/job/github.png",
      displayUrl: "github.com/purushothamanlabi",
      color: "#24292e",
    },
    naukri: {
      image: "/job/naukri.png",
      displayUrl: "naukri.com/profile",
      color: "#4a90e2",
    }
  };

  const active = content[type];

  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-14 left-1/2 -translate-x-1/2 z-50 w-[400px] h-[300px] overflow-hidden rounded-xl border border-white/10 bg-[#0f1115] shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl pointer-events-none"
    >
      {/* Browser Header */}
      <div className="flex items-center justify-between bg-black/40 px-4 py-3 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm" />
        </div>
        <div className="text-xs text-gray-400 font-mono flex items-center gap-2 px-3 py-1 bg-black/30 rounded-md border border-white/5">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: active.color }} />
          {active.displayUrl}
        </div>
        <div className="w-10" />
      </div>

      {/* Browser Content - Image */}
      <div className="relative h-[calc(100%-48px)] w-full bg-white overflow-hidden">
        <img 
          src={active.image}
          alt={active.displayUrl}
          className="w-full h-full object-cover object-top"
        />
        
        {/* Subtle Overlay to make it feel like a screen */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default PreviewWindow;
