import React, { useState } from 'react';
import Footer from './Footer';

export default function AiTestimonialsPage({ onNavigate }) {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Testimonials', href: '#testimonials', active: true },
    { label: "FAQ's", href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const industries = ['All', 'E-Commerce & Retail', 'Logistics & Supply Chain', 'SaaS & Agencies', 'Finance & Accounting'];

  const caseStudies = [
    {
      company: 'OmniStore Direct',
      industry: 'E-Commerce & Retail',
      logo: 'OSD',
      connectedSources: 'Shopify Store + 6 Google Sheets',
      quote: 'We connected our e-commerce site and master inventory Google Sheet. The AI Brain spotted a silent checkout calculation bug that was inflating shipping quotes, costing us thousands in lost sales. It formulated the counter-measure within 15 minutes.',
      author: 'Marcus Vance',
      role: 'Head of E-Commerce Operations',
      impact: [
        { label: 'Cart Conversion Recovery', val: '+28.4% Lift' },
        { label: 'Sheet Errors Auto-Fixed', val: '142 Formulas' },
        { label: 'Setup Time', val: '4 Minutes' }
      ]
    },
    {
      company: 'LogiFlow Freight',
      industry: 'Logistics & Supply Chain',
      logo: 'LF',
      quote: 'Our dispatch team tracked 800+ shipments a day across 14 Google Sheets. When supplier delivery dates drifted, we used to get blindsided. Now, the AI Brain continuously correlates our tracking sheets with warehouse ERP and triggers auto-reordering counter-measures.',
      author: 'Aria Thorne',
      role: 'VP of Global Logistics',
      impact: [
        { label: 'Emergency Freight Cut', val: '62% Reduction' },
        { label: 'Stockout Prevention', val: '99.4% SKU Uptime' },
        { label: 'Time Saved / Week', val: '32 Hours' }
      ]
    },
    {
      company: 'ScaleMetric SaaS',
      industry: 'SaaS & Agencies',
      logo: 'SM',
      quote: 'We plugged our SaaS landing page, Stripe billing DB, and customer churn Google Sheet into Brynex. The AI Brain pinpointed that users dropping off on our pricing page were on mobile iOS devices, generated the fix, and increased trial sign-ups immediately.',
      author: 'Kavita Patel',
      role: 'Chief Growth Officer',
      impact: [
        { label: 'Mobile Sign-Up Rate', val: '+41% Increase' },
        { label: 'Churn Root Cause', val: 'Diagnosed in 1 hr' },
        { label: 'Monthly ARR Impact', val: '+$84,000' }
      ]
    },
    {
      company: 'Apex Accounting Group',
      industry: 'Finance & Accounting',
      logo: 'AAG',
      quote: 'Reconciling multi-currency client books across Tally, QuickBooks, and client-submitted Google Sheets used to take 3 weeks every month-end. Brynex AI Brain audits every cell, finds transaction discrepancies, and applies verified reconciliations.',
      author: 'Daniel Craig',
      role: 'Managing Partner',
      impact: [
        { label: 'Month-End Close', val: 'From 21 Days to 2 Hrs' },
        { label: 'Reconciliation Drift', val: '0.00% Zero Error' },
        { label: 'Client Accounts Synced', val: '85+ Sheets' }
      ]
    }
  ];

  const filteredStudies = selectedIndustry === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.industry === selectedIndustry);

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

      {/* Hero Header */}
      <section className="w-full pt-16 pb-12 px-6 sm:px-10 lg:px-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
            <span>REAL RESULTS FROM REAL WORKFLOWS</span>
          </div>

          <h1 className="font-headline font-normal text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#111827] max-w-4xl mb-6">
            See how companies use our AI Brain to fix spreadsheet & website issues.
          </h1>

          <p className="font-text text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl mb-10">
            From e-commerce sites to high-stakes Google Sheets and finance records, explore how businesses connect their data to discover root causes and deploy counter-measures.
          </p>

          {/* Industry Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full pb-2">
            {industries.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedIndustry === ind
                    ? 'bg-black text-white shadow-md scale-[1.02]'
                    : 'bg-white text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="w-full py-16 px-6 sm:px-10 lg:px-16 bg-gray-50/50 flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((cs, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-black text-white font-bold text-sm flex items-center justify-center">
                      {cs.logo}
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-base text-gray-900">{cs.company}</h3>
                      <span className="text-xs text-[#008767] font-semibold">{cs.industry}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-[#008767] text-[10px] font-bold border border-emerald-200">
                    Connected & Verified
                  </span>
                </div>

                <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-xs font-mono text-gray-600 mb-6">
                  🔗 Connected: {cs.connectedSources}
                </div>

                <p className="font-text text-base sm:text-lg text-gray-700 leading-relaxed italic mb-8">
                  "{cs.quote}"
                </p>
              </div>

              <div>
                <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 mb-6">
                  {cs.impact.map((imp, i) => (
                    <div key={i} className="text-center">
                      <span className="text-xs font-bold text-gray-900 block font-mono mb-0.5">{imp.val}</span>
                      <span className="text-[10px] text-gray-400 block truncate">{imp.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <div>
                    <span className="font-bold text-gray-900 block">{cs.author}</span>
                    <span>{cs.role}</span>
                  </div>
                  <span className="text-[#008767] font-semibold">AI Brain Powered</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reusable Universal Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
