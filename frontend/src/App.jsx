import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MiniSiteSection from './components/MiniSiteSection';
import VersatilitySection from './components/VersatilitySection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import ExperienceSection from './components/ExperienceSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './assets/styles/index.css';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MiniSiteSection />
      <GallerySection />
      <ServicesSection />
      
      
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;