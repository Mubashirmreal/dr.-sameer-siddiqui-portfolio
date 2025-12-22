import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-b border-black">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Column - FAQ Title + CTA */}
        <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between">
          <motion.h2
            className="font-display uppercase reveal-text mb-8 lg:mb-12"
            style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.h2>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-auto"
          >
            <p className="font-body text-sm md:text-base leading-relaxed mb-4 opacity-70">
              Have a specific issue?
            </p>
            <a
              href="https://calendly.com/YOUR_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:bg-black hover:text-white hover:px-2 hover:pb-2 hover:border-b-0 transition-all duration-300"
            >
              Get in Touch
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="col-span-1 lg:col-span-2">
          {FAQ_DATA.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-black last:border-b-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-8 md:p-12 text-left hover:bg-gray-200 transition-colors duration-200"
              >
                <span className="font-body font-bold text-lg md:text-xl pr-8 w-11/12 reveal-text">{item.question}</span>
                <span className="font-display text-3xl leading-none w-1/12 text-right">
                  {openIndex === index ? '—' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-base px-8 md:px-12 pb-12 pt-0 leading-relaxed max-w-3xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;