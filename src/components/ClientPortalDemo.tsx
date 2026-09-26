import React, { useState } from 'react';
import { 
  FolderGit2, CheckCircle2, Clock, AlertCircle, Send, 
  ExternalLink, FileText, ShieldCheck, LifeBuoy, Check, Sparkles 
} from 'lucide-react';

export const ClientPortalDemo: React.FC = () => {
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketCategory, setTicketCategory] = useState('bug');
  const [ticketDescription, setTicketDescription] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);
  const [stagingNotice, setStagingNotice] = useState(false);

  const milestones = [
    { name: '1. Discovery & Technical Architecture', status: 'completed', date: 'Sept 10' },
    { name: '2. High-Fidelity UI/UX & Responsive Prototype', status: 'completed', date: 'Sept 16' },
    { name: '3. Frontend & M-Pesa Daraja STK Push Integration', status: 'in_progress', date: 'Active (85%)' },
    { name: '4. Security Vulnerability Scan & Speed Audit', status: 'pending', date: 'Est. Oct 2' },
    { name: '5. Production Deployment & DNS Switch', status: 'pending', date: 'Est. Oct 7' }
  ];

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketDescription) return;
    setTicketSubmitted(true);
    setTimeout(() => {
      setTicketSubject('');
      setTicketDescription('');
      setTicketSubmitted(false);
    }, 4000);
  };

  return (
    <section id="client-portal" className="py-20 lg:py-28 bg-slate-900/30 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-400 tracking-wider mb-2">
            CLIENT EXPERIENCE · INTERACTIVE WORKSPACE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Total Transparency With Our Client Portal
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Every client at Domain Tech Hub receives 24/7 access to live staging builds, milestone velocity charts, deliverable repositories, and priority technical support ticketing.
          </p>
        </div>

        {/* Dashboard Shell Container */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Top Mock Window Bar */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400">
                portal.domaintechhub.com / client / PRJ-2026-884
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                SLA: ACTIVE (24/7 SQUAD)
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Project Overview & Milestones (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Project Card */}
              <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase">
                    Active Client Project
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Target Launch: Oct 7, 2026
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  AfriTrade Multivendor E-Commerce & M-Pesa STK Gateway
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Custom Next.js storefront, Safaricom Daraja API callbacks, Redis caching, and automated vendor payout pipeline.
                </p>

                {/* Staging link pill */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-slate-400 font-mono">Staging URL:</span>
                    <button
                      type="button" 
                      onClick={() => {
                        setStagingNotice(true);
                        setTimeout(() => setStagingNotice(false), 4500);
                      }}
                      className="text-cyan-400 hover:underline font-mono flex items-center gap-1 text-left"
                    >
                      <span>https://staging.afritrade.domaintechhub.dev</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </button>
                  </div>
                  {stagingNotice && (
                    <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[11px] font-mono flex items-center gap-2 animate-in fade-in">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Preview Verified: Automated integration tests & M-Pesa Daraja Sandbox 100% Passing.</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Milestones Flow */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Engineering Milestones & Sprint Progress
                </h4>

                <div className="space-y-3">
                  {milestones.map((m, idx) => (
                    <div 
                      key={idx}
                      className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                        m.status === 'completed' 
                          ? 'bg-slate-900/50 border-emerald-900/40 text-slate-300' 
                          : m.status === 'in_progress'
                          ? 'bg-cyan-950/40 border-cyan-500/70 text-white font-medium shadow-sm'
                          : 'bg-slate-900/20 border-slate-800 text-slate-500'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {m.status === 'completed' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : m.status === 'in_progress' ? (
                          <div className="w-4 h-4 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin shrink-0" />
                        ) : (
                          <Clock className="w-4 h-4 text-slate-600 shrink-0" />
                        )}
                        <span>{m.name}</span>
                      </div>
                      <span className="font-mono text-[11px] shrink-0 text-slate-400">
                        {m.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Downloads */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Completed Deliverables & Documentation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Figma Design Tokens & UI Kit.pdf</span>
                    </span>
                    <span className="font-mono text-[10px] text-slate-500">4.2 MB</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>M-Pesa Daraja Architecture.pdf</span>
                    </span>
                    <span className="font-mono text-[10px] text-slate-500">1.8 MB</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Support & Change Request Desk (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LifeBuoy className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-bold text-sm text-white">
                    Submit Priority Ticket / Request
                  </h4>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  Need a content update, bug fix, or new API integration? Our engineering squad responds within 20 minutes during office hours.
                </p>

                {ticketSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-800 text-center animate-in fade-in">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                    <h5 className="font-bold text-sm text-white">Ticket #DTH-8492 Logged!</h5>
                    <p className="text-xs text-slate-300 mt-1">
                      Our on-call engineer has been notified on Slack & WhatsApp. Estimated response: 18 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleTicketSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                        Category
                      </label>
                      <select
                        value={ticketCategory}
                        onChange={(e) => setTicketCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                      >
                        <option value="bug">Bug Fix / Outage</option>
                        <option value="content">Content / Banner Update</option>
                        <option value="feature">New Feature / Scope Extension</option>
                        <option value="seo">SEO / Analytics Query</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={ticketSubject}
                        onChange={(e) => setTicketSubject(e.target.value)}
                        placeholder="e.g. Update M-Pesa Shortcode in staging"
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">
                        Description / Details
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={ticketDescription}
                        onChange={(e) => setTicketDescription(e.target.value)}
                        placeholder="Describe the adjustment or provide page link..."
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch Ticket to Engineers</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 text-[11px] text-slate-500">
                Direct Emergency Hotline: <span className="text-slate-300 font-mono">+254 118746676</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
