import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import FeaturedProject from '../sections/FeaturedProject';
import Projects from '../sections/Projects';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Projects />
      <CTA />
      <Contact />
    </main>
  );
}
