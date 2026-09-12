import React from 'react';

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
    <footer className="w-full bg-[#060809] text-white border-t border-white/[0.08] relative pt-16 md:pt-20 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden select-none font-text">
      {/* Subtle Top Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#008767]/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12 pb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#008767] to-[#00b88d] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,135,103,0.4)]">
                  B
                </div>
                <span className="font-headline font-bold text-lg tracking-wider text-white">
                  BRYNEX AI
                </span>
              </div>

              <p className="font-text text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
                Autonomous enterprise intelligence platform connecting ERP, CRM, and operational systems to forecast shifts before they impact revenue.
              </p>
            </div>

            {/* Live Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs text-gray-400 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Platform Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              PLATFORM
            </h4>
            <ul className="space-y-3 text-sm font-text">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('how-it-works')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Connectors
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('how-it-works')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Neural Analytics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('pricing')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Enterprise Security
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('pricing')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pricing Plans
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              SOLUTIONS
            </h4>
            <ul className="space-y-3 text-sm font-text">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Executive BI
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Sales & Revenue
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Operations
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Supply Chain
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Finance & HR
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-3 text-sm font-text">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('blog')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('blog')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Research Lab
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('faqs')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  FAQ's & Specs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Architecture Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm font-text">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Architects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('pricing')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Enterprise ROI
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('get-started')}
                  className="text-gray-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Launch AI Brain
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Socials */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 Brynex AI Technologies Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button type="button" onClick={() => handleNav('about')} className="hover:text-gray-300 transition-colors">Privacy Policy</button>
            <button type="button" onClick={() => handleNav('about')} className="hover:text-gray-300 transition-colors">Terms of Service</button>
            <button type="button" onClick={() => handleNav('about')} className="hover:text-gray-300 transition-colors">Cookie Preferences</button>
            <button type="button" onClick={() => handleNav('faqs')} className="hover:text-gray-300 transition-colors">Security</button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            {/* X / Twitter */}
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>

            {/* Discord */}
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Discord">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
