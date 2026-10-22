import React from 'react';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: number;
  span: string;
  image?: string;
  alt?: string;
  fit?: string;
  content?: { title: string; sub: string };
}

const GalleryGrid: React.FC = () => {
  const items: GalleryItem[] = [
    {
      id: 1,
      span: 'lg:col-span-2 lg:row-span-2',
      image: '/dr-sameer-awarded.webp',
      alt: 'Dr. Sameer Siddiqui receiving a Legal Excellence Award at the Global Legal Summit',
    },
    {
      id: 2,
      span: 'lg:col-span-2 lg:row-span-1',
      image: '/dr-sameer-stc.webp',
      alt: 'Dr. Sameer Siddiqui with the STC team',
      fit: 'object-cover object-right md:object-center',
    },
    {
      id: 3,
      span: 'lg:col-span-1 lg:row-span-2',
      image: '/pasted-image.webp',
      alt: 'Dr. Sameer Siddiqui at the Global Legal Summit',
      fit: 'object-cover object-top md:object-center',
    },
    {
      id: 4,
      span: 'lg:col-span-1 lg:row-span-1',
      content: { title: '18+', sub: 'Years Experience' }
    },
    {
      id: 5,
      span: 'lg:col-span-1 lg:row-span-1',
      image: '/dr-sameer-gls.webp',
      alt: 'Global Legal Summit award recipients',
    },
    {
      id: 6,
      span: 'lg:col-span-1 lg:row-span-1',
      content: { title: '400+', sub: 'Contracts Drafted' }
    },
    {
      id: 7,
      span: 'lg:col-span-1 lg:row-span-1',
      image: '/dr-sameer-arab-group.webp',
      alt: 'Dr. Sameer Siddiqui with colleagues at a business event',
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
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full grayscale hover:grayscale-0 contrast-125 hover:contrast-100 transition-all duration-500 hover:scale-105 ${item.fit ?? 'object-cover'}`}
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