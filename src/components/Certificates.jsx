import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "React Web Development",
    issuer: "Udemy",
    date: "2024",
    image: "/react-course.jpg",
    skills: ["components", "hooks", "state management", "routing"],
    link: "https://www.udemy.com/certificate/UC-REACT2023/"
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    issuer: "Infosys Springboard",
    date: "2024",
    image: "/javascript-course.jpg",
    skills: ["ES6+", "Async/Await", "DOM", "APIs", "problem solving"],
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_18109698366332810000_shared/1-3224b04d-0d80-498b-ace4-8017f8afd266.pdf"
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    issuer: "SimpliLearn",
    date: "2024",
    image: "/nodejs-course.png",
    skills: ["Node.js", "Express", "REST APIs", "Authentication"],
    link: "https://simpli-web.app.link/e/H5kJ1spoCFb"
  },
  {
    id: 4,
    title: "MongoDB Database",
    issuer: "MongoDB Academy",
    date: "2024",
    image: "/mongodb-course.jpg",
    skills: ["collections", "aggregation", "data modeling", "aggregation pipeline"],
    link: "https://learn.mongodb.com/c/DK-8P1nxSUmIqdEXawTD3Q"
  },
  {
    id: 5,
    title: "Anthropic AI Certification",
    issuer: "Anthropic",
    date: "2026",
    image: "/Anthropic-cer.png",
    skills: ["AI", "LLMs", "prompting", "Claude"],
    link: "/Anthropic-cer.png"
  }
];

const useDesktopCarousel = () => {
  const [isDesktop, setIsDesktop] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateMatch = () => setIsDesktop(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener('change', updateMatch);

    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, []);

  return isDesktop;
};

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isDesktop = useDesktopCarousel();

  useEffect(() => {
    if (!isAutoPlaying) return undefined;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3600);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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
    if (!isDesktop) {
      return [{
        ...certificates[currentIndex],
        position: 0,
        isCenter: true
      }];
    }

    return [-1, 0, 1].map((offset) => {
      const index = (currentIndex + offset + certificates.length) % certificates.length;

      return {
        ...certificates[index],
        position: offset,
        isCenter: offset === 0
      };
    });
  };

  const visibleCards = getVisibleCards();

  return (
    <section id="certificates" className="py-14 lg:py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-2xl font-black leading-none text-white sm:text-3xl md:text-4xl xl:text-5xl">
          Certifications
        </h2>

        <div
          className="mx-auto max-w-6xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="mb-5 flex items-center justify-between gap-4 px-1">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Credential Library
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {String(currentIndex + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
            </span>
          </div>

          <div className="relative">
            <button
              onClick={handlePrevious}
              aria-label="Previous certificate"
              className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700/35 bg-slate-950/70 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300 md:-left-12"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next certificate"
              className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700/35 bg-slate-950/70 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300 md:-right-12"
            >
              <ChevronRight size={20} />
            </button>

            <div className="flex min-h-[420px] items-center justify-center gap-4 overflow-hidden px-12 md:gap-6 lg:gap-8">
              {visibleCards.map((certificate) => (
                <div
                  key={`${certificate.id}-${certificate.position}-${currentIndex}`}
                  className={`w-full max-w-[320px] transition-all duration-500 md:w-[31%] md:max-w-none ${
                    certificate.isCenter
                      ? 'z-10 scale-100 opacity-100'
                      : 'z-0 hidden scale-[0.94] opacity-45 md:block'
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

          <div className="mt-6 flex items-center justify-center gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Show certificate ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-cyan-300'
                    : 'w-2 bg-slate-700 hover:bg-slate-500'
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
    <div
      className={`group flex h-[390px] flex-col overflow-hidden rounded-lg border bg-[#0B1220]/90 shadow-[0_18px_60px_rgba(2,6,23,0.24)] backdrop-blur-sm transition-all duration-300 ${
        isActive
          ? 'border-cyan-400/30'
          : 'border-slate-700/25'
      }`}
    >
      <div className="relative h-44 overflow-hidden border-b border-slate-700/25 bg-slate-950/50">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/images/certificates/default-cert.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/40 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full border border-slate-100/15 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-200 backdrop-blur-sm">
          {certificate.date}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-200">
          {certificate.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-cyan-300">{certificate.issuer}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-cyan-400/10 bg-slate-900/70 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href={certificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-slate-200 transition-colors duration-300 hover:text-cyan-300"
        >
          <span>View Certificate</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Certificates;
