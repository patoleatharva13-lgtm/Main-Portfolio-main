import React from 'react';
import { Layers, ArrowDown, Database, Cpu, Shield, Globe } from 'lucide-react';

interface ProjectArchitectureProps {
  project: any;
}

export default function ProjectArchitecture({ project }: ProjectArchitectureProps) {
  if (!project.architecture) return null;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      <div className="mb-10 space-y-2">
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Engineering Design
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-100">
          {project.architecture.title}
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl">
          {project.architecture.description}
        </p>
      </div>

      {/* Visual Pipeline / Layer Diagram */}
      <div className="relative max-w-3xl mx-auto space-y-4">
        {project.architecture.layers.map((layer: any, idx: number) => (
          <React.Fragment key={layer.name}>
            <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 hover:border-purple-500/40 transition-all shadow-md relative group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-xs font-mono text-purple-300 font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-zinc-100">
                      {layer.name}
                    </h3>
                    <p className="text-xs font-mono text-purple-300 mt-0.5">
                      {layer.detail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-item bullet points */}
              {layer.subItems && layer.subItems.length > 0 && (
                <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {layer.subItems.map((sub: string) => (
                    <div key={sub} className="flex items-center gap-1.5 text-xs text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="truncate">{sub}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Connecting Arrow between layers */}
            {idx < project.architecture.layers.length - 1 && (
              <div className="flex justify-center my-1">
                <div className="flex flex-col items-center">
                  <span className="w-0.5 h-4 bg-purple-500/40" />
                  <ArrowDown className="w-3.5 h-3.5 text-purple-400 -mt-1" />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
