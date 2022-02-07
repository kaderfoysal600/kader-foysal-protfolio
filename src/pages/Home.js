import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from './ServicesSection';
import ProjectSection from '../components/ProjectSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactBanner />
      <Footer />
    </div>
  );
}
