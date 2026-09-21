import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

export default function Header({
  currentPage = 'home',
  onNavigate,
  forceTheme = null // 'light' | 'dark' | null (auto detect on scroll)
}) {
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderLight, setIsHeaderLight] = useState(forceTheme === 'light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const navLinks = [
    { label: 'About', href: 'about' },
    { label: 'How it works', href: 'how-it-works' },
    { label: 'Pricing', href: 'pricing' },
    { label: 'Blog', href: 'blog' },
    { label: 'Testimonials', href: 'testimonials' },
    { label: "FAQ's", href: 'faqs' },
    { label: 'Contact', href: 'contact' },
  ];

  const handleNav = (page) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (forceTheme) {
      setIsHeaderLight(forceTheme === 'light');
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current + 8 && currentScrollY > 100) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY.current - 8 || currentScrollY <= 60) {
        setShowHeader(true);
      }

      // Context-aware light/dark detection for homepage
      const heroElement = document.querySelector('main');
      const heroBottom = heroElement ? heroElement.getBoundingClientRect().bottom : 600;

      const timelineElement = document.getElementById('how-it-works-timeline') || document.querySelector('[id*="how-it-works"]');
      const timelineRect = timelineElement ? timelineElement.getBoundingClientRect() : null;
      const isOverTimeline = timelineRect && timelineRect.top <= 60 && timelineRect.bottom >= 40;

      const footerElement = document.querySelector('footer');
      const footerRect = footerElement ? footerElement.getBoundingClientRect() : null;
      const isOverFooter = footerRect && footerRect.top <= 60;

      if (heroBottom <= 60 && !isOverTimeline && !isOverFooter) {
        setIsHeaderLight(true);
      } else {
        setIsHeaderLight(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceTheme]);

  const isLight = forceTheme === 'light' || (forceTheme === null && isHeaderLight);

  return (
    <header
      className={`w-full ${
        forceTheme ? 'sticky top-0' : 'fixed top-0 left-0 right-0'
      } z-50 transition-all duration-300 ease-out select-none ${
        !forceTheme && !showHeader ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      } ${
        isLight
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-gray-900'
          : isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white'
          : 'bg-transparent border-b border-white/[0.08] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center shrink-0">
          <Logo light={isLight} onClick={() => handleNav('home')} />
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.href;
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNav(link.href)}
                className={`text-[13px] font-medium transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? isLight
                      ? 'text-[#008767] font-semibold'
                      : 'text-emerald-400 font-semibold'
                    : isLight
                    ? 'text-gray-600 hover:text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Action Button (Get Started) */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            type="button"
            onClick={() => handleNav('get-started')}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm cursor-pointer active:scale-95 flex items-center gap-1.5 ${
              isLight
                ? 'bg-[#111827] hover:bg-black text-white shadow-[0_2px_10px_rgba(0,0,0,0.12)]'
                : 'bg-[#008767] hover:bg-[#007559] text-white shadow-[0_0_20px_rgba(0,135,103,0.4)] hover:shadow-[0_0_25px_rgba(0,135,103,0.6)]'
            }`}
          >
            <span>Get Started</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button with Animated Hamburger-to-X */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`relative w-9 h-9 flex flex-col items-center justify-center gap-1 focus:outline-none rounded-lg transition-colors ${
              isLight ? 'text-gray-800 hover:text-black' : 'text-gray-300 hover:text-white'
            }`}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            <span
              className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 transform origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full backdrop-blur-2xl shadow-2xl transition-all duration-300 ease-in-out z-40 overflow-hidden ${
          isLight
            ? 'bg-white/95 border-b border-gray-200 text-gray-900'
            : 'bg-black/95 border-b border-white/10 text-white'
        } ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-3.5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNav(link.href)}
              className={`text-left text-sm font-medium py-1 transition-colors ${
                isLight ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-200/20 flex flex-col">
            <button
              type="button"
              onClick={() => handleNav('get-started')}
              className={`w-full py-3 rounded-full text-xs font-semibold tracking-wide text-center transition-all ${
                isLight
                  ? 'bg-[#111827] hover:bg-black text-white shadow-md'
                  : 'bg-[#008767] hover:bg-[#007559] text-white shadow-[0_0_15px_rgba(0,135,103,0.35)]'
              }`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
