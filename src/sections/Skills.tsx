import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import TechWall from '../components/skills/TechWall';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Tech Stack & Skills"
        title="Technical Arsenal"
        description="A deliberate collection of modern languages, libraries, and developer tools I use to build production-grade web applications."
      />

      <TechWall />
    </section>
  );
}
