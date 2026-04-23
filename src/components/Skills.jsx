import React from "react";
import { motion as Motion } from "framer-motion";

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
      title: "Next.js",
      description: "React framework for production-ready full stack applications",
      icon: (
        <img
          width="48"
          height="48"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          alt="nextjs"
          className="rounded-full bg-white p-1"
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
      title: "React Router",
      description: "Routing library for building single-page React navigation",
      icon: (
        <img
          width="48"
          height="48"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg"
          alt="react-router"
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
      title: "Axios",
      description: "Promise-based HTTP client for API communication",
      icon: (
        <img
          width="48"
          height="48"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
          alt="axios"
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
          src="/FastAPI.png"
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
      title: "PostgreSQL",
      description: "Open-source relational database for reliable application data storage",
      icon: (
        <img
          width="48"
          height="48"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
          alt="postgresql"
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
    <section id="skills" className="py-14 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="mb-10 space-y-5">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            <span className="h-px w-12 bg-cyan-400/80" />
            <span>02 - Technical Expertise</span>
          </div>

          <h2 className="text-3xl font-black leading-[1.04] text-white sm:text-4xl lg:text-5xl">
            Technical Expertise
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <Motion.div
              key={index}
              className="flex h-40 flex-col rounded-lg border border-[#1a1a24] bg-[#121220]/50 p-3 transition-colors duration-300 hover:border-blue-500/30 [&_img]:h-10 [&_img]:w-10"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.15)" }}
            >
              <div className="mb-3 flex items-center justify-center">
                {skill.icon}
              </div>
              <h3 className="mb-2 text-center text-base font-semibold text-white">
                {skill.title}
              </h3>
              <p className="line-clamp-3 text-center text-xs leading-relaxed text-gray-400">
                {skill.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
