import React from 'react';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface ProjectTimelineProps {
  project: any;
}

export default function ProjectTimeline({ project }: ProjectTimelineProps) {
  if (!project.timelineEvents) return null;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      <div className="mb-10 space-y-2">
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Delivery Milestones
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-100">
          Development Roadmap & Timeline
        </h2>
      </div>

      <div className="space-y-4 max-w-3xl">
        {project.timelineEvents.map((evt: any, idx: number) => (
          <div
            key={evt.phase}
            className="p-5 sm:p-6 rounded-xl bg-[#0e1018]/80 border border-white/8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <h3 className="font-heading text-base font-semibold text-zinc-100">
                  {evt.phase}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-4">
                {evt.description}
              </p>
            </div>

            <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-purple-300 shrink-0 self-start sm:self-auto">
              {evt.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
