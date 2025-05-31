import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const glowRef = useRef(null);

  const menu = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#education', text: 'Education' },
    { href: '#skills', text: 'Skills' },
    { href: '#certificates', text: 'Certificates' },
    { href: '#projects', text: 'Projects' },
  ];

  // Mouse tracking for the glow effect
  useEffect(() => {
    const button = buttonRef.current;
    const glow = glowRef.current;

    if (!button || !glow) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Set the glow position to follow mouse
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    // Show glow on hover
    const handleMouseEnter = () => {
      glow.style.opacity = '1';
    };

    // Hide glow when mouse leaves
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

  return (
    <header className="fixed w-full z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between bg-[rgba(17,25,40,0.5)] rounded-full px-4 sm:px-6 py-3"
             style={{
               backdropFilter: 'blur(25px)',
               WebkitBackdropFilter: 'blur(25px)',
             }}>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {menu.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="relative isolate">
            <button 
              ref={buttonRef}
              className="relative z-10 bg-white text-black px-6 sm:px-8 py-2 rounded-full flex items-center text-sm sm:text-base font-medium overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-white hover:text-blue-800 active:translate-y-0.5 active:shadow-md before:absolute before:inset-[-2px] before:rounded-full before:bg-gradient-to-r before:from-[rgba(120,170,255,0.2)] before:via-[rgba(255,255,255,0.3)] before:to-[rgba(120,170,255,0.2)] before:opacity-0 before:transition-opacity before:duration-300 before:z-[-1] hover:before:opacity-100"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
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
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[rgba(17,25,40,0.5)] backdrop-blur-lg py-4 border-b border-gray-700/40 shadow-lg">
            <ul className="flex flex-col items-center text-center space-y-4 px-4">
              {menu.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;  