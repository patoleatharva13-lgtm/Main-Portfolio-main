import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, BookOpen, Layers, ShieldCheck, Zap } from 'lucide-react';
import { projects } from '../data/projects';
import SectionHeading from '../components/common/SectionHeading';
import FeaturedMockup from '../components/project/FeaturedMockup';

export default function FeaturedProject() {
  const featured = projects.find((p) => p.slug === 'buildstack') || projects[0];

  return (
    <section id="featured" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Featured Engineering Work"
        title="BuildStack 2.0"
        description="A full-stack collaborative platform unifying sprint task planning, roadmap milestones, and team documentation into one lightning-fast workspace."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Browser Mockup Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <FeaturedMockup />
        </motion.div>

        {/* Right Column: Project Highlights & Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 border border-purple-500/30 text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>{featured.category}</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-100">
              {featured.title}
            </h3>
            <p className="text-sm font-medium text-purple-300">
              {featured.subtitle}
            </p>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {featured.shortDescription}
          </p>

          {/* Key Feature Bullets */}
          <div className="space-y-2.5 pt-1">
            {featured.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {featured.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-white/8 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {featured.liveUrl && (
              <a
                href={featured.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold shadow-[0_0_20px_-3px_rgba(147,51,234,0.4)] hover:shadow-[0_0_25px_0_rgba(147,51,234,0.6)] border border-purple-400/30 transition-all group"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}

            {featured.githubUrl && (
              <a
                href={featured.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium border border-white/10 hover:border-purple-500/40 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}

            <Link
              to={featured.caseStudyUrl}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 text-purple-300 text-xs sm:text-sm font-medium border border-purple-500/20 hover:border-purple-500/50 transition-all group"
            >
              <BookOpen className="w-4 h-4" />
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
