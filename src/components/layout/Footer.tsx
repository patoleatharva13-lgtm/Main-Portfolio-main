import React from 'react';
import { ArrowUp, Github, Mail, Linkedin, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { navLinks } from '../../data/navigation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/8 bg-[#040507] pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-purple-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center">
                <span className="font-heading font-bold text-sm text-purple-300">
                  {personalInfo.initials}
                </span>
              </div>
              <span className="font-heading text-lg font-bold text-zinc-100">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed font-normal">
              {personalInfo.tagline} Focused on crafting high-performance, accessible web architectures and intuitive digital experiences.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/40 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/40 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-purple-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Links & Repositories */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-zinc-200 uppercase tracking-wider mb-4">
              Direct Repositories
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/patoleatharva13-lgtm/Buildstack-2.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>BuildStack 2.0</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/patoleatharva13-lgtm/FinTrack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>FinTrack</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.portfolioRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Portfolio Repo</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            © {new Date().getFullYear()} Atharva Patole. Built with modern React, Tailwind CSS & Three.js.
          </p>

          <button
            id="scroll-to-top"
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 hover:border-white/20 text-zinc-400 hover:text-zinc-200 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
