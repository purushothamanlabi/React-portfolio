import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const glowRef = useRef(null);

  const menu = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#experience', text: 'Experience' },
    { href: '#certificates', text: 'Certificates' },
  ];

  // Handle smooth scrolling for menu items
  const handleMenuClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const section = document.getElementById(targetId);
    
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  // Mouse tracking for the glow effect
  useEffect(() => {
    const button = buttonRef.current;
    const glow = glowRef.current;

    if (!button || !glow) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    const handleMouseEnter = () => {
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="fixed w-full z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between bg-[rgba(17,25,40,0.5)] rounded-full px-4 sm:px-6 py-3"
             style={{
               backdropFilter: 'blur(25px)',
               WebkitBackdropFilter: 'blur(25px)',
             }}>
          
          {/* Logo/Brand */}
          <div className="text-white font-bold text-xl">
            Purushothaman
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none relative z-50"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
            </div>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {menu.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  onClick={(e) => handleMenuClick(e, item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="relative isolate hidden md:block">
            <button 
              ref={buttonRef}
              className="relative z-10 bg-white text-black px-6 sm:px-8 py-2 rounded-full flex items-center text-sm sm:text-base font-medium overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-white hover:text-blue-800 active:translate-y-0.5 active:shadow-md before:absolute before:inset-[-2px] before:rounded-full before:bg-gradient-to-r before:from-[rgba(120,170,255,0.2)] before:via-[rgba(255,255,255,0.3)] before:to-[rgba(120,170,255,0.2)] before:opacity-0 before:transition-opacity before:duration-300 before:z-[-1] hover:before:opacity-100"
              onClick={(e) => handleMenuClick(e, '#contact')}
            >
              <span className="relative z-10">Contact</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span 
                ref={glowRef} 
                className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(150,200,255,0.8)_30%,rgba(100,150,255,0.4)_60%,transparent_100%)] pointer-events-none z-0 opacity-0 blur-[10px] transition-opacity duration-300 ease-in-out mix-blend-soft-light will-change-[left,top]"
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "tween",
                duration: 0.2,
                ease: "easeInOut"
              }}
              className="md:hidden fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-[rgba(17,25,40,0.95)] backdrop-blur-lg shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-700/40 flex justify-between items-center">
                  <h2 className="text-white text-xl font-bold">Menu</h2>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </button>
                </div>
                <ul className="flex-1 overflow-y-auto py-6 px-4">
                  {menu.map((item) => (
                    <motion.li 
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleMenuClick(e, item.href)}
                        className="text-gray-300 hover:text-white transition-colors duration-300 block py-4 text-lg"
                      >
                        {item.text}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <div className="p-6 border-t border-gray-700/40">
                  <button 
                    className="w-full bg-white text-black px-6 py-3 rounded-full flex items-center justify-center text-base font-medium transition-all duration-300 hover:bg-gray-100"
                    onClick={(e) => handleMenuClick(e, '#contact')}
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;  