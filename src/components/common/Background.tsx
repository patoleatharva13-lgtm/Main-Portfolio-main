import React, { useEffect, useState } from 'react';

export default function Background() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const media = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(media.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (media.matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark base layer */}
      <div className="absolute inset-0 bg-[#06070a]" />

      {/* Fine grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 noise-bg" />

      {/* Aurora Ambient Blobs - Top Violet */}
      <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] rounded-full bg-purple-900/20 blur-[130px] animate-pulse-slow transform -translate-x-1/2" />

      {/* Aurora Ambient Blobs - Middle Cyan */}
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-950/20 blur-[150px] animate-float-slow" />

      {/* Aurora Ambient Blobs - Bottom Indigo */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-950/25 blur-[140px]" />

      {/* Interactive Mouse-Following Spotlight (Desktop Only) */}
      {isPointerDevice && (
        <div
          className="absolute w-[650px] h-[650px] rounded-full pointer-events-none transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${mousePos.x - 325}px, ${mousePos.y - 325}px)`,
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.07) 0%, rgba(6, 182, 212, 0.03) 40%, transparent 70%)',
          }}
        />
      )}
    </div>
  );
}
