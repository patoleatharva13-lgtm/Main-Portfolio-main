import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Sparkles, Clock, User, CheckCircle2 } from 'lucide-react';

interface ProjectHeroProps {
  project: any;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/8">
      {/* Back to Home Link */}
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-purple-300 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>BACK TO ALL PROJECTS</span>
      </Link>

      <div className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/40 border border-purple-500/30 text-purple-300">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>{project.category}</span>
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-300">
            {project.status}
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl text-purple-200/90 font-medium"
        >
          {project.subtitle}
        </motion.p>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Project Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5 font-mono text-xs text-zinc-400">
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px]">Role</span>
            <span className="text-zinc-200 font-sans font-medium text-xs sm:text-sm mt-0.5 block">{project.role}</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px]">Timeline</span>
            <span className="text-zinc-200 font-sans font-medium text-xs sm:text-sm mt-0.5 block">{project.timeline}</span>
          </div>
          <div>
            <span className="text-zinc-500 block uppercase tracking-wider text-[10px]">Deployment</span>
            <span className="text-emerald-400 font-sans font-medium text-xs sm:text-sm mt-0.5 block">Production Live</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-[0_0_20px_-3px_rgba(147,51,234,0.5)] border border-purple-400/30 transition-all group"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-sm font-medium border border-white/10 hover:border-purple-500/40 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
