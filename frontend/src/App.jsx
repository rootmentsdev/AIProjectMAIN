import React, { useState, useEffect, useRef } from 'react';
import homeVideo from './assets/AI Home Video.mp4';
import homeImage from './assets/HomeImage.png';
import home1 from './assets/Home1.png';
import home2 from './assets/Home2.png';
import introductionImg from './assets/Intoduction.png';
import bigBannerImg from './assets/Bigbanner.png';
import AiBrainPage from './AiBrainPage';
import AiBlogPage from './AiBlogPage';
import AiAboutPage from './AiAboutPage';
import AiHowItWorksPage from './AiHowItWorksPage';
import AiPricingPage from './AiPricingPage';
import AiTestimonialsPage from './AiTestimonialsPage';
import AiFaqsPage from './AiFaqsPage';
import AiContactPage from './AiContactPage';
import Header from './Header';
import Footer from './Footer';
import Logo from './Logo';
import { HowItWorksVisual } from './AiVisualIllustrations';

const connectedLines = [
  "For Your Workforce",
  "And Your Financial Health",
  "Understand What Drives Sales,",
  "Your Marketing Impact,",
  "How Your Business Runs and",
  "See the Bigger Business Picture"
];

function OneConnectedBusinessSection() {
  const sectionRef = useRef(null);
  const [typedLines, setTypedLines] = useState(() => connectedLines.map(() => ''));
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || isTypingComplete) return;

    let lineIndex = 0;
    let charIndex = 0;
    let timer;

    const typeNext = () => {
      if (lineIndex >= connectedLines.length) {
        setIsTypingComplete(true);
        return;
      }

      const targetLine = connectedLines[lineIndex];
      charIndex++;

      setTypedLines((prev) => {
        const updated = [...prev];
        updated[lineIndex] = targetLine.slice(0, charIndex);
        return updated;
      });
      setCurrentLineIdx(lineIndex);

      if (charIndex >= targetLine.length) {
        lineIndex++;
        charIndex = 0;
        timer = setTimeout(typeNext, 200);
      } else {
        timer = setTimeout(typeNext, 38);
      }
    };

    timer = setTimeout(typeNext, 200);

    return () => clearTimeout(timer);
  }, [hasStarted, isTypingComplete]);

  return (
    <section
      ref={sectionRef}
      id="connected-business"
      className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Pill Badge & Sentence written line-by-line */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-8 self-start">
              <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
              <span>ONE CONNECTED BUSINESS</span>
            </div>

            {/* Sentence Lines with Writing Effect */}
            <div className="flex flex-col space-y-2 sm:space-y-3 font-headline text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] leading-[1.2] tracking-tight">
              {connectedLines.map((fullLine, index) => {
                const isCurrent = currentLineIdx === index && !isTypingComplete;
                const isPast = index < currentLineIdx || isTypingComplete;
                const currentText = typedLines[index];

                return (
                  <div key={index} className="relative select-none flex items-center">
                    {/* Faint placeholder text layout */}
                    <span className="text-gray-200/70 font-normal">
                      {fullLine}
                    </span>

                    {/* Active Typed Overlay in bold dark text with cursor */}
                    <span className="absolute left-0 top-0 text-[#111827] font-normal transition-colors duration-150">
                      {isPast ? fullLine : currentText}
                      {isCurrent && (
                        <span className="inline-block w-[3px] h-[0.75em] bg-[#008767] ml-1.5 animate-cursor align-baseline" />
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Static Visual Box + Static HR Brain Title & Description */}
          <div className="lg:col-span-5 flex flex-col">
            {/* 3D Visual Box */}
            <div className="w-full h-[260px] sm:h-[320px] lg:h-[350px] bg-black overflow-hidden flex items-center justify-center shadow-[0_12px_36px_rgba(0,0,0,0.18)] relative group">
              <img
                src={introductionImg}
                alt="HR Brain Visual"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Static HR Brain Details */}
            <div className="mt-6 flex flex-col">
              <h3 className="font-headline font-bold text-gray-900 text-xl sm:text-2xl mb-2">
                HR Brain
              </h3>
              <p className="font-text text-sm sm:text-[14px] text-gray-500 leading-relaxed max-w-md">
                Gain insights into recruitment, employee performance, attendance, retention, and workforce challenges to support informed HR decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const timelineSteps = [
  {
    step: '01',
    category: 'KNOW',
    side: 'right',
    title: 'Build a Clear Picture of Your Business',
    description:
      'Brynex AI Brain brings relevant information from across your business together to build an understanding of your departments, activities, and performance.',
  },
  {
    step: '02',
    category: 'ANALYSE',
    side: 'left',
    title: 'Discover What Needs Attention',
    description:
      'It analyses available business information to identify patterns, changes, risks, and opportunities that may need a closer look.',
  },
  {
    step: '03',
    category: 'ADVICE',
    side: 'right',
    title: 'Understand What You Can Do Next',
    description:
      'Based on the available evidence, it helps explore possible causes and provides recommendations for management to consider.',
  },
  {
    step: '04',
    category: 'EXECUTE',
    side: 'left',
    title: 'Turn Decisions Into Action',
    description:
      'Management reviews and approves suitable actions. Approved actions can then be carried out through the relevant workflows or systems, depending on available capabilities.',
  },
  {
    step: '05',
    category: 'MONITOR',
    side: 'right',
    title: 'Track What Happens Next',
    description:
      'Monitor the outcomes of approved actions and review whether the expected changes are taking place.',
  },
  {
    step: '06',
    category: 'LEARN',
    side: 'left',
    title: 'Make Future Decisions More Informed',
    description:
      'Use observed outcomes and business feedback to support continuous learning and improve future analysis and recommendations.',
  },
];

function TimelineItem({ item, index, scrollProgress }) {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isLeft = item.side === 'left';
  const nodeThreshold = (index + 0.5) / timelineSteps.length;
  const isNodeActive = scrollProgress >= nodeThreshold - 0.05;

  return (
    <div
      ref={itemRef}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center my-10 md:my-16 ${
        isLeft ? 'md:text-right' : 'md:text-left'
      }`}
    >
      {/* Left Content Box (Desktop: shown for isLeft, empty placeholder for isRight) */}
      <div
        className={`${
          isLeft
            ? 'order-2 md:order-1 flex flex-col md:items-end pl-10 md:pl-0'
            : 'hidden md:block md:order-1'
        }`}
      >
        {isLeft && (
          <div
            className={`transition-all duration-700 ease-out max-w-md ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Tag / Category */}
            <div className="inline-flex items-center gap-2 text-[#008767] font-semibold text-xs tracking-wider uppercase mb-2">
              <span>{item.step} · {item.category}</span>
              <span className="w-1.5 h-1.5 bg-[#008767] rounded-[1px]" />
            </div>

            {/* Title */}
            <h3 className="font-headline font-normal text-2xl sm:text-3xl text-white leading-tight mb-2.5">
              {item.title}
            </h3>

            {/* Description */}
            <p className="font-text text-sm sm:text-[14px] text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        )}
      </div>

      {/* Center Glowing Node Dot (Absolute on Center Line) */}
      <div className="absolute left-3.5 md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none">
        <div
          className={`w-5 h-5 rounded-full transition-all duration-500 flex items-center justify-center ${
            isNodeActive
              ? 'bg-[#008767] ring-4 ring-[#008767]/40 shadow-[0_0_16px_#008767]'
              : 'bg-[#0a1210] border-2 border-white/20'
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              isNodeActive ? 'bg-white scale-100' : 'bg-white/40 scale-75'
            }`}
          />
        </div>
      </div>

      {/* Right Content Box (Desktop: shown for isRight, empty placeholder for isLeft) */}
      <div
        className={`${
          !isLeft
            ? 'order-2 md:order-2 flex flex-col md:items-start pl-10 md:pl-0'
            : 'hidden md:block md:order-2'
        }`}
      >
        {!isLeft && (
          <div
            className={`transition-all duration-700 ease-out max-w-md ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Tag / Category */}
            <div className="inline-flex items-center gap-2 text-[#008767] font-semibold text-xs tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-[#008767] rounded-[1px]" />
              <span>{item.step} · {item.category}</span>
            </div>

            {/* Title */}
            <h3 className="font-headline font-normal text-2xl sm:text-3xl text-white leading-tight mb-2.5">
              {item.title}
            </h3>

            {/* Description */}
            <p className="font-text text-sm sm:text-[14px] text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function HowItWorksTimelineSection() {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDir, setScrollDir] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY >= lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;

      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalDistance = rect.height;
      const currentPos = windowHeight * 0.7 - rect.top;
      const progress = Math.min(Math.max(currentPos / totalDistance, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative z-10 w-full bg-[#050807] border-y border-white/[0.08] text-white py-20 md:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Ambient Dark Emerald Background Glow & curves spanning full width */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#008767]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-[#10B981]/8 rounded-full blur-[140px] pointer-events-none" />
      <img
        src={introductionImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-screen pointer-events-none select-none blur-[1px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-white/10 text-white text-[11px] font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
            <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-white mb-4 max-w-3xl">
            From Business Information<br />
            to Meaningful Action
          </h2>

          <p className="font-text text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
            Turn your business data into smarter decisions-step by step.
          </p>
        </div>

        {/* Vertical Timeline Track with Scroll Direction Animation */}
        <div ref={timelineRef} className="relative z-10 max-w-5xl mx-auto">
          {/* Base Background Line */}
          <div className="absolute left-3.5 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-white/[0.08]" />

          {/* Active Animated Illuminated Center Line */}
          <div
            className="absolute left-3.5 md:left-1/2 -translate-x-1/2 top-4 w-[2px] bg-gradient-to-b from-[#008767]/20 via-[#008767] to-[#10B981] transition-all duration-150 ease-out shadow-[0_0_12px_#008767]"
            style={{
              height: `${Math.max(scrollProgress * 100, 2)}%`,
            }}
          />

          {/* Moving Scroll-Direction Light Particle on the Line */}
          <div
            className={`absolute left-3.5 md:left-1/2 -translate-x-1/2 w-2 h-8 rounded-full pointer-events-none transition-all duration-150 ease-out ${
              scrollDir === 'down'
                ? 'bg-gradient-to-b from-transparent via-[#10B981] to-white shadow-[0_0_14px_#10B981]'
                : 'bg-gradient-to-t from-transparent via-[#10B981] to-white shadow-[0_0_14px_#10B981]'
            }`}
            style={{
              top: `calc(${scrollProgress * 100}% - 16px)`,
              opacity: scrollProgress > 0.02 && scrollProgress < 0.98 ? 1 : 0,
            }}
          />

          {/* 6 Timeline Steps */}
          {timelineSteps.map((item, index) => (
            <TimelineItem
              key={item.step}
              item={item}
              index={index}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-18">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
            <span>WHY CHOOSE US</span>
          </div>

          {/* Heading */}
          <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-[#111827]">
            Clarity for Every Business Decision
          </h2>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* Slot 1: Introductory Description Text (Top-Left) */}
          <div className="p-6 sm:p-8 flex flex-col justify-center min-h-[220px]">
            <p className="font-text text-sm sm:text-[15px] text-gray-500 leading-relaxed max-w-xs">
              Brynex AI Brain connects business insights to help management understand what's happening and explore what to do next.
            </p>
          </div>

          {/* Slot 2: One Connected View (Top-Middle) */}
          <div className="bg-white border border-gray-200 rounded-lg p-7 flex flex-col justify-between min-h-[220px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 mb-6 text-gray-800 group-hover:scale-105 transition-transform">
              <svg className="w-full h-full" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="6" width="28" height="18" rx="2" stroke="currentColor" />
                <path d="M2 28h32" stroke="currentColor" strokeLinecap="round" />
                <circle cx="18" cy="13" r="3" stroke="#008767" strokeWidth="1.5" />
                <path d="M12 20c0-2.5 2.7-4 6-4s6 1.5 6 4" stroke="#008767" strokeLinecap="round" />
                <path d="M8 11h2M8 15h2M26 11h2M26 15h2" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </div>

            <div>
              <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                One Connected View
              </h3>
              <p className="font-text text-sm text-gray-500 leading-relaxed">
                Bring insights from different business departments into a clearer, connected picture.
              </p>
            </div>
          </div>

          {/* Slot 3: Insights That Guide (Top-Right) */}
          <div className="bg-white border border-gray-200 rounded-lg p-7 flex flex-col justify-between min-h-[220px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 mb-6 text-gray-800 group-hover:scale-105 transition-transform">
              <svg className="w-full h-full" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 4l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z" fill="#008767" stroke="#008767" strokeLinejoin="round" />
                <circle cx="28" cy="8" r="1.5" fill="#008767" />
                <path d="M6 24c4-3 9-4 14-2l8 4c2 1 3 3 2 5-1 2-3 2-5 1l-7-3" stroke="currentColor" strokeLinecap="round" />
                <path d="M4 28h8" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </div>

            <div>
              <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                Insights That Guide
              </h3>
              <p className="font-text text-sm text-gray-500 leading-relaxed">
                Discover findings and recommendations for management to consider.
              </p>
            </div>
          </div>

          {/* Slot 4: Decisions With Context (Bottom-Left) */}
          <div className="bg-white border border-gray-200 rounded-lg p-7 flex flex-col justify-between min-h-[220px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 mb-6 text-gray-800 group-hover:scale-105 transition-transform">
              <svg className="w-full h-full" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 6a8 8 0 0111.3 11.3C23.6 19 22 21 22 23h-8c0-2-1.6-4-3.3-5.7A8 8 0 0114 6z" stroke="currentColor" />
                <path d="M14 27h8M16 30h4" stroke="currentColor" strokeLinecap="round" />
                <circle cx="18" cy="14" r="2.5" stroke="#008767" strokeWidth="1.5" />
                <path d="M18 8v2M12 14h2M22 14h2" stroke="#008767" strokeLinecap="round" />
              </svg>
            </div>

            <div>
              <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                Decisions With Context
              </h3>
              <p className="font-text text-sm text-gray-500 leading-relaxed">
                Consider business decisions with relevant information and a wider perspective.
              </p>
            </div>
          </div>

          {/* Slot 5: Learn From Every Outcome (Bottom-Middle) */}
          <div className="bg-white border border-gray-200 rounded-lg p-7 flex flex-col justify-between min-h-[220px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 mb-6 text-gray-800 group-hover:scale-105 transition-transform">
              <svg className="w-full h-full" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="5" y="6" width="26" height="18" rx="2" stroke="currentColor" />
                <path d="M11 20l4-5 4 3 6-7" stroke="#008767" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 28l-3 4M24 28l3 4M18 24v8" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </div>

            <div>
              <h3 className="font-headline font-bold text-gray-900 text-lg mb-2">
                Learn From Every Outcome
              </h3>
              <p className="font-text text-sm text-gray-500 leading-relaxed">
                Monitor what happens after actions are taken and use the results to inform future decisions.
              </p>
            </div>
          </div>

          {/* Slot 6: Understand the Why (Bottom-Right - Dark Featured Card) */}
          <div className="bg-black text-white border border-gray-900 rounded-lg p-7 flex flex-col justify-between min-h-[220px] shadow-lg relative overflow-hidden group">
            <img
              src={introductionImg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none select-none transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10 w-10 h-10 mb-6 text-white group-hover:scale-105 transition-transform">
              <svg className="w-full h-full" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="5" width="28" height="20" rx="2" stroke="currentColor" />
                <path d="M14 29h8M18 25v4" stroke="currentColor" strokeLinecap="round" />
                <circle cx="18" cy="15" r="4.5" stroke="#008767" strokeWidth="1.5" />
                <path d="M18 12.5v2.5M18 17.5h.01" stroke="#008767" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="font-headline font-bold text-white text-lg mb-2">
                Understand the Why
              </h3>
              <p className="font-text text-sm text-gray-400 leading-relaxed">
                Explore possible reasons behind business changes using available information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ onNavigate }) {
  return (
    <section
      id="pricing"
      className="relative z-10 w-full py-20 md:py-28 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
            <span>PRICING</span>
          </div>

          <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-[#111827] mb-4">
            Simple, Transparent Pricing
          </h2>

          <p className="font-text text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
            Turn your business data into smarter decisions-step by step.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full">
          {/* Card 1: Starter */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all">
            <div>
              <h3 className="font-headline font-bold text-gray-900 text-xl mb-2">
                Starter
              </h3>
              <p className="font-text text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
                Perfect for small businesses getting started with AI.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-headline font-normal text-4xl sm:text-5xl text-gray-900">
                  $499
                </span>
                <span className="font-text text-sm text-gray-500">/month</span>
              </div>

              {/* Features list */}
              <ul className="space-y-3 font-text text-xs sm:text-sm text-gray-600 mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="text-gray-400">•</span>
                  <span>2 Intelligence Engines</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-gray-400">•</span>
                  <span>1 Physical Location</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-gray-400">•</span>
                  <span>Weekly performance reports</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-gray-400">•</span>
                  <span>Email support</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onNavigate && onNavigate('get-started')}
              className="w-full py-3 rounded-full border border-[#008767] text-[#008767] hover:bg-[#008767] hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer text-center"
            >
              Get started
            </button>
          </div>

          {/* Card 2: Growth (Featured Dark Card with MOST POPULAR badge) */}
          <div className="relative bg-[#18181b] text-white rounded-2xl p-8 flex flex-col justify-between shadow-2xl border border-gray-800 transform lg:-translate-y-2">
            {/* Top Most Popular Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#008767] text-white text-[10px] font-bold tracking-widest uppercase shadow-md">
              MOST POPULAR
            </div>

            <div>
              <h3 className="font-headline font-bold text-white text-xl mb-2 mt-1">
                Growth
              </h3>
              <p className="font-text text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed">
                Designed for growing businesses with multiple locations.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-headline font-normal text-4xl sm:text-5xl text-white">
                  $1,299
                </span>
                <span className="font-text text-sm text-gray-400">/month</span>
              </div>

              {/* Features list */}
              <ul className="space-y-3 font-text text-xs sm:text-sm text-gray-300 mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#008767]">•</span>
                  <span>All 5 Intelligence Engines</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#008767]">•</span>
                  <span>Up to 10 locations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#008767]">•</span>
                  <span>Real-time Recommendations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#008767]">•</span>
                  <span>Priority Chat Support</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onNavigate && onNavigate('get-started')}
              className="w-full py-3.5 rounded-full bg-[#008767] hover:bg-[#007559] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(0,135,103,0.35)] cursor-pointer text-center"
            >
              Choose Growth
            </button>
          </div>

          {/* Card 3: Enterprise */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all">
            <div>
              <h3 className="font-headline font-bold text-gray-900 text-xl mb-2">
                Enterprise
              </h3>
              <p className="font-text text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
                Built for large organizations with advanced business needs.
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-headline font-normal text-3xl sm:text-4xl text-gray-900">
                  Custom Pricing
                </span>
              </div>

              {/* Features list */}
              <ul className="space-y-3 font-text text-xs sm:text-sm text-gray-600 mb-8">
                <li className="flex items-center gap-2.5">
                  <span className="text-gray-400">•</span>
                  <span>Unlimited Engines & Locations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-gray-400">•</span>
                  <span>Custom API Development</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-gray-400">•</span>
                  <span>Dedicated Success Manager</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-gray-400">•</span>
                  <span>On-premise Deployment Option</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onNavigate && onNavigate('contact')}
              className="w-full py-3 rounded-full border border-[#008767] text-[#008767] hover:bg-[#008767] hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessInsightBannerSection({ onNavigate }) {
  return (
    <section className="relative z-10 w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        {/* Full-width Wide Dark Visual Banner: 100% of max-w-7xl x 255px */}
        <div className="w-full h-[180px] sm:h-[220px] md:h-[255px] bg-black overflow-hidden flex items-center justify-center shadow-xl relative group">
          <img
            src={bigBannerImg}
            alt="Business Insights Visual Banner"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 opacity-100"
          />
        </div>

        {/* Bottom Content: Headline Left, Description & CTA Button Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-[#111827]">
              See What Your Business<br />
              Can Understand
            </h2>
          </div>

          {/* Right Column: Description & Action */}
          <div className="lg:col-span-5 flex flex-col items-start pt-1">
            <p className="font-text text-sm sm:text-[15px] text-gray-500 leading-relaxed mb-8 max-w-md">
              Discover how Brynex AI Brain connects business insights, helps uncover what needs attention, and supports more informed decisions across your organization.
            </p>

            <button
              type="button"
              onClick={() => onNavigate && onNavigate('get-started')}
              className="px-8 py-3.5 rounded-full bg-[#008767] hover:bg-[#007559] text-white text-sm font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(0,135,103,0.3)] cursor-pointer active:scale-95"
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderLight, setIsHeaderLight] = useState(false);
  const lastScrollY = useRef(0);

  // Smart Header Scroll & Context-Aware Color Adaptation (White vs Dark sections)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current + 8 && currentScrollY > 100) {
        // Scrolling DOWN -> smoothly hide header
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY.current - 8 || currentScrollY <= 60) {
        // Scrolling UP or at top -> smoothly reveal header
        setShowHeader(true);
      }

      // Check whether header is currently over a white section or dark section
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
  }, []);

  // Reliable video autoplay for mobile browsers (iOS Safari / Low Power Mode)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', 'true');
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsVideoPlaying(true))
          .catch(() => {
            // Low Power Mode or Safari policy restricted autoplay
          });
      }
    }

    const unlockPlay = () => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current
          .play()
          .then(() => setIsVideoPlaying(true))
          .catch(() => {});
      }
    };

    window.addEventListener('touchstart', unlockPlay, { once: true, passive: true });
    window.addEventListener('touchend', unlockPlay, { once: true, passive: true });
    window.addEventListener('click', unlockPlay, { once: true, passive: true });
    window.addEventListener('scroll', unlockPlay, { once: true, passive: true });

    return () => {
      window.removeEventListener('touchstart', unlockPlay);
      window.removeEventListener('touchend', unlockPlay);
      window.removeEventListener('click', unlockPlay);
      window.removeEventListener('scroll', unlockPlay);
    };
  }, []);

  const [navTransitionKey, setNavTransitionKey] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      setNavTransitionKey((prev) => prev + 1);
      const hash = window.location.hash.replace('#', '');
      if (['get-started', 'blog', 'about', 'how-it-works', 'pricing', 'testimonials', 'faqs', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page, hash = '') => {
    setNavTransitionKey((prev) => prev + 1);
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

  const renderSubPage = () => {
    switch (currentPage) {
      case 'get-started':
        return <AiBrainPage onNavigate={navigate} />;
      case 'blog':
        return <AiBlogPage onNavigate={navigate} />;
      case 'about':
        return <AiAboutPage onNavigate={navigate} />;
      case 'how-it-works':
        return <AiHowItWorksPage onNavigate={navigate} />;
      case 'pricing':
        return <AiPricingPage onNavigate={navigate} />;
      case 'testimonials':
        return <AiTestimonialsPage onNavigate={navigate} />;
      case 'faqs':
        return <AiFaqsPage onNavigate={navigate} />;
      case 'contact':
        return <AiContactPage onNavigate={navigate} />;
      default:
        return null;
    }
  };

  if (currentPage !== 'home') {
    const subPageContent = renderSubPage();
    if (subPageContent) {
      return (
        <div key={`${currentPage}-${navTransitionKey}`} className="page-transition-enter w-full min-h-screen relative">
          {/* Top route transition indicator */}
          <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-300 to-[#00d09c] z-[9999] pointer-events-none top-route-progress shadow-[0_0_10px_rgba(0,208,156,0.8)]" />
          {subPageContent}
        </div>
      );
    }
  }

  return (
    <div key={`home-${navTransitionKey}`} className="page-transition-enter min-h-screen bg-black text-white flex flex-col selection:bg-[#008767] selection:text-white relative">
      {/* Top route transition indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-300 to-[#00d09c] z-[9999] pointer-events-none top-route-progress shadow-[0_0_10px_rgba(0,208,156,0.8)]" />

      {/* Professional Unified Header */}
      <Header currentPage={currentPage} onNavigate={navigate} />

      {/* Hero Section - Full Screen Viewport */}
      <main className="relative min-h-screen pt-16 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-8 text-center overflow-hidden">
        {/* Background Visual (Image poster + Seamless Autoplay Video) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          {/* Base Poster Image - Crisp, clean, never shows any browser play icon */}
          <img
            src={homeImage}
            alt=""
            aria-hidden="true"
            className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
              isRevealed ? 'opacity-90 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'
            }`}
          />

          {/* Background Video - Fades in automatically once playback starts */}
          <video
            ref={videoRef}
            src={homeVideo}
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
            onPlaying={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
            onLoadedData={() => {
              if (videoRef.current) {
                videoRef.current.play().then(() => setIsVideoPlaying(true)).catch(() => {});
              }
            }}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out pointer-events-none select-none ${
              isRevealed && isVideoPlaying ? 'opacity-90' : 'opacity-0'
            }`}
          />

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

      {/* Main White Content Section */}
      <div className="relative w-full bg-white text-gray-900 overflow-hidden cursor-default">
        {/* Typographic Domain Connection Ribbon - Smooth Moving Label Marquee */}
        <div className="relative w-full border-b border-gray-200 py-10 md:py-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center mb-6 sm:mb-8">
            {/* Top Centered Subtitle */}
            <p className="text-xs sm:text-sm font-normal text-gray-500 tracking-normal">
              Connecting 5 Core Business Domains
            </p>
          </div>

          {/* Infinite Moving Marquee Wrapper with Edge Fade Gradients */}
          <div className="relative w-full overflow-hidden flex items-center">
            {/* Left Edge Fade */}
            <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track */}
            <div className="animate-marquee flex items-center whitespace-nowrap">
              {[...Array(4)].map((_, trackIdx) => (
                <div key={trackIdx} className="flex items-center shrink-0">
                  {[
                    'Workforce & HR',
                    'Finance & Health',
                    'Sales & Revenue',
                    'Marketing Impact',
                    'Operations & Workflows',
                  ].map((label, idx) => (
                    <div key={`${trackIdx}-${idx}`} className="flex items-center">
                      <span className="font-headline font-bold text-xl sm:text-2xl md:text-3xl text-[#111827] tracking-tight hover:text-[#008767] transition-colors cursor-default px-6 sm:px-10 select-none">
                        {label}
                      </span>
                      <span className="text-gray-300 text-sm md:text-base select-none">/</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right Edge Fade */}
            <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
        </div>
        {/* Introducing / Business Information Section */}
        <section
          id="introducing"
          className="relative z-10 w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Dark 3D Visual Box */}
              <div className="lg:col-span-5 w-full flex justify-start">
                <div className="w-full h-[340px] sm:h-[400px] lg:h-[450px] bg-black overflow-hidden flex items-center justify-center shadow-[0_12px_36px_rgba(0,0,0,0.18)] relative group">
                  <img
                    src={introductionImg}
                    alt="Business Information Into Clear Insights"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column: Pill Badge, Title, Description */}
              <div className="lg:col-span-7 flex flex-col justify-between self-stretch py-2 lg:py-4">
                <div>
                  {/* Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-6">
                    <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
                    <span>INTRODUCING</span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-[#111827]">
                    Business Information<br />
                    Into Clear Insights
                  </h2>
                </div>

                {/* Subtitle / Paragraph */}
                <p className="font-text text-sm sm:text-[15px] md:text-base text-gray-500 leading-relaxed w-full mt-8 md:mt-12">
                  Your business generates valuable information every day. Brynex AI Brain is designed to bring that information together, uncover meaningful patterns, and help management understand what needs attention and what to consider next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section
          id="challenge"
          className="relative z-10 w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16"
        >
          <div className="max-w-7xl mx-auto">
            {/* Top Pill Badge with Horizontal Line */}
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase shrink-0">
                <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
                <span>THE CHALLENGE</span>
              </div>
              <div className="h-[1px] bg-gray-200 flex-1" />
            </div>

            {/* 2-Column Text Row: Heading (Left) & Description (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 md:mb-14">
              {/* Left Column: Heading */}
              <div className="lg:col-span-6">
                <h2 className="font-headline font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] tracking-tight text-[#111827]">
                  Seeing the Numbers<br />
                  Isn’t Always Enough
                </h2>
              </div>

              {/* Right Column: Description */}
              <div className="lg:col-span-6 lg:pt-2">
                <p className="font-text text-xs sm:text-sm md:text-[15px] text-gray-500 leading-relaxed max-w-xl">
                  When business information is spread across departments, it can be difficult to understand the full picture. Brynex AI Brain helps management explore business changes, investigate possible causes, and identify areas that may need attention.
                </p>
              </div>
            </div>

            {/* Panoramic Banner Visual - Matching Pricing Banner Dimensions (1160px x 255px) */}
            <div className="w-full h-[180px] sm:h-[220px] md:h-[255px] bg-black overflow-hidden flex items-center justify-center shadow-xl relative group">
              <img
                src={bigBannerImg}
                alt="Seeing the Numbers Isn't Always Enough"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 opacity-100"
              />
            </div>
          </div>
        </section>

        {/* One Connected Business Section with line-by-line writing animation */}
        <OneConnectedBusinessSection />

        {/* How It Works Section - Timeline matching design */}
        <HowItWorksTimelineSection />

        {/* Why Choose Us Section - Clarity for Every Business Decision */}
        <WhyChooseUsSection />

        {/* Pricing Section */}
        <PricingSection onNavigate={navigate} />

        {/* See What Your Business Can Understand Banner Section */}
        <BusinessInsightBannerSection onNavigate={navigate} />
      </div>

      {/* Modern High-End Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
