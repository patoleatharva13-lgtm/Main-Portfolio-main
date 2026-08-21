import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface ProjectChallengesProps {
  project: any;
}

export default function ProjectChallenges({ project }: ProjectChallengesProps) {
  if (!project.challenges) return null;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      <div className="mb-10 space-y-2">
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Problem Solving
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-100">
          Technical Challenges & Solutions
        </h2>
      </div>

      <div className="space-y-6 max-w-3xl">
        {project.challenges.map((item: any, idx: number) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0e1018]/90 border border-white/8 space-y-4"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block">
                  Challenge
                </span>
                <h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                  {item.challenge}
                </h3>
              </div>
            </div>

            <div className="flex items-start gap-3 pl-2 sm:pl-4 border-l-2 border-purple-500/40">
              <div className="p-1.5 rounded-lg bg-purple-950/40 text-purple-300 shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block">
                  Engineered Resolution
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-0.5">
                  {item.solution}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
