import React from 'react';
import footerVisual from './assets/Intoduction.png';
import Logo from './Logo';

export default function Footer({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-white relative pt-6 sm:pt-10 overflow-hidden select-none font-text">
      {/* Curved Dark Container */}
      <div className="w-full bg-[#030504] text-white rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px] relative overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-12 px-6 sm:px-10 lg:px-16 shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        {/* Background 3D Visual overlay in center/bottom */}
        <div className="absolute inset-0 pointer-events-none flex items-end justify-center overflow-hidden opacity-35">
          <img
            src={footerVisual}
            alt=""
            aria-hidden="true"
            className="w-full max-w-[1200px] h-[350px] sm:h-[450px] object-cover object-center translate-y-12 blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-[#030504]/70 to-[#030504]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Row: Logo Left, Headline & CTA Buttons Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-16 sm:pb-20 md:pb-24">
            {/* Left Column: Logo */}
            <div className="lg:col-span-5 flex items-start">
              <Logo onClick={() => handleNav('home')} />
            </div>

            {/* Right Column: Headline & Action Buttons */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-tight text-white mb-8 sm:mb-10">
                Turn business data into<br />
                intelligent action.
              </h2>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => handleNav('get-started')}
                  className="px-7 py-3 rounded-full bg-[#008767] hover:bg-[#007559] text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(0,135,103,0.3)] cursor-pointer active:scale-95"
                >
                  Get Started for free
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('get-started')}
                  className="px-7 py-3 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/5 text-white text-sm font-medium transition-all flex items-center gap-2.5 cursor-pointer active:scale-95"
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
          </div>

          {/* Middle Row: 3 Link Columns evenly distributed across the full width */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 lg:gap-20 w-full pb-16 sm:pb-20">
            {/* Column 1: PLATFORM */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 bg-[#008767] inline-block rounded-[1px]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  PLATFORM
                </h4>
              </div>
              <ul className="space-y-3.5 text-sm">
                {[
                  { label: 'AI Business Brain', page: 'about' },
                  { label: 'Intelligence Engines', page: 'how-it-works' },
                  { label: 'Integrations', page: 'how-it-works' },
                  { label: 'How It Works', page: 'how-it-works' },
                  { label: 'Pricing', page: 'pricing' },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => handleNav(item.page)}
                      className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: COMPANY */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 bg-[#008767] inline-block rounded-[1px]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  COMPANY
                </h4>
              </div>
              <ul className="space-y-3.5 text-sm">
                {[
                  { label: 'About Us', page: 'about' },
                  { label: 'Contact', page: 'contact' },
                  { label: 'Careers', page: 'about' },
                  { label: 'Book a Demo', page: 'get-started' },
                  { label: 'Our Partners', page: 'testimonials' },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => handleNav(item.page)}
                      className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: RESOURCES */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 bg-[#008767] inline-block rounded-[1px]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  RESOURCES
                </h4>
              </div>
              <ul className="space-y-3.5 text-sm">
                {[
                  { label: 'Help Center', page: 'faqs' },
                  { label: 'FAQs', page: 'faqs' },
                  { label: 'Documentation', page: 'blog' },
                  { label: 'Blog', page: 'blog' },
                  { label: 'Case Studies', page: 'testimonials' },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => handleNav(item.page)}
                      className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row: Copyright, Legal Links, Social Icons */}
          <div className="border-t border-white/[0.1] pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-gray-400">
            {/* Copyright */}
            <div>
              &copy; 2026 Brynex One. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-center">
              <button
                type="button"
                onClick={() => handleNav('faqs')}
                className="hover:text-gray-200 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>&middot;</span>
              <button
                type="button"
                onClick={() => handleNav('faqs')}
                className="hover:text-gray-200 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <span>&middot;</span>
              <button
                type="button"
                onClick={() => handleNav('faqs')}
                className="hover:text-gray-200 transition-colors cursor-pointer"
              >
                Cookie Preferences
              </button>
              <span>&middot;</span>
              <button
                type="button"
                onClick={() => handleNav('faqs')}
                className="hover:text-gray-200 transition-colors cursor-pointer"
              >
                Security
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-gray-400">
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Discord"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
