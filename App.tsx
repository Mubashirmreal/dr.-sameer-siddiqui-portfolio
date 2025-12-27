import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import ExperienceTable from './components/ExperienceTable';
import GalleryGrid from './components/GalleryGrid';
import Services from './components/Services';
import Impact from './components/Impact';
import WhyChoose from './components/WhyChoose';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { SCHEMA_MARKUP } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden selection:bg-black selection:text-white">
      {/* JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_MARKUP) }}
      />

      <Header />

      <main className="border-l border-r border-black mx-auto max-w-[1920px]">
        <Hero />
        <div id="about">
          <Highlights />
        </div>
        <div id="experience">
          <ExperienceTable />
        </div>
        <GalleryGrid />
        <Services />
        <Impact />
        <WhyChoose />
        <FAQ />
      </main>

      <div className="border-l border-r border-black mx-auto max-w-[1920px]">
        <Footer />
      </div>

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
};

export default App;