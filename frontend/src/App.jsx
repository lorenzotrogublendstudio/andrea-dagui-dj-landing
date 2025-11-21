import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import ContactForm from './components/ContactForm';
import GallerySection from './components/GallerySection';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ExperienceSection />
      <ContactForm />
      <footer className="bg-black text-white text-center py-6 border-t border-[#d02894]">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} <span className="text-[#d02894] font-semibold">ADMUSIC</span> - Andrea D'Aguì
        </p>
        <p className="text-sm text-gray-500 mt-2">DJ & Music Planner per Eventi</p>
      </footer>
    </div>
  );
};

export default App;