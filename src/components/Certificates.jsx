import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "React Web Development",
      issuer: "Udemy",
      date: "2023",
      credential: "UC-REACT2023",
      image: "/react-course.jpg",
      skills: ["React", "JSX", "Hooks", "Redux"]
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      issuer: "Coursera",
      date: "2023",
      credential: "CERT-JS789",
      image: "/javascript-course.jpg",
      skills: ["ES6+", "Async/Await", "DOM", "APIs"]
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      issuer: "Udemy",
      date: "2022",
      credential: "UC-NODE456",
      image: "/nodejs-course.png",
      skills: ["Node.js", "Express", "REST APIs", "Authentication"]
    },
    {
      id: 4,
      title: "MongoDB Database",
      issuer: "MongoDB Academy",
      date: "2022",
      credential: "MDB-CERT012",
      image: "/mongodb-course.jpg",
      skills: ["MongoDB", "NoSQL", "Aggregation", "Data Modeling"]
    }
  ];

  // Create an infinite loop by duplicating certificates
  const infiniteCertificates = [...certificates, ...certificates, ...certificates];
  const startIndex = certificates.length; // Start from the middle set

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    const nextIndex = (currentIndex + 1) % certificates.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    const prevIndex = currentIndex === 0 
      ? certificates.length - 1 
      : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Calculate the actual translate position
  const getTranslateX = () => {
    const actualIndex = startIndex + currentIndex;
    const cardWidth = 100 / infiniteCertificates.length; // Each card takes this percentage
    return actualIndex * cardWidth;
  };

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Certifications
        </h2>
        
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 -translate-y-1/2 -left-6 z-10 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 bg-white/10 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-6 z-10 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 bg-white/10 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="relative h-[500px] overflow-hidden rounded-2xl"
          >
            <div 
              className="flex items-center justify-center gap-6 h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${getTranslateX()}%)`,
                width: `${infiniteCertificates.length * (100 / 3)}%` // Adjust width to fit all cards
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {infiniteCertificates.map((certificate, index) => (
                <div
                  key={`${certificate.id}-${Math.floor(index / certificates.length)}`}
                  className={`w-[350px] h-[450px] flex-shrink-0 transition-all duration-500 ${
                    Math.floor(index / certificates.length) === 1 && (index % certificates.length) === currentIndex
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-80 scale-95'
                  }`}
                >
                  <CertificateCard 
                    certificate={certificate} 
                    isActive={Math.floor(index / certificates.length) === 1 && (index % certificates.length) === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CertificateCard = ({ certificate, isActive }) => {
  return (
    <div className={`group relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${isActive ? '' : ''}`}>
      {/* Certificate Image */}
      <div className="relative h-[200px] overflow-hidden">
        <img 
          src={certificate.image} 
          alt={certificate.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Credential Badge */}
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
          {certificate.credential}
        </div>

      
      </div>

      {/* Card Content */}
      <div className="p-6 bg-gray-800/90 backdrop-blur-sm border border-blue-500/30 rounded-lg h-[250px] flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
          {certificate.title}
        </h3>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-blue-400 font-medium">{certificate.issuer}</span>
          <span className="text-gray-400 text-sm">{certificate.date}</span>
        </div>
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {certificate.skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs text-blue-300 px-3 py-1 rounded-full border border-blue-700/30 hover:bg-blue-800/40 transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;