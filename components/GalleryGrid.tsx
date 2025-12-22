import React from 'react';
import { motion } from 'framer-motion';

const GalleryGrid: React.FC = () => {
  const items = [
    {
      id: 1,
      type: 'hero',
      span: 'lg:col-span-2 lg:row-span-2',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      label: 'Corporate Headquarters'
    },
    {
      id: 2,
      type: 'landscape',
      span: 'lg:col-span-2 lg:row-span-1',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      label: 'Legal Briefing'
    },
    {
      id: 3,
      type: 'portrait',
      span: 'lg:col-span-1 lg:row-span-2',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      label: 'Strategic Leadership'
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
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
      label: 'Global Collaboration'
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
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80',
      label: 'Advisory Panel'
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
              <>
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black text-white px-2 py-1 font-body text-[10px] uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
              </>
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