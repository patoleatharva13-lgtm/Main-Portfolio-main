import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export default function LoadingScreen({ onLoaded }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fast, crisp loading animation duration (~1.2s total)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoaded, 500); // Allow fade out exit animation
          }, 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 15;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06070a] text-white"
        >
          {/* Subtle background glow */}
          <div className="absolute w-72 h-72 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6">
            {/* Monogram emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-16 h-16 rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
            >
              <span className="font-heading text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-200 to-cyan-300">
                AP
              </span>
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 -z-10 blur-sm" />
            </motion.div>

            {/* Name Reveal */}
            <div className="text-center">
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="font-heading text-xl font-semibold tracking-tight text-zinc-100"
              >
                Atharva Patole
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="text-xs text-zinc-400 tracking-wider uppercase mt-1 font-mono"
              >
                Frontend-Focused Full Stack Developer
              </motion.p>
            </div>

            {/* Progress Bar & Counter */}
            <div className="w-48 flex flex-col items-center gap-2 mt-2">
              <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 rounded-full"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              <div className="w-full flex justify-between items-center text-[10px] font-mono text-zinc-400">
                <span>INITIALIZING</span>
                <span>{Math.min(progress, 100)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
