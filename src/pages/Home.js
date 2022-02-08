import React from 'react';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <AboutSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactBanner />
      <Footer />
    </div>
  );
}
