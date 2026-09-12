import React, { useState } from 'react';
import InteractiveDotGrid from './InteractiveDotGrid';
import Footer from './Footer';
import { EngineVisual, SystemConnectorVisual } from './AiVisualIllustrations';

export default function AiBrainPage({ onNavigate }) {
  const [activeStep, setActiveStep] = useState('WELCOME');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Business Form State
  const [formData, setFormData] = useState({
    businessName: '',
    industry: 'Retail',
    branches: '',
    employees: '1-100',
    country: 'India',
    state: 'Kerala',
  });
  const [selectedBusinessType, setSelectedBusinessType] = useState('RETAIL');

  // Engines State
  const [selectedEngines, setSelectedEngines] = useState({
    hr: true,
    sales: true,
    finance: true,
    marketing: true,
    operations: true,
  });

  // Connect Systems State
  const [connectedSystems, setConnectedSystems] = useState({
    hrms: true,
    erp: false,
    crm: false,
    pos: false,
    accounting: false,
    inventory: false,
    spreadsheets: false,
    custom: false,
  });

  const steps = [
    'WELCOME',
    'BUSINESS',
    'ENGINES',
    'CONNECT',
    'PLAN',
    'LEARNING',
  ];

  const nextStep = () => {
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex > 0) {
      setActiveStep(steps[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: "FAQ's", href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('home', href);
    }
  };

  const toggleConnection = (id) => {
    setConnectedSystems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleEngine = (id) => {
    setSelectedEngines((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const businessTypes = [
    {
      id: 'jewelry-1',
      label: 'JEWELRY',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="6 3 18 3 22 9 12 22 2 9 6 3" />
        </svg>
      ),
    },
    {
      id: 'health-1',
      label: 'HEALTH CARE',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="12" y1="9" x2="12" y2="15" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      ),
    },
    {
      id: 'education-1',
      label: 'EDUCATION',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      id: 'education-2',
      label: 'EDUCATION',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      id: 'fashion-1',
      label: 'FASHION',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
    },
    {
      id: 'retail-1',
      label: 'RETAIL',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      ),
    },
    {
      id: 'electronics-1',
      label: 'ELECTRONICS',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      id: 'electronics-2',
      label: 'ELECTRONICS',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      id: 'jewelry-2',
      label: 'JEWELRY',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="6 3 18 3 22 9 12 22 2 9 6 3" />
        </svg>
      ),
    },
    {
      id: 'health-2',
      label: 'HEALTH CARE',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="12" y1="9" x2="12" y2="15" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      ),
    },
    {
      id: 'education-3',
      label: 'EDUCATION',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      id: 'education-4',
      label: 'EDUCATION',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
  ];

  const connectors = [
    { id: 'hrms', name: 'HRMS' },
    { id: 'erp', name: 'ERP' },
    { id: 'crm', name: 'CRM' },
    { id: 'pos', name: 'POS Systems' },
    { id: 'accounting', name: 'Accounting' },
    { id: 'inventory', name: 'Inventory' },
    { id: 'spreadsheets', name: 'Spreadsheets' },
    { id: 'custom', name: 'Custom / API' },
  ];

  const currentStepIndex = steps.indexOf(activeStep);
  const hasPrevStep = currentStepIndex > 0;
  const hasNextStep = currentStepIndex < steps.length - 1;

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 relative flex flex-col selection:bg-[#008767] selection:text-white overflow-x-hidden">
      {/* Seamless Interactive Dot Grid Background */}
      <InteractiveDotGrid theme="light" />

      {/* Floating Left Arrow (Prev Space) */}
      {hasPrevStep && (
        <button
          type="button"
          onClick={prevStep}
          className="fixed left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:border-black text-gray-800 hover:text-white hover:bg-black transition-all duration-300 flex items-center justify-center group cursor-pointer active:scale-95"
          aria-label={`Back to ${steps[currentStepIndex - 1]}`}
          title={`Back to ${steps[currentStepIndex - 1]}`}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Floating Right Arrow (Next Space) */}
      {hasNextStep && (
        <button
          type="button"
          onClick={nextStep}
          className="fixed right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] hover:border-black text-gray-800 hover:text-white hover:bg-black transition-all duration-300 flex items-center justify-center group cursor-pointer active:scale-95"
          aria-label={`Continue to ${steps[currentStepIndex + 1]}`}
          title={`Continue to ${steps[currentStepIndex + 1]}`}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Top Header */}
      <header className="w-full border-b border-gray-100/90 relative z-30 backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('home')}
            className="text-gray-950 text-base font-bold tracking-wider uppercase hover:opacity-80 transition-opacity flex items-center cursor-pointer"
          >
            LOGO HERE
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-gray-500 hover:text-black transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button with Animated Hamburger-to-X */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-gray-800 hover:text-black focus:outline-none rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out z-40 overflow-hidden ${
            mobileMenuOpen
              ? 'max-h-[460px] opacity-100 py-6'
              : 'max-h-0 opacity-0 py-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col px-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-semibold text-gray-700 hover:text-black transition-colors py-2 border-b border-gray-100"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex flex-col items-center pt-8 md:pt-12 pb-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        {/* Step Navigation Pill Bar */}
        <div className="w-full flex items-center justify-center overflow-x-auto no-scrollbar py-2 px-4 mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 p-1 min-w-max mx-auto">
            {steps.map((step) => {
              const isActive = activeStep === step;
              return (
                <button
                  key={step}
                  type="button"
                  onClick={() => setActiveStep(step)}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                    isActive
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-white/80 hover:bg-white text-gray-600 hover:text-black border border-gray-200 hover:border-gray-300 backdrop-blur-sm'
                  }`}
                >
                  {step}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 1. STEP: WELCOME */}
        {/* ========================================================= */}
        {activeStep === 'WELCOME' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl w-full my-auto py-6 sm:py-12 animate-fade-in">
            {/* Pill Badge: [ ■ AI INTELLIGENCE ] */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-7 shadow-sm">
              <span className="w-2 h-2 rounded-[2px] bg-[#008767] shrink-0" />
              <span>AI INTELLIGENCE</span>
            </div>

            {/* Headline */}
            <h1 className="font-headline font-normal text-4xl sm:text-5xl md:text-[58px] lg:text-[64px] leading-[1.12] tracking-tight text-gray-950 mb-5">
              Welcome to AI Brain
            </h1>

            {/* Subtitle */}
            <p className="font-text text-gray-500 font-normal text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-2 mb-10">
              Let's build an AI that understands your business, detects risks before they happen, and helps your team make smarter decisions every day.
            </p>

            {/* Arrow Navigation to Business Space */}
            <div className="flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={nextStep}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-black hover:bg-gray-900 text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-xl active:scale-95 cursor-pointer"
              >
                <span>Continue to Business</span>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
              <span className="text-xs text-gray-400">Step 1 of 4 • Set up your organization</span>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. STEP: BUSINESS */}
        {/* ========================================================= */}
        {activeStep === 'BUSINESS' && (
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center animate-fade-in">
            {/* Header Title & Subtitle */}
            <h1 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-950 mb-3 text-center">
              Tell us about your business
            </h1>
            <p className="font-text text-gray-500 font-normal text-sm sm:text-base max-w-xl mx-auto text-center leading-relaxed mb-10 px-2">
              We'll personalize your AI Business Brain based on your organization's specific DNA.
            </p>

            {/* Form Fields: 2 Columns */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-12">
              {/* Business Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">Business Name</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Example pvt ltd"
                  className="w-full h-12 px-4 rounded-xl bg-gray-100/80 border border-transparent hover:border-gray-200 focus:border-[#008767] focus:bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition-all"
                />
              </div>

              {/* Industry */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">Industry</label>
                <div className="relative">
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full h-12 px-4 pr-10 rounded-xl bg-gray-100/80 border border-transparent hover:border-gray-200 focus:border-[#008767] focus:bg-white text-sm text-gray-800 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="Retail">e.g. Retail</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Technology">Technology</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Number of Branches */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">Number of Branches</label>
                <input
                  type="text"
                  value={formData.branches}
                  onChange={(e) => setFormData({ ...formData, branches: e.target.value })}
                  placeholder="e.g. Example pvt ltd"
                  className="w-full h-12 px-4 rounded-xl bg-gray-100/80 border border-transparent hover:border-gray-200 focus:border-[#008767] focus:bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition-all"
                />
              </div>

              {/* Number of Employees */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">Number of Employees</label>
                <div className="relative">
                  <select
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    className="w-full h-12 px-4 pr-10 rounded-xl bg-gray-100/80 border border-transparent hover:border-gray-200 focus:border-[#008767] focus:bg-white text-sm text-gray-800 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="1-100">e.g. 1-100</option>
                    <option value="101-500">101-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Country */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">Country</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. India"
                  className="w-full h-12 px-4 rounded-xl bg-gray-100/80 border border-transparent hover:border-gray-200 focus:border-[#008767] focus:bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition-all"
                />
              </div>

              {/* State */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-700">State</label>
                <div className="relative">
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full h-12 px-4 pr-10 rounded-xl bg-gray-100/80 border border-transparent hover:border-gray-200 focus:border-[#008767] focus:bg-white text-sm text-gray-800 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="Kerala">e.g. Kerala</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Select Business Type Header */}
            <div className="w-full text-center mb-6">
              <h3 className="font-headline font-semibold text-base sm:text-lg text-gray-900 tracking-tight">
                Select Business Type
              </h3>
            </div>

            {/* Business Types 4-Column Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
              {businessTypes.map((item) => {
                const isSelected = selectedBusinessType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedBusinessType(item.id)}
                    className={`h-24 rounded-xl flex flex-col items-center justify-center gap-2.5 p-3 transition-all duration-200 cursor-pointer text-center select-none ${
                      isSelected
                        ? 'border-2 border-[#008767] bg-white shadow-md ring-2 ring-[#008767]/10'
                        : 'border border-gray-200 bg-white/70 hover:bg-white hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="text-[#008767]">{item.icon}</div>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-gray-800 uppercase">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Action Bar (Prev / Next Buttons) */}
            <div className="w-full flex items-center justify-between pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 hover:border-gray-300 bg-white text-gray-700 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-black hover:bg-gray-900 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Next: AI Engines</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 3. STEP: ENGINES */}
        {/* ========================================================= */}
        {activeStep === 'ENGINES' && (
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            {/* Headline */}
            <h1 className="font-headline font-normal text-4xl sm:text-5xl md:text-[54px] text-center tracking-tight text-gray-950 mb-3 leading-[1.15]">
              Choose your<br />AI Intelligence Engines
            </h1>
            <p className="font-text text-gray-500 font-normal text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed mb-10 px-2">
              Select the core business functions your AI should continuously monitor, analyze, and optimize.
            </p>

            {/* Engines Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
              {/* 1. HR Intelligence */}
              <div
                onClick={() => toggleEngine('hr')}
                className={`rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md ${
                  selectedEngines.hr ? 'border-[#008767] ring-2 ring-[#008767]/20' : 'border-gray-200/90 hover:border-gray-300'
                }`}
              >
                {/* AI Visual */}
                <div className="mb-6">
                  <EngineVisual type="hr" />
                </div>

                <h3 className="font-headline font-bold text-lg text-gray-950 mb-2">
                  HR Intelligence
                </h3>
                <p className="font-text text-xs text-gray-500 mb-4 leading-relaxed">
                  Autonomous oversight of talent lifecycle and workforce health.
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-text">
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Attendance & Leave</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Performance Benchmarking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Hiring Pipeline Velocity</span>
                  </li>
                </ul>
              </div>

              {/* 2. Sales Intelligence */}
              <div
                onClick={() => toggleEngine('sales')}
                className={`rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md ${
                  selectedEngines.sales ? 'border-[#008767] ring-2 ring-[#008767]/20' : 'border-gray-200/90 hover:border-gray-300'
                }`}
              >
                {/* AI Visual */}
                <div className="mb-6">
                  <EngineVisual type="sales" />
                </div>

                <h3 className="font-headline font-bold text-lg text-gray-950 mb-2">
                  Sales Intelligence
                </h3>
                <p className="font-text text-xs text-gray-500 mb-4 leading-relaxed">
                  Predictive revenue modeling and lead scoring precision.
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-text">
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Attendance & Leave</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Performance Benchmarking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Hiring Pipeline Velocity</span>
                  </li>
                </ul>
              </div>

              {/* 3. Finance Intelligence (Spans 2 columns on desktop) */}
              <div
                onClick={() => toggleEngine('finance')}
                className={`md:col-span-2 rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md ${
                  selectedEngines.finance ? 'border-[#008767] ring-2 ring-[#008767]/20' : 'border-gray-200/90 hover:border-gray-300'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="font-headline font-bold text-lg text-gray-950 mb-2">
                      Finance Intelligence
                    </h3>
                    <p className="font-text text-xs text-gray-500 mb-4 leading-relaxed">
                      Autonomous oversight of talent lifecycle and workforce health.
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-600 font-text">
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400 font-bold">-</span>
                        <span>Attendance & Leave</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400 font-bold">-</span>
                        <span>Performance Benchmarking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400 font-bold">-</span>
                        <span>Hiring Pipeline Velocity</span>
                      </li>
                    </ul>
                  </div>

                  {/* AI Visual on the right */}
                  <div>
                    <EngineVisual type="finance" />
                  </div>
                </div>
              </div>

              {/* 4. Marketing Intelligence */}
              <div
                onClick={() => toggleEngine('marketing')}
                className={`rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md ${
                  selectedEngines.marketing ? 'border-[#008767] ring-2 ring-[#008767]/20' : 'border-gray-200/90 hover:border-gray-300'
                }`}
              >
                {/* AI Visual */}
                <div className="mb-6">
                  <EngineVisual type="marketing" />
                </div>

                <h3 className="font-headline font-bold text-lg text-gray-950 mb-2">
                  Marketing Intelligence
                </h3>
                <p className="font-text text-xs text-gray-500 mb-4 leading-relaxed">
                  Autonomous oversight of talent lifecycle and workforce health.
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-text">
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Attendance & Leave</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Performance Benchmarking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Hiring Pipeline Velocity</span>
                  </li>
                </ul>
              </div>

              {/* 5. Operations Intelligence */}
              <div
                onClick={() => toggleEngine('operations')}
                className={`rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md ${
                  selectedEngines.operations ? 'border-[#008767] ring-2 ring-[#008767]/20' : 'border-gray-200/90 hover:border-gray-300'
                }`}
              >
                {/* AI Visual */}
                <div className="mb-6">
                  <EngineVisual type="operations" />
                </div>

                <h3 className="font-headline font-bold text-lg text-gray-950 mb-2">
                  Operations Intelligence
                </h3>
                <p className="font-text text-xs text-gray-500 mb-4 leading-relaxed">
                  Autonomous oversight of talent lifecycle and workforce health.
                </p>
                <ul className="space-y-1.5 text-xs text-gray-600 font-text">
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Attendance & Leave</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Performance Benchmarking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <span>Hiring Pipeline Velocity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 4. STEP: CONNECT */}
        {/* ========================================================= */}
        {activeStep === 'CONNECT' && (
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            {/* Headline */}
            <h1 className="font-headline font-normal text-4xl sm:text-5xl md:text-[54px] text-center tracking-tight text-gray-950 mb-3 leading-[1.15]">
              Connect your<br />Business Systems
            </h1>
            <p className="font-text text-gray-500 font-normal text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed mb-10 px-2">
              Securely bridge your existing operational data. AI Brain syncs in real-time to automate your executive insights.
            </p>

            {/* 8 Connector Cards (4 columns on desktop) */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
              {connectors.map((item) => {
                const isConnected = connectedSystems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleConnection(item.id)}
                    className={`rounded-2xl border bg-white p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer ${
                      isConnected ? 'border-[#008767] ring-1 ring-[#008767]/30' : 'border-gray-200/90 hover:border-gray-300'
                    }`}
                  >
                    {/* Media / AI Brand Preview Box */}
                    <div className="mb-4">
                      <SystemConnectorVisual id={item.id} />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="font-headline font-bold text-base text-gray-950 mb-1.5">
                        {item.name}
                      </h4>
                      <p className="font-text text-xs text-gray-500 mb-3.5 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Cursus convallis id
                      </p>

                      {/* Selection status */}
                      <div className="flex items-center gap-1.5 text-[11px] font-medium">
                        <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-[#008767]' : 'bg-[#f59e0b]'}`} />
                        <span className={isConnected ? 'text-[#008767] font-semibold' : 'text-gray-500'}>
                          {isConnected ? 'Selected' : 'Not Selected'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Banner: "Don't have a software?" */}
            <div className="w-full rounded-2xl sm:rounded-3xl bg-[#f0f2f4] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-headline font-bold text-xl sm:text-2xl text-gray-950 mb-1">
                  Don't have a software?
                </h3>
                <p className="font-text text-xs sm:text-sm text-gray-500">
                  Start with our professional suit of built in business management tools
                </p>
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="shrink-0 px-5 sm:px-6 py-2.5 rounded-xl border border-[#008767] text-[#008767] hover:bg-[#008767] hover:text-white font-semibold text-xs sm:text-sm tracking-wide transition-all cursor-pointer"
              >
                Continue Without Integration
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 5. STEP: PLAN */}
        {/* ========================================================= */}
        {activeStep === 'PLAN' && (
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
            {/* Headline */}
            <h1 className="font-headline font-normal text-4xl sm:text-5xl md:text-[54px] text-center tracking-tight text-gray-950 mb-3 leading-[1.15]">
              Choose your Plan
            </h1>
            <p className="font-text text-gray-500 font-normal text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed mb-12 px-2">
              Turn your business data into smarter decisions-step by step.
            </p>

            {/* 3 Pricing Cards Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch mb-8 pt-4">
              {/* Card 1: Starter */}
              <div className="rounded-3xl border border-gray-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
                <div>
                  <h3 className="font-headline font-bold text-xl sm:text-2xl text-gray-950 mb-2">
                    Starter
                  </h3>
                  <p className="font-text text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
                    Perfect for small businesses getting started with AI.
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-7">
                    <span className="font-headline font-bold text-3xl sm:text-4xl text-gray-950 tracking-tight">
                      ₹499
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 font-text">/month</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 text-xs sm:text-sm text-gray-600 font-text mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>2 Intelligence Engines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>1 Physical Location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>Weekly performance reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>Email support</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full py-3 px-4 rounded-xl border border-[#008767] text-[#008767] hover:bg-[#008767] hover:text-white font-semibold text-xs sm:text-sm tracking-wide transition-all cursor-pointer"
                >
                  Get started
                </button>
              </div>

              {/* Card 2: Growth (Featured / Most Popular) */}
              <div className="relative rounded-3xl bg-black p-7 sm:p-8 flex flex-col justify-between shadow-2xl text-white overflow-visible border border-emerald-500/40 md:-translate-y-2">
                {/* Most Popular Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#008767] text-white text-[10px] font-bold tracking-wider uppercase shadow-lg z-20 whitespace-nowrap">
                  MOST POPULAR
                </div>

                {/* Background Fluid Glow */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-[#008767]/25 via-[#008767]/10 to-transparent" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#008767]/20 blur-2xl" />
                </div>

                <div className="relative z-10">
                  <h3 className="font-headline font-bold text-xl sm:text-2xl text-white mb-2">
                    Growth
                  </h3>
                  <p className="font-text text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
                    Designed for growing businesses with multiple locations.
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-7">
                    <span className="font-headline font-bold text-3xl sm:text-4xl text-white tracking-tight">
                      ₹1,299
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 font-text">/month</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 text-xs sm:text-sm text-gray-300 font-text mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">-</span>
                      <span>All 5 Intelligence Engines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">-</span>
                      <span>Up to 10 locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">-</span>
                      <span>Real-time Recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">-</span>
                      <span>Priority Chat Support</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  className="relative z-10 w-full py-3 px-4 rounded-xl bg-[#008767] hover:bg-[#007559] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
                >
                  Choose Growth
                </button>
              </div>

              {/* Card 3: Enterprise */}
              <div className="rounded-3xl border border-gray-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
                <div>
                  <h3 className="font-headline font-bold text-xl sm:text-2xl text-gray-950 mb-2">
                    Enterprise
                  </h3>
                  <p className="font-text text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
                    Built for large organizations with advanced business needs.
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-7">
                    <span className="font-headline font-bold text-2xl sm:text-3xl text-gray-950 tracking-tight">
                      Custom Pricing
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 text-xs sm:text-sm text-gray-600 font-text mb-8">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>Unlimited Engines & Locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>Custom API Development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>Dedicated Success Manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 font-bold">-</span>
                      <span>On-premise Deployment Option</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full py-3 px-4 rounded-xl border border-[#008767] text-[#008767] hover:bg-[#008767] hover:text-white font-semibold text-xs sm:text-sm tracking-wide transition-all cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 6. STEP: LEARNING (Completion / Submission Success) */}
        {/* ========================================================= */}
        {activeStep === 'LEARNING' && (
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center py-10 sm:py-16 animate-fade-in">
            {/* Green Checkmark Circle */}
            <div className="w-16 h-16 rounded-full bg-[#008767]/10 border border-[#008767]/25 text-[#008767] flex items-center justify-center mb-6 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-[2px] bg-[#008767]" />
              <span>ENTRY SUBMITTED SUCCESSFULLY</span>
            </div>

            {/* Headline */}
            <h1 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl text-gray-950 mb-4 tracking-tight">
              Thank You for Your Time
            </h1>

            {/* Message */}
            <p className="font-text text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10">
              Your entry has been received successfully. Our team will review your business configuration and connect back with you soon to finalize your customized AI Brain setup.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setActiveStep('PLAN')}
                className="px-6 py-3 rounded-full border border-gray-200 hover:border-gray-300 bg-white text-gray-700 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer shadow-xs"
              >
                Back to Plan
              </button>

              <button
                type="button"
                onClick={() => onNavigate && onNavigate('home')}
                className="px-8 py-3 rounded-full bg-[#008767] hover:bg-[#007559] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Return to Home
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
