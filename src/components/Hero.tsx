import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface StatBadge {
  value: string;
  label: string;
  icon: string;
}

const statBadges: StatBadge[] = [
  { value: '25+', label: 'Projects', icon: '🗂️' },
  { value: '98%', label: 'Satisfaction', icon: '⭐' },
  { value: '15+', label: 'Experts', icon: '👨‍💻' },
];

/**
 * Splits the headline string to wrap the last word (or a key word) in a
 * text-gradient span so the highlighting is purely derived from the translated
 * string — no hard-coded language check needed.
 */
function renderHeadlineWithGradient(headline: string): React.ReactNode {
  // Highlight the word "Innovantes" (FR) or "Innovative" (EN) — the second word
  // of the headline. We split on that word to wrap it safely.
  const gradientWords = ['Innovantes', 'Innovative'];
  let found = false;

  for (const word of gradientWords) {
    if (headline.includes(word)) {
      const parts = headline.split(word);
      found = true;
      return (
        <>
          {parts[0]}
          <span className="text-gradient">{word}</span>
          {parts[1]}
        </>
      );
    }
  }

  if (!found) {
    // Fallback: highlight the last word
    const words = headline.split(' ');
    const last = words.pop() ?? '';
    return (
      <>
        {words.join(' ')}{' '}
        <span className="text-gradient">{last}</span>
      </>
    );
  }
}

export default function Hero() {
  const { t } = useTranslation('common');

  const headline = t('hero.headline');
  const subheadline = t('hero.subheadline');
  const ctaPrimary = t('hero.cta_primary');
  const ctaSecondary = t('hero.cta_secondary');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-base bg-hero-gradient"
    >
      {/* ── Background radial teal glow ─────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-start justify-center"
      >
        <div className="w-[900px] h-[600px] rounded-full bg-brand/10 blur-[120px] -translate-y-1/4" />
      </div>

      {/* ── Floating orb — teal ─────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-brand/20 blur-[100px] animate-float"
      />

      {/* ── Floating orb — slate ────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-slate-600/20 blur-[110px] animate-[float_8s_ease-in-out_infinite_reverse]"
      />

      {/* ── Subtle grid overlay ─────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Hero content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8 pt-24 pb-16">

        {/* Badge / pill */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/40 bg-dark-surface/60 backdrop-blur-sm text-sm font-semibold text-brand shadow-brand"
        >
          <span>🚀</span>
          <span>Solutions Numériques</span>
          <ChevronRight size={14} className="text-brand/70" />
        </div>

        {/* Headline */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight max-w-4xl"
        >
          {renderHeadlineWithGradient(headline)}
        </h1>

        {/* Sub-headline */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="section-sub text-base md:text-lg max-w-2xl leading-relaxed"
        >
          {subheadline}
        </p>

        {/* CTA buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <a href="#services" className="btn-primary text-base px-8 py-4 shadow-brand">
            {ctaPrimary}
            <ArrowRight size={18} />
          </a>
          <a href="#services" className="btn-secondary text-base px-8 py-4">
            {ctaSecondary}
          </a>
        </div>

        {/* Stat badges row */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full"
        >
          {statBadges.map((stat, index) => (
            <StatBadgeCard key={index} stat={stat} />
          ))}
        </div>
      </div>

      {/* ── Bottom gradient fade ─────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(5, 11, 20, 0.8) 100%)',
        }}
      />

      {/* ── Scroll indicator ────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-xs text-slate-400 tracking-widest uppercase font-body">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-brand/60 to-transparent" />
      </div>
    </section>
  );
}

/* ── Sub-component: individual stat badge ─────────────────────────────────── */

interface StatBadgeCardProps {
  stat: StatBadge;
}

function StatBadgeCard({ stat }: StatBadgeCardProps) {
  return (
    <div className="glass-card flex items-center gap-3 px-5 py-3 rounded-2xl hover:shadow-brand transition-all duration-300">
      <span className="text-2xl leading-none" aria-hidden="true">
        {stat.icon}
      </span>
      <div className="flex flex-col items-start">
        <span className="font-heading font-bold text-xl text-white leading-none glow-brand">
          {stat.value}
        </span>
        <span className="text-xs text-slate-400 font-body mt-0.5">{stat.label}</span>
      </div>
    </div>
  );
}
