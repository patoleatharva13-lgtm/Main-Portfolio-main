import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'cyan' | 'emerald' | 'amber' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-zinc-800/80 text-zinc-300 border-white/10',
    purple: 'bg-purple-950/40 text-purple-300 border-purple-500/30',
    cyan: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30',
    emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30',
    amber: 'bg-amber-950/40 text-amber-300 border-amber-500/30',
    outline: 'bg-transparent text-zinc-400 border-white/15',
  }[variant];

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-lg border font-mono tracking-tight ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}
