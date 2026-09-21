import React from 'react';

export default function Logo({ className = '', size = 'default', onClick, light = false }) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  const iconSize = isSmall ? 'w-6 h-6' : isLarge ? 'w-9 h-9' : 'w-7 h-7';
  const textClass = isSmall
    ? 'text-sm'
    : isLarge
    ? 'text-xl sm:text-2xl'
    : 'text-base sm:text-lg';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none transition-transform duration-200 hover:scale-[1.02] active:scale-95 ${className}`}
      aria-label="BRYNEX AI Home"
    >
      {/* Precision Geometric Monogram Icon */}
      <div className={`relative ${iconSize} shrink-0 flex items-center justify-center`}>
        {/* Ambient Glow Aura */}
        <div className="absolute inset-0 bg-[#008767]/30 rounded-lg blur-md group-hover:bg-[#00d09c]/40 group-hover:blur-lg transition-all duration-300 pointer-events-none" />

        {/* Vector SVG Mark */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_2px_8px_rgba(0,135,103,0.4)]"
        >
          <defs>
            <linearGradient id="brynexGrad1" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00d09c" />
              <stop offset="50%" stopColor="#008767" />
              <stop offset="100%" stopColor="#004d3a" />
            </linearGradient>
            <linearGradient id="brynexGrad2" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="brynexAccent" x1="10" y1="10" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#008767" />
            </linearGradient>
          </defs>

          {/* Background Rounded Shield / Hex Prism */}
          <rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="8"
            fill="#050807"
            stroke="url(#brynexGrad1)"
            strokeWidth="1.5"
          />

          {/* Futuristic Stylized "B" Neural Pathways */}
          <path
            d="M9 8.5C9 7.67157 9.67157 7 10.5 7H17.5C19.9853 7 22 9.01472 22 11.5C22 13.0645 21.2017 14.4421 20 15.2447C21.4921 16.0384 22.5 17.6517 22.5 19.5C22.5 22.5376 20.0376 25 17 25H10.5C9.67157 25 9 24.3284 9 23.5V8.5Z"
            fill="url(#brynexGrad1)"
            opacity="0.25"
          />
          
          <path
            d="M10.5 8H17C19.2091 8 21 9.79086 21 12C21 13.8638 19.7255 15.4299 18 15.874V16.126C19.7255 16.5701 21 18.1362 21 20C21 22.2091 19.2091 24 17 24H10.5"
            stroke="url(#brynexGrad1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Cross Spine & Neural Core */}
          <line
            x1="10"
            y1="16"
            x2="17.5"
            y2="16"
            stroke="url(#brynexGrad1)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Glowing Neural Center Nodes */}
          <circle cx="10.5" cy="16" r="1.75" fill="#34d399" />
          <circle cx="17.5" cy="12" r="1.5" fill="#00d09c" />
          <circle cx="17.5" cy="20" r="1.5" fill="#00d09c" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex items-center tracking-tight select-none">
        <span
          className={`font-headline font-bold tracking-[0.08em] ${
            light ? 'text-[#111827]' : 'text-white'
          } ${textClass} group-hover:text-white transition-colors`}
        >
          BRYNEX
        </span>
        <span className="font-headline font-black tracking-wider text-[#00d09c] ml-1 text-[0.88em] group-hover:text-emerald-300 transition-colors">
          AI
        </span>
      </div>
    </button>
  );
}
