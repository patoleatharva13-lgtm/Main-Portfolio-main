import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/personal';
import SectionHeading from '../components/common/SectionHeading';
import ContactForm from '../components/contact/ContactForm';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
      });
    } catch {}
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const contactCards = [
    {
      id: "email",
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      label: "Direct Email",
      value: personalInfo.email,
      action: "copy",
      actionText: copiedEmail ? "Copied to Clipboard!" : "Copy Email Address",
      href: `mailto:${personalInfo.email}`,
    },
    {
      id: "github",
      icon: <Github className="w-5 h-5 text-zinc-100" />,
      label: "GitHub Profile",
      value: "@patoleatharva13-lgtm",
      action: "link",
      actionText: "Visit GitHub Profile",
      href: personalInfo.github,
    },
    {
      id: "location",
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
      label: "Location",
      value: personalInfo.location,
      action: "text",
      actionText: "Available Worldwide (Remote)",
      href: null,
    },
    {
      id: "linkedin",
      icon: <Linkedin className="w-5 h-5 text-blue-400" />,
      label: "LinkedIn",
      value: "Atharva Patole",
      action: "link",
      actionText: "Connect on LinkedIn",
      href: personalInfo.linkedin,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Contact & Inquiry"
        title="Let's build something meaningful."
        description="I'm actively seeking new full-stack and frontend development opportunities. Feel free to send a message or reach out directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {contactCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 rounded-2xl bg-[#0e1018]/80 border border-white/8 hover:border-purple-500/30 transition-all flex flex-col justify-between space-y-3 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/5">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      {card.label}
                    </span>
                    <span className="text-sm font-semibold text-zinc-100 font-mono">
                      {card.value}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                {card.action === 'copy' ? (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-purple-200 font-medium transition-colors cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{card.actionText}</span>
                  </button>
                ) : card.action === 'link' && card.href ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    <span>{card.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-zinc-400 font-medium">
                    {card.actionText}
                  </span>
                )}

                {card.id === 'email' && (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs text-zinc-400 hover:text-white font-mono underline underline-offset-2"
                  >
                    Open Mail Client
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
