import React, { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Mail, Sparkles, Code } from 'lucide-react';
import { personalInfo } from '../data/personal';
import StatusBadge from '../components/hero/StatusBadge';

// Lazy-load 3D Scene for instant first paint
const HeroScene3D = lazy(() => import('../components/hero/HeroScene3D'));

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Hero Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8">
          <StatusBadge />

          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 text-zinc-400 font-mono text-xs sm:text-sm tracking-wider uppercase"
            >
              <span className="w-6 h-px bg-purple-500" />
              <span>{personalInfo.name}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-purple-300 font-semibold">{personalInfo.role}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Building digital products{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-cyan-300">
                that feel as good as they work.
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            {/* View Projects Primary CTA */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-[0_0_25px_-5px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_0_rgba(147,51,234,0.7)] border border-purple-400/40 transition-all group"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Let's Connect CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 text-sm font-medium border border-white/10 hover:border-purple-500/40 transition-all group"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* GitHub Quick Link */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atharva Patole GitHub"
              className="p-3 rounded-xl bg-zinc-900/70 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Email Quick Link */}
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send direct email to Atharva Patole"
              className="p-3 rounded-xl bg-zinc-900/70 hover:bg-zinc-800 text-zinc-400 hover:text-purple-300 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Micro Tech Focus Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-2 pt-4 text-xs font-mono text-zinc-400"
          >
            <span className="text-zinc-400">Core Focus:</span>
            {["React", "Node.js", "Supabase", "Tailwind CSS", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-zinc-900/60 border border-white/5 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: 3D Interactive Scene */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <Suspense
            fallback={
              <div className="w-full h-80 flex items-center justify-center">
                <div className="w-12 h-12 rounded-2xl border border-purple-500/30 animate-pulse bg-purple-500/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-purple-400 animate-spin" />
                </div>
              </div>
            }
          >
            <HeroScene3D />
          </Suspense>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="hidden md:flex items-center justify-center gap-2 text-xs font-mono text-zinc-400 pt-12 cursor-pointer select-none hover:text-purple-300 transition-colors"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span>EXPLORE WORK</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-purple-400" />
      </motion.div>
    </section>
  );
}
