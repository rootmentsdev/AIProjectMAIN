import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function AiPricingPage({ onNavigate }) {
  const [isAnnual, setIsAnnual] = useState(true);
  const [sheetsCount, setSheetsCount] = useState(8);
  const [troubleshootingHours, setTroubleshootingHours] = useState(20);

  // Calculated ROI based on hours spent troubleshooting spreadsheets & site issues
  const monthlySavings = Math.round(troubleshootingHours * 4.3 * 65 + sheetsCount * 180);
  const annualSavings = monthlySavings * 12;

  const plans = [
    {
      name: 'Starter AI Brain',
      desc: 'Perfect for small teams & startups running their business on Google Sheets and a website.',
      priceMonthly: '$49',
      priceAnnual: '$39',
      period: '/ month',
      popular: false,
      features: [
        'Connect up to 5 Google Sheets or Excel files',
        '1 Website or E-Commerce Store connector',
        'Continuous automated error & formula auditing',
        'Instant Root-Cause Diagnostics alerts',
        'AI Counter-Measure Recommendations',
        '3 Team Member Seats'
      ],
      cta: 'Start 14-Day Free Pilot',
      ctaType: 'outline'
    },
    {
      name: 'Growth Swarm Brain',
      desc: 'For scaling companies with multiple websites, complex Google Sheets, databases, and CRMs.',
      priceMonthly: '$149',
      priceAnnual: '$119',
      period: '/ month',
      popular: true,
      features: [
        'Connect Unlimited Google Sheets & Excel files',
        'Up to 5 Websites, Web Apps & Portals',
        'Direct Database Connectors (Postgres, MySQL)',
        'Autonomous Counter-Measure Execution & Webhooks',
        'Slack & Email Counter-Measure Notifications',
        'Multi-Agent Cross-System Correlation Analysis',
        '15 Team Member Seats + Priority Support'
      ],
      cta: 'Deploy Growth Brain',
      ctaType: 'primary'
    },
    {
      name: 'Enterprise Custom',
      desc: 'For organizations with custom internal platforms, proprietary APIs, and dedicated VPC requirements.',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      period: '',
      popular: false,
      features: [
        'Unlimited Google Sheets, Sites, Databases & ERPs',
        'Custom Webhook & API Counter-Measure Handlers',
        'On-Premise or Customer-Owned VPC Deployment',
        'Dedicated Solutions Architect & SLA',
        'Zero-Trust Data Isolation & Custom Security Rules',
        'Unlimited Team Seats'
      ],
      cta: 'Contact Solutions Team',
      ctaType: 'outline'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-text selection:bg-[#008767] selection:text-white">
      {/* Unified Professional Header */}
      <Header currentPage="pricing" onNavigate={onNavigate} forceTheme="light" />

      {/* Hero Header */}
      <section className="w-full pt-16 pb-12 px-6 sm:px-10 lg:px-16 bg-white border-b border-gray-100 text-center relative overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-100/35 rounded-full blur-3xl pointer-events-none animate-aurora" />
        <div className="absolute -bottom-10 right-10 w-80 h-80 bg-teal-100/25 rounded-full blur-3xl pointer-events-none animate-float-slow" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px] animate-radar" />
            <span>TRANSPARENT VALUE PRICING</span>
          </div>

          <h1 className="font-headline font-normal text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#111827] mb-6">
            Predictable Plans for Businesses of Every Scale
          </h1>

          <p className="font-text text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Stop losing hours searching for broken formulas, conversion leaks, and operational bottlenecks. Connect your tools and let AI find solutions for you.
          </p>

          {/* Annual Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-gray-100 border border-gray-200 shadow-inner">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                !isAnnual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-black'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                isAnnual ? 'bg-black text-white shadow-sm' : 'text-gray-500 hover:text-black'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-[#008767] text-[10px] text-white font-bold animate-pulse">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="w-full py-16 px-6 sm:px-10 lg:px-16 bg-gray-50/50 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`smooth-card bg-white rounded-3xl p-8 border flex flex-col justify-between relative ${
                p.popular
                  ? 'border-[#008767] shadow-xl ring-2 ring-[#008767]/20 scale-[1.02] hover:scale-[1.03]'
                  : 'border-gray-200 shadow-sm hover:border-[#008767]/30'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#008767] text-white text-[11px] font-bold tracking-wider uppercase shadow-md animate-float-slow">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="font-headline font-bold text-2xl text-gray-900 mb-2">{p.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 min-h-[36px]">{p.desc}</p>

                <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-gray-100">
                  <span className="font-headline font-extrabold text-4xl text-gray-900">
                    {isAnnual ? p.priceAnnual : p.priceMonthly}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">{p.period}</span>
                </div>

                <div className="space-y-3.5 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Included Capabilities:
                  </span>
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-gray-700">
                      <svg className="w-4 h-4 text-[#008767] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate && onNavigate(p.ctaType === 'primary' ? 'get-started' : 'contact')}
                className={`w-full py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  p.ctaType === 'primary'
                    ? 'shimmer-btn bg-[#008767] hover:bg-[#007559] text-white shadow-lg shadow-[#008767]/25'
                    : 'bg-black hover:bg-gray-800 text-white'
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Spreadsheet & Site Savings Calculator */}
      <section className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-[#008767] text-xs font-bold mb-3 border border-emerald-200">
              ESTIMATE YOUR SAVINGS
            </span>
            <h2 className="font-headline font-normal text-3xl sm:text-4xl text-[#111827] tracking-tight mb-4">
              How Much Time & Money Can AI Counter-Measures Save You?
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Adjust the sliders below to calculate how much manual spreadsheet auditing and site troubleshooting you eliminate every month.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Sliders */}
            <div className="lg:col-span-6 space-y-8 bg-gray-50/70 p-8 rounded-3xl border border-gray-200">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-gray-800">Operational Google Sheets / Data Sources</label>
                  <span className="font-mono text-sm font-bold text-[#008767]">{sheetsCount} Sheets</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={sheetsCount}
                  onChange={(e) => setSheetsCount(Number(e.target.value))}
                  className="w-full accent-[#008767] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                  <span>1 Sheet</span>
                  <span>25 Sheets</span>
                  <span>50+ Sheets</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-gray-800">Weekly Hours Spent Fixing Spreadsheet / Site Issues</label>
                  <span className="font-mono text-sm font-bold text-[#008767]">{troubleshootingHours} hrs / week</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={troubleshootingHours}
                  onChange={(e) => setTroubleshootingHours(Number(e.target.value))}
                  className="w-full accent-[#008767] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                  <span>5 hrs</span>
                  <span>40 hrs</span>
                  <span>80+ hrs</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Matrix */}
            <div className="lg:col-span-6 bg-[#090e11] text-white p-8 sm:p-10 rounded-3xl border border-gray-800 shadow-2xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">
                  Estimated Annual Value Recovered
                </span>
                <div className="font-headline font-extrabold text-4xl sm:text-5xl text-emerald-400 mb-6">
                  ${annualSavings.toLocaleString()} / year
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-800">
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 block mb-1">Time Reclaimed / Month</span>
                    <span className="text-lg font-bold text-cyan-300 font-mono">
                      {Math.round(troubleshootingHours * 4.3)} hrs
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 block mb-1">Bottlenecks Auto-Resolved</span>
                    <span className="text-lg font-bold text-purple-300 font-mono">100% Automated</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate && onNavigate('get-started')}
                className="mt-8 w-full py-3.5 rounded-xl bg-[#008767] hover:bg-[#007559] text-white text-xs font-bold transition-all cursor-pointer shadow-lg"
              >
                Connect Your Google Sheets & Sites Free →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Universal Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
