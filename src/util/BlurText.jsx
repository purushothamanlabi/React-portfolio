import { motion } from "framer-motion";
import PropTypes from "prop-types";

const BlurText = ({ 
  text, 
  delay = 0.1, 
  animateBy = "words",
  direction = "up",
  onAnimationComplete,
  className = "" 
}) => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: direction === "top" ? 20 : (direction === "bottom" ? -20 : 0),
      x: direction === "left" ? 20 : (direction === "right" ? -20 : 0)
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Split text based on animation type
  const items = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
      className={className}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ marginRight: animateBy === "words" ? "0.3em" : "0" }}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
};

BlurText.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
  animateBy: PropTypes.oneOf(["words", "characters"]),
  direction: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  onAnimationComplete: PropTypes.func,
  className: PropTypes.string
};

export default BlurText; 