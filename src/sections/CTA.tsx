import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-b from-[#111320] to-[#0a0b12] border border-white/10 p-8 sm:p-14 overflow-hidden text-center shadow-2xl">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Collaboration</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to bring your next product to life?
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Whether you need a performant React web app, a scalable Supabase integration, or a complete frontend overhaul, let's connect and build something exceptional.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-[0_0_25px_-5px_rgba(147,51,234,0.5)] border border-purple-400/30 transition-all group"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 text-sm font-medium border border-white/10 hover:border-white/20 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
