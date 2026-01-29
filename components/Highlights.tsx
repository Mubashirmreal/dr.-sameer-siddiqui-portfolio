import React from 'react';
import { motion } from 'framer-motion';
import { HIGHLIGHTS_DATA } from '../constants';

const Highlights: React.FC = () => {
  return (
    <section className="border-b border-black relative z-0">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
        {HIGHLIGHTS_DATA.map((item, index) => (
          <motion.div
            key={index}
            className="p-8 md:p-12 flex flex-col justify-between h-full min-h-[240px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              <h3 className="font-display text-2xl uppercase mb-2 leading-tight reveal-text">
                {item.organization}
              </h3>
              <p className="font-body text-xs uppercase tracking-widest mb-6 opacity-70 reveal-text">
                {item.role}
              </p>
            </div>
            <p className="font-body text-sm leading-relaxed reveal-text">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;