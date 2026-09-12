import React, { useState, useEffect, useRef } from 'react';

// SVG Vector Characters matching the playful modern visual aesthetic
const PullupStarBot = () => (
  <svg viewBox="0 0 240 180" className="w-full h-full max-h-[150px] drop-shadow-sm transition-transform duration-500 group-hover:scale-105" fill="none">
    <line x1="30" y1="150" x2="30" y2="40" stroke="#1E1E24" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="210" y1="150" x2="210" y2="40" stroke="#1E1E24" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="20" y1="150" x2="40" y2="150" stroke="#1E1E24" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="200" y1="150" x2="220" y2="150" stroke="#1E1E24" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="26" y1="42" x2="214" y2="42" stroke="#1E1E24" strokeWidth="3" strokeLinecap="round" />
    
    <circle cx="88" cy="42" r="5.5" fill="#FF8042" stroke="#1E1E24" strokeWidth="1.5" />
    <circle cx="152" cy="42" r="5.5" fill="#FF8042" stroke="#1E1E24" strokeWidth="1.5" />
    
    <path
      d="M120 48 L133 63 L153 58 L152 79 L171 87 L157 102 L166 122 L146 121 L136 138 L120 126 L104 138 L94 121 L74 122 L83 102 L69 87 L88 79 L87 58 L107 63 Z"
      fill="#FF7E47"
      stroke="#FF6B2B"
      strokeWidth="1"
      className="transition-all duration-300"
    />
    
    <path d="M107 88 Q113 78 119 88" stroke="#1E1E24" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <path d="M125 88 Q131 78 137 88" stroke="#1E1E24" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <path d="M115 97 Q122 105 129 97" stroke="#1E1E24" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <circle cx="145" cy="74" r="2" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

const VolleyballFlowerBot = () => (
  <svg viewBox="0 0 240 180" className="w-full h-full max-h-[150px] drop-shadow-sm transition-transform duration-500 group-hover:scale-105" fill="none">
    <g className="animate-bounce" style={{ animationDuration: '2.5s' }}>
      <circle cx="152" cy="44" r="17" fill="#FFFDF0" stroke="#1E1E24" strokeWidth="2" />
      <path d="M137 44 C144 38 152 38 159 44 C166 50 167 59 167 59" stroke="#1E1E24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M152 27 C152 34 148 41 144 46 C140 51 137 54 137 54" stroke="#1E1E24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M165 37 C158 40 152 46 150 53 C148 60 149 61 149 61" stroke="#1E1E24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <line x1="174" y1="36" x2="178" y2="33" stroke="#FF7E47" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="172" y1="52" x2="177" y2="54" stroke="#FF7E47" strokeWidth="1.8" strokeLinecap="round" />
    </g>

    <line x1="40" y1="148" x2="200" y2="148" stroke="#E2DB6C" strokeWidth="2.5" strokeLinecap="round" />

    <path
      d="M50 146 Q60 115 76 96 Q88 82 92 88 Q96 94 92 110 L104 80 Q112 60 118 64 Q124 68 118 88 L138 72 Q148 58 154 62 Q160 66 150 86 L174 94 Q188 102 184 112 Q180 120 162 124 L188 136 Q194 144 186 146 Z"
      fill="#F2778A"
      stroke="#E05B70"
      strokeWidth="1"
    />
    
    <path d="M108 115 Q113 107 118 115" stroke="#1E1E24" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <path d="M126 115 Q131 107 136 115" stroke="#1E1E24" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <path d="M116 124 Q122 130 128 124" stroke="#1E1E24" strokeWidth="2.2" strokeLinecap="round" fill="none" />
  </svg>
);

const BadmintonLilacBot = () => (
  <svg viewBox="0 0 240 180" className="w-full h-full max-h-[150px] drop-shadow-sm transition-transform duration-500 group-hover:scale-105" fill="none">
    <line x1="30" y1="146" x2="210" y2="146" stroke="#8772A6" strokeWidth="2" strokeLinecap="round" />
    
    <ellipse cx="76" cy="108" rx="16" ry="18" fill="rgba(255,255,255,0.4)" stroke="#1E1E24" strokeWidth="1.8" />
    <path d="M64 108 L88 108 M76 92 L76 124" stroke="#1E1E24" strokeWidth="1" opacity="0.6" />
    <line x1="88" y1="120" x2="110" y2="135" stroke="#1E1E24" strokeWidth="2.2" strokeLinecap="round" />
    
    <g className="animate-pulse">
      <path d="M42 66 L54 60 L50 74 Z" fill="#FFFFFF" stroke="#1E1E24" strokeWidth="1.2" />
      <circle cx="41" cy="67" r="3.5" fill="#FF5E62" />
      <line x1="30" y1="72" x2="22" y2="76" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    </g>

    <path
      d="M116 146 C105 146 100 134 102 120 C104 104 108 92 106 62 C105 48 116 48 118 64 C120 74 120 84 122 84 C124 84 124 74 126 54 C128 40 140 42 138 58 C136 78 138 96 142 108 C146 122 144 146 116 146 Z"
      fill="#C19EE0"
      stroke="#AA83CC"
      strokeWidth="1"
    />
    
    <path d="M120 102 Q123 96 126 102" stroke="#1E1E24" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M132 102 Q135 96 138 102" stroke="#1E1E24" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="129" cy="109" r="1.5" fill="#1E1E24" />
  </svg>
);

const QuantumNeuralBot = () => (
  <svg viewBox="0 0 240 180" className="w-full h-full max-h-[150px] drop-shadow-sm transition-transform duration-500 group-hover:scale-105" fill="none">
    <ellipse cx="120" cy="90" rx="65" ry="24" stroke="#60C5B0" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
    <rect x="42" y="60" width="14" height="14" rx="3" fill="#FFFFFF" stroke="#1E1E24" strokeWidth="1.5" className="animate-bounce" style={{ animationDuration: '3s' }} />
    <rect x="180" y="95" width="16" height="16" rx="4" fill="#FFDF78" stroke="#1E1E24" strokeWidth="1.5" className="animate-bounce" style={{ animationDuration: '2.4s' }} />
    
    <rect x="92" y="58" width="56" height="54" rx="18" fill="#7EE0C8" stroke="#4DBFA4" strokeWidth="1" />
    <line x1="120" y1="58" x2="120" y2="40" stroke="#1E1E24" strokeWidth="2" strokeLinecap="round" />
    <circle cx="120" cy="37" r="4.5" fill="#FF6B6B" stroke="#1E1E24" strokeWidth="1.5" />
    
    <rect x="100" y="70" width="40" height="22" rx="8" fill="#1E1E24" />
    <circle cx="112" cy="81" r="3" fill="#62FFD6" />
    <circle cx="128" cy="81" r="3" fill="#62FFD6" />
    
    <rect x="99" y="112" width="12" height="16" rx="4" fill="#4DBFA4" />
    <rect x="129" y="112" width="12" height="16" rx="4" fill="#4DBFA4" />
    <ellipse cx="105" cy="132" rx="4" ry="2" fill="#FFA34D" />
    <ellipse cx="135" cy="132" rx="4" ry="2" fill="#FFA34D" />
  </svg>
);

const SkaterBrainBot = () => (
  <svg viewBox="0 0 240 180" className="w-full h-full max-h-[150px] drop-shadow-sm transition-transform duration-500 group-hover:scale-105" fill="none">
    <g>
      <rect x="55" y="136" width="126" height="8" rx="4" fill="#1E1E24" />
      <circle cx="75" cy="148" r="6" fill="#FF7052" stroke="#1E1E24" strokeWidth="1.5" />
      <circle cx="160" cy="148" r="6" fill="#FF7052" stroke="#1E1E24" strokeWidth="1.5" />
    </g>

    <path
      d="M85 85 C80 65 100 50 118 50 C138 50 155 62 154 85 C164 94 160 114 148 118 C144 126 130 130 118 130 C104 130 92 126 88 116 C76 112 74 95 85 85 Z"
      fill="#FFA88B"
      stroke="#FF8863"
      strokeWidth="1"
    />

    <path d="M92 82 L144 82 L138 98 L98 98 Z" fill="#1E1E24" rx="3" />
    <line x1="98" y1="89" x2="138" y2="89" stroke="#60F2B0" strokeWidth="2" strokeLinecap="round" />
    
    <path d="M112 110 Q122 118 130 108" stroke="#1E1E24" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    <line x1="42" y1="90" x2="62" y2="90" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="105" x2="56" y2="105" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const RocketRunnerBot = () => (
  <svg viewBox="0 0 240 180" className="w-full h-full max-h-[150px] drop-shadow-sm transition-transform duration-500 group-hover:scale-105" fill="none">
    <ellipse cx="70" cy="142" rx="30" ry="8" fill="#A8D4FF" opacity="0.6" />
    <ellipse cx="110" cy="148" rx="20" ry="6" fill="#A8D4FF" opacity="0.4" />
    
    <path d="M78 114 L50 118 L76 128 Z" fill="#FF9A3D" />
    <path d="M74 117 L58 120 L73 125 Z" fill="#FFF275" />

    <ellipse cx="120" cy="106" rx="42" ry="26" fill="#8AC2FF" stroke="#6AAAF5" strokeWidth="1" />
    
    <circle cx="138" cy="98" r="4.5" fill="#1E1E24" />
    <circle cx="140" cy="96" r="1.5" fill="#FFFFFF" />
    <circle cx="152" cy="101" r="4.5" fill="#1E1E24" />
    <circle cx="154" cy="99" r="1.5" fill="#FFFFFF" />
    <polygon points="160,105 168,110 160,113" fill="#FF8452" />
    
    <circle cx="178" cy="74" r="3" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '2s' }} />
    <circle cx="196" cy="116" r="2.5" fill="#FFFFFF" />
  </svg>
);

