import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Layers */}
      <div className="fixed inset-0 -z-10 ai-background">
        <div className="absolute inset-0 grid-overlay"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </div>
  );
}