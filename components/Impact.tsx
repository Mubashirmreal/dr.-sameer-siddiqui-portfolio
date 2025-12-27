import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Impact: React.FC = () => {
  const parallaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Effect hook can be used for other animations if needed
    return () => {
      // Cleanup if needed
    };
  }, []);
  return (
    <section className="border-t border-b border-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left Column: Content (Order 2 on Mobile, Order 1 on Desktop) */}
        <div className="p-8 md:p-16 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-display uppercase leading-none mb-8 reveal-text"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Social Impact <br />&amp; Leadership
            </h2>
            <div className="space-y-6 font-body text-base md:text-lg leading-relaxed">
              <p className="reveal-text">
                Commitment to ethical governance extends beyond the boardroom. As a Senior Advisor to the <span className="font-bold">Autism Foundation (UK)</span>, I champion compliance and sustainability strategies that protect vulnerable communities.
              </p>
              <p className="reveal-text">
                Through the <span className="font-bold">International Leaders Forum</span>, I mentor the next generation of global decision-makers, emphasizing that true leadership requires a rigorous understanding of cross-border impact and structural integrity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image with Parallax (Order 1 on Mobile, Order 2 on Desktop) */}
        <div className="relative h-[40vh] lg:h-auto lg:max-h-[500px] border-b lg:border-b-0 lg:border-l border-black overflow-hidden order-1 lg:order-2 parallax-container">
          <img
            ref={parallaxRef}
            src="/dr-sameer-magazine.webp"
            alt="Dr. Sameer Siddiqui - Magazine Feature"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out parallax-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Impact;