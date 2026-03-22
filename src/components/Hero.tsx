import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

const statBadges: { value: string; labelKey: string; icon: string }[] = [
  { value: '25+', labelKey: 'hero.stat_projects', icon: '🗂️' },
  { value: '98%', labelKey: 'hero.stat_satisfaction', icon: '⭐' },
  { value: '15+', labelKey: 'hero.stat_experts', icon: '👨‍💻' },
];

function renderHeadlineWithGradient(headline: string): React.ReactNode {
  const gradientWords = ['Innovantes', 'Innovative'];
  for (const word of gradientWords) {
    if (headline.includes(word)) {
      const parts = headline.split(word);
      return (
        <>
          {parts[0]}
          <span className="text-gradient">{word}</span>
          {parts[1]}
        </>
      );
    }
  }
  const words = headline.split(' ');
  const last = words.pop() ?? '';
  return (
    <>
      {words.join(' ')}{' '}
      <span className="text-gradient">{last}</span>
    </>
  );
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Layered background glows ─────────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Primary hero glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-brand/10 blur-[140px] -translate-y-1/3" />
        {/* Secondary accent glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-brand/8 blur-[120px]" />
        {/* Right side glow */}
        <div className="absolute top-1/2 right-0 w-[400px] h-[600px] rounded-full bg-slate-700/20 blur-[130px]" />
      </div>

      {/* ── Floating orbs ────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-brand/15 blur-[110px] animate-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 -right-40 w-[450px] h-[450px] rounded-full bg-slate-600/15 blur-[120px] animate-[float_9s_ease-in-out_infinite_reverse]"
      />

      {/* ── Fine grid overlay ────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Radial vignette over grid ────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(5,11,20,0.8) 100%)',
        }}
      />

      {/* ── Hero content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8 pt-28 pb-20">

        {/* Badge */}
        <div
          data-aos="fade-down"
          data-aos-delay="0"
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full section-label"
        >
          <Sparkles size={13} className="text-brand" />
          <span>{t('hero.badge')}</span>
          <ChevronRight size={13} className="text-brand/60" />
        </div>

        {/* Headline */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.08] tracking-tight max-w-4xl"
        >
          {renderHeadlineWithGradient(headline)}
        </h1>

        {/* Divider accent */}
        <div
          data-aos="fade-up"
          data-aos-delay="180"
          className="flex items-center gap-3"
          aria-hidden="true"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-brand/60" />
          <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-brand/60" />
        </div>

        {/* Sub-headline */}
        <p
          data-aos="fade-up"
          data-aos-delay="220"
          className="section-sub text-base md:text-lg max-w-2xl leading-relaxed"
        >
          {subheadline}
        </p>

        {/* CTA buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="320"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <a href="#services" className="btn-primary text-base px-9 py-4 shadow-brand">
            {ctaPrimary}
            <ArrowRight size={18} />
          </a>
          <a href="#portfolio" className="btn-secondary text-base px-9 py-4">
            {ctaSecondary}
          </a>
        </div>

        {/* Stat badges row */}
        <div
          data-aos="fade-up"
          data-aos-delay="440"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full"
        >
          {statBadges.map((stat, index) => (
            <StatBadgeCard key={index} stat={stat} />
          ))}
        </div>
      </div>

      {/* ── Social proof photo strip ─────────────────────────────────────────── */}
      <div
        data-aos="fade-up"
        data-aos-delay="520"
        aria-hidden="true"
        className="flex items-center justify-center gap-2 mt-2"
      >
        <div className="flex -space-x-2">
          {[
            'https://i.pravatar.cc/40?img=1',
            'https://i.pravatar.cc/40?img=5',
            'https://i.pravatar.cc/40?img=12',
            'https://i.pravatar.cc/40?img=20',
            'https://i.pravatar.cc/40?img=33',
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-8 h-8 rounded-full border-2 object-cover"
              style={{ borderColor: 'rgba(77,187,176,0.5)' }}
            />
          ))}
        </div>
        <span className="text-slate-400 text-xs font-body ml-1">
          <span className="text-brand font-semibold">+50</span> {t('hero.social_proof')}
        </span>
      </div>

      {/* ── Bottom gradient fade ──────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(5,11,20,0.95) 100%)' }}
      />

      {/* ── Scroll indicator ─────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] text-slate-400 tracking-[0.3em] uppercase font-body">Scroll</span>
        <div className="relative w-px h-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand/80 to-transparent animate-[slideDown_1.8s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

function StatBadgeCard({ stat }: { stat: { value: string; labelKey: string; icon: string } }) {
  const { t } = useTranslation('common');
  return (
    <div className="glass-card flex items-center gap-3 px-5 py-3 rounded-2xl">
      <span className="text-2xl leading-none" aria-hidden="true">{stat.icon}</span>
      <div className="flex flex-col items-start">
        <span className="font-heading font-bold text-xl text-white leading-none glow-brand">
          {stat.value}
        </span>
        <span className="text-xs text-slate-400 font-body mt-0.5">{t(stat.labelKey)}</span>
      </div>
    </div>
  );
}