export default function AiBlogSection({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Authentic Brynex AI articles
  const blogCards = [
    {
      id: 'card-1',
      tag: 'Sales Engine',
      category: 'Sales & CRM',
      title: 'Pipeline Velocity AI',
      subtitle: 'Eliminating stalled enterprise deals and forecasting quarterly close rates with continuous CRM graph reasoning.',
      bgGradient: 'bg-[#C5D3F6]',
      accentColor: '#345598',
      character: <PullupStarBot />,
      fullStory: {
        readTime: '5 min read',
        author: 'Dr. Elena Vance, Head of AI Research',
        date: 'Sept 2026',
        summary: 'How Brynex Sales Engine connects Salesforce, HubSpot, and communication channels to flag deal slip risks weeks ahead.',
        paragraphs: [
          'Traditional CRM reporting tells you what closed yesterday. Brynex Sales Engine uses autonomous reasoning over email sentiment, meeting cadence, and procurement milestones to predict what will close next quarter.',
          'By analyzing historical negotiation paths across thousands of enterprise deals, the system identifies stalled accounts and generates step-by-step unblocking recommendations for account executives.',
          'Revenue operations teams deploying this engine report a 38% reduction in sales cycle length and unprecedented 94% forecast accuracy.'
        ],
        tags: ['Salesforce', 'HubSpot', 'Pipeline Intelligence', 'Revenue Ops']
      }
    },
    {
      id: 'card-2',
      tag: 'Supply Chain',
      category: 'Operations & ERP',
      title: 'Stockout Zero Matrix',
      subtitle: 'Predicting inventory bottlenecks and supplier lead times across retail POS and ERP systems in real-time.',
      bgGradient: 'bg-[#EDE781]',
      accentColor: '#8E850A',
      character: <VolleyballFlowerBot />,
      fullStory: {
        readTime: '4 min read',
        author: 'Marcus Chen, Operations Systems Architect',
        date: 'Sept 2026',
        summary: 'Multi-agent coordination passing real-time sell-through data directly to automated supplier purchase orders.',
        paragraphs: [
          'When retail foot traffic surges, traditional weekly batch reports discover stockouts long after revenue is lost. Stockout Zero continuously streams transaction logs across multi-branch POS and central warehouses.',
          'Specialized logistics agents cross-reference real-time demand curves against vendor delivery lead times, automatically dispatching stock rebalancing requests before shelves empty.',
          'Retail and manufacturing leaders have cut emergency shipping costs by 62% while maintaining 99.4% SKU availability during peak seasons.'
        ],
        tags: ['ERP Connectors', 'Inventory Optimization', 'SAP', 'Oracle']
      }
    },
    {
      id: 'card-3',
      tag: 'Finance AI',
      category: 'Finance & Cashflow',
      title: 'Cashflow Radar 360',
      subtitle: 'Automated anomaly detection and dynamic working capital forecasting across multi-currency bank feeds.',
      bgGradient: 'bg-[#A38FC2]',
      accentColor: '#533C75',
      character: <BadmintonLilacBot />,
      fullStory: {
        readTime: '6 min read',
        author: 'Aria Thorne, Lead Financial Intelligence Engineer',
        date: 'Aug 2026',
        summary: 'Replacing static month-end spreadsheets with real-time continuous working capital projections.',
        paragraphs: [
          'Month-end close is usually an exhausting retrospective. Cashflow Radar connects QuickBooks, Zoho, Tally, and direct bank feeds into an automated reconciliation engine that balances records continuously.',
          'Machine learning models flag delayed receivables, unexpected vendor surcharge anomalies, and FX exposure shifts before they impact payroll or liquidity.',
          'CFOs gain instant executive visibility into rolling 90-day cash projections with verifiable audit trails for every line item.'
        ],
        tags: ['QuickBooks', 'Tally', 'Working Capital', 'Cashflow AI']
      }
    },
    {
      id: 'card-4',
      tag: 'HR & Talent',
      category: 'HR & People Ops',
      title: 'Retention Pulse AI',
      subtitle: 'Detecting team burnout, flight risks, and organizational productivity bottlenecks without violating privacy.',
      bgGradient: 'bg-[#B0EAE0]',
      accentColor: '#17786B',
      character: <QuantumNeuralBot />,
      fullStory: {
        readTime: '5 min read',
        author: 'Dr. Zachary Cole, Principal Scientist',
        date: 'Aug 2026',
        summary: 'Surfacing systemic team friction and compensation disparities using differential privacy protocols.',
        paragraphs: [
          'High employee turnover often blindsides leadership when quarterly exit reviews arrive too late. Retention Pulse integrates with BambooHR, Workday, and attendance systems to monitor macro team health.',
          'By analyzing aggregated sentiment, overtime surges, and peer collaboration networks with zero invasive monitoring, it alerts managers to burnout risks months ahead.',
          'Enterprises utilizing Retention Pulse have seen a 27% increase in high-performer retention and streamlined internal mobility promotions.'
        ],
        tags: ['HRMS', 'BambooHR', 'Workday', 'Team Analytics']
      }
    },
    {
      id: 'card-5',
      tag: 'Security & Trust',
      category: 'Security & Privacy',
      title: 'Zero-Trust ERP Vault',
      subtitle: 'Enterprise data isolation, SOC2 Type II compliance, and private cryptographic execution for sensitive business records.',
      bgGradient: 'bg-[#FFD4C0]',
      accentColor: '#A44520',
      character: <SkaterBrainBot />,
      fullStory: {
        readTime: '7 min read',
        author: 'Samantha Brooks, Chief Information Security Officer',
        date: 'July 2026',
        summary: 'Ensuring your proprietary ERP, CRM, and financial databases remain completely isolated from public LLM training sets.',
        paragraphs: [
          'Moving fast with AI should never jeopardize proprietary enterprise intelligence. Zero-Trust ERP Vault runs on dedicated VPC enclaves with end-to-end customer-managed cryptographic keys.',
          'Data connector queries execute in memory with strict temporal boundaries, ensuring zero unauthorized persistence or cross-tenant contamination.',
          'Fully certified for SOC2 Type II, ISO 27001, and HIPAA compliance, enabling Fortune 500 enterprises to deploy autonomous AI safely.'
        ],
        tags: ['SOC2 Type II', 'Data Privacy', 'Zero-Trust', 'VPC Isolation']
      }
    },
    {
      id: 'card-6',
      tag: 'Executive BI',
      category: 'Executive Intelligence',
      title: 'Autonomous Copilot',
      subtitle: 'Replacing 40-page static PDF reporting decks with natural-language instant answers for CEOs and CFOs.',
      bgGradient: 'bg-[#C3E1FF]',
      accentColor: '#1E62A8',
      character: <RocketRunnerBot />,
      fullStory: {
        readTime: '8 min read',
        author: 'Kenji Sato, Executive Solutions Lead',
        date: 'July 2026',
        summary: 'Ask complex business questions in plain English and receive instant validated answers backed by live ERP graphs.',
        paragraphs: [
          'Business leaders spend hours waiting for analysts to assemble cross-department dashboards. Autonomous Copilot allows CEOs to simply ask: "Why did gross margins dip in Region B last Tuesday?"',
          'The engine synthesizes ERP sales data, supplier freight charges, and currency fluctuations in seconds, generating an executive-ready diagnosis and actionable next steps.',
          'Eliminates decision latency across C-suite teams and aligns executive strategy directly with operational ground truth.'
        ],
        tags: ['Conversational BI', 'Executive Assistant', 'ERP Graph', 'Decision Automation']
      }
    }
  ];

  const categories = ['All', 'Sales & CRM', 'Operations & ERP', 'Finance & Cashflow', 'HR & People Ops', 'Security & Privacy', 'Executive Intelligence'];

  const filteredCards = selectedCategory === 'All'
    ? blogCards
    : blogCards.filter((card) => card.category === selectedCategory);

  // Scroll sideways on vertical wheel inside section
  useEffect(() => {
    const sectionEl = sectionRef.current;
    const trackEl = trackRef.current;
    if (!sectionEl || !trackEl) return;

    let isHoveringSection = false;
    const handleMouseEnter = () => { isHoveringSection = true; };
    const handleMouseLeave = () => { isHoveringSection = false; };

    const handleWheel = (e) => {
      if (!isHoveringSection || !trackEl) return;
      const maxScrollLeft = trackEl.scrollWidth - trackEl.clientWidth;
      if (maxScrollLeft <= 0) return;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const canScrollRight = trackEl.scrollLeft < maxScrollLeft && e.deltaY > 0;
        const canScrollLeft = trackEl.scrollLeft > 0 && e.deltaY < 0;

        if (canScrollRight || canScrollLeft) {
          e.preventDefault();
          trackEl.scrollBy({
            left: e.deltaY * 1.5,
            behavior: 'auto'
          });
        }
      }
    };

    sectionEl.addEventListener('mouseenter', handleMouseEnter);
    sectionEl.addEventListener('mouseleave', handleMouseLeave);
    sectionEl.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      sectionEl.removeEventListener('mouseenter', handleMouseEnter);
      sectionEl.removeEventListener('mouseleave', handleMouseLeave);
      sectionEl.removeEventListener('wheel', handleWheel);
    };
  }, [filteredCards]);

  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isMouseDownRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.6;
    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const scrollByAmount = (offset) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-10 lg:px-16 bg-transparent text-gray-900 select-none overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header Tag & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
              <span>INSIGHTS & BLOG</span>
            </div>
            <span className="text-xs font-semibold tracking-wide text-gray-400 uppercase hidden sm:inline">
              • Brynex Intelligence Lab
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto pb-2 lg:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-white shadow-sm scale-[1.02]'
                    : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Bold Headline & Newsletter Form */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pr-0 lg:pr-4">
            <div>
              <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-[#111827] mb-4">
                Think Fast.<br />
                Act Early.<br />
                Scale Bold.
              </h2>

              <p className="font-text text-sm sm:text-base text-gray-500 leading-relaxed max-w-sm mb-6">
                Discover how autonomous AI engines connect ERP, CRM, HRMS, and financial streams to forecast shifts weeks before they impact your balance sheet.
              </p>

              <button
                type="button"
                onClick={() => onNavigate && onNavigate('blog')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#008767] hover:text-[#007559] transition-colors cursor-pointer group"
              >
                <span>Explore all research articles</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Column: Horizontal Scroll Rail of Cards */}
          <div className="lg:col-span-8 relative">
            <div
              ref={trackRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeaveOrUp}
              onMouseUp={handleMouseLeaveOrUp}
              onMouseMove={handleMouseMove}
              className="flex items-stretch gap-6 overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing pb-4 pt-1 px-1"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedArticle(card)}
                  style={{ scrollSnapAlign: 'start' }}
                  className="w-[280px] sm:w-[310px] shrink-0 bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-[11px] font-semibold tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#008767]" />
                        {card.tag}
                      </span>

                      <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-[#008767] group-hover:text-white group-hover:border-[#008767] transition-all">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="font-headline font-bold text-gray-900 text-xl leading-snug tracking-tight mb-2 group-hover:text-[#008767] transition-colors">
                      {card.title}
                    </h3>

                    <p className="font-text text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2 mb-5">
                      {card.subtitle}
                    </p>
                  </div>

                  <div
                    className={`w-full h-[160px] sm:h-[175px] rounded-xl ${card.bgGradient} flex items-center justify-center p-3 overflow-hidden relative border border-black/5 shadow-inner`}
                  >
                    {card.character}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border border-gray-100 animate-scale-up text-gray-900"
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
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-900">
                {selectedArticle.tag}
              </span>
              <span>•</span>
              <span>{selectedArticle.fullStory.readTime}</span>
              <span>•</span>
              <span>{selectedArticle.fullStory.date}</span>
            </div>

            <h2 className="font-headline font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight mb-4">
              {selectedArticle.title}
            </h2>

            <div className={`w-full h-48 sm:h-56 rounded-2xl ${selectedArticle.bgGradient} flex items-center justify-center p-4 mb-6 shadow-inner`}>
              {selectedArticle.character}
            </div>

            <div className="flex items-center gap-3 pb-6 border-b border-gray-100 mb-6">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                {selectedArticle.fullStory.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{selectedArticle.fullStory.author}</p>
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
                  className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
