import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react';
import BrowserFrame from './BrowserFrame';

interface ProjectGalleryProps {
  project: any;
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/8">
      <div className="mb-10 space-y-2">
        <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
          Visual Interface Showcase
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-100">
          Interface Gallery & Screenshots
        </h2>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Click any interface card to inspect the view in high-resolution preview mode.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.gallery.map((item: any, idx: number) => (
          <div
            key={item.title}
            onClick={() => setSelectedImage(item)}
            className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 bg-[#0d0f18] transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_-5px_rgba(139,92,246,0.25)]"
          >
            <BrowserFrame url={`${project.slug}.patole.dev`}>
              <div className="p-6 h-56 sm:h-64 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#121422] to-[#080910]">
                {/* Background decorative pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-30"
                  style={{ backgroundColor: item.color || '#8b5cf6' }}
                />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900/90 border border-white/10 text-zinc-200">
                    {item.title}
                  </span>
                  <div className="p-1.5 rounded-lg bg-zinc-900/80 text-zinc-400 group-hover:text-purple-300 group-hover:bg-purple-600/20 transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Simulated Wireframe / UI Preview */}
                <div className="relative z-10 space-y-2 py-4">
                  <div className="h-3 w-3/4 bg-white/15 rounded-md" />
                  <div className="h-2 w-1/2 bg-white/8 rounded-md" />
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="h-14 rounded-lg bg-white/5 border border-white/5 p-2 flex flex-col justify-between">
                      <div className="w-4 h-4 rounded bg-purple-500/30" />
                      <div className="w-8 h-1.5 bg-white/20 rounded" />
                    </div>
                    <div className="h-14 rounded-lg bg-white/5 border border-white/5 p-2 flex flex-col justify-between">
                      <div className="w-4 h-4 rounded bg-cyan-500/30" />
                      <div className="w-10 h-1.5 bg-white/20 rounded" />
                    </div>
                    <div className="h-14 rounded-lg bg-white/5 border border-white/5 p-2 flex flex-col justify-between">
                      <div className="w-4 h-4 rounded bg-emerald-500/30" />
                      <div className="w-6 h-1.5 bg-white/20 rounded" />
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <p className="relative z-10 text-xs text-zinc-400 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </BrowserFrame>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-2xl bg-[#0e1018] border border-white/15 p-6 space-y-4 shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-purple-400" />
                  <h3 className="font-heading text-lg font-bold text-zinc-100">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <BrowserFrame url={`${project.slug}.patole.dev`}>
                <div className="p-8 min-h-[300px] flex flex-col justify-center items-center text-center space-y-4 bg-gradient-to-b from-[#131624] to-[#0a0b12]">
                  <div
                    className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-2xl shadow-xl"
                    style={{ backgroundColor: `${selectedImage.color}20` }}
                  >
                    <Sparkles className="w-8 h-8 text-purple-300" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-zinc-100">
                    {selectedImage.title}
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
                    {selectedImage.caption}
                  </p>
                </div>
              </BrowserFrame>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
