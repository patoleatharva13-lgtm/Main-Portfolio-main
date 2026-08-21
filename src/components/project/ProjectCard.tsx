import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowUpRight, BookOpen, Sparkles, Layers } from 'lucide-react';

interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  caseStudyUrl: string;
  accentColor: string;
  gradient: string;
  stats?: { label: string; value: string }[];
  features?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative rounded-2xl bg-[#0c0e15]/90 border border-white/8 hover:border-purple-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-[0_15px_35px_-10px_rgba(139,92,246,0.2)] overflow-hidden"
    >
      {/* Top ambient color glow */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="space-y-4 relative z-10">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 bg-purple-950/40 border border-purple-500/20 px-2.5 py-0.5 rounded-md">
            {project.category}
          </span>
          <span className="text-xs font-mono text-zinc-400">
            0{index + 1}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-purple-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-400 font-medium mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-900/90 border border-white/6 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer Buttons */}
      <div className="pt-6 mt-6 border-t border-white/6 flex flex-wrap items-center justify-between gap-2 relative z-10">
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 text-xs font-medium transition-all"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>

        <Link
          to={project.caseStudyUrl}
          className="inline-flex items-center gap-1 text-xs font-medium text-purple-300 hover:text-purple-200 group/link transition-colors"
        >
          <span>Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
