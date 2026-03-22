import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

interface Testimonial {
  quoteKey: string;
  nameKey: string;
  roleKey: string;
  avatarUrl: string;
  featured: boolean;
  delay: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quoteKey: 'testimonials.sophie_quote',
    nameKey: 'testimonials.sophie_name',
    roleKey: 'testimonials.sophie_role',
    avatarUrl: 'https://i.pravatar.cc/80?img=47',
    featured: false,
    delay: 0,
  },
  {
    quoteKey: 'testimonials.thomas_quote',
    nameKey: 'testimonials.thomas_name',
    roleKey: 'testimonials.thomas_role',
    avatarUrl: 'https://i.pravatar.cc/80?img=68',
    featured: true,
    delay: 120,
  },
  {
    quoteKey: 'testimonials.marie_quote',
    nameKey: 'testimonials.marie_name',
    roleKey: 'testimonials.marie_role',
    avatarUrl: 'https://i.pravatar.cc/80?img=25',
    featured: false,
    delay: 240,
  },
];

function Stars({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={small ? 13 : 15}
          className="text-amber-400"
          fill="currentColor"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  const { t } = useTranslation('common');
  const { quoteKey, nameKey, roleKey, avatarUrl, featured, delay } = item;

  return (
    <div
      className={`relative flex flex-col ${featured ? 'md:-mt-4 md:mb-4' : ''}`}
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700"
    >
      <div
        className="relative flex flex-col flex-1 rounded-2xl p-8 transition-all duration-500 group"
        style={
          featured
            ? {
                background:
                  'rgba(10,16,30,0.60) padding-box, linear-gradient(145deg, rgba(77,187,176,0.75) 0%, rgba(77,187,176,0.20) 50%, rgba(77,187,176,0.55) 100%) border-box',
                border: '1px solid transparent',
                backdropFilter: 'blur(28px)',
                boxShadow:
                  '0 0 70px rgba(77,187,176,0.22), 0 20px 60px rgba(0,0,0,0.5)',
              }
            : {
                background:
                  'rgba(10,16,30,0.40) padding-box, linear-gradient(145deg, rgba(77,187,176,0.25) 0%, rgba(255,255,255,0.04) 50%, rgba(77,187,176,0.10) 100%) border-box',
                border: '1px solid transparent',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
              }
        }
      >
        {/* Featured badge */}
        {featured && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand text-dark-base shadow-brand whitespace-nowrap">
              <Star size={10} fill="currentColor" /> {t('testimonials.top_client')}
            </span>
          </div>
        )}

        {/* Decorative large opening quote */}
        <div
          aria-hidden="true"
          className="absolute top-5 right-6 font-heading font-black text-[7rem] leading-none select-none pointer-events-none"
          style={{ color: featured ? 'rgba(77,187,176,0.12)' : 'rgba(77,187,176,0.07)' }}
        >
          &ldquo;
        </div>

        {/* Stars + rating */}
        <div className="flex items-center gap-3 mb-6">
          <Stars />
          <span className="text-amber-400 text-xs font-bold font-body">5.0</span>
        </div>

        {/* Quote */}
        <p
          className={`font-body leading-relaxed flex-1 mb-8 relative z-10 ${
            featured ? 'text-white text-base' : 'text-slate-200 text-sm'
          }`}
        >
          &ldquo;{t(quoteKey)}&rdquo;
        </p>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background: featured
              ? 'linear-gradient(to right, rgba(77,187,176,0.6), rgba(77,187,176,0.2), transparent)'
              : 'linear-gradient(to right, rgba(77,187,176,0.3), rgba(77,187,176,0.1), transparent)',
          }}
        />

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <img
              src={avatarUrl}
              alt={t(nameKey)}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
              style={{
                border: featured
                  ? '2px solid rgba(77,187,176,0.7)'
                  : '2px solid rgba(77,187,176,0.35)',
              }}
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = 'none';
                (el.nextElementSibling as HTMLElement | null)?.style.setProperty('display', 'flex');
              }}
            />
            {/* Fallback */}
            <div
              className="w-12 h-12 rounded-full items-center justify-center text-brand font-heading font-bold text-lg"
              style={{
                display: 'none',
                background: 'linear-gradient(135deg, rgba(77,187,176,0.3), rgba(77,187,176,0.1))',
                border: '2px solid rgba(77,187,176,0.45)',
              }}
            >
              {t(nameKey).charAt(0)}
            </div>
            {/* Online dot */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-brand border-2 border-[#050B14]" />
          </div>

          {/* Name & role */}
          <div className="flex-1 min-w-0">
            <p className={`font-heading font-bold text-sm leading-tight truncate ${featured ? 'text-white' : 'text-slate-100'}`}>
              {t(nameKey)}
            </p>
            <p className="text-brand/70 text-xs font-body mt-0.5 truncate">
              {t(roleKey)}
            </p>
          </div>

          {/* Verified check */}
          <div
            className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(77,187,176,0.12)', border: '1px solid rgba(77,187,176,0.3)' }}
            title="Verified client"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l2.5 2.5L10 3.5" stroke="#4DBBB0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useTranslation('common');

  return (
    <section id="testimonials" className="relative py-24 bg-white/[0.018] overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-brand/10 blur-[130px]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] rounded-full bg-brand/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full bg-brand/5 blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(77,187,176,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(77,187,176,0.8) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-slow" />
            <span className="text-brand text-xs font-semibold uppercase tracking-widest font-body">
              {t('testimonials.headline')}
            </span>
          </div>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5">
            {t('testimonials.headline').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient">{t('testimonials.headline').split(' ').slice(-1)}</span>
          </h2>
          <p className="section-sub text-base sm:text-lg max-w-2xl mx-auto">
            {t('testimonials.subheadline')}
          </p>

          {/* Overall rating strip */}
          <div
            className="inline-flex items-center gap-3 mt-6 px-5 py-2.5 rounded-full"
            style={{
              background: 'rgba(10,16,30,0.50)',
              border: '1px solid rgba(77,187,176,0.20)',
              backdropFilter: 'blur(16px)',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Stars small />
            <span className="text-white font-bold text-sm font-body">4.9 / 5</span>
            <span className="text-slate-500 text-xs font-body">— based on 50+ reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.nameKey} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
