import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import Spline from '@splinetool/react-spline';
// import profileImage from './../../public/Programming-pana.png';


// Mouse follower component
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const sectionRef = useRef(null);
  const maxPoints = 15;
  const [isMouseInSection, setIsMouseInSection] = useState(false);
  
  // Set up canvas and track mouse movement
  useEffect(() => {
    // Create canvas for drawing the trail
    const canvas = document.createElement('canvas');
    canvas.className = 'mouse-trail-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '5';
    
    // Get the about section element
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    sectionRef.current = aboutSection;
    aboutSection.style.position = 'relative';
    aboutSection.appendChild(canvas);
    
    // Set canvas dimensions to match the section
    canvas.width = aboutSection.offsetWidth;
    canvas.height = aboutSection.offsetHeight;
    canvasRef.current = canvas;
    
    // Set up resize handler
    const handleResize = () => {
      canvas.width = aboutSection.offsetWidth;
      canvas.height = aboutSection.offsetHeight;
    };
    
    // Track mouse movement within the section
    const handleMouseMove = (e) => {
      const rect = aboutSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Only track if mouse is within the section
      if (
        x >= 0 && 
        x <= rect.width && 
        y >= 0 && 
        y <= rect.height
      ) {
        setIsMouseInSection(true);
        setMousePosition({ x, y });
        
        // Add new point with random offset
        const newPoint = {
          x: x,
          y: y,
          size: Math.random() * 5 + 3,
          life: 1, // Full life
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2
        };
        
        pointsRef.current.unshift(newPoint);
        
        // Keep only the most recent points
        if (pointsRef.current.length > maxPoints) {
          pointsRef.current = pointsRef.current.slice(0, maxPoints);
        }
      } else {
        setIsMouseInSection(false);
      }
    };
    
    const handleMouseEnter = () => {
      setIsMouseInSection(true);
    };
    
    const handleMouseLeave = () => {
      setIsMouseInSection(false);
      // Clear points when mouse leaves section
      pointsRef.current = [];
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    aboutSection.addEventListener('mouseenter', handleMouseEnter);
    aboutSection.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      aboutSection.removeEventListener('mouseenter', handleMouseEnter);
      aboutSection.removeEventListener('mouseleave', handleMouseLeave);
      if (aboutSection.contains(canvas)) {
        aboutSection.removeChild(canvas);
      }
    };
  }, []);
  
  // Animation loop for the light points
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let animationId;
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Only animate if mouse is in section
      if (isMouseInSection || pointsRef.current.length > 0) {
        // Update and draw each point
        pointsRef.current.forEach((point, index) => {
          // Update point life and position
          point.life -= 0.02;
          point.x += point.speedX;
          point.y += point.speedY;
          
          // Remove dead points
          if (point.life <= 0) {
            pointsRef.current.splice(index, 1);
            return;
          }
          
          // Draw the point with glow
          ctx.save();
          
          // Inner glow
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, point.size * 2
          );
          
          gradient.addColorStop(0, `rgba(255, 255, 0, ${point.life * 0.8})`);
          gradient.addColorStop(0.5, `rgba(255, 255, 0, ${point.life * 0.4})`);
          gradient.addColorStop(1, 'rgba(255, 255, 0, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.size * 2, 0, Math.PI * 2);
          ctx.fill();
          
          // Outer glow
          ctx.shadowColor = 'rgba(255, 255, 0, 0.8)';
          ctx.shadowBlur = 15;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          
          ctx.fillStyle = `rgba(255, 255, 150, ${point.life})`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        });
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isMouseInSection]);
  
  return null;
};

// Globe Animation Component
const GlobePoints = () => {
  const points = useRef();
  const { viewport } = useThree();
  
  // Create the globe pointst
  const particlesCount = 4000;
  const positions = new Float32Array(particlesCount * 3);
  const sizes = new Float32Array(particlesCount);
  const colors = new Float32Array(particlesCount * 3);
  const radius = 2;
  
  // Generate positions for points on a sphere with varying sizes and colors
  for (let i = 0; i < particlesCount; i++) {
    // Create points in a spherical pattern
    const phi = Math.random() * Math.PI * 2;
    const theta = Math.random() * Math.PI;
    
    const x = radius * Math.sin(theta) * Math.cos(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(theta);
    
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    
    // Vary point sizes slightly
    sizes[i] = Math.random() * 0.03 + 0.01;
    
    // Create a gradient of colors based on position (white to blue)
    const intensity = Math.random();
    colors[i * 3] = 0.5 + intensity * 0.5; // Red component
    colors[i * 3 + 1] = 0.5 + intensity * 0.5; // Green component
    colors[i * 3 + 2] = 0.8 + intensity * 0.2; // Blue component (more intense)
  }
  
  // Animation with GSAP
  useEffect(() => {
    if (points.current) {
      // Initial animation
      gsap.fromTo(
        points.current.scale,
        { x: 0, y: 0, z: 0 },
        { 
          x: 1, 
          y: 1, 
          z: 1, 
          duration: 2,
          ease: "elastic.out(1, 0.3)"
        }
      );
      
      // Pulse animation
      gsap.to(points.current.rotation, {
        y: Math.PI * 2,
        duration: 30,
        ease: "none",
        repeat: -1
      });
    }
  }, []);
  
  // Continuous subtle animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.1;
    if (points.current) {
      points.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    }
  });
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particlesCount}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.025} 
        vertexColors
        sizeAttenuation 
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
};

// Scene component that handles camera animation
const Scene = () => {
  const cameraRef = useRef();
  
  useEffect(() => {
    if (cameraRef.current) {
      // Animate camera position with GSAP
      gsap.fromTo(
        cameraRef.current.position,
        { z: 10 },
        { z: 5, duration: 2, ease: "power2.out" }
      );
    }
  }, []);
  
  useFrame(({ clock }) => {
    if (cameraRef.current) {
      // Slow orbital rotation of the camera around the globe
      const time = clock.getElapsedTime() * 0.1;
      const radius = 5;
      cameraRef.current.position.x = Math.sin(time) * radius;
      cameraRef.current.position.z = Math.cos(time) * radius;
      cameraRef.current.lookAt(0, 0, 0);
    }
  });
  
  return (
    <>
      <perspectiveCamera 
        ref={cameraRef} 
        fov={60} 
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
        position={[0, 0, 10]}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <GlobePoints />
    </>
  );
};

// StarsBackground for additional effect
const StarsBackground = () => {
  const starsRef = useRef();
  const starsCount = 1000;
  const starsPositions = new Float32Array(starsCount * 3);
  
  for (let i = 0; i < starsCount; i++) {
    starsPositions[i * 3] = (Math.random() - 0.5) * 50;
    starsPositions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    starsPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }
  
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0001;
    }
  });
  
  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starsCount}
          array={starsPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.01} 
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation 
      />
    </points>
  );
};

// Globe Animation Component with Canvas
const GlobeAnimation = () => {
  return (
    <div className="w-full h-96 relative">
      <Canvas camera={{ manual: true }}>
        <StarsBackground />
        <Scene />
      </Canvas>
    </div>
  );
};

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
      <MouseFollower />
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
            <div className="w-full aspect-[1/1] rounded-lg overflow-hidden">
              <Spline
                scene="https://prod.spline.design/7MTmBLaTaJ3EnAVb/scene.splinecode"
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