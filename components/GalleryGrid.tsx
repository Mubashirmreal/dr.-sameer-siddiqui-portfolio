import React from 'react';
import { motion } from 'framer-motion';

const GalleryGrid: React.FC = () => {
  const items = [
    {
      id: 1,
      type: 'hero',
      span: 'lg:col-span-2 lg:row-span-2',
      image: '/dr-sameer-awarded.webp',
    },
    {
      id: 2,
      type: 'landscape',
      span: 'lg:col-span-2 lg:row-span-1',
      image: '/dr-sameer-stc.webp',
    },
    {
      id: 3,
      type: 'portrait',
      span: 'lg:col-span-1 lg:row-span-2',
      image: '/pasted-image.webp',
    },
    {
      id: 4,
      type: 'standard',
      span: 'lg:col-span-1 lg:row-span-1',
      content: { title: '18+', sub: 'Years Experience' }
    },
    {
      id: 5,
      type: 'standard',
      span: 'lg:col-span-1 lg:row-span-1',
      image: '/dr-sameer-group.webp',
    },
    {
      id: 6,
      type: 'standard',
      span: 'lg:col-span-1 lg:row-span-1',
      content: { title: '400+', sub: 'Contracts Drafted' }
    },
    {
      id: 7,
      type: 'standard',
      span: 'lg:col-span-1 lg:row-span-1',
      image: '/dr-sameer-arab-group.webp',
    }
  ];

  return (
    <section className="border-b border-black bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px]">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            className={`${item.span} relative overflow-hidden bg-paper aspect-square lg:aspect-auto min-h-[300px] flex items-center justify-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {item.image ? (
              <img
                src={item.image}
                alt="Portfolio Image"
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full grayscale hover:grayscale-0 contrast-125 hover:contrast-100 transition-all duration-500 hover:scale-105 ${item.image === '/Samer.jpg' ? 'object-contain' : 'object-cover'
                  }`}
              />
            ) : (
              <div className="p-8 text-center">
                <h3 className="font-display text-5xl md:text-6xl mb-2">{item.content?.title}</h3>
                <p className="font-body text-xs uppercase tracking-widest font-bold opacity-60">
                  {item.content?.sub}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;