import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-b border-black/10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {SERVICES_DATA.map((service, index) => {
          // Logic for borders:
          // Mobile: All items have border-b, except the very last one.
          // Desktop: Odd items have border-r. Last row items (index 4 and 5) have no border-b.

          const isLastItem = index === SERVICES_DATA.length - 1;
          const isSecondLastItem = index === SERVICES_DATA.length - 2;
          const isOpen = openIndex === index;

          let borderClasses = "border-b border-black/10"; // Default mobile with soft borders

          if (index % 2 === 0) {
            // Desktop: Right border for left column items
            borderClasses += " md:border-r";
          }

          // Desktop: Remove bottom border for the last row (items 4 and 5)
          if (isLastItem || isSecondLastItem) {
            borderClasses += " md:border-b-0";
          }

          // Mobile: Remove bottom border for strictly the last item
          if (isLastItem) {
            borderClasses += " border-b-0";
          }

          return (
            <motion.div
              key={service.id}
              className={`${borderClasses} md:cursor-pointer transition-all duration-300 md:hover:bg-[#121212] group`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Mobile: Accordion Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="md:hidden w-full flex items-start justify-between p-8 text-left"
              >
                <div className="flex-1">
                  <span className="block font-display text-5xl font-bold mb-4 reveal-text">
                    {service.id}
                  </span>
                  <h3 className="font-body text-lg uppercase tracking-wide leading-tight reveal-text pr-4">
                    {service.title}
                  </h3>
                </div>
                <span className="font-display text-3xl leading-none mt-2">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {/* Mobile: Accordion Content */}
              <AnimatePresence>
                {isOpen && service.description && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden md:hidden"
                  >
                    <p className="font-body text-sm px-8 pb-8 pt-0 leading-relaxed text-black/80">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Desktop: Static Display with Hover */}
              <div className="hidden md:block p-12">
                <span className="block font-display text-6xl font-bold mb-4 reveal-text transition-colors duration-300 group-hover:text-white">
                  {service.id}
                </span>
                <h3 className="font-body text-xl uppercase tracking-wide leading-tight reveal-text transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;