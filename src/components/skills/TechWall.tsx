import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { skillCategories } from '../../data/skills';

// Map icon string names to react-icons components
const iconMap: Record<string, React.ComponentType<any>> = {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiGit,
  SiGithub,
  VscCode,
  SiFigma,
  SiVercel,
};

export default function TechWall() {
  return (
    <div className="space-y-12">
      {skillCategories.map((category) => (
        <div key={category.title} className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/5 pb-2">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-zinc-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>{category.title}</span>
            </h3>
            <p className="text-xs text-zinc-400 max-w-md">{category.description}</p>
          </div>

          {/* Grid of Tech Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {category.skills.map((skill, skillIdx) => {
              const IconComponent = iconMap[skill.icon] || SiReact;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: skillIdx * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-4 rounded-xl bg-[#0e1017]/80 hover:bg-[#151824]/90 border border-white/8 hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(139,92,246,0.15)] flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top edge glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  />

                  {/* Icon & Title */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center bg-zinc-900/90 border border-white/5 group-hover:border-white/20 transition-colors"
                      >
                        <IconComponent style={{ color: skill.color }} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading text-sm font-semibold text-zinc-100 group-hover:text-purple-200 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                        {skill.highlight}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

