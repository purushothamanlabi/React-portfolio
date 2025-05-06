import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const About = () => {
  // Animate content with framer-motion
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-[#0f0f14] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div
              className="
                w-full
                max-w-[95vw]
                sm:max-w-sm
                md:max-w-md
                lg:max-w-lg
                xl:max-w-xl
                mx-auto
                aspect-[5/6]
                sm:aspect-[1/1]
                rounded-lg
                overflow-hidden
                p-2
                bg-[#111]
              "
            >
              <Spline
                scene="https://prod.spline.design/PNkcQXby8LNQj10u/scene.splinecode"
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '420px',
                  objectFit: 'contain',
                  margin: '0 auto',
                  display: 'block'
                }}
              />
            </div>
          </motion.div>
          <div className="w-full md:w-1/2">
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              I pursued Bachelor of Computer Applications at Dhanalakshmi Srinivasan Arts and Science College, Mahabalipuram, from 2021 to 2024, achieving a grade of 62%. In 12th standard at Govt Boys Higher Secondary School, Tirukazhukundram, I secured 71% in 2019-2021.
            </motion.p>
            <motion.h3 
              className="mt-4 font-semibold text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              transition={{ delay: 0.2 }}
            >
              Certificates
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              transition={{ delay: 0.3 }}
            >
              I hold a Front-End Web Developer certification with React from Udemy, a JavaScript certificate from Infosys Springboard, and Node.js and Express framework certifications from Simplilearn. Additionally, I completed the 'Introduction to MongoDB Database' course from MongoDB Academy.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 