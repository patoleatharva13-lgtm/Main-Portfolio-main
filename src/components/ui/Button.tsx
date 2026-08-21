import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-purple-600 hover:bg-purple-500 text-white font-medium shadow-[0_0_20px_-3px_rgba(147,51,234,0.4)] hover:shadow-[0_0_25px_0_rgba(147,51,234,0.6)] border border-purple-400/30',
    secondary:
      'bg-zinc-900/80 hover:bg-zinc-800/90 text-zinc-100 font-medium border border-white/10 hover:border-purple-500/40 shadow-sm',
    outline:
      'bg-transparent hover:bg-white/5 text-zinc-200 border border-white/15 hover:border-white/30',
    ghost:
      'bg-transparent hover:bg-white/5 text-zinc-400 hover:text-zinc-100',
  }[variant];

  const baseClasses = `inline-flex items-center justify-center rounded-xl transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${sizeStyles} ${variantStyles} ${className}`;

  if (asLink && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={baseClasses}
      >
        {children}
        {icon && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
      {...(props as any)}
    >
      {children}
      {icon && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </motion.button>
  );
}
