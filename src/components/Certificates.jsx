import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    // For mobile, only show current card
    if (window.innerWidth < 768) {
      return [{
        ...certificates[currentIndex],
        position: 0,
        isCenter: true
      }];
    }
    // For desktop, show 3 cards
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex - 1 + i + certificates.length) % certificates.length;
      cards.push({
        ...certificates[index],
        position: i,
        isCenter: i === 1
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section id="certificates" className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Certifications
        </h2>
        
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-20 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 bg-white/10 backdrop-blur-sm"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-20 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 bg-white/10 backdrop-blur-sm"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Carousel Container */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
            <div className="flex items-center justify-center gap-4 md:gap-8 h-full transition-transform duration-500 ease-in-out">
              {visibleCards.map((certificate, index) => (
                <div
                  key={`${certificate.id}-${currentIndex}-${index}`}
                  className={`transition-all duration-500 ${
                    certificate.isCenter
                      ? 'w-[300px] md:w-[380px] h-[400px] md:h-[460px] opacity-100 scale-100 z-10' 
                      : 'w-[280px] md:w-[320px] h-[380px] md:h-[400px] opacity-60 scale-90 z-5'
                  }`}
                >
                  <CertificateCard 
                    certificate={certificate} 
                    isActive={certificate.isCenter}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 md:gap-3 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-6 md:w-8' 
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
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/certificates/default-cert.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        
        {/* Credential Badge */}
        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
          {certificate.credential}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 bg-gray-800/90 backdrop-blur-sm border border-blue-500/30 rounded-lg h-[260px] flex flex-col">
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
