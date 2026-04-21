import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      description: "Building interactive user interfaces with React",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/html-5.png"
          alt="html-5"
        />
      ),
    },
    {
      title: "CSS",
      description: "Building interactive user interfaces with React",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/css3.png"
          alt="css3"
        />
      ),
    },

    {
      title: "JavaScript",
      description: "Core language for web development",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/javascript.png"
          alt="javascript"
        />
      ),
    },

    {
      title: "React",
      description: "Building interactive user interfaces with React",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/react-native.png"
          alt="react-native"
        />
      ),
    },

    {
      title: "Redux",
      description: "State management for complex applications",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/redux.png"
          alt="redux"
        />
      ),
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/tailwindcss.png"
          alt="tailwindcss"
        />
      ),
    },
    {
      title: "Authorization",
      description: "Authorization for protected user information",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/java-web-token.png"
          alt="java-web-token"
        />
      ),
    },
    {
      title: "Node.js",
      description: "Server-side JavaScript runtime for scalable applications",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/node-js.png"
          alt="node-js"
        />
      ),
    },
    {
      title: "NestJS",
      description:
        "Progressive Node.js framework for building server-side applications",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/nestjs.png"
          alt="nestjs"
        />
      ),
    },
    {
      title: "Fast API",
      description: "Fast API for backend development with Python",
      icon: (
        <img
          width="48"
          height="48"
          src="/fastapi.png"
          alt="fastapi"
        />
      ),
    },

    {
      title: "MySQL",
      description: "Relational database management system",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/mysql-logo.png"
          alt="mysql-logo"
        />
      ),
    },
    {
      title: "MongoDB",
      description: "NoSQL document database for modern applications",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
          alt="mongodb"
        />
      ),
    },

    {
      title: "Python",
      description: "I use Python for backend development and automation",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/python.png"
          alt="python"
        />
      ),
    },

    {
      title: "TypeScript",
      description:
        "TypeScript is a superset of JavaScript that adds static typing to the language.",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/typescript.png"
          alt="typescript"
        />
      ),
    },

    {
      title: "Stripe",
      description:
        "Stripe is a payment processing platform that allows you to accept payments online.",
      icon: (
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/stripe.png"
          alt="stripe"
        />
      ),
    },
  ];

  // Animation variants for the cards
  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.2, duration: 0.7 }
    }
  };

  return (
    <section id="skills" className="py-20">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
        Technical Expertise
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="border border-[#1a1a24] rounded-lg flex flex-col p-4 h-48 hover:border-blue-500/30 transition-colors duration-300 bg-[#121220]/50"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.15)" }}
            >
              <div className="flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-sm text-center">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
