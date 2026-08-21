import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, ArrowLeft } from 'lucide-react';

interface ProjectCTAProps {
  project: any;
}

export default function ProjectCTA({ project }: ProjectCTAProps) {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#10121d] to-[#07080e] border border-white/10 shadow-2xl">
        {/* Direct Action Links */}
        <div className="space-y-4 max-w-xl text-center md:text-left">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Explore {project.title} in Action
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Test the live interface or inspect the source repository code.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-[0_0_20px_-3px_rgba(147,51,234,0.5)] border border-purple-400/30 transition-all group"
              >
                <span>Launch Live Demo</span>
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

            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Directory</span>
            </Link>
          </div>
        </div>

        {/* Next Project Teaser Card */}
        {project.nextProjectSlug && (
          <div className="w-full md:w-auto shrink-0">
            <Link
              to={`/projects/${project.nextProjectSlug}`}
              className="group block p-6 rounded-2xl bg-[#141724] border border-white/10 hover:border-purple-500/50 transition-all text-left shadow-lg"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 block mb-1">
                Next Case Study →
              </span>
              <h4 className="font-heading text-lg font-bold text-zinc-100 group-hover:text-purple-200 flex items-center justify-between gap-4">
                <span>{project.nextProjectTitle}</span>
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </h4>
              <p className="text-xs text-zinc-400 mt-1">Read technical breakdown</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
