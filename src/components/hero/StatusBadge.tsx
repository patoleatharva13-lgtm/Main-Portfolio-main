import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personal';

export default function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-medium shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)] backdrop-blur-md"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-zinc-200">{personalInfo.availability}</span>
    </motion.div>
  );
}
