import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Kanban,
  Calendar,
  FileText,
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  Search,
  Filter,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import BrowserFrame from './BrowserFrame';

export default function FeaturedMockup() {
  const [activeTab, setActiveTab] = useState<'board' | 'roadmap'>('board');

  const kanbanColumns = [
    {
      title: "In Backlog",
      count: 3,
      tasks: [
        { title: "OAuth 2.0 Supabase Auth", tag: "Security", priority: "High", color: "text-amber-400" },
        { title: "Realtime WebSocket Telemetry", tag: "Backend", priority: "Med", color: "text-purple-400" },
      ],
    },
    {
      title: "Active Sprint",
      count: 2,
      tasks: [
        { title: "Kanban Drag-and-Drop UX", tag: "Frontend", priority: "Urgent", color: "text-red-400" },
        { title: "Gantt Roadmap Milestone Engine", tag: "Feature", priority: "High", color: "text-cyan-400" },
      ],
    },
    {
      title: "Completed",
      count: 5,
      tasks: [
        { title: "PostgreSQL RLS Multi-tenancy", tag: "Database", priority: "Done", color: "text-emerald-400" },
        { title: "Tailwind Dark Mode Design System", tag: "Design", priority: "Done", color: "text-emerald-400" },
      ],
    },
  ];

  return (
    <div className="relative group">
      {/* Background glow behind browser frame */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-600/20 via-indigo-600/15 to-cyan-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <BrowserFrame url="buildstack-2-0.vercel.app">
        <div className="p-4 sm:p-6 space-y-5 select-none min-h-[360px] sm:min-h-[420px]">
          {/* Top Bar inside App */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold text-xs">
                BS
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-zinc-100">BuildStack Workspace</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Live Sync
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400">Enterprise Sprint Board & Roadmaps</span>
              </div>
            </div>

            {/* In-app navigation tabs */}
            <div className="flex items-center gap-1 bg-zinc-900/80 p-1 rounded-xl border border-white/5 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('board')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'board'
                    ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40 font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Kanban className="w-3.5 h-3.5" />
                <span>Sprint Board</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('roadmap')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'roadmap'
                    ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40 font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Roadmap</span>
              </button>
            </div>
          </div>

          {/* Kanban Board View */}
          {activeTab === 'board' ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {kanbanColumns.map((col) => (
                <div key={col.title} className="rounded-xl bg-[#11131d]/90 border border-white/6 p-3 space-y-3">
                  <div className="flex items-center justify-between text-xs font-medium text-zinc-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      {col.title}
                    </span>
                    <span className="px-1.5 py-0.2 rounded bg-zinc-800 text-[10px] text-zinc-400">
                      {col.count}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {col.tasks.map((task) => (
                      <div
                        key={task.title}
                        className="p-2.5 rounded-lg bg-zinc-900/90 border border-white/5 hover:border-purple-500/30 transition-all text-xs space-y-2 group/card"
                      >
                        <p className="font-medium text-zinc-200 group-hover/card:text-purple-200 transition-colors line-clamp-1">
                          {task.title}
                        </p>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                            {task.tag}
                          </span>
                          <span className={`font-mono ${task.color}`}>{task.priority}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Roadmap Milestone View */
            <div className="rounded-xl bg-[#11131d]/90 border border-white/6 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/5 pb-2">
                <span>Milestone Deliverables</span>
                <span>Q1 - Q2 Timeline</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-lg bg-zinc-900/80 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="font-medium text-zinc-200">Supabase Schema & RLS Engine</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    Completed
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400 animate-pulse" />
                    <span className="font-medium text-purple-200">Team RBAC & Live Backlog Sync</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/30 text-purple-300">
                    In Progress
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/40 border border-white/5 flex items-center justify-between opacity-70">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-zinc-400" />
                    <span className="text-zinc-300">Automated Sprint Retrospectives</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                    Upcoming
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom quick stats widget */}
          <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/5 text-center">
            <div className="p-2 rounded-lg bg-zinc-900/40 border border-white/5">
              <span className="text-[10px] text-zinc-400 block">Workspace Speed</span>
              <span className="text-xs font-mono font-semibold text-emerald-400">&lt; 100ms</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/40 border border-white/5">
              <span className="text-[10px] text-zinc-400 block">Database</span>
              <span className="text-xs font-mono font-semibold text-purple-300">Supabase RLS</span>
            </div>
            <div className="p-2 rounded-lg bg-zinc-900/40 border border-white/5">
              <span className="text-[10px] text-zinc-400 block">Team Roles</span>
              <span className="text-xs font-mono font-semibold text-cyan-300">Full RBAC</span>
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}
