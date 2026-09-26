import React from 'react';
import { 
  Globe, Mail, Phone, MapPin, Clock, MessageSquare, 
  ArrowUpRight, Heart, Shield, Code 
} from 'lucide-react';
import { AGENCY_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string, subParam?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/90 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-cyan-500/20">
                DTH
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Domain Tech Hub
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Nairobi’s premier digital technology agency. We architect custom web applications, high-converting e-commerce platforms, result-driven SEO campaigns, WhatsApp marketing automation, and proprietary business CRM systems.
            </p>

            <div className="pt-2 space-y-2 font-mono text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-cyan-300">
                  {AGENCY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>+254 118746676 / +254 706 943383</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Mon – Fri: 8:00 AM – 5:00 PM (EAT)</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1: Core Services */}
          <div>
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4 font-semibold">
              Core Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigate('services', 'web-development')} className="hover:text-cyan-300 text-left transition-colors">
                  Custom Website Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'front-end-development')} className="hover:text-cyan-300 text-left transition-colors">
                  Front-End Engineering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'ecommerce-development')} className="hover:text-cyan-300 text-left transition-colors">
                  E-Commerce & M-Pesa Stores
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'cms-development')} className="hover:text-cyan-300 text-left transition-colors">
                  CMS & WordPress Builds
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'mobile-app-development')} className="hover:text-cyan-300 text-left transition-colors">
                  Mobile App Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'website-maintenance')} className="hover:text-cyan-300 text-left transition-colors">
                  Website Maintenance SLA
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: Growth & Systems */}
          <div>
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4 font-semibold">
              Growth & Systems
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigate('services', 'seo-services')} className="hover:text-cyan-300 text-left transition-colors">
                  Search Engine Optimization (SEO)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'ppc-management')} className="hover:text-cyan-300 text-left transition-colors">
                  Google Ads PPC Management
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'whatsapp-marketing')} className="hover:text-cyan-300 text-left transition-colors">
                  WhatsApp Business API Bots
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'custom-crm-development')} className="hover:text-cyan-300 text-left transition-colors">
                  Custom CRM Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'ai-powered-solutions')} className="hover:text-cyan-300 text-left transition-colors">
                  AI-Powered Solutions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services', 'graphic-design-branding')} className="hover:text-cyan-300 text-left transition-colors">
                  Brand Identity & Graphics
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Tools & Quick Links */}
          <div>
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4 font-semibold">
              Client Tools
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigate('tech-stack')} className="hover:text-cyan-300 text-left transition-colors flex items-center gap-1">
                  <span>Our Tech Stack</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculator')} className="hover:text-cyan-300 text-left transition-colors flex items-center gap-1">
                  <span>Project Cost Calculator</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('audit')} className="hover:text-cyan-300 text-left transition-colors flex items-center gap-1">
                  <span>Free Live SEO Audit Tool</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('domains')} className="hover:text-cyan-300 text-left transition-colors flex items-center gap-1">
                  <span>Domain & Hosting Checker</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('client-portal')} className="hover:text-cyan-300 text-left transition-colors">
                  Client Project Portal (Demo)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-cyan-300 text-left transition-colors">
                  Case Studies & Metrics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-cyan-300 text-left transition-colors flex items-center gap-1">
                  <span>Insights & Tech Trends</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-cyan-300 text-left transition-colors flex items-center gap-1">
                  <span>Frequently Asked Questions</span>
                  <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=Hello%20Domain%20Tech%20Hub`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-emerald-400"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Direct WhatsApp Line</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Domain Tech Hub (domaintechhub.com). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-300 cursor-pointer">SLA Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
