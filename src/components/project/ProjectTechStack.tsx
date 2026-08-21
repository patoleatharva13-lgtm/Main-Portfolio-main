import React from 'react';
import { Cpu } from 'lucide-react';

interface ProjectTechStackProps {
  project: any;
}

export default function ProjectTechStack({ project }: ProjectTechStackProps) {
  if (!project.techStack) return null;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      <div className="mb-8 space-y-2">
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Technologies Employed
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-100">
          Stack Specifications
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.techStack.map((tech: any) => (
          <div
            key={tech.name}
            className="p-4 rounded-xl bg-[#0e1018]/80 border border-white/8 space-y-1.5"
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
              {tech.category}
            </span>
            <h3 className="text-sm font-semibold text-zinc-100 font-heading">
              {tech.name}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {tech.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
