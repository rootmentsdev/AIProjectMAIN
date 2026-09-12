import React, { useState, useEffect, useRef } from 'react';
import homeVideo from './assets/AI Home Video.mp4';
import homeImage from './assets/HomeImage.png';
import home1 from './assets/Home1.png';
import home2 from './assets/Home2.png';
import InteractiveDotGrid from './InteractiveDotGrid';
import AiBrainPage from './AiBrainPage';
import AiBlogPage from './AiBlogPage';
import AiAboutPage from './AiAboutPage';
import AiHowItWorksPage from './AiHowItWorksPage';
import AiPricingPage from './AiPricingPage';
import AiTestimonialsPage from './AiTestimonialsPage';
import AiFaqsPage from './AiFaqsPage';
import AiContactPage from './AiContactPage';
import Footer from './Footer';
import { HowItWorksVisual } from './AiVisualIllustrations';

export default function App() {
  const videoRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['get-started', 'blog', 'about', 'how-it-works', 'pricing', 'testimonials', 'faqs', 'contact'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: "FAQ's", href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ];

  const fullLine1 = "Empower every business decision";
  const fullLine2 = "with one AI assistant";

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [typingLine, setTypingLine] = useState(1); // 1 = line 1, 2 = line 2, 0 = done
  const [isRevealed, setIsRevealed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reliable video autoplay for mobile browsers (iOS Safari / Low Power Mode)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.playsInline = true;
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.setAttribute('webkit-playsinline', 'true');
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked by browser policy (e.g. low power mode)
        });
      }
    }

    const unlockPlay = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('touchstart', unlockPlay, { once: true, passive: true });
    window.addEventListener('click', unlockPlay, { once: true, passive: true });
    window.addEventListener('scroll', unlockPlay, { once: true, passive: true });

    return () => {
      window.removeEventListener('touchstart', unlockPlay);
      window.removeEventListener('click', unlockPlay);
      window.removeEventListener('scroll', unlockPlay);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['get-started', 'blog', 'about', 'how-it-works', 'pricing', 'testimonials', 'faqs', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page, hash = '') => {
    if (['get-started', 'blog', 'about', 'how-it-works', 'pricing', 'testimonials', 'faqs', 'contact'].includes(page)) {
      setCurrentPage(page);
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setCurrentPage('home');
      if (hash) {
        window.location.hash = hash.replace('#', '');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        window.history.pushState('', document.title, window.location.pathname);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  };

  useEffect(() => {
    let i = 0;
    let j = 0;
    let timer;

    // Delay before typing begins
    timer = setTimeout(() => {
      const typeLine1 = setInterval(() => {
        i++;
        setText1(fullLine1.slice(0, i));
        if (i >= fullLine1.length) {
          clearInterval(typeLine1);
          setTypingLine(2);

          // Natural pause between line 1 and line 2
          setTimeout(() => {
            const typeLine2 = setInterval(() => {
              j++;
              setText2(fullLine2.slice(0, j));
              if (j >= fullLine2.length) {
                clearInterval(typeLine2);
                setTypingLine(0);

                // Pause before blooming background, badge, and buttons
                setTimeout(() => {
                  setIsRevealed(true);
                }, 400);
              }
            }, 60);
          }, 350);
        }
      }, 60);
    }, 350);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (currentPage === 'get-started') return <AiBrainPage onNavigate={navigate} />;
  if (currentPage === 'blog') return <AiBlogPage onNavigate={navigate} />;
  if (currentPage === 'about') return <AiAboutPage onNavigate={navigate} />;
  if (currentPage === 'how-it-works') return <AiHowItWorksPage onNavigate={navigate} />;
  if (currentPage === 'pricing') return <AiPricingPage onNavigate={navigate} />;
  if (currentPage === 'testimonials') return <AiTestimonialsPage onNavigate={navigate} />;
  if (currentPage === 'faqs') return <AiFaqsPage onNavigate={navigate} />;
  if (currentPage === 'contact') return <AiContactPage onNavigate={navigate} />;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-[#008767] selection:text-white relative">
      {/* Header - Always visible */}
      <header className="w-full border-b border-white/[0.08] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              navigate('home');
            }}
            className="text-white text-base font-bold tracking-wider uppercase cursor-pointer hover:opacity-80 transition-opacity"
          >
            LOGO HERE
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.href.replace('#', ''));
                }}
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button with Animated Hamburger-to-X */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-gray-300 hover:text-white focus:outline-none rounded-lg transition-colors"
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

        {/* Mobile Navigation Drawer / Dropdown */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out z-40 overflow-hidden ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  navigate(link.href.replace('#', ''));
                }}
                className="text-left text-base font-semibold text-gray-300 hover:text-white py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('get-started');
              }}
              className="w-full mt-2 py-3 rounded-full bg-[#008767] hover:bg-[#007559] text-white text-sm font-semibold tracking-wide transition-all shadow-[0_0_15px_rgba(0,135,103,0.3)] text-center cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen Viewport */}
      <main className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-12 text-center overflow-hidden">
        {/* Background Video with Bloom Transition - Fills full screen */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            preload="auto"
            poster={homeImage}
            className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out pointer-events-none select-none ${
              isRevealed ? 'opacity-90 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'
            }`}
          >
            <source src={homeVideo} type="video/mp4" />
          </video>
          {/* Subtle Radial Vignette Gradient for smooth blending and readability */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black pointer-events-none transition-opacity duration-1000 ${
              isRevealed ? 'opacity-60' : 'opacity-0'
            }`}
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center w-full">
          {/* Headline - Exact Antigravity style scale & 2-line layout with typewriter effect */}
          <h1 className="font-headline font-light text-[28px] min-[360px]:text-[34px] min-[400px]:text-[38px] md:text-[52px] lg:text-[64px] leading-[1.1] min-[400px]:leading-[44px] md:leading-[1.1] tracking-[-0.015em] text-center text-white w-full max-w-[1140px] mx-auto mb-10 md:mb-12 px-2 sm:px-0">
            <span className="block sm:whitespace-nowrap min-h-[1.1em]">
              {text1}
              {typingLine === 1 && (
                <span className="inline-block w-[3px] h-[0.75em] bg-white ml-1.5 animate-cursor align-baseline" />
              )}
            </span>
            <span className="block sm:whitespace-nowrap min-h-[1.1em]">
              {text2}
              {typingLine === 2 && (
                <span className="inline-block w-[3px] h-[0.75em] bg-white ml-1.5 animate-cursor align-baseline" />
              )}
            </span>
          </h1>

          {/* Action Buttons - Slide up smoothly after typing */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto transition-all duration-700 ease-out delay-150 ${
              isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <button
              type="button"
              onClick={() => navigate('get-started')}
              className="w-[260px] h-[46px] px-[28px] py-[14px] rounded-[32px] gap-[10px] bg-[#008767] hover:bg-[#007559] text-white text-sm font-medium transition-all duration-200 shadow-[0_0_25px_rgba(0,135,103,0.35)] flex items-center justify-center cursor-pointer active:scale-95"
            >
              Get Started for free
            </button>

            <button
              type="button"
              className="w-[260px] h-[46px] px-[28px] py-[14px] rounded-[32px] gap-[10px] bg-white/[0.05] hover:bg-white/[0.1] text-white/90 text-sm font-medium border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-200 flex items-center justify-center"
            >
              <span>Book a Demo</span>
              <svg
                className="w-4 h-4 text-white/80 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* Continuous Interactive Dot Grid Background (Spans all white content sections down to footer) */}
      <div className="relative w-full bg-white text-gray-900 overflow-hidden cursor-default">
        {/* Single Seamless Interactive Dot Grid Canvas */}
        <InteractiveDotGrid />

        {/* The Challenge Section */}
        <section
          id="challenge"
          className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-10 lg:px-16 border-t border-gray-100"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Left Side (Columns 1 & 2): Heading on top, 2 card columns below */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                {/* Header */}
                <div>
                  {/* Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-5">
                    <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
                    <span>THE CHALLENGE</span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.15] tracking-tight text-[#111827]">
                    Does running<br />
                    your business feels<br />
                    like this?
                  </h2>
                </div>

                {/* Columns 1 & 2 Cards Grid under Heading */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 md:mt-14 items-stretch">
                  {/* Column 1 */}
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="w-full h-[156px] bg-black overflow-hidden flex items-center justify-center shrink-0">
                      <img
                        src={home1}
                        alt="Too many reports visualization"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-center min-h-[148px]">
                      <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                        Too many reports
                      </h3>
                      <p className="font-text text-sm text-gray-500 leading-relaxed">
                        Drowning in PDFs and dashboards with no clear actionable takeaways.
                      </p>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-6 h-full justify-between">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 flex-1 flex flex-col justify-center min-h-[148px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                      <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                        No clear answers
                      </h3>
                      <p className="font-text text-sm text-gray-500 leading-relaxed">
                        Knowing 'what' happened but never truly understanding the 'why' behind it.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6 flex-1 flex flex-col justify-center min-h-[148px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                      <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                        Delayed Decisions
                      </h3>
                      <p className="font-text text-sm text-gray-500 leading-relaxed">
                        Managers operating on instinct rather than real-time data intelligence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side (Column 3): Subtitle on top, Column 3 cards below */}
              <div className="lg:col-span-4 flex flex-col justify-between mt-8 lg:mt-0">
                {/* Subtitle / Quote positioned above Column 3 */}
                <div className="text-sm text-gray-500 leading-relaxed font-text max-w-sm mb-6 lg:mb-0 lg:pt-8">
                  Traditional ERPs and BI tools are rear-view mirrors. You need a GPS that knows where you're going.
                </div>

                {/* Column 3 Cards */}
                <div className="flex flex-col gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                    <div className="w-full h-[156px] bg-black overflow-hidden flex items-center justify-center">
                      <img
                        src={home2}
                        alt="Sales Drop visualization"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6 min-h-[148px] flex flex-col justify-center">
                      <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                        Sales Drop
                      </h3>
                      <p className="font-text text-sm text-gray-500 leading-relaxed">
                        Finding out your sales dipped two weeks after it already happened.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6 min-h-[148px] flex flex-col justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                    <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                      Misses Signals
                    </h3>
                    <p className="font-text text-sm text-gray-500 leading-relaxed">
                      Weak signals that could have been major opportunities go completely unnoticed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Implementation to Insight */}
        <section
          id="how-it-works"
          className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-10 lg:px-16"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-5">
              <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
              <span>HOW IT WORKS</span>
            </div>

            {/* Heading */}
            <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.15] tracking-tight text-[#111827] mb-4">
              Implementation to Insight
            </h2>

            {/* Subtitle */}
            <p className="font-text text-sm text-gray-500 leading-relaxed max-w-xl mx-auto mb-14 md:mb-16">
              Turn your business data into smarter decisions-step by step.
            </p>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
              {/* Step 1 */}
              <div className="flex flex-col group">
                <div className="mb-5">
                  <HowItWorksVisual step={1} />
                </div>
                <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                  1. Connect
                </h3>
                <p className="font-text text-sm text-gray-500 leading-relaxed">
                  Connect your CRM, ERP, HR, Finance, and other business systems in just a few clicks.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col group">
                <div className="mb-5">
                  <HowItWorksVisual step={2} />
                </div>
                <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                  2. Understand
                </h3>
                <p className="font-text text-sm text-gray-500 leading-relaxed">
                  It connects your data, processes, and teams to build a complete picture of your business.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col group">
                <div className="mb-5">
                  <HowItWorksVisual step={3} />
                </div>
                <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                  3. Analyze
                </h3>
                <p className="font-text text-sm text-gray-500 leading-relaxed">
                  AI continuously identifies trends, opportunities, risks,and unusual patterns across your business.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col group">
                <div className="mb-5">
                  <HowItWorksVisual step={4} />
                </div>
                <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                  4. Act
                </h3>
                <p className="font-text text-sm text-gray-500 leading-relaxed">
                  Receive practical recommendations and automate routine tasks to improve performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer Call to Action Banner - White Background matching other sections */}
        <section className="relative z-10 w-full py-24 md:py-32 px-6 sm:px-10 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
              <span>START YOUR TRANSFORMATION</span>
            </div>

            <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-[#111827] mb-6">
              Ready to empower every<br className="hidden sm:inline" /> decision with AI?
            </h2>

            <p className="font-text text-base md:text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Join forward-thinking enterprise teams who have replaced static spreadsheets and delayed reporting with real-time proactive intelligence.
            </p>

            {/* Action Form */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full px-5 py-3.5 rounded-full bg-white border border-gray-300 shadow-sm text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#008767] focus:ring-2 focus:ring-[#008767]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => navigate('get-started')}
                className="w-full sm:w-auto shrink-0 px-7 py-3.5 rounded-full bg-[#008767] hover:bg-[#007559] text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(0,135,103,0.3)] cursor-pointer active:scale-95"
              >
                Start Free
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                14-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                SOC2 Type II Certified
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Modern High-End Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
