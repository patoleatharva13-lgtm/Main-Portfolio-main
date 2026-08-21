import React from 'react';

interface BrowserFrameProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export default function BrowserFrame({
  url = "buildstack-2-0.vercel.app",
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <div className={`rounded-2xl border border-white/12 bg-[#0d0f17]/95 backdrop-blur-2xl shadow-2xl overflow-hidden ${className}`}>
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#131622] border-b border-white/8 select-none">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block border border-[#e0443e]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block border border-[#dea123]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block border border-[#1aab29]" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-white/6 text-xs text-zinc-400 font-mono max-w-xs sm:max-w-sm w-full mx-auto justify-center">
          <span className="text-emerald-400 text-[10px]">🔒</span>
          <span className="truncate text-zinc-300">https://{url}</span>
        </div>

        {/* Action dots */}
        <div className="flex items-center gap-1 opacity-60">
          <span className="w-1 h-1 rounded-full bg-zinc-400" />
          <span className="w-1 h-1 rounded-full bg-zinc-400" />
          <span className="w-1 h-1 rounded-full bg-zinc-400" />
        </div>
      </div>

      {/* Browser Viewport Content */}
      <div className="relative overflow-hidden bg-[#0a0b12]">
        {children}
      </div>
    </div>
  );
}
