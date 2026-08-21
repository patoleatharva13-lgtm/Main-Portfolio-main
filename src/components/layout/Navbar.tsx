import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { navLinks } from '../../data/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06070a]/80 backdrop-blur-xl border-b border-white/8 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Initials */}
        <Link
          to="/"
          className="group flex items-center gap-3 select-none"
          aria-label="Atharva Patole Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/30 via-zinc-900 to-cyan-500/20 border border-white/10 group-hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_-2px_rgba(168,85,247,0.4)]">
            <span className="font-heading text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
              {personalInfo.initials}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-sm text-zinc-100 group-hover:text-purple-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider">
              PORTFOLIO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/8">
          {navLinks.map((link) => {
            const targetHref = isHome ? link.href.replace('/', '') : link.href;
            return (
              <a
                key={link.name}
                href={targetHref}
                className="px-3.5 py-1 text-xs font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* GitHub Icon Link */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atharva Patole GitHub profile"
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-transparent hover:border-white/10 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Contact CTA button */}
          <a
            href={isHome ? '#contact' : '/#contact'}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_-3px_rgba(147,51,234,0.4)] hover:shadow-[0_0_20px_0_rgba(147,51,234,0.6)] border border-purple-400/30 transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-nav-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-300 bg-zinc-900/80 border border-white/10"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-[#0a0b10] border-b border-white/10 px-6 py-5 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const targetHref = isHome ? link.href.replace('/', '') : link.href;
                return (
                  <a
                    key={link.name}
                    href={targetHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-zinc-300 hover:text-purple-300 py-2 border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-200"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={isHome ? '#contact' : '/#contact'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-purple-600 text-xs font-semibold text-white shadow-lg shadow-purple-600/30"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
