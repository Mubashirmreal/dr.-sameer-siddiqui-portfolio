import React from 'react';
import { motion } from 'framer-motion';
import { WHY_CHOOSE_DATA } from '../constants';

const WhyChoose: React.FC = () => {
  return (
    <section className="border-b border-black">
      {WHY_CHOOSE_DATA.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 p-8 md:p-16 border-b border-black last:border-b-0 items-start lg:items-end"
        >
          <div className="lg:col-span-7">
            <motion.h2
              className="font-display uppercase leading-[0.85] tracking-tight reveal-text"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {item.title}
            </motion.h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-12 border-t border-black mb-6 hidden lg:block"></div>
              <p className="font-body text-base md:text-lg leading-relaxed text-black/80 reveal-text">
                {item.description}
              </p>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhyChoose;