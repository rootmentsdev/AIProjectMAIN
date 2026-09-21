import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { HowItWorksVisual } from './AiVisualIllustrations';

export default function AiHowItWorksPage({ onNavigate }) {
  const [selectedSource, setSelectedSource] = useState('sheets');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeAnalysisStage, setActiveAnalysisStage] = useState(0);

  const sourceConnectors = [
    {
      id: 'sheets',
      name: 'Google Sheets & Excel',
      badge: 'Zero-Code Sync',
      type: 'Spreadsheets & Financial Records',
      sampleIssue: 'Discrepancy in Column G (Row 142–180): Formula broken in Inventory Lead Times causing 400-unit shortfall forecast.',
      countermeasure: 'Auto-recalibrated supply chain formulas, synchronized buffer stocks, and dispatched vendor PO draft.'
    },
    {
      id: 'website',
      name: 'Your Website & Web Apps',
      badge: 'Live Traffic & Events',
      type: 'E-Commerce, SaaS & Portals',
      sampleIssue: 'Checkout Stage Bottleneck: 24% conversion drop on mobile payment gateway due to script latency in Region West.',
      countermeasure: 'Auto-rerouted mobile transactions to high-availability secondary payment rail; restored conversion rate +22%.'
    },
    {
      id: 'database',
      name: 'PostgreSQL, MySQL & Cloud DBs',
      badge: 'Direct Query VPC',
      type: 'Production Databases & Warehouses',
      sampleIssue: 'Unreconciled Transaction Drift: 142 orphaned invoice IDs detected between billing DB and payment gateway.',
      countermeasure: 'Executed automated graph reconciliation script; resolved 100% of orphaned records without manual intervention.'
    },
    {
      id: 'tools',
      name: 'CRMs, ERPs & Internal Tools',
      badge: 'Bi-directional APIs',
      type: 'Salesforce, SAP, Notion, Slack',
      sampleIssue: 'Enterprise Deal Stalled: Key decision maker left account; deal stagnant for 21 days with 0 meeting cadence.',
      countermeasure: 'Identified 3 warm mutual introductions across team graph; drafted personalized re-engagement cadence for AE.'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Connect Any Site, Sheet, or Tool',
      tag: '1-Click Ingestion',
      desc: 'Connect your live Google Sheets, websites, custom software, databases, or ERPs in minutes. Our secure connectors stream your operational data directly into your private AI Brain with zero complex coding.'
    },
    {
      step: '02',
      title: 'AI Brain Issue Diagnostics',
      tag: 'Root-Cause Discovery',
      desc: 'The AI Brain continuously analyzes your data streams, cross-referencing numbers across spreadsheets and site activity to uncover silent bottlenecks, revenue leaks, and operational errors before they cause damage.'
    },
    {
      step: '03',
      title: 'Formulate Counter-Measures',
      tag: 'Strategic Solution Generation',
      desc: 'Rather than just showing graphs, the AI Brain formulates step-by-step counter-measures backed by mathematical certainty to resolve the root cause of every detected problem.'
    },
    {
      step: '04',
      title: 'Execute & Automate Resolutions',
      tag: 'Closed-Loop Action',
      desc: 'Approve fixes with one click or let the AI Brain autonomously update your Google Sheets, trigger webhooks, notify staff on Slack, or update internal systems in real-time.'
    }
  ];

  const activeSourceData = sourceConnectors.find(s => s.id === selectedSource) || sourceConnectors[0];

  const handleRunDiagnostics = () => {
    if (isAnalyzing) return;
    setIsAnalyzing(true);
    setActiveAnalysisStage(1);
    setTimeout(() => setActiveAnalysisStage(2), 700);
    setTimeout(() => setActiveAnalysisStage(3), 1500);
    setTimeout(() => setActiveAnalysisStage(4), 2300);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-text selection:bg-[#008767] selection:text-white">
      {/* Unified Professional Header */}
      <Header currentPage="how-it-works" onNavigate={onNavigate} forceTheme="light" />

      {/* Hero Header */}
      <section className="w-full pt-16 pb-16 px-6 sm:px-10 lg:px-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 bg-[#008767] inline-block rounded-[1px]" />
            <span>HOW THE AI BRAIN WORKS</span>
          </div>

          <h1 className="font-headline font-normal text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#111827] max-w-4xl mb-6">
            Connect any site, Google Sheet, or database. Let AI analyze your issues & execute counter-measures.
          </h1>

          <p className="font-text text-base sm:text-lg text-gray-500 leading-relaxed max-w-3xl">
            Whether your business runs on Google Sheets, an e-commerce website, custom portals, or enterprise tools — connect them to the Brynex AI Brain to automatically discover bottlenecks, find root causes, and deploy verified solutions.
          </p>
        </div>
      </section>

      {/* 4-Stage Lifecycle Cards */}
      <section className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((w, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#008767]/60 hover:shadow-lg transition-all"
              >
                <div>
                  <div className="font-mono text-3xl font-extrabold text-[#008767] mb-4">{w.step}</div>
                  <h3 className="font-headline font-bold text-xl text-gray-900 mb-1">{w.title}</h3>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 uppercase tracking-wider inline-block mb-4">
                    {w.tag}
                  </span>
                  <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Connector & Countermeasure Simulator */}
      <section className="w-full py-20 px-6 sm:px-10 lg:px-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-[#008767] text-xs font-bold mb-3 border border-emerald-200">
              INTERACTIVE DIAGNOSTICS & COUNTER-MEASURES
            </span>
            <h2 className="font-headline font-normal text-3xl sm:text-4xl text-[#111827] tracking-tight mb-4">
              Select Your System & Watch AI Brain Diagnose & Fix Issues
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Click any source you use in your business to see how our AI Brain ingests the data, isolates the problem, and deploys counter-measures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Source Selector */}
            <div className="lg:col-span-4 space-y-3">
              {sourceConnectors.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setSelectedSource(s.id);
                    setActiveAnalysisStage(0);
                  }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                    selectedSource === s.id
                      ? 'bg-black text-white border-black shadow-xl scale-[1.02]'
                      : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-bold text-base">{s.name}</span>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full ${
                      selectedSource === s.id ? 'bg-[#008767] text-white' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {s.badge}
                    </span>
                  </div>
                  <span className={`text-xs ${selectedSource === s.id ? 'text-gray-300' : 'text-gray-500'}`}>
                    {s.type}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Terminal & Countermeasure Engine */}
            <div className="lg:col-span-8 bg-[#090e11] rounded-3xl p-6 sm:p-8 border border-gray-800 text-white font-mono shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-400 ml-2">brynex-ai-brain-diagnostics.log</span>
                </div>
                <span className="text-xs text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  BRAIN ONLINE
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="text-gray-500">&gt; Connected Data Pipeline:</span>{' '}
                  <span className="text-cyan-400 font-bold">{activeSourceData.name}</span>
                </div>

                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-gray-200">
                  <span className="text-xs text-red-400 uppercase font-bold block mb-1">
                    ⚠ Detected Business Issue / Bottleneck:
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed">{activeSourceData.sampleIssue}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#008767]/15 border border-[#008767]/40 text-gray-200">
                  <span className="text-xs text-[#4ade80] uppercase font-bold block mb-1">
                    ✓ Recommended & Executable Counter-Measure:
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed">{activeSourceData.countermeasure}</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleRunDiagnostics}
                  disabled={isAnalyzing}
                  className="px-5 py-2.5 rounded-xl bg-[#008767] hover:bg-[#007559] text-white text-xs font-bold transition-all disabled:opacity-50 cursor-pointer shadow-lg"
                >
                  {isAnalyzing ? 'Analyzing Root Cause...' : 'Run Live Counter-Measure Test →'}
                </button>

                {activeAnalysisStage > 0 && (
                  <span className="text-xs text-emerald-400">
                    {activeAnalysisStage === 1 && '1/3 Inspecting linked data schemas & Google Sheet formulas...'}
                    {activeAnalysisStage === 2 && '2/3 Isolating correlation anomalies across operational streams...'}
                    {activeAnalysisStage === 3 && '3/3 Formulating counter-measure & verified resolution playbook...'}
                    {activeAnalysisStage === 4 && '✓ Counter-measure executed with 100% mathematical integrity!'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Universal Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
