import React, { useState } from 'react';
import Footer from './Footer';

export default function AiAboutPage({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about', active: true },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: "FAQ's", href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const pillars = [
    {
      title: 'Plug In Any Site or Sheet in Minutes',
      desc: 'No expensive custom engineering or migration. Connect your Google Sheets, e-commerce storefronts, custom web apps, or SQL databases with 1-click zero-code connectors.',
      icon: (
        <svg className="w-6 h-6 text-[#008767]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: 'Autonomous Issue Discovery',
      desc: 'The AI Brain continuously audits formulas, transaction logs, inventory tallies, and user funnel drop-offs to pinpoint exact bottlenecks before they turn into losses.',
      icon: (
        <svg className="w-6 h-6 text-[#008767]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: 'Automated Counter-Measures',
      desc: 'Traditional dashboards just display red charts. Our AI Brain formulates step-by-step counter-measures and can automatically update spreadsheets or notify teams.',
      icon: (
        <svg className="w-6 h-6 text-[#008767]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const systems = [
    { name: 'Google Sheets & Excel', desc: 'Auto-audit formulas, detect reconciliation mismatches, and fix broken inventory models.' },
    { name: 'Websites & Web Apps', desc: 'Track conversion bottlenecks, latency spikes, and automated user journey triage.' },
    { name: 'Production Databases', desc: 'Cross-reference orphaned records, billing drift, and automate query optimization.' },
    { name: 'CRMs & Operational Tools', desc: 'Unstick stalled customer accounts and auto-generate task recovery sequences.' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-text selection:bg-[#008767] selection:text-white">
      {/* Header */}
      <header className="w-full border-b border-gray-200 sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm">
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
                onClick={() => onNavigate && onNavigate(link.href.replace('#', ''))}
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
              className="px-5 py-2 rounded-full bg-[#008767] hover:bg-[#007559] text-white text-xs font-semibold tracking-wide transition-all shadow-[0_0_15px_rgba(0,135,103,0.3)] cursor-pointer"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-gray-700"
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
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigate) onNavigate(link.href.replace('#', ''));
                }}
                className="block w-full text-left text-base font-semibold text-gray-700 hover:text-black py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Mission */}
      <section className="w-full pt-16 pb-20 px-6 sm:px-10 lg:px-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
            <span>OUR MISSION</span>
          </div>

          <h1 className="font-headline font-normal text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#111827] max-w-4xl mb-6">
            Connecting any company's websites, Google Sheets & software to an AI Brain that diagnoses issues and executes solutions.
          </h1>

          <p className="font-text text-base sm:text-xl text-gray-500 leading-relaxed max-w-3xl mb-12">
            Every business relies on messy Google Sheets, websites, e-commerce stores, and software. When problems arise — formula errors, conversion drops, inventory shortages — teams waste days troubleshooting. Brynex gives you a private AI Brain that continuously monitors your systems, uncovers the root cause, and formulates immediate counter-measures.
          </p>

          {/* Value Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-100">
            <div>
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#111827] mb-1">5 Mins</div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Sheet & Site Setup</div>
            </div>
            <div>
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#008767] mb-1">100%</div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Automated Diagnosis</div>
            </div>
            <div>
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#111827] mb-1">Instant</div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Counter-Measure Plan</div>
            </div>
            <div>
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#111827] mb-1">Zero-Code</div>
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Plug & Play Logic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="font-headline font-normal text-3xl sm:text-4xl text-[#111827] tracking-tight mb-4">
              Why Companies Trust Brynex AI Brain
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              We empower modern teams to work with maximum effectiveness by eliminating spreadsheet chaos and operational blindspots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-[#008767]/20 flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="font-headline font-bold text-xl text-gray-900 mb-3">{p.title}</h3>
                <p className="font-text text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Systems */}
      <section className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="font-headline font-normal text-3xl sm:text-4xl text-[#111827] tracking-tight mb-4">
              What Can You Connect?
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Our AI Brain speaks the language of all modern business tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-headline font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#008767]" />
                    {s.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
