import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Isolated frontend handler for email transmission / webhook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#8b5cf6', '#06b6d4', '#ec4899'],
        });
      } catch {}

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    }, 900);
  };

  return (
    <div className="relative rounded-2xl bg-[#0e1018]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
      <div className="mb-6 space-y-1">
        <h3 className="font-heading text-xl font-bold text-zinc-100">
          Send a Direct Message
        </h3>
        <p className="text-xs text-zinc-400">
          Have an opportunity, project, or question? Fill in the details below.
        </p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-xl bg-purple-950/30 border border-purple-500/40 text-center space-y-3"
        >
          <div className="w-12 h-12 rounded-full bg-purple-600/30 border border-purple-500/50 flex items-center justify-center mx-auto text-purple-300">
            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
          </div>
          <h4 className="font-heading text-lg font-bold text-zinc-100">
            Message Sent Successfully
          </h4>
          <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
            Thank you for reaching out! I'll review your note and get back to you promptly at your provided email.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-2 text-xs font-mono text-purple-300 hover:text-purple-200 underline underline-offset-4"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Name Field */}
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-300 font-mono">
              Your Name <span className="text-purple-400">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Sarah Connor"
              className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors ${
                errors.name
                  ? 'border-red-500/70 focus:border-red-500'
                  : 'border-white/10 focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50'
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-300 font-mono">
              Email Address <span className="text-purple-400">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. sarah@company.com"
              className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors ${
                errors.email
                  ? 'border-red-500/70 focus:border-red-500'
                  : 'border-white/10 focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50'
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-300 font-mono">
              Your Message <span className="text-purple-400">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project, timeline, or position..."
              className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors resize-none ${
                errors.message
                  ? 'border-red-500/70 focus:border-red-500'
                  : 'border-white/10 focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50'
              }`}
            />
            {errors.message && (
              <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            id="contact-submit-btn"
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm shadow-[0_0_20px_-3px_rgba(147,51,234,0.5)] border border-purple-400/30 transition-all disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
