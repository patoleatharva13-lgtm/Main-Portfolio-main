import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectDetails } from '../data/projectDetails';
import ProjectHero from '../components/project/ProjectHero';
import ProjectOverview from '../components/project/ProjectOverview';
import ProjectFeatures from '../components/project/ProjectFeatures';
import ProjectGallery from '../components/project/ProjectGallery';
import ProjectArchitecture from '../components/project/ProjectArchitecture';
import ProjectTimeline from '../components/project/ProjectTimeline';
import ProjectChallenges from '../components/project/ProjectChallenges';
import ProjectLearnings from '../components/project/ProjectLearnings';
import ProjectTechStack from '../components/project/ProjectTechStack';
import ProjectCTA from '../components/project/ProjectCTA';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  // Scroll to top whenever slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32">
        <h1 className="font-heading text-3xl font-bold text-white mb-4">
          Project Not Found
        </h1>
        <p className="text-zinc-400 text-sm max-w-md mb-8">
          The requested project "{slug}" could not be located in the portfolio directory.
        </p>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-lg shadow-purple-600/30 transition-all"
        >
          Return to Portfolio Home
        </Link>
      </div>
    );
  }

  return (
    <article className="relative z-10 min-h-screen">
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectFeatures project={project} />
      <ProjectGallery project={project} />
      <ProjectArchitecture project={project} />
      <ProjectTimeline project={project} />
      <ProjectChallenges project={project} />
      <ProjectLearnings project={project} />
      <ProjectTechStack project={project} />
      <ProjectCTA project={project} />
    </article>
  );
}
