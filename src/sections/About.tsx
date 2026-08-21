import React from 'react';
import { motion } from 'motion/react';
import { Download, Code2, Layers, Cpu, Compass, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/personal';
import SectionHeading from '../components/common/SectionHeading';
import WorkspaceMockup from '../components/about/WorkspaceMockup';

export default function About() {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      title: "Frontend Craft & Polish",
      description: "Obsessed with buttery-smooth interactions, precise typographic hierarchy, and responsive layouts built with React and Tailwind CSS."
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "Full-Stack Integration",
      description: "Connecting intuitive interfaces to robust backends using Node.js, REST APIs, and Supabase PostgreSQL with strict Row Level Security."
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "Performance & Workflow",
      description: "Leveraging Git, GitHub collaboration practices, and modern build tooling to deliver lightweight, zero-bloat web applications."
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="About Me"
        title="Building products people enjoy using."
        description="A look into my engineering philosophy, technical approach, and how I bridge modern UI design with scalable full-stack web architecture."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Interactive Code Workspace */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 flex flex-col items-center"
        >
          <WorkspaceMockup />
        </motion.div>

        {/* Right Column: Bio & Core Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
            <p>
              Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, a frontend-focused full stack developer based in {personalInfo.location}. I specialize in crafting digital interfaces that are not just visually refined, but also architecturally sound and delightful to navigate.
            </p>
            <p>
              My primary toolkit centers on <span className="text-purple-300 font-medium">React</span>, <span className="text-yellow-300 font-medium">JavaScript (ES6+)</span>, <span className="text-cyan-300 font-medium">Tailwind CSS</span>, <span className="text-emerald-300 font-medium">Node.js</span>, and <span className="text-emerald-400 font-medium">Supabase</span>. Whether architecting real-time workspace boards like <em>BuildStack 2.0</em> or interactive data trackers like <em>FinTrack</em>, I prioritize clean code structure, predictable state management, and real user utility.
            </p>
          </div>

          {/* Three Key Focus Areas */}
          <div className="space-y-3 pt-2">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-all flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-zinc-800/80 border border-white/5 shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200">{pillar.title}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Download Resume Action */}
          <div className="pt-2 flex items-center gap-4">
            <a
              href={personalInfo.resumeUrl}
              download="Atharva_Patole_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 text-sm font-medium border border-white/10 hover:border-purple-500/40 shadow-sm transition-all group"
            >
              <Download className="w-4 h-4 text-purple-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
            <span className="text-xs text-zinc-400 font-mono">
              Available for full-time engineering roles
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
