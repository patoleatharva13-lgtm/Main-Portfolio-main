import React from 'react';
import { CheckCircle2, Zap, Shield, Layout, Sparkles } from 'lucide-react';

interface ProjectFeaturesProps {
  project: any;
}

export default function ProjectFeatures({ project }: ProjectFeaturesProps) {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      <div className="mb-10 space-y-2">
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Core Capabilities
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-100">
          System Features & Implementation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {project.coreFeatures.map((feature: any, idx: number) => (
          <div
            key={feature.id || feature.title}
            className="p-6 rounded-2xl bg-[#0d0f18]/80 border border-white/8 hover:border-purple-500/40 transition-all space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/20 text-purple-300">
                  {feature.tag}
                </span>
                <span className="text-xs font-mono text-zinc-400">0{idx + 1}</span>
              </div>
              <h3 className="font-heading text-base font-semibold text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-emerald-400 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Production Tested</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
