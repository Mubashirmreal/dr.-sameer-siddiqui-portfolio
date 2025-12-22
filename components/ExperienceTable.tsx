import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';

const ExperienceTable: React.FC = () => {
  return (
    <section className="border-b border-black p-6 md:p-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2
            className="font-display uppercase underline decoration-1 underline-offset-8 reveal-text"
            style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}
          >
            The Proof: An 18-Year Crucible of Application
          </h2>
        </div>

        <div className="mb-12 max-w-3xl">
          <p className="font-body text-lg leading-relaxed">
            Knowledge meets its test in the field. A career spanning 18 years across Saudi Arabia's most critical sectors tells the story:
          </p>
        </div>

        <div className="w-full">
          {/* Header Row - Desktop only */}
          <div className="hidden md:grid grid-cols-12 gap-6 pb-4 border-b border-black text-xs font-body font-bold uppercase tracking-widest bg-gray-100/50 px-2">
            <div className="col-span-4 text-left">Sector</div>
            <div className="col-span-4 text-center">Key Entities</div>
            <div className="col-span-4 text-right">The Takeaway</div>
          </div>

          {/* Data Rows */}
          {EXPERIENCE_DATA.map((row, index) => (
            <div key={index} className="experience-row grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-6 md:py-8 border-b border-black last:border-b-0 items-start px-2">
              {/* Sector */}
              <div className="md:col-span-4 text-left">
                <span className="experience-label hidden">Sector</span>
                <span className="experience-sector block font-body text-[0.8rem] md:text-2xl uppercase md:font-display md:leading-none text-[#666] md:text-black">
                  {row.sector}
                </span>
              </div>

              {/* Organizations */}
              <div className="md:col-span-4 text-center">
                <span className="experience-label hidden">Key Entities</span>
                <span className="experience-organization block font-body text-[1.2rem] md:text-base font-bold md:font-medium text-black">
                  {row.organizations}
                </span>
              </div>

              {/* Takeaway */}
              <div className="md:col-span-4 text-right">
                <span className="experience-label hidden">The Takeaway</span>
                <span className="experience-takeaway block font-body text-[1rem] md:text-base italic md:not-italic text-black">
                  {row.takeaway}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="font-body text-base md:text-lg leading-relaxed max-w-4xl text-black/70 italic">
            "This path demonstrates a consistent truth: expertise is nothing without the ability to adapt and deliver tangible results anywhere it's applied."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceTable;