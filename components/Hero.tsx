import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="border-b border-black bg-paper relative">
      {/* Stacked on mobile, side by side (2/3 text, 1/3 photo) on desktop */}
      <div className="flex flex-col lg:flex-row lg:h-[85vh]">
        <div className="border-b lg:border-b-0 lg:border-r border-black p-6 md:p-12 lg:p-16 min-h-[50vh] lg:min-h-0 lg:w-2/3 flex flex-col justify-center">
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
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 mb-6 md:mb-10 reveal-text">
              <span className="font-body uppercase text-sm tracking-widest font-bold border-b border-black pb-1 mb-2 md:mb-0 inline-block w-max">
                Middle East / Global
              </span>
            </div>
            <p className="font-body text-lg md:text-xl max-w-xl leading-relaxed reveal-text">
              International Contracts & Commercial Advisory for High-Value, Cross-Border Projects.{' '}
              18+ years advising governments, corporates, and infrastructure projects in the Middle East and beyond.
            </p>
          </motion.div>
        </div>

        <div className="relative h-[60vh] lg:h-auto lg:w-1/3 bg-gray-200 overflow-hidden">
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
