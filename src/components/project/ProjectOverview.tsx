import React from 'react';
import { Target, Lightbulb, Compass } from 'lucide-react';

interface ProjectOverviewProps {
  project: any;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Narrative Section */}
      <div className="space-y-4 max-w-3xl">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-100">
          Executive Overview
        </h2>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
          {project.overview}
        </p>
      </div>

      {/* Problem vs Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Problem Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f111a]/90 border border-red-500/20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-400">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-zinc-100">
              The Engineering Challenge
            </h3>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f111a]/90 border border-purple-500/20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-400">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-zinc-100">
              The Implemented Solution
            </h3>
          </div>
          <p className="text-zinc-300 text-sm leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>
    </div>
  );
}
