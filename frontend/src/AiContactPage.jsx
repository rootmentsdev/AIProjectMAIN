import React, { useState } from 'react';
import Footer from './Footer';

export default function AiContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '10-50',
    connectors: ['Google Sheets & Excel', 'Live Website / Web App'],
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: "FAQ's", href: '#faqs' },
    { label: 'Contact', href: '#contact', active: true },
  ];

  const connectorOptions = [
    'Google Sheets & Excel',
    'Live Website / E-Commerce',
    'Custom Web App / Portal',
    'PostgreSQL / MySQL DB',
    'QuickBooks / Tally',
    'Salesforce / HubSpot CRM'
  ];

  const toggleConnector = (c) => {
    if (formData.connectors.includes(c)) {
      setFormData({ ...formData, connectors: formData.connectors.filter(item => item !== c) });
    } else {
      setFormData({ ...formData, connectors: [...formData.connectors, c] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

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

      {/* Main Form & Contact Grid */}
      <section className="w-full py-16 px-6 sm:px-10 lg:px-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-5 shadow-sm">
                <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
                <span>CONNECT YOUR BUSINESS</span>
              </div>

              <h1 className="font-headline font-normal text-4xl sm:text-5xl text-[#111827] leading-[1.15] tracking-tight mb-4">
                Connect your Google Sheets, Sites or Tools to our AI Brain
              </h1>

              <p className="font-text text-sm sm:text-base text-gray-500 leading-relaxed">
                Tell us about your business systems. Our team will help you connect your Google Sheets, website, or databases and demonstrate live issue diagnostics and automated counter-measures.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 space-y-4">
              <h3 className="font-headline font-bold text-base text-gray-900">What Happens Next?</h3>
              <div className="space-y-3 text-xs text-gray-600">
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#008767] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                  <span>We review your connected sources (Google Sheets, website, or DBs).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#008767] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                  <span>Our AI Brain runs an initial root-cause audit to surface hidden bottlenecks.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#008767] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                  <span>You receive tailored counter-measures and automated resolution workflows.</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Direct Team Email</span>
                <span className="font-mono text-sm font-bold text-[#008767]">support@brynex.ai</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-50 text-[#008767]">
                &lt; 2hr Response
              </span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl relative">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-[#008767] mx-auto flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-headline font-bold text-2xl sm:text-3xl text-gray-900">
                  Request Received!
                </h3>
                <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. We will help you connect your <strong>{formData.connectors.join(', ')}</strong> and configure your automated counter-measures.
                </p>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        teamSize: '10-50',
                        connectors: ['Google Sheets & Excel'],
                        notes: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-headline font-bold text-2xl text-gray-900 mb-1">
                    Connect Your System to AI Brain
                  </h2>
                  <p className="text-xs text-gray-500">
                    Complimentary setup consultation & live problem diagnosis.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Taylor"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#008767] focus:ring-2 focus:ring-[#008767]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#008767] focus:ring-2 focus:ring-[#008767]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Commerce"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#008767] focus:ring-2 focus:ring-[#008767]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 bg-white focus:outline-none focus:border-[#008767] focus:ring-2 focus:ring-[#008767]/20"
                    >
                      <option value="1-10">1 - 10 Employees</option>
                      <option value="10-50">10 - 50 Employees</option>
                      <option value="50-250">50 - 250 Employees</option>
                      <option value="250+">250+ Enterprise</option>
                    </select>
                  </div>
                </div>

                {/* Connectors Checkbox Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                    What Systems Do You Want to Connect to the AI Brain?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {connectorOptions.map((opt) => {
                      const isSelected = formData.connectors.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleConnector(opt)}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50 border-[#008767] text-[#008767] shadow-sm'
                              : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <span className="mr-1.5">{isSelected ? '✓' : '+'}</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    What Key Problems / Bottlenecks Do You Want to Solve?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="E.g., Formula errors causing inventory shortfalls in Google Sheets, or website checkout cart drop-offs..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#008767] focus:ring-2 focus:ring-[#008767]/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#008767] hover:bg-[#007559] text-white text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Connect My Systems & Get Counter-Measures →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Reusable Universal Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
