import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createPopper } from '@popperjs/core';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  onLangChange: (lang: string) => void;
  currentLang: string;
}

export default function Navbar({ onLangChange, currentLang }: NavbarProps) {
  const { t } = useTranslation('common');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const btnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const popperInstanceRef = useRef<ReturnType<typeof createPopper> | null>(null);
  const langBtnRef = useRef<HTMLButtonElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = ['hero', 'services', 'about', 'team', 'portfolio', 'testimonials', 'contact'];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Popper.js setup
  useEffect(() => {
    if (btnRef.current && dropdownRef.current) {
      popperInstanceRef.current = createPopper(btnRef.current, dropdownRef.current, {
        placement: 'bottom-start',
        modifiers: [
          { name: 'offset', options: { offset: [0, 8] } },
          { name: 'preventOverflow', options: { boundary: 'clippingParents' } },
        ],
      });
    }
    return () => {
      popperInstanceRef.current?.destroy();
    };
  }, []);

  // Update popper when open
  useEffect(() => {
    if (dropdownOpen) {
      popperInstanceRef.current?.update();
    }
  }, [dropdownOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !btnRef.current?.contains(e.target as Node) &&
        !dropdownRef.current?.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
      if (
        !langBtnRef.current?.contains(e.target as Node) &&
        !langDropdownRef.current?.contains(e.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const solutionLinks = [
    { key: 'solutions_web', href: '#services' },
    { key: 'solutions_mobile', href: '#services' },
    { key: 'solutions_ecommerce', href: '#services' },
    { key: 'solutions_software', href: '#services' },
  ];

  const navLinks = [
    { key: 'home', href: '#', section: 'hero' },
    { key: 'about', href: '#about', section: 'about' },
    { key: 'portfolio', href: '#portfolio', section: 'portfolio' },
    { key: 'contact', href: '#contact', section: 'contact' },
  ];

  const navLinkClass = (section: string) =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
      activeSection === section
        ? 'text-brand bg-brand/10'
        : 'text-slate-300 hover:text-white hover:bg-white/5'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-surface/90 backdrop-blur-xl shadow-glass border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/elit-logo.png"
              alt="ELIT Logo"
              className="w-10 h-10 rounded-xl object-cover group-hover:shadow-brand transition-all duration-300"
            />
            <span className="font-heading font-bold text-white text-xl tracking-tight">
              E-<span className="text-gradient">LaunchIT</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 1).map((link) => (
              <a key={link.key} href={link.href} className={navLinkClass(link.section)}>
                {t(`nav.${link.key}`)}
              </a>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                ref={btnRef}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {t('nav.solutions')}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Popper dropdown */}
              <div
                ref={dropdownRef}
                className={`z-50 min-w-[220px] transition-all duration-200 ${
                  dropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                style={{ position: 'absolute' }}
              >
                <div className="bg-dark-surface/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-glass overflow-hidden">
                  {solutionLinks.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-brand/10 transition-colors duration-150 border-b border-white/5 last:border-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand/60"></span>
                      {t(`nav.${item.key}`)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <a key={link.key} href={link.href} className={navLinkClass(link.section)}>
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                ref={langBtnRef}
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-brand/40 rounded-lg transition-all duration-200"
              >
                <Globe size={14} />
                {currentLang.toUpperCase()}
                <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div
                  ref={langDropdownRef}
                  className="absolute right-0 top-full mt-2 w-32 bg-dark-surface/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-glass overflow-hidden z-50"
                >
                  {[{ code: 'fr', label: '🇫🇷 Français' }, { code: 'en', label: '🇬🇧 English' }].map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => { onLangChange(code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-colors duration-150 border-b border-white/5 last:border-0 ${
                        currentLang === code
                          ? 'text-brand bg-brand/10'
                          : 'text-slate-300 hover:text-white hover:bg-brand/10'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a href="#contact" className="btn-primary text-sm">
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-dark-surface/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {navLinks.slice(0, 1).map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}

          <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {t('nav.solutions')}
          </div>
          {solutionLinks.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block pl-8 pr-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}

          {navLinks.slice(1).map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}

          <div className="pt-3 flex items-center gap-3">
            <div className="flex gap-1">
              {[{ code: 'fr', label: '🇫🇷 FR' }, { code: 'en', label: '🇬🇧 EN' }].map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => { onLangChange(code); setMobileOpen(false); }}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all duration-200 ${
                    currentLang === code
                      ? 'text-brand border-brand/40 bg-brand/10'
                      : 'text-slate-300 border-white/10 hover:border-brand/30'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-sm flex-1 text-center">
              {t('nav.cta')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
