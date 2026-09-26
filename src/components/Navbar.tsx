import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, Globe, Layout, ShoppingCart, Search, Database, 
  Cpu, MessageSquare, Calculator, Zap, Server, FolderGit2, 
  HelpCircle, ArrowRight, ArrowUpRight, Menu, X, Sparkles,
  PhoneCall, ShieldCheck, Languages, Sun, Moon, SlidersHorizontal,
  Check, Layers, Home
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { useLanguage, Language } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { AGENCY_INFO } from '../data/portfolioData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown states
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  // Mobile drawer accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  const { currency, setCurrency } = useCurrency();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const toolsDropdownRef = useRef<HTMLDivElement>(null);
  const preferencesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on scroll or outside click, and listen for ⌘K
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      setServicesDropdownOpen(false);
      setToolsDropdownOpen(false);
      setPreferencesOpen(false);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(target)) {
        setServicesDropdownOpen(false);
      }
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(target)) {
        setToolsDropdownOpen(false);
      }
      if (preferencesRef.current && !preferencesRef.current.contains(target)) {
        setPreferencesOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenSearch?.();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onOpenSearch]);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setServicesDropdownOpen(false);
    setToolsDropdownOpen(false);
    setPreferencesOpen(false);
    setMobileMenuOpen(false);
  };

  const isHomeActive = activeSection === 'home' || activeSection === 'hero';
  const isServicesActive = activeSection === 'services' || activeSection === 'tech-stack';
  const isPortfolioActive = activeSection === 'portfolio';
  const isToolsActive = activeSection === 'tools' || activeSection === 'calculator' || activeSection === 'audit' || activeSection === 'domains';
  const isInsightsActive = activeSection === 'insights';
  const isPortalActive = activeSection === 'portal' || activeSection === 'client-portal';
  const isContactActive = activeSection === 'contact';

  return (
    <>
      {/* Topmost Page Scroll Progress Indicator Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-stone-200/60 dark:bg-slate-900/60 z-[60] pointer-events-none"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading & Page Scroll Progress"
      >
        <div 
          className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-600 shadow-[0_0_10px_rgba(20,184,166,0.8)] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl border-b border-stone-200/90 dark:border-slate-800/80 shadow-md shadow-stone-200/20 dark:shadow-black/40 py-2.5' 
            : 'bg-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* 1. Brand Logo & Name */}
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-xl p-1 shrink-0"
              aria-label="Domain Tech Hub Home"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-teal-500 via-emerald-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
                <span className="font-mono font-extrabold text-xs sm:text-sm tracking-tight">DTH</span>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    Domain Tech Hub
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Engineers Available" />
                </div>
                <p className="text-[10px] text-slate-600 dark:text-slate-400 font-mono tracking-wide font-medium">
                  {t('nav.subheading')}
                </p>
              </div>
            </button>

            {/* 2. Desktop Centered Navigation Pill */}
            <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 border border-stone-200 dark:border-slate-800 backdrop-blur-md shadow-sm">
              
              {/* Home Link */}
              <button
                onClick={() => handleNavClick('home')}
                className={`px-3 py-1.5 text-xs rounded-full transition-all ${
                  isHomeActive
                    ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/90 dark:border-teal-800 font-bold' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60 font-medium'
                }`}
              >
                {t('nav.home')}
              </button>

              {/* Services Dropdown */}
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  type="button"
                  onClick={() => {
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    setToolsDropdownOpen(false);
                    setPreferencesOpen(false);
                  }}
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs rounded-full transition-all ${
                    isServicesActive || servicesDropdownOpen
                      ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/90 dark:border-teal-800 font-bold' 
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60 font-medium'
                  }`}
                >
                  <span>{t('nav.services')}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
                </button>

                {/* Services Mega Dropdown */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-[460px] p-3.5 bg-white dark:bg-slate-950 backdrop-blur-2xl border border-stone-200 dark:border-slate-800 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="text-[10px] font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider px-3 pt-1 pb-2">
                      Capabilities & Engineering Services
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        onClick={() => handleNavClick('services')}
                        className="text-left p-2.5 rounded-2xl hover:bg-stone-50 dark:hover:bg-slate-900 transition-colors group flex items-start gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                            Web & Mobile Dev
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-1">
                            React, Next.js, cross-platform apps
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('services')}
                        className="text-left p-2.5 rounded-2xl hover:bg-stone-50 dark:hover:bg-slate-900 transition-colors group flex items-start gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <ShoppingCart className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                            E-Commerce & M-Pesa
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-1">
                            Daraja STK Push & Shopify stores
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('services')}
                        className="text-left p-2.5 rounded-2xl hover:bg-stone-50 dark:hover:bg-slate-900 transition-colors group flex items-start gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Search className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                            SEO & Lead Growth
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-1">
                            Google Ads & Page 1 ranking
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('services')}
                        className="text-left p-2.5 rounded-2xl hover:bg-stone-50 dark:hover:bg-slate-900 transition-colors group flex items-start gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-blue-950/60 border border-purple-200 dark:border-blue-800 text-purple-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-blue-300 transition-colors">
                            Custom CRM & Portals
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-1">
                            Replace manual spreadsheets
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('tech-stack')}
                        className="text-left p-2.5 rounded-2xl hover:bg-stone-100 dark:hover:bg-slate-900 transition-colors group flex items-start gap-2.5 col-span-2 bg-stone-50 dark:bg-slate-900/50 border border-stone-200 dark:border-slate-800/70"
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-violet-950/60 border border-blue-200 dark:border-violet-800 text-blue-600 dark:text-violet-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-violet-300 transition-colors">
                              {t('nav.techStack')}
                            </span>
                            <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400">React · Node · Python · AWS</span>
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                            Explore our production frameworks, APIs, and DevOps standards
                          </div>
                        </div>
                      </button>
                    </div>

                    <div className="mt-2 pt-2 border-t border-stone-200 dark:border-slate-800 flex items-center justify-between px-3 text-[11px] font-mono">
                      <span className="text-slate-500">15+ Turnkey Services</span>
                      <button
                        onClick={() => handleNavClick('services')}
                        className="text-teal-600 dark:text-teal-400 hover:text-teal-700 flex items-center gap-1 font-semibold"
                      >
                        <span>{t('nav.exploreAll')}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies Link */}
              <button
                onClick={() => handleNavClick('portfolio')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  isPortfolioActive 
                    ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/90 dark:border-teal-800 font-bold' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-stone-100/80 dark:hover:bg-slate-800/60'
                }`}
              >
                {t('nav.portfolio')}
              </button>

              {/* Client Tools Dropdown */}
              <div className="relative" ref={toolsDropdownRef}>
                <button
                  type="button"
                  onClick={() => {
                    setToolsDropdownOpen(!toolsDropdownOpen);
                    setServicesDropdownOpen(false);
                    setPreferencesOpen(false);
                  }}
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    isToolsActive || toolsDropdownOpen
                      ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/90 dark:border-teal-800 font-bold' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-stone-100/80 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{t('nav.tools')}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${toolsDropdownOpen ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
                </button>

                {toolsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-[320px] p-2.5 bg-white dark:bg-slate-950 backdrop-blur-2xl border border-stone-200 dark:border-slate-800 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50 space-y-1">
                    <div className="text-[10px] font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider px-3 pt-1 pb-1">
                      Free Instant Utilities
                    </div>

                    <button
                      onClick={() => handleNavClick('calculator')}
                      className="w-full text-left p-2.5 rounded-2xl hover:bg-stone-50 dark:hover:bg-slate-900 transition-colors group flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-cyan-950/60 border border-teal-200 dark:border-cyan-800 text-teal-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                          <span>{t('nav.calculator')}</span>
                          <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-1 py-0.2 rounded border border-emerald-200 dark:border-emerald-800">USD / KES</span>
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                          Instant scope configuration & quotation
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('audit')}
                      className="w-full text-left p-2.5 rounded-2xl hover:bg-stone-50 dark:hover:bg-slate-900 transition-colors group flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                          <span>{t('nav.audit')}</span>
                          <span className="text-[9px] font-mono text-teal-700 dark:text-cyan-300 bg-teal-50 dark:bg-cyan-950/80 px-1 py-0.2 rounded border border-teal-200">FREE</span>
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                          Core Web Vitals & speed diagnostic
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('domains')}
                      className="w-full text-left p-2.5 rounded-2xl hover:bg-stone-50 dark:hover:bg-slate-900 transition-colors group flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                          {t('nav.domains')}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                          .co.ke domain lookup + NVMe SSD hosting
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Insights Link */}
              <button
                onClick={() => handleNavClick('insights')}
                className={`px-3 py-1.5 text-xs rounded-full transition-all ${
                  isInsightsActive 
                    ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/90 dark:border-teal-800 font-bold' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60 font-medium'
                }`}
              >
                {t('nav.insights')}
              </button>

              {/* Portal Link */}
              <button
                onClick={() => handleNavClick('client-portal')}
                className={`px-3 py-1.5 text-xs rounded-full transition-all ${
                  isPortalActive 
                    ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/90 dark:border-teal-800 font-bold' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60 font-medium'
                }`}
              >
                {t('nav.clientPortal')}
              </button>

              {/* Contact Link */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-1.5 text-xs rounded-full transition-all ${
                  isContactActive 
                    ? 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200/90 dark:border-teal-800 font-bold' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60 font-medium'
                }`}
              >
                {t('nav.contact')}
              </button>
            </nav>

            {/* 3. Desktop Consolidated Action Cluster */}
            <div className="hidden sm:flex items-center gap-2">
              
              {/* Global Search Button in Navbar */}
              <button
                type="button"
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white hover:bg-stone-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-stone-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium transition-all group focus:outline-none shadow-xs"
                title="Search services, case studies, insights (⌘K)"
                aria-label="Search site"
              >
                <Search className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform" />
                <span className="hidden xl:inline text-slate-700 dark:text-slate-300 font-medium">Search...</span>
                <kbd className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-stone-100 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-slate-500 dark:text-slate-400">⌘K</kbd>
              </button>

              {/* Consolidated Preferences Popover (Language + Currency) */}
              <div className="relative" ref={preferencesRef}>
                <button
                  type="button"
                  onClick={() => {
                    setPreferencesOpen(!preferencesOpen);
                    setServicesDropdownOpen(false);
                    setToolsDropdownOpen(false);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-mono transition-all ${
                    preferencesOpen
                      ? 'bg-stone-100 dark:bg-slate-800 text-teal-700 dark:text-teal-300 border-teal-500/40 shadow-xs'
                      : 'bg-white dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border-stone-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white shadow-xs'
                  }`}
                  title="Language & Currency settings"
                  aria-label="Language & Currency preferences"
                >
                  <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span className="font-bold">{language}</span>
                  <span className="text-slate-400">·</span>
                  <span className="font-bold">{currency}</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${preferencesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Preferences Dropdown Panel */}
                {preferencesOpen && (
                  <div className="absolute top-full right-0 mt-3 w-64 p-3 bg-white dark:bg-slate-950 backdrop-blur-2xl border border-stone-200 dark:border-slate-800 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50 space-y-3">
                    
                    {/* Language Section */}
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Languages className="w-3 h-3 text-teal-600" />
                        <span>Language / Langue</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 font-mono text-xs">
                        {[
                          { code: 'EN', name: 'English' },
                          { code: 'FR', name: 'Français' },
                          { code: 'SW', name: 'Swahili' }
                        ].map((item) => (
                          <button
                            key={item.code}
                            type="button"
                            onClick={() => {
                              setLanguage(item.code as Language);
                              setPreferencesOpen(false);
                            }}
                            className={`px-2 py-1.5 rounded-xl text-center transition-all ${
                              language === item.code
                                ? 'bg-teal-50 text-teal-700 font-bold border border-teal-200 dark:bg-teal-950 dark:text-teal-300'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-stone-100 dark:hover:bg-slate-900'
                            }`}
                          >
                            <div>{item.code}</div>
                            <div className="text-[9px] text-slate-400">{item.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-stone-100 dark:bg-slate-800" />

                    {/* Currency Section */}
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <span className="font-bold text-teal-600">$</span>
                        <span>Currency Display</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 font-mono text-xs">
                        <button
                          type="button"
                          onClick={() => {
                            setCurrency('USD');
                            setPreferencesOpen(false);
                          }}
                          className={`p-2 rounded-xl text-left transition-all ${
                            currency === 'USD'
                              ? 'bg-teal-50 text-teal-700 font-bold border border-teal-200 dark:bg-teal-950 dark:text-teal-300'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-stone-100 dark:hover:bg-slate-900'
                          }`}
                        >
                          <div className="font-bold text-slate-900 dark:text-white">USD ($)</div>
                          <div className="text-[10px] text-slate-400">US Dollar</div>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setCurrency('KES');
                            setPreferencesOpen(false);
                          }}
                          className={`p-2 rounded-xl text-left transition-all ${
                            currency === 'KES'
                              ? 'bg-teal-50 text-teal-700 font-bold border border-teal-200 dark:bg-teal-950 dark:text-teal-300'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-stone-100 dark:hover:bg-slate-900'
                          }`}
                        >
                          <div className="font-bold text-slate-900 dark:text-white">KES (KSh)</div>
                          <div className="text-[10px] text-slate-400">Kenya Shilling</div>
                        </button>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-full bg-stone-100 hover:bg-stone-200/80 dark:bg-slate-900/80 border border-stone-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 transition-all flex items-center justify-center group focus:outline-none"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 group-hover:-rotate-12 transition-transform" />
                )}
              </button>

              {/* Direct Official WhatsApp Pill */}
              <a
                href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=Hello%20Domain%20Tech%20Hub,%20I'm%20interested%20in%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 text-xs font-medium transition-colors"
                title="Chat directly with Nairobi team on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{t('nav.whatsapp')}</span>
              </a>

              {/* Prominent Green Book Strategy Call CTA */}
              <button
                onClick={() => handleNavClick('contact')}
                className="px-4.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                {t('nav.bookCall')}
              </button>

            </div>

            {/* 4. Clean Mobile Header Controls (Search, Theme, WhatsApp, Hamburger) */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 bg-stone-100 dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-300"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-teal-600" />
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 bg-stone-100 dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-300"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle light/dark theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>

              <a
                href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=Hello%20Domain%20Tech%20Hub`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-600 dark:text-emerald-400"
                aria-label="Contact via WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-stone-100 dark:bg-slate-900 border border-stone-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* 5. Mobile Clean Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl border-b border-stone-200 dark:border-slate-800 px-4 pt-4 pb-8 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
            
            {/* Quick Search in Mobile Drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch?.();
              }}
              className="w-full flex items-center gap-2.5 p-3 rounded-2xl bg-stone-100 dark:bg-slate-900 border border-stone-200 dark:border-slate-800 text-slate-500 text-xs text-left"
            >
              <Search className="w-4 h-4 text-teal-600" />
              <span>Search services, case studies, tools...</span>
              <kbd className="ml-auto text-[10px] font-mono px-1.5 py-0.5 bg-white dark:bg-slate-800 border rounded">⌘K</kbd>
            </button>

            {/* Prominent Green Mobile Action Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
            >
              <span>{t('nav.bookCall')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Main Navigation Links List */}
            <div className="bg-stone-50 dark:bg-slate-900/40 border border-stone-200 dark:border-slate-800 rounded-2xl overflow-hidden divide-y divide-stone-200/80 dark:divide-slate-800/60">
              
              {/* Home Link */}
              <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left p-3.5 text-xs font-semibold flex items-center justify-between transition-colors ${
                  isHomeActive 
                    ? 'bg-teal-50 dark:bg-cyan-950/50 text-teal-800 dark:text-cyan-300 font-bold' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-900/60'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Home className={`w-4 h-4 ${isHomeActive ? 'text-teal-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                  <span>{t('nav.home')} (Landing Overview)</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-semibold text-slate-900 dark:text-white text-left hover:bg-stone-100 dark:hover:bg-slate-900/60 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-teal-600" />
                    <span>{t('nav.services')}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? 'rotate-180 text-teal-600' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="px-3 pb-3 space-y-1 bg-white dark:bg-slate-950/50 pt-1 text-xs">
                    <button
                      onClick={() => handleNavClick('services')}
                      className="w-full text-left py-2 px-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800/60 flex items-center justify-between"
                    >
                      <span>Web & Mobile Development</span>
                      <ArrowRight className="w-3 h-3 text-teal-600" />
                    </button>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="w-full text-left py-2 px-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800/60 flex items-center justify-between"
                    >
                      <span>E-Commerce & M-Pesa Integrations</span>
                      <ArrowRight className="w-3 h-3 text-emerald-600" />
                    </button>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="w-full text-left py-2 px-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800/60 flex items-center justify-between"
                    >
                      <span>SEO & Performance Optimization</span>
                      <ArrowRight className="w-3 h-3 text-amber-600" />
                    </button>
                    <button
                      onClick={() => handleNavClick('tech-stack')}
                      className="w-full text-left py-2 px-3 rounded-xl text-blue-800 dark:text-cyan-300 bg-blue-50 dark:bg-cyan-950/40 border border-blue-200 dark:border-cyan-800/40 flex items-center justify-between font-semibold"
                    >
                      <span>{t('nav.techStack')}</span>
                      <Cpu className="w-3.5 h-3.5 text-blue-600" />
                    </button>
                  </div>
                )}
              </div>

              {/* Tools Accordion */}
              <div>
                <button
                  onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-semibold text-slate-900 dark:text-white text-left hover:bg-stone-100 dark:hover:bg-slate-900/60 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <Calculator className="w-4 h-4 text-teal-600" />
                    <span>{t('nav.tools')}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileToolsOpen ? 'rotate-180 text-teal-600' : ''}`} />
                </button>

                {mobileToolsOpen && (
                  <div className="px-3 pb-3 space-y-1 bg-white dark:bg-slate-950/50 pt-1 text-xs">
                    <button
                      onClick={() => handleNavClick('calculator')}
                      className="w-full text-left py-2 px-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800/60 flex items-center justify-between"
                    >
                      <span>{t('nav.calculator')}</span>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold">USD / KES</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('audit')}
                      className="w-full text-left py-2 px-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800/60 flex items-center justify-between"
                    >
                      <span>{t('nav.audit')}</span>
                      <span className="text-[9px] font-mono text-amber-600 bg-amber-50 px-1 rounded border border-amber-200">FREE</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('domains')}
                      className="w-full text-left py-2 px-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800/60 flex items-center justify-between"
                    >
                      <span>{t('nav.domains')}</span>
                      <Server className="w-3 h-3 text-blue-600" />
                    </button>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              {[
                { id: 'portfolio', label: t('nav.portfolio'), icon: FolderGit2 },
                { id: 'insights', label: t('nav.insights'), icon: Sparkles },
                { id: 'client-portal', label: t('nav.clientPortal'), icon: ShieldCheck },
                { id: 'faq', label: t('nav.faq'), icon: HelpCircle },
                { id: 'contact', label: t('nav.contact'), icon: PhoneCall }
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left p-3.5 text-xs font-semibold flex items-center justify-between transition-colors ${
                      isActive 
                        ? 'bg-teal-50 dark:bg-cyan-950/50 text-teal-800 dark:text-cyan-300 font-bold' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-900/60'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Consolidated Preferences Card */}
            <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-900/60 border border-stone-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <Languages className="w-3.5 h-3.5 text-teal-600" />
                  <span>Language:</span>
                </span>
                <div className="flex gap-1 font-mono text-xs">
                  {(['EN', 'FR', 'SW'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`px-2.5 py-1 rounded-lg transition-colors ${
                        language === lang 
                          ? 'bg-teal-50 text-teal-700 font-bold border border-teal-200 dark:bg-teal-950 dark:text-teal-300' 
                          : 'text-slate-600 bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-800'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <span className="font-bold text-teal-600">$</span>
                  <span>Currency:</span>
                </span>
                <div className="flex gap-1 font-mono text-xs">
                  {(['USD', 'KES'] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-2.5 py-1 rounded-lg transition-colors ${
                        currency === curr 
                          ? 'bg-teal-50 text-teal-700 font-bold border border-teal-200 dark:bg-teal-950 dark:text-teal-300' 
                          : 'text-slate-600 bg-white dark:bg-slate-950 border border-stone-200 dark:border-slate-800'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Theme:</span>
                </span>
                <div className="flex gap-1 font-mono text-xs">
                  <button
                    onClick={() => theme !== 'light' && toggleTheme()}
                    className={`px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                      theme === 'light' 
                        ? 'bg-teal-50 text-teal-700 font-bold border border-teal-200' 
                        : 'text-slate-600 bg-white dark:bg-slate-950'
                    }`}
                  >
                    <Sun className="w-3 h-3 text-amber-500" />
                    <span>Light</span>
                  </button>
                  <button
                    onClick={() => theme !== 'dark' && toggleTheme()}
                    className={`px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                      theme === 'dark' 
                        ? 'bg-teal-950 text-teal-300 font-bold border border-teal-800' 
                        : 'text-slate-600 bg-white dark:bg-slate-950'
                    }`}
                  >
                    <Moon className="w-3 h-3 text-slate-400" />
                    <span>Dark</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=Hello%20Domain%20Tech%20Hub,%20I'm%20inquiring%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp Direct (+254 118746676)</span>
            </a>

          </div>
        )}
      </header>
    </>
  );
};
