import React, { useState } from 'react';
import Footer from './Footer';

// ==========================================
// HIGH-TECH ENTERPRISE AI VISUAL SCHEMATICS
// ==========================================

// 1. Sales & Pipeline Velocity Neural Visual
const PipelineSchematic = () => (
  <div className="w-full h-full bg-[#081310] rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden border border-[#008767]/40 shadow-inner group-hover:border-[#008767]/70 transition-colors">
    <div className="absolute inset-0 bg-[radial-gradient(#008767_1px,transparent_1px)] [background-size:10px_10px] opacity-20 pointer-events-none" />
    <div className="flex items-center justify-between relative z-10">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#008767]/25 text-[#4ade80] font-mono text-[10px] tracking-wider border border-[#008767]/40">
        <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
        CRM GRAPH V2.4
      </span>
      <span className="font-mono text-[10px] text-emerald-400 font-bold">94.8% Acc</span>
    </div>
    {/* SVG Glowing Stream Spline */}
    <div className="relative z-10 my-auto py-1">
      <svg className="w-full h-16 overflow-visible" viewBox="0 0 220 50">
        <defs>
          <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d="M0,40 Q35,35 70,28 T140,16 T210,6 L210,50 L0,50 Z" fill="url(#pipeGrad)" />
        <path d="M0,40 Q35,35 70,28 T140,16 T210,6" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="70" cy="28" r="3.5" fill="#008767" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="140" cy="16" r="3.5" fill="#008767" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="210" cy="6" r="4.5" fill="#34d399" stroke="#ffffff" strokeWidth="2" className="animate-ping" />
        <circle cx="210" cy="6" r="4.5" fill="#34d399" stroke="#ffffff" strokeWidth="2" />
      </svg>
    </div>
    <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono pt-1.5 border-t border-white/[0.08] relative z-10">
      <span>Lead-to-Close: -38%</span>
      <span className="text-emerald-400 font-semibold">Salesforce • HubSpot</span>
    </div>
  </div>
);

