import React from 'react';
import engineHrImg from './assets/engine_hr.jpg';

export function EngineVisual({ type }) {
  switch (type) {
    case 'hr':
      return (
        <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden relative group bg-gradient-to-br from-emerald-950/20 via-gray-100 to-gray-200 border border-gray-200/80">
          <img
            src={engineHrImg}
            alt="HR AI Neural Network"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      );

    case 'sales':
      return (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-gradient-to-br from-[#0c1815] via-[#11241f] to-[#0a1210] p-4 flex flex-col justify-between relative overflow-hidden group border border-[#008767]/30 shadow-inner">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#008767_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

          {/* Top telemetry tag */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#008767]/20 border border-[#008767]/40 text-[#4ade80] text-[10px] font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008767] animate-pulse" />
              <span>PREDICTIVE REVENUE</span>
            </div>
            <span className="text-[11px] font-mono font-bold text-emerald-300 tracking-tight">
              +42.8% QoQ
            </span>
          </div>

          {/* Glowing Vector Chart */}
          <div className="relative z-10 w-full h-24 flex items-end px-1">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 240 70" preserveAspectRatio="none">
              <defs>
                <linearGradient id="salesGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#008767" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#008767" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Area */}
              <path
                d="M0,55 Q40,48 80,42 T160,24 T240,6 L240,70 L0,70 Z"
                fill="url(#salesGrad)"
              />
              {/* Spline line */}
              <path
                d="M0,55 Q40,48 80,42 T160,24 T240,6"
                fill="none"
                stroke="#34d399"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Data points */}
              <circle cx="80" cy="42" r="3.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="160" cy="24" r="3.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="240" cy="6" r="4.5" fill="#34d399" stroke="#ffffff" strokeWidth="2" className="animate-ping origin-center" />
              <circle cx="240" cy="6" r="4.5" fill="#34d399" stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>

          {/* Bottom metrics ticker */}
          <div className="relative z-10 flex items-center justify-between text-[10px] text-gray-400 font-mono pt-1 border-t border-white/[0.06]">
            <span>Velocity: 94.2/100</span>
            <span className="text-emerald-400 font-semibold">AI Confidence: 99.4%</span>
          </div>
        </div>
      );

    case 'finance':
      return (
        <div className="w-full h-44 sm:h-52 rounded-xl bg-gradient-to-br from-[#0c1815] via-[#10221d] to-[#07130f] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden group border border-[#008767]/30 shadow-inner">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00876710_1px,transparent_1px),linear-gradient(to_bottom,#00876710_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Top header */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#008767]/20 border border-[#008767]/40 text-[#4ade80] text-[10px] font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span>RUNWAY & MARGIN RADAR</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-300 font-bold">24 Mo. Runway</span>
          </div>

          {/* Center telemetry bars */}
          <div className="relative z-10 grid grid-cols-4 gap-2 my-auto items-end h-20 pt-2">
            {[
              { label: 'Q1', height: '48%', val: '$1.2M' },
              { label: 'Q2', height: '62%', val: '$1.8M' },
              { label: 'Q3', height: '80%', val: '$2.5M' },
              { label: 'Q4 (AI)', height: '98%', val: '$3.4M', isAi: true },
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
                <span className="text-[9px] font-mono text-gray-400">{bar.val}</span>
                <div className="w-full bg-white/5 rounded-t-md relative overflow-hidden h-full flex items-end">
                  <div
                    style={{ height: bar.height }}
                    className={`w-full rounded-t-md transition-all duration-500 ${
                      bar.isAi
                        ? 'bg-gradient-to-t from-[#008767] to-[#34d399] shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                        : 'bg-gradient-to-t from-gray-700 to-gray-500'
                    }`}
                  />
                </div>
                <span className={`text-[9px] font-mono ${bar.isAi ? 'text-emerald-400 font-bold' : 'text-gray-500'}`}>
                  {bar.label}
                </span>
              </div>
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] text-gray-400 font-mono pt-1 border-t border-white/[0.06]">
            <span>Anomaly Risk: 0.00%</span>
            <span className="text-emerald-400 font-semibold">Live Sync Active</span>
          </div>
        </div>
      );

    case 'marketing':
      return (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-gradient-to-br from-[#0c1815] via-[#11241f] to-[#0a1210] p-4 flex flex-col justify-between relative overflow-hidden group border border-[#008767]/30 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(#008767_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

          {/* Top header */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#008767]/20 border border-[#008767]/40 text-[#4ade80] text-[10px] font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008767] animate-pulse" />
              <span>MULTI-TOUCH ATTRIBUTION</span>
            </div>
            <span className="text-[11px] font-mono font-bold text-emerald-300">ROAS 4.8x</span>
          </div>

          {/* Marketing Orbit Visual */}
          <div className="relative z-10 w-full h-22 flex items-center justify-center my-auto">
            <div className="relative w-28 h-20 flex items-center justify-center">
              {/* Outer orbit */}
              <div className="absolute w-28 h-20 rounded-full border border-emerald-500/20 animate-[spin_12s_linear_infinite]" />
              {/* Mid orbit */}
              <div className="absolute w-20 h-14 rounded-full border border-emerald-400/30 animate-[spin_8s_linear_infinite_reverse]" />
              {/* Center Core */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#008767] to-[#34d399] shadow-[0_0_16px_rgba(52,211,153,0.6)] flex items-center justify-center text-white text-[10px] font-bold z-10">
                AI
              </div>
              {/* Channel nodes */}
              <div className="absolute -top-1 left-2 px-1.5 py-0.5 rounded bg-black/60 border border-emerald-500/40 text-[8px] font-mono text-emerald-300">
                Search
              </div>
              <div className="absolute -bottom-1 right-2 px-1.5 py-0.5 rounded bg-black/60 border border-emerald-500/40 text-[8px] font-mono text-emerald-300">
                Social
              </div>
              <div className="absolute top-6 right-0 px-1.5 py-0.5 rounded bg-black/60 border border-emerald-500/40 text-[8px] font-mono text-emerald-300">
                Direct
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] text-gray-400 font-mono pt-1 border-t border-white/[0.06]">
            <span>CAC: -$32.40</span>
            <span className="text-emerald-400 font-semibold">Conversion: +61%</span>
          </div>
        </div>
      );

    case 'operations':
      return (
        <div className="w-full h-40 sm:h-48 rounded-xl bg-gradient-to-br from-[#0c1815] via-[#11241f] to-[#0a1210] p-4 flex flex-col justify-between relative overflow-hidden group border border-[#008767]/30 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(#008767_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none" />

          {/* Top header */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#008767]/20 border border-[#008767]/40 text-[#4ade80] text-[10px] font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008767] animate-pulse" />
              <span>SUPPLY CHAIN AUTOMATION</span>
            </div>
            <span className="text-[11px] font-mono font-bold text-emerald-300">99.98% SLA</span>
          </div>

          {/* Flow nodes */}
          <div className="relative z-10 flex items-center justify-between gap-1.5 my-auto px-1">
            {[
              { icon: '📦', name: 'Inbound', status: 'Optimal' },
              { icon: '⚙️', name: 'Process', status: 'Auto-Sync' },
              { icon: '🚀', name: 'Dispatch', status: 'Accelerated' },
            ].map((node, i) => (
              <div key={i} className="flex-1 bg-white/[0.05] border border-emerald-500/20 rounded-lg p-1.5 flex flex-col items-center text-center">
                <span className="text-sm mb-0.5">{node.icon}</span>
                <span className="text-[9px] font-semibold text-gray-200">{node.name}</span>
                <span className="text-[8px] font-mono text-emerald-400">{node.status}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-between text-[10px] text-gray-400 font-mono pt-1 border-t border-white/[0.06]">
            <span>Throughput: 14.8k/hr</span>
            <span className="text-emerald-400 font-semibold">Zero Bottleneck</span>
          </div>
        </div>
      );

    default:
      return <div className="w-full h-40 sm:h-48 rounded-xl bg-[#d2d5da]" />;
  }
}

export function SystemConnectorVisual({ id }) {
  const visuals = {
    hrms: {
      gradient: 'from-[#0e1d19] to-[#071310]',
      badge: 'HRMS DATA',
      icon: (
        <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      metric: 'Active Sync',
    },
    erp: {
      gradient: 'from-[#0e1d19] to-[#071310]',
      badge: 'ERP CORE',
      icon: (
        <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      metric: 'Master Pipeline',
    },
    crm: {
      gradient: 'from-[#0e1d19] to-[#071310]',
      badge: 'CRM PIPELINE',
      icon: (
        <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      metric: 'Live Leads',
    },
    pos: {
      gradient: 'from-[#0e1d19] to-[#071310]',
      badge: 'POS TERMINAL',
      icon: (
        <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <line x1="6" y1="15" x2="10" y2="15" />
        </svg>
      ),
      metric: 'Instant Sync',
    },
    accounting: {
      gradient: 'from-[#0e1d19] to-[#071310]',
      badge: 'LEDGER API',
      icon: (
        <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      metric: 'Auto-Reconcile',
    },
    inventory: {
      gradient: 'from-[#0e1d19] to-[#071310]',
      badge: 'INVENTORY HUB',
      icon: (
        <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
      metric: 'Stock Telemetry',
    },
    spreadsheets: {
      gradient: 'from-[#0e1d19] to-[#071310]',
      badge: 'SHEETS & CSV',
      icon: (
        <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
      ),
      metric: 'Dynamic Parse',
    },
    custom: {
      gradient: 'from-[#0e1d19] to-[#071310]',
      badge: 'CUSTOM / WEBHOOK',
      icon: (
        <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      metric: 'REST / GraphQL',
    },
  };

  const item = visuals[id] || visuals.custom;

  return (
    <div className={`w-full aspect-[16/10] rounded-xl bg-gradient-to-br ${item.gradient} p-3 flex flex-col justify-between relative overflow-hidden border border-[#008767]/25 shadow-inner group-hover:border-[#008767]/50 transition-all`}>
      {/* Background dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#008767_1px,transparent_1px)] [background-size:10px_10px] opacity-25 pointer-events-none" />

      {/* Top Tag */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[9px] font-mono tracking-wider font-semibold text-emerald-400/90 uppercase">
          {item.badge}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
      </div>

      {/* Center 3D Icon visual */}
      <div className="relative z-10 flex items-center justify-center my-auto">
        <div className="w-10 h-10 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,135,103,0.3)] group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>
      </div>

      {/* Bottom status */}
      <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-gray-400 pt-1 border-t border-white/[0.06]">
        <span>Protocol: TLS 1.3</span>
        <span className="text-emerald-300 font-semibold">{item.metric}</span>
      </div>
    </div>
  );
}

export function HowItWorksVisual({ step }) {
  switch (step) {
    case 1: // Connect
      return (
        <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#0c1815] via-[#10241e] to-[#07130f] p-4 flex flex-col justify-between relative overflow-hidden border border-[#008767]/30 shadow-md group hover:border-[#008767]/60 transition-all">
          <div className="absolute inset-0 bg-[radial-gradient(#008767_1px,transparent_1px)] [background-size:12px_12px] opacity-25 pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-[#008767]/20 border border-[#008767]/40 text-[#4ade80] text-[9px] font-mono">
              STAGE 01 : UNIFY
            </span>
            <span className="text-[10px] font-mono text-emerald-300 font-semibold">1-Click Bridge</span>
          </div>

          <div className="relative z-10 flex items-center justify-center my-auto">
            <div className="relative w-32 h-20 flex items-center justify-center">
              <div className="absolute left-0 w-8 h-8 rounded-lg bg-white/10 border border-emerald-500/40 flex items-center justify-center text-[10px] font-bold text-gray-200 shadow-[0_0_10px_rgba(0,135,103,0.3)]">
                ERP
              </div>
              <div className="absolute right-0 w-8 h-8 rounded-lg bg-white/10 border border-emerald-500/40 flex items-center justify-center text-[10px] font-bold text-gray-200 shadow-[0_0_10px_rgba(0,135,103,0.3)]">
                CRM
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#008767] to-[#34d399] shadow-[0_0_20px_rgba(52,211,153,0.7)] flex items-center justify-center text-white text-xs font-bold z-10">
                AI
              </div>
              {/* Converging dashed lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 128 80">
                <line x1="32" y1="40" x2="64" y2="40" stroke="#34d399" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="96" y1="40" x2="64" y2="40" stroke="#34d399" strokeWidth="2" strokeDasharray="3 3" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-white/[0.06] pt-1.5">
            <span>Encrypted Streams</span>
            <span className="text-emerald-400 font-bold">100% Synced</span>
          </div>
        </div>
      );

    case 2: // Understand
      return (
        <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#0c1815] via-[#10241e] to-[#07130f] p-4 flex flex-col justify-between relative overflow-hidden border border-[#008767]/30 shadow-md group hover:border-[#008767]/60 transition-all">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00876710_1px,transparent_1px),linear-gradient(to_bottom,#00876710_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-[#008767]/20 border border-[#008767]/40 text-[#4ade80] text-[9px] font-mono">
              STAGE 02 : SYNAPSE
            </span>
            <span className="text-[10px] font-mono text-emerald-300 font-semibold">Semantic Map</span>
          </div>

          {/* Neural graph visual */}
          <div className="relative z-10 flex items-center justify-center my-auto">
            <svg className="w-28 h-20" viewBox="0 0 112 80">
              <line x1="20" y1="20" x2="56" y2="40" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="20" y1="60" x2="56" y2="40" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="92" y1="20" x2="56" y2="40" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="92" y1="60" x2="56" y2="40" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" />
              
              <circle cx="20" cy="20" r="5" fill="#008767" stroke="#34d399" strokeWidth="1.5" />
              <circle cx="20" cy="60" r="5" fill="#008767" stroke="#34d399" strokeWidth="1.5" />
              <circle cx="92" cy="20" r="5" fill="#008767" stroke="#34d399" strokeWidth="1.5" />
              <circle cx="92" cy="60" r="5" fill="#008767" stroke="#34d399" strokeWidth="1.5" />
              
              <circle cx="56" cy="40" r="9" fill="#34d399" className="animate-pulse" />
              <circle cx="56" cy="40" r="6" fill="#ffffff" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-white/[0.06] pt-1.5">
            <span>Context Entities: 4,820</span>
            <span className="text-emerald-400 font-bold">DNA Mapped</span>
          </div>
        </div>
      );

    case 3: // Analyze
      return (
        <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#0c1815] via-[#10241e] to-[#07130f] p-4 flex flex-col justify-between relative overflow-hidden border border-[#008767]/30 shadow-md group hover:border-[#008767]/60 transition-all">
          <div className="absolute inset-0 bg-[radial-gradient(#008767_1px,transparent_1px)] [background-size:12px_12px] opacity-25 pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-[#008767]/20 border border-[#008767]/40 text-[#4ade80] text-[9px] font-mono">
              STAGE 03 : PREDICT
            </span>
            <span className="text-[10px] font-mono text-emerald-300 font-semibold">Real-Time BI</span>
          </div>

          {/* Oscilloscope Waveform */}
          <div className="relative z-10 w-full h-16 flex items-center justify-center my-auto px-1">
            <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
              <path
                d="M0,30 L40,30 L55,10 L70,50 L85,20 L100,40 L115,30 L160,30 L175,5 L190,45 L200,30"
                fill="none"
                stroke="#34d399"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-white/[0.06] pt-1.5">
            <span>Pattern Accuracy</span>
            <span className="text-emerald-400 font-bold">99.8% Precision</span>
          </div>
        </div>
      );

    case 4: // Act
      return (
        <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#0c1815] via-[#10241e] to-[#07130f] p-4 flex flex-col justify-between relative overflow-hidden border border-[#008767]/30 shadow-md group hover:border-[#008767]/60 transition-all">
          <div className="absolute inset-0 bg-[radial-gradient(#008767_1px,transparent_1px)] [background-size:12px_12px] opacity-25 pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-[#008767]/20 border border-[#008767]/40 text-[#4ade80] text-[9px] font-mono">
              STAGE 04 : EXECUTE
            </span>
            <span className="text-[10px] font-mono text-emerald-300 font-semibold">Autonomous</span>
          </div>

          {/* Action dispatch badge */}
          <div className="relative z-10 flex items-center justify-center my-auto">
            <div className="px-3.5 py-2 rounded-xl bg-white/[0.08] border border-emerald-500/40 backdrop-blur-md flex items-center gap-2.5 shadow-[0_0_20px_rgba(0,135,103,0.4)]">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <div className="text-left">
                <div className="text-[11px] font-bold text-white leading-tight">Proactive Trigger</div>
                <div className="text-[9px] font-mono text-emerald-300">Auto-Optimized Decision</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-gray-400 border-t border-white/[0.06] pt-1.5">
            <span>Latency</span>
            <span className="text-emerald-400 font-bold">&lt; 12ms Response</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

