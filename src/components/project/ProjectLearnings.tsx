import React from 'react';
import { Award, BookOpen, Check } from 'lucide-react';

interface ProjectLearningsProps {
  project: any;
}

export default function ProjectLearnings({ project }: ProjectLearningsProps) {
  if (!project.learnings) return null;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      <div className="mb-8 space-y-2">
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Key Takeaways
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-100">
          Engineering Insights & Learnings
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
        {project.learnings.map((learning: string, idx: number) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#0e1018]/80 border border-white/8 space-y-3"
          >
            <div className="w-8 h-8 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
              <Check className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {learning}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