// 2. Supply Chain & Inventory Matrix Visual
const InventorySchematic = () => (
  <div className="w-full h-full bg-[#09111a] rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden border border-blue-500/30 shadow-inner group-hover:border-blue-500/60 transition-colors">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
    <div className="flex items-center justify-between relative z-10">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] tracking-wider border border-blue-500/40">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        STOCKOUT ZERO
      </span>
      <span className="font-mono text-[10px] text-blue-300 font-bold">99.4% Availability</span>
    </div>
    {/* Grid Bar Telemetry */}
    <div className="grid grid-cols-5 gap-1.5 items-end h-16 py-1 relative z-10">
      {[
        { h: '40%', active: false, label: 'Whse A' },
        { h: '65%', active: false, label: 'Whse B' },
        { h: '88%', active: false, label: 'Hub 1' },
        { h: '50%', active: false, label: 'POS 2' },
        { h: '98%', active: true, label: 'Auto PO' },
      ].map((b, i) => (
        <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
          <div className="w-full bg-white/5 rounded-t relative overflow-hidden h-full flex items-end">
            <div
              style={{ height: b.h }}
              className={`w-full rounded-t transition-all ${
                b.active
                  ? 'bg-gradient-to-t from-blue-600 to-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]'
                  : 'bg-gradient-to-t from-gray-700 to-gray-500'
              }`}
            />
          </div>
          <span className="text-[8px] font-mono text-gray-400 truncate w-full text-center">{b.label}</span>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono pt-1.5 border-t border-white/[0.08] relative z-10">
      <span>Lead Variance: 0.12d</span>
      <span className="text-cyan-400 font-semibold">SAP • Oracle NetSuite</span>
    </div>
  </div>
);

// 3. Finance & Cashflow Radar Visual
const CashflowSchematic = () => (
  <div className="w-full h-full bg-[#120f18] rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden border border-purple-500/30 shadow-inner group-hover:border-purple-500/60 transition-colors">
    <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />
    <div className="flex items-center justify-between relative z-10">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px] tracking-wider border border-purple-500/40">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        WORKING CAPITAL RADAR
      </span>
      <span className="font-mono text-[10px] text-purple-300 font-bold">Rolling 90-Day</span>
    </div>
    {/* Concentric / Wave Radar */}
    <div className="relative z-10 flex items-center justify-around h-16 py-1">
      <div className="flex flex-col items-center">
        <span className="text-xs font-mono font-bold text-white">$4.82M</span>
        <span className="text-[9px] font-mono text-gray-400">Total Inflow</span>
      </div>
      <div className="h-8 w-[1px] bg-white/10" />
      <div className="flex flex-col items-center">
        <span className="text-xs font-mono font-bold text-emerald-400">0.00%</span>
        <span className="text-[9px] font-mono text-gray-400">Anomaly Drift</span>
      </div>
      <div className="h-8 w-[1px] bg-white/10" />
      <div className="flex flex-col items-center">
        <span className="text-xs font-mono font-bold text-purple-300">+22.4d</span>
        <span className="text-[9px] font-mono text-gray-400">DSO Optimized</span>
      </div>
    </div>
    <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono pt-1.5 border-t border-white/[0.08] relative z-10">
      <span>Sync: Real-time</span>
      <span className="text-purple-300 font-semibold">Tally • QuickBooks • Banks</span>
    </div>
  </div>
);

// 4. HR & Team Retention Pulse Visual
const RetentionSchematic = () => (
  <div className="w-full h-full bg-[#0a1514] rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden border border-teal-500/30 shadow-inner group-hover:border-teal-500/60 transition-colors">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a610_1px,transparent_1px),linear-gradient(to_bottom,#14b8a610_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
    <div className="flex items-center justify-between relative z-10">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono text-[10px] tracking-wider border border-teal-500/40">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
        PEOPLE ANALYTICS
      </span>
      <span className="font-mono text-[10px] text-teal-300 font-bold">Zero-Invasive</span>
    </div>
    {/* Connected Nodes */}
    <div className="relative z-10 flex items-center justify-center h-16">
      <svg className="w-full h-full" viewBox="0 0 200 60">
        <line x1="30" y1="30" x2="80" y2="15" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
        <line x1="80" y1="15" x2="140" y2="40" stroke="#14b8a6" strokeWidth="1.5" opacity="0.8" />
        <line x1="140" y1="40" x2="180" y2="25" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
        <line x1="30" y1="30" x2="140" y2="40" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
        <circle cx="30" cy="30" r="6" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1.5" />
        <circle cx="80" cy="15" r="7" fill="#115e59" stroke="#2dd4bf" strokeWidth="2" />
        <circle cx="140" cy="40" r="8" fill="#134e4a" stroke="#5eead4" strokeWidth="2" />
        <circle cx="180" cy="25" r="5" fill="#0f766e" stroke="#2dd4bf" strokeWidth="1.5" />
      </svg>
    </div>
    <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono pt-1.5 border-t border-white/[0.08] relative z-10">
      <span>Burnout Risk: Low</span>
      <span className="text-teal-300 font-semibold">Workday • BambooHR</span>
    </div>
  </div>
);

// 5. Zero-Trust Security Enclave Visual
const SecuritySchematic = () => (
  <div className="w-full h-full bg-[#180f0c] rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden border border-orange-500/30 shadow-inner group-hover:border-orange-500/60 transition-colors">
    <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />
    <div className="flex items-center justify-between relative z-10">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 font-mono text-[10px] tracking-wider border border-orange-500/40">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
        VPC ISOLATION
      </span>
      <span className="font-mono text-[10px] text-orange-300 font-bold">SOC2 Type II</span>
    </div>
    {/* Shield & Cryptographic Matrix */}
    <div className="relative z-10 flex items-center justify-around h-16 py-1 text-center">
      <div>
        <div className="text-[9px] font-mono text-gray-400">ENCRYPTION</div>
        <div className="text-xs font-mono font-bold text-orange-200">AES-256 GCM</div>
      </div>
      <div className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
        <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <div>
        <div className="text-[9px] font-mono text-gray-400">LEAKAGE</div>
        <div className="text-xs font-mono font-bold text-emerald-400">0.00% Zero</div>
      </div>
    </div>
    <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono pt-1.5 border-t border-white/[0.08] relative z-10">
      <span>Air-Gapped Memory</span>
      <span className="text-orange-300 font-semibold">Customer KMS Keys</span>
    </div>
  </div>
);

// 6. Autonomous Executive Copilot Visual
const CopilotSchematic = () => (
  <div className="w-full h-full bg-[#08121a] rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden border border-sky-500/30 shadow-inner group-hover:border-sky-500/60 transition-colors">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
    <div className="flex items-center justify-between relative z-10">
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono text-[10px] tracking-wider border border-sky-500/40">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
        NATURAL LANGUAGE SQL
      </span>
      <span className="font-mono text-[10px] text-sky-300 font-bold">&lt; 38ms Latency</span>
    </div>
    {/* Query Box preview */}
    <div className="relative z-10 bg-black/40 rounded-lg p-2 border border-white/5 font-mono text-[10px] text-gray-300 space-y-1 my-auto">
      <div className="text-sky-300 flex items-center gap-1">
        <span>&gt;</span>
        <span className="truncate">Why did Gross Margin drop in South Zone?</span>
      </div>
      <div className="text-emerald-400 text-[9px] truncate">✓ Synthesized ERP + Freight logs: +14% freight surcharge identified</div>
    </div>
    <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono pt-1.5 border-t border-white/[0.08] relative z-10">
      <span>Verifiable Citations</span>
      <span className="text-sky-300 font-semibold">C-Suite Intelligence</span>
    </div>
  </div>
);

export default function AiBlogPage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog', active: true },
    { label: 'Testimonials', href: '#testimonials' },
    { label: "FAQ's", href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  // Authentic Brynex AI Engineering Articles
  const blogCards = [
    {
      id: 'card-1',
      featured: true,
      tag: 'Sales & Revenue Engine',
      category: 'Sales & CRM',
      title: 'Pipeline Velocity Graph AI',
      subtitle: 'Eliminating stalled enterprise deals and forecasting quarterly close rates with continuous CRM graph reasoning.',
      readTime: '5 min read',
      date: 'Sept 2026',
      author: 'Dr. Elena Vance, Head of AI Research',
      reads: '4.8k reads',
      visual: <PipelineSchematic />,
      fullStory: {
        summary: 'How Brynex Sales Engine connects Salesforce, HubSpot, and communication channels to flag deal slip risks weeks ahead.',
        paragraphs: [
          'Traditional CRM reporting tells you what closed yesterday. Brynex Sales Engine uses autonomous reasoning over email sentiment, meeting cadence, and procurement milestones to predict what will close next quarter.',
          'By analyzing historical negotiation paths across thousands of enterprise deals, the system identifies stalled accounts and generates step-by-step unblocking recommendations for account executives.',
          'Revenue operations teams deploying this engine report a 38% reduction in sales cycle length and unprecedented 94.8% forecast accuracy.'
        ],
        tags: ['Salesforce', 'HubSpot', 'Pipeline Intelligence', 'Revenue Ops', 'State Space Graph']
      }
    },
    {
      id: 'card-2',
      tag: 'Operations & Supply Chain',
      category: 'Operations & ERP',
      title: 'Stockout Zero Matrix',
      subtitle: 'Predicting inventory bottlenecks and supplier lead times across retail POS and ERP systems in real-time.',
      readTime: '4 min read',
      date: 'Sept 2026',
      author: 'Marcus Chen, Operations Systems Architect',
      reads: '3.9k reads',
      visual: <InventorySchematic />,
      fullStory: {
        summary: 'Multi-agent coordination passing real-time sell-through data directly to automated supplier purchase orders.',
        paragraphs: [
          'When retail foot traffic surges, traditional weekly batch reports discover stockouts long after revenue is lost. Stockout Zero continuously streams transaction logs across multi-branch POS and central warehouses.',
          'Specialized logistics agents cross-reference real-time demand curves against vendor delivery lead times, automatically dispatching stock rebalancing requests before shelves empty.',
          'Retail and manufacturing leaders have cut emergency shipping costs by 62% while maintaining 99.4% SKU availability during peak seasons.'
        ],
        tags: ['ERP Connectors', 'Inventory Optimization', 'SAP', 'Oracle NetSuite', 'Real-time POS']
      }
    },
    {
      id: 'card-3',
      tag: 'Finance & Working Capital',
      category: 'Finance & Cashflow',
      title: 'Cashflow Radar 360',
      subtitle: 'Automated anomaly detection and dynamic working capital forecasting across multi-currency bank feeds.',
      readTime: '6 min read',
      date: 'Aug 2026',
      author: 'Aria Thorne, Lead Financial Intelligence Engineer',
      reads: '5.2k reads',
      visual: <CashflowSchematic />,
      fullStory: {
        summary: 'Replacing static month-end spreadsheets with real-time continuous working capital projections.',
        paragraphs: [
          'Month-end close is usually an exhausting retrospective. Cashflow Radar connects QuickBooks, Zoho, Tally, and direct bank feeds into an automated reconciliation engine that balances records continuously.',
          'Machine learning models flag delayed receivables, unexpected vendor surcharge anomalies, and FX exposure shifts before they impact payroll or liquidity.',
          'CFOs gain instant executive visibility into rolling 90-day cash projections with verifiable audit trails for every line item.'
        ],
        tags: ['QuickBooks', 'Tally', 'Working Capital', 'Cashflow AI', 'Anomaly Detection']
      }
    },
    {
      id: 'card-4',
      tag: 'HR & People Operations',
      category: 'HR & People Ops',
      title: 'Retention Pulse AI',
      subtitle: 'Detecting team burnout, flight risks, and organizational productivity bottlenecks without violating privacy.',
      readTime: '5 min read',
      date: 'Aug 2026',
      author: 'Dr. Zachary Cole, Principal Scientist',
      reads: '3.1k reads',
      visual: <RetentionSchematic />,
      fullStory: {
        summary: 'Surfacing systemic team friction and compensation disparities using differential privacy protocols.',
        paragraphs: [
          'High employee turnover often blindsides leadership when quarterly exit reviews arrive too late. Retention Pulse integrates with BambooHR, Workday, and attendance systems to monitor macro team health.',
          'By analyzing aggregated sentiment, overtime surges, and peer collaboration networks with zero invasive monitoring, it alerts managers to burnout risks months ahead.',
          'Enterprises utilizing Retention Pulse have seen a 27% increase in high-performer retention and streamlined internal mobility promotions.'
        ],
        tags: ['HRMS', 'BambooHR', 'Workday', 'Team Analytics', 'Differential Privacy']
      }
    },
    {
      id: 'card-5',
      tag: 'Enterprise Security',
      category: 'Security & Privacy',
      title: 'Zero-Trust ERP Vault',
      subtitle: 'Enterprise data isolation, SOC2 Type II compliance, and private cryptographic execution for sensitive business records.',
      readTime: '7 min read',
      date: 'July 2026',
      author: 'Samantha Brooks, Chief Information Security Officer',
      reads: '6.4k reads',
      visual: <SecuritySchematic />,
      fullStory: {
        summary: 'Ensuring your proprietary ERP, CRM, and financial databases remain completely isolated from public LLM training sets.',
        paragraphs: [
          'Moving fast with AI should never jeopardize proprietary enterprise intelligence. Zero-Trust ERP Vault runs on dedicated VPC enclaves with end-to-end customer-managed cryptographic keys.',
          'Data connector queries execute in memory with strict temporal boundaries, ensuring zero unauthorized persistence or cross-tenant contamination.',
          'Fully certified for SOC2 Type II, ISO 27001, and HIPAA compliance, enabling Fortune 500 enterprises to deploy autonomous AI safely.'
        ],
        tags: ['SOC2 Type II', 'Data Privacy', 'Zero-Trust', 'VPC Isolation', 'KMS Encryption']
      }
    },
    {
      id: 'card-6',
      tag: 'Executive Copilots',
      category: 'Executive Intelligence',
      title: 'Autonomous C-Suite Copilot',
      subtitle: 'Replacing 40-page static PDF reporting decks with natural-language instant answers for CEOs and CFOs.',
      readTime: '8 min read',
      date: 'July 2026',
      author: 'Kenji Sato, Executive Solutions Lead',
      reads: '4.6k reads',
      visual: <CopilotSchematic />,
      fullStory: {
        summary: 'Ask complex business questions in plain English and receive instant validated answers backed by live ERP graphs.',
        paragraphs: [
          'Business leaders spend hours waiting for analysts to assemble cross-department dashboards. Autonomous Copilot allows CEOs to simply ask: "Why did gross margins dip in Region B last Tuesday?"',
          'The engine synthesizes ERP sales data, supplier freight charges, and currency fluctuations in seconds, generating an executive-ready diagnosis and actionable next steps.',
          'Eliminates decision latency across C-suite teams and aligns executive strategy directly with operational ground truth.'
        ],
        tags: ['Conversational BI', 'Executive Assistant', 'ERP Graph', 'Decision Automation', 'Sub-50ms']
      }
    }
  ];

  const categories = ['All', 'Sales & CRM', 'Operations & ERP', 'Finance & Cashflow', 'HR & People Ops', 'Security & Privacy', 'Executive Intelligence'];

  const filteredCards = blogCards.filter((card) => {
    const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory;
    const matchesSearch =
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredCard = blogCards[0];

  const toggleBookmark = (e, id) => {
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(item => item !== id));
      showToast('Paper removed from bookmarks');
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
      showToast('Paper saved to reading list');
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setSubscribeSuccess(true);
    setTimeout(() => {
      setSubscribeSuccess(false);
      setSubscribedEmail('');
    }, 4000);
  };

  const handleNav = (href) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      if (href === '#blog') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onNavigate(href.replace('#', ''));
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-[#008767] selection:text-white relative font-text">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-black text-white text-xs font-semibold shadow-2xl border border-white/20 animate-fade-in flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#008767]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Header - Clean White Theme */}
      <header className="w-full border-b border-gray-200 sticky top-0 z-30 bg-white/95 backdrop-blur-md text-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('home')}
            className="text-gray-900 text-base font-bold tracking-wider uppercase cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded bg-[#008767] flex items-center justify-center text-xs font-black text-white">
              B
            </div>
            <span>LOGO HERE</span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNav(link.href)}
                className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  link.active
                    ? 'text-gray-900 border-b-2 border-[#008767] pb-1'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('get-started')}
              className="px-5 py-2 rounded-full bg-[#008767] hover:bg-[#007559] text-white text-xs font-semibold tracking-wide transition-all shadow-[0_0_15px_rgba(0,135,103,0.3)] cursor-pointer active:scale-95"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-gray-700 hover:text-black"
              aria-label="Toggle Menu"
            >
              <span className={`w-5 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNav(link.href)}
                className="block w-full text-left text-base font-semibold text-gray-700 hover:text-black py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigate) onNavigate('get-started');
              }}
              className="w-full mt-4 py-3 rounded-xl bg-[#008767] text-white text-sm font-semibold text-center"
            >
              Get Started Free
            </button>
          </div>
        )}
      </header>

      {/* Pure Plain White Background Container */}
      <div className="w-full bg-white text-gray-900 flex-1 flex flex-col">
        {/* Hero Header */}
        <section className="w-full pt-16 pb-12 px-6 sm:px-10 lg:px-16 bg-white text-gray-900 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-6 uppercase tracking-wider">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('home')}
                className="hover:text-black transition-colors cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <span className="text-[#008767] font-bold">Enterprise AI Research & Architecture</span>
            </div>

            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-5 shadow-sm">
                <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
                <span>DECISION INTELLIGENCE LAB</span>
              </div>

              <h1 className="font-headline font-normal text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#111827] mb-6">
                Research, Neural Swarms &<br />
                Autonomous Decision Logic
              </h1>

              <p className="font-text text-base sm:text-lg text-gray-500 leading-relaxed">
                Peer-reviewed engineering post-mortems, mathematical decision frameworks, and deep telemetry from production Brynex AI deployments across ERP, CRM, and cloud databases.
              </p>
            </div>

            {/* Featured Breakthrough Spotlight Banner */}
            {selectedCategory === 'All' && !searchQuery && (
              <div
                onClick={() => setSelectedArticle(featuredCard)}
                className="w-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer mb-10 flex flex-col lg:flex-row items-center gap-8 group"
              >
                <div className="w-full lg:w-1/2 h-56 sm:h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                  {featuredCard.visual}
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-wider">
                        Featured Research
                      </span>
                      <span className="text-xs font-semibold text-[#008767]">{featuredCard.category}</span>
                      <span className="text-xs text-gray-400">• {featuredCard.readTime}</span>
                    </div>

                    <h2 className="font-headline font-bold text-2xl sm:text-3xl text-gray-900 group-hover:text-[#008767] transition-colors mb-3 leading-snug">
                      {featuredCard.title}
                    </h2>

                    <p className="font-text text-sm text-gray-600 leading-relaxed mb-6">
                      {featuredCard.fullStory.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/80 text-xs font-semibold">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                        {featuredCard.author.charAt(0)}
                      </div>
                      <span className="text-gray-900">{featuredCard.author}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[#008767] font-bold group-hover:translate-x-1 transition-transform">
                      Read Architecture Paper →
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Category Filter Bar & Live Search */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-black text-white shadow-md scale-[1.02]'
                        : 'bg-white text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar & Stats */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search ERP, pipeline graph, cashflow anomaly, zero-trust..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#008767] focus:ring-2 focus:ring-[#008767]/20 transition-all shadow-sm"
                  />
                  <svg
                    className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                  <span>Showing {filteredCards.length} of {blogCards.length} papers</span>
                  <span>•</span>
                  <span className="text-[#008767] font-semibold">Updated weekly</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid of All Deep Dive Engineering Papers */}
        <section className="w-full py-16 px-6 sm:px-10 lg:px-16 bg-white text-gray-900 flex-1">
          <div className="max-w-7xl mx-auto">
            {filteredCards.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200">
                <p className="text-lg font-semibold text-gray-700 mb-2">No articles found</p>
                <p className="text-sm text-gray-500 mb-6">Try clearing your search query or selecting another category.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-black text-white text-xs font-semibold rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCards.map((card) => {
                  const isBookmarked = bookmarkedIds.includes(card.id);
                  return (
                    <div
                      key={`grid-${card.id}`}
                      onClick={() => setSelectedArticle(card)}
                      className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                    >
                      <div>
                        {/* Visual Container */}
                        <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 border border-gray-200 shadow-inner relative">
                          {card.visual}
                        </div>

                        {/* Tag Bar & Bookmark */}
                        <div className="flex items-center justify-between text-xs text-gray-500 font-semibold mb-3">
                          <span className="text-[#008767] uppercase tracking-wider">{card.category}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-400 font-normal">{card.readTime}</span>
                            <button
                              type="button"
                              onClick={(e) => toggleBookmark(e, card.id)}
                              aria-label="Bookmark paper"
                              className={`p-1.5 rounded-full hover:bg-gray-100 transition-colors ${
                                isBookmarked ? 'text-[#008767]' : 'text-gray-400'
                              }`}
                            >
                              <svg className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <h3 className="font-headline font-bold text-xl text-gray-900 mb-2 group-hover:text-[#008767] transition-colors leading-snug">
                          {card.title}
                        </h3>

                        <p className="font-text text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                          {card.fullStory.summary}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs font-semibold text-gray-700">
                        <span className="truncate max-w-[180px]">{card.author}</span>
                        <span className="inline-flex items-center gap-1 text-[#008767] group-hover:translate-x-1 transition-transform">
                          Read Paper →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Weekly AI Research Briefing Subscription Card */}
        <section className="w-full py-16 px-6 sm:px-10 lg:px-16 bg-gray-50/70 border-t border-gray-100">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-[#008767] text-xs font-bold mb-3 border border-emerald-200">
                WEEKLY RESEARCH BRIEF
              </span>
              <h3 className="font-headline font-bold text-2xl sm:text-3xl text-gray-900 mb-2">
                Get new architecture teardowns in your inbox.
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Join 14,000+ enterprise CTOs, ML engineers, and finance leaders receiving our curated engineering post-mortems.
              </p>
            </div>

            <div className="w-full md:w-auto">
              {subscribeSuccess ? (
                <div className="px-6 py-4 rounded-2xl bg-emerald-50 text-[#008767] text-sm font-bold border border-emerald-200 text-center animate-fade-in">
                  ✓ Successfully subscribed to Research Briefs!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                  <input
                    type="email"
                    required
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    placeholder="name@enterprise.com"
                    className="px-4 py-3 rounded-full border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#008767] focus:ring-2 focus:ring-[#008767]/20 w-full sm:w-64"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-black hover:bg-gray-800 text-white text-xs font-bold transition-all shrink-0 cursor-pointer"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white text-gray-900 rounded-[28px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border border-gray-100 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              aria-label="Close article modal"
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-900 font-mono">
                {selectedArticle.tag}
              </span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h2 className="font-headline font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-4">
              {selectedArticle.title}
            </h2>

            <div className="w-full h-48 rounded-xl overflow-hidden mb-6 border border-gray-200 shadow-inner">
              {selectedArticle.visual}
            </div>

            <div className="flex items-center gap-3 pb-6 border-b border-gray-100 mb-6">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                {selectedArticle.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{selectedArticle.author}</p>
                <p className="text-xs text-gray-500">{selectedArticle.fullStory.summary}</p>
              </div>
            </div>

            <div className="space-y-4 font-text text-base text-gray-700 leading-relaxed mb-8">
              {selectedArticle.fullStory.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {selectedArticle.fullStory.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-mono font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reusable Universal Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
