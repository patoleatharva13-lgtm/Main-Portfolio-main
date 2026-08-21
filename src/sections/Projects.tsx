import React from 'react';
import { projects } from '../data/projects';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/project/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Portfolio Directory"
        title="Selected Projects"
        description="A curated catalog of web applications, product management workspaces, and finance dashboards built with React, Supabase, and modern JavaScript."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
