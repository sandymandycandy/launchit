import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';

export default function FinalCTA() {
  const { t } = useTranslation('common');

  return (
    <section className="relative w-full py-24 bg-dark-base overflow-hidden">
      {/* Dramatic radial teal glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Primary large central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] rounded-full bg-brand/20 blur-[160px]" />
        {/* Secondary inner glow for intensity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand/15 blur-[80px]" />
        {/* Edge accent glows */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-brand/8 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-brand/8 blur-[100px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(53,184,168,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(53,184,168,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* Glass card wrapping all content */}
        <div
          className="relative overflow-hidden glass-card w-full px-8 py-16 md:px-16 md:py-20 text-center shadow-brand-lg border border-brand/20"
          data-aos="fade-up"
          data-aos-duration="800"
          style={{
            boxShadow:
              '0 0 80px rgba(53, 184, 168, 0.25), 0 0 30px rgba(53, 184, 168, 0.15), 0 8px 32px rgba(0,0,0,0.4)',
          }}
        >
          {/* Inner top glow accent */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
            aria-hidden="true"
          />

          {/* Headline */}
          <h2
            className="text-4xl md:text-6xl font-heading font-bold text-gradient leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
          >
            {t('cta_section.headline')}
          </h2>

          {/* Sub text */}
          <p
            className="section-sub font-body max-w-2xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            {t('cta_section.desc')}
          </p>

          {/* CTA Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-duration="700"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-3 text-base md:text-lg px-10 py-4 shadow-brand-lg hover:shadow-brand-lg transition-all duration-300 hover:scale-105"
            >
              <span>{t('cta_section.btn')}</span>
              <Send size={20} />
            </a>
          </div>

          {/* Bottom decorative dots */}
          <div
            className="flex items-center justify-center gap-2 mt-10"
            aria-hidden="true"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-brand/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-brand/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand/60" />
          </div>

          {/* Inner bottom glow accent */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
