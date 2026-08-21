import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Terminal, CheckCircle2, Play, Copy, Check, Sparkles, Cpu } from 'lucide-react';

export default function WorkspaceMockup() {
  const [activeTab, setActiveTab] = useState<'editor' | 'terminal'>('editor');
  const [activeFile, setActiveFile] = useState<'Atharva.tsx' | 'Architecture.ts'>('Atharva.tsx');
  const [copied, setCopied] = useState(false);

  const atharvaCode = `// Atharva Patole — Developer Manifest
export const developerProfile = {
  name: "Atharva Patole",
  role: "Frontend-Focused Full Stack Developer",
  corePrinciples: [
    "Pixel-perfect UI execution",
    "Fluid micro-interactions & feedback",
    "Performant state management",
    "Accessible, responsive standards"
  ],
  stack: {
    frontend: ["React", "JavaScript", "Tailwind CSS"],
    backend: ["Node.js", "Supabase", "PostgreSQL"],
    workflow: ["Git", "GitHub", "Vercel"]
  },
  status: "Shipping clean, reliable code"
};`;

  const architectureCode = `// System Architecture & RLS Guard Pattern
import { createClient } from '@supabase/supabase-js';

export function configureWorkspace(tenantId: string) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  return {
    realtimeSync: true,
    rowLevelSecurity: "ENFORCED",
    telemetry: "OPTIMIZED"
  };
}`;

  const copyCode = () => {
    const text = activeFile === 'Atharva.tsx' ? atharvaCode : architectureCode;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl border border-white/10 bg-[#0d0e15]/90 backdrop-blur-2xl shadow-2xl overflow-hidden font-mono">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#13151f] border-b border-white/5 select-none">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block border border-red-400/40" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block border border-yellow-400/40" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-400/40" />
          <span className="ml-2 text-xs text-zinc-400 font-sans font-medium">workspace — atharva-dev</span>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-lg border border-white/5 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('editor')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
              activeTab === 'editor' ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Code className="w-3 h-3" />
            <span>Editor</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
              activeTab === 'terminal' ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/30' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>Terminal</span>
          </button>
        </div>
      </div>

      {/* Code Editor View */}
      {activeTab === 'editor' && (
        <div>
          {/* File Tab Strip */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-[#0a0b12] border-b border-white/5 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveFile('Atharva.tsx')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-t-md transition-colors ${
                  activeFile === 'Atharva.tsx'
                    ? 'bg-[#0d0e15] text-purple-300 border-t border-purple-500'
                    : 'hover:text-zinc-200'
                }`}
              >
                <span className="text-cyan-400 font-bold text-[10px]">TSX</span>
                <span>Atharva.tsx</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveFile('Architecture.ts')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-t-md transition-colors ${
                  activeFile === 'Architecture.ts'
                    ? 'bg-[#0d0e15] text-purple-300 border-t border-purple-500'
                    : 'hover:text-zinc-200'
                }`}
              >
                <span className="text-blue-400 font-bold text-[10px]">TS</span>
                <span>Architecture.ts</span>
              </button>
            </div>

            <button
              type="button"
              onClick={copyCode}
              aria-label="Copy code block"
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors p-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Syntax Code Content */}
          <div className="p-4 sm:p-5 text-xs leading-relaxed overflow-x-auto text-zinc-300">
            <pre className="font-mono">
              {activeFile === 'Atharva.tsx' ? (
                <code>
                  <span className="text-zinc-500">// Atharva Patole — Developer Manifest</span>
                  {'\n'}
                  <span className="text-purple-400">export const</span>{' '}
                  <span className="text-cyan-300">developerProfile</span> = {'{\n'}
                  {'  '}name: <span className="text-emerald-300">"Atharva Patole"</span>,{'\n'}
                  {'  '}role: <span className="text-emerald-300">"Frontend-Focused Full Stack Developer"</span>,{'\n'}
                  {'  '}corePrinciples: [{'\n'}
                  {'    '}<span className="text-amber-300">"Pixel-perfect UI execution"</span>,{'\n'}
                  {'    '}<span className="text-amber-300">"Fluid micro-interactions & feedback"</span>,{'\n'}
                  {'    '}<span className="text-amber-300">"Performant state management"</span>,{'\n'}
                  {'    '}<span className="text-amber-300">"Accessible, responsive standards"</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}stack: {'{\n'}
                  {'    '}frontend: [<span className="text-cyan-300">"React"</span>, <span className="text-yellow-300">"JavaScript"</span>, <span className="text-cyan-300">"Tailwind CSS"</span>],{'\n'}
                  {'    '}backend: [<span className="text-emerald-400">"Node.js"</span>, <span className="text-emerald-300">"Supabase"</span>],{'\n'}
                  {'    '}workflow: [<span className="text-orange-400">"Git"</span>, <span className="text-zinc-200">"GitHub"</span>, <span className="text-zinc-100">"Vercel"</span>]{'\n'}
                  {'  }'},{'\n'}
                  {'  '}status: <span className="text-purple-300">"Shipping clean, reliable code"</span>{'\n'}
                  {'};'}
                </code>
              ) : (
                <code>
                  <span className="text-zinc-500">// System Architecture & RLS Guard Pattern</span>
                  {'\n'}
                  <span className="text-purple-400">import</span> {'{ createClient }'}{' '}
                  <span className="text-purple-400">from</span>{' '}
                  <span className="text-emerald-300">'@supabase/supabase-js'</span>;{'\n\n'}
                  <span className="text-purple-400">export function</span>{' '}
                  <span className="text-cyan-300">configureWorkspace</span>(tenantId:{' '}
                  <span className="text-yellow-400">string</span>) {'{\n'}
                  {'  '}<span className="text-purple-400">const</span> supabase = createClient(
                  {'\n    '}process.env.SUPABASE_URL,{'\n    '}process.env.SUPABASE_ANON_KEY{'\n  '});{'\n\n'}
                  {'  '}<span className="text-purple-400">return</span> {'{\n'}
                  {'    '}realtimeSync: <span className="text-cyan-400">true</span>,{'\n'}
                  {'    '}rowLevelSecurity: <span className="text-emerald-400">"ENFORCED"</span>,{'\n'}
                  {'    '}telemetry: <span className="text-purple-300">"OPTIMIZED"</span>{'\n'}
                  {'  }'};{'\n}'}
                </code>
              )}
            </pre>
          </div>
        </div>
      )}

      {/* Terminal View */}
      {activeTab === 'terminal' && (
        <div className="p-4 sm:p-5 text-xs text-zinc-300 leading-relaxed font-mono min-h-[220px]">
          <div className="flex items-center gap-2 text-zinc-400 mb-3">
            <span className="text-emerald-400 font-bold">atharva@macbook</span>
            <span className="text-zinc-600">:</span>
            <span className="text-cyan-300">~/projects/buildstack</span>
            <span className="text-zinc-500">$</span>
            <span className="text-zinc-200">npm run build</span>
          </div>

          <div className="space-y-1.5 text-[11px] text-zinc-400">
            <p className="text-zinc-400">
              <span className="text-purple-400">vite v6.2.3</span> building for production...
            </p>
            <p className="text-zinc-400">✓ 84 modules transformed.</p>
            <p className="text-zinc-400">✓ Supabase RLS policies validated.</p>
            <p className="text-emerald-400 font-medium">
              ✓ Ready in 240ms. Status: 0 errors, 0 warnings.
            </p>
            <div className="pt-2 flex items-center gap-2 text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production build compiled cleanly.</span>
            </div>
          </div>
        </div>
      )}

      {/* Status Bar */}
      <div className="px-4 py-2 bg-[#090a10] border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] text-zinc-400 select-none">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>0 Diagnostics</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-zinc-400">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Node.js v22</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>UTF-8</span>
          <span className="text-purple-300">React + Supabase</span>
        </div>
      </div>
    </div>
  );
}
