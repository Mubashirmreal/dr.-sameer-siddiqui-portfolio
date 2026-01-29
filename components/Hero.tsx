import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Intersection Observer for reveal-text
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal-text class
    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="border-b border-black bg-paper relative">
      {/* Mobile Layout: Stacked */}
      <div className="lg:hidden">
        {/* Text Content */}
        <div className="border-b border-black p-6 md:p-12 min-h-[50vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2
              className="font-display uppercase mb-8 reveal-text"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: '1.05' }}
            >
              International <br />
              Contracts & <br />
              Commercial <br />
              Lawyer.
            </h2>
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-6 md:mb-10 reveal-text">
              <span className="font-body uppercase text-sm tracking-widest font-bold border-b border-black pb-1 mb-2 md:mb-0 inline-block w-max">
                Middle East / Global
              </span>
            </div>
            <p className="font-body text-lg md:text-xl max-w-xl leading-relaxed reveal-text">
              International Contracts & Commercial Advisory for High-Value, Cross-Border Projects
              18+ years advising governments, corporates, and infrastructure projects in the Middle East and beyond.
            </p>
          </motion.div>
        </div>

        {/* Image */}
        <div className="relative h-[60vh] bg-gray-200 overflow-hidden">
          <img
            ref={parallaxRef}
            src="/dr-sameer-siddiqui.webp"
            alt="Dr. Sameer Siddiqui"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Desktop Layout: Side by Side */}
      <div className="hidden lg:flex h-[85vh]">
        {/* Left Column: Typography - Takes 2/3 width */}
        <div className="w-2/3 border-r border-black p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2
              className="font-display uppercase mb-8 reveal-text"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', lineHeight: '1.05' }}
            >
              International <br />
              Contracts & <br />
              Commercial <br />
              Lawyer.
            </h2>
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-10 reveal-text">
              <span className="font-body uppercase text-sm tracking-widest font-bold border-b border-black pb-1 inline-block w-max">
                Middle East / Global
              </span>
            </div>
            <p className="font-body text-xl max-w-xl leading-relaxed reveal-text">
              International Contracts & Commercial Advisory for High-Value, Cross-Border Projects
              18+ years advising governments, corporates, and infrastructure projects in the Middle East and beyond.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Photography - Takes 1/3 width */}
        <div className="w-1/3 relative bg-gray-200 overflow-hidden">
          <img
            src="/dr-sameer-siddiqui.webp"
            alt="Dr. Sameer Siddiqui"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;