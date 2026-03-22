import { useTranslation } from 'react-i18next';
import { Monitor, Smartphone, ShoppingBag, Code2, ArrowRight } from 'lucide-react';

interface ServiceCard {
  key: 'web' | 'mobile' | 'ecommerce' | 'software';
  icon: React.ReactNode;
  delay: number;
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    key: 'web',
    icon: <Monitor size={28} strokeWidth={1.5} />,
    delay: 100,
  },
  {
    key: 'mobile',
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    delay: 200,
  },
  {
    key: 'ecommerce',
    icon: <ShoppingBag size={28} strokeWidth={1.5} />,
    delay: 300,
  },
  {
    key: 'software',
    icon: <Code2 size={28} strokeWidth={1.5} />,
    delay: 400,
  },
];

export default function Services() {
  const { t } = useTranslation('common');

  return (
    <section
      id="services"
      className="relative w-full py-24 bg-dark-base overflow-hidden"
    >
      {/* Background brand glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-brand/5 blur-[140px]" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] rounded-full bg-brand/4 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-brand/4 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-slow" />
            <span className="text-brand text-xs font-semibold uppercase tracking-widest font-body">
              {t('services.headline')}
            </span>
          </div>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5">
            Nos{' '}
            <span className="text-gradient">Solutions</span>{' '}
            Numériques
          </h2>
          <p className="section-sub text-base sm:text-lg max-w-2xl mx-auto">
            {t('services.subheadline')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CARDS.map((card, i) => (
            <div
              key={card.key}
              className="glass-card group flex flex-col p-7 cursor-default overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={card.delay}
              data-aos-duration="700"
            >
              {/* Large background number */}
              <span
                aria-hidden="true"
                className="absolute -top-3 -right-1 font-heading font-black text-8xl text-white/[0.03] select-none group-hover:text-brand/8 transition-colors duration-500 leading-none"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon container */}
              <div className="mb-6 relative w-fit z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-brand transition-all duration-400 group-hover:scale-110"
                  style={{
                    background: 'rgba(77,187,176,0.1) padding-box, linear-gradient(135deg,rgba(77,187,176,0.45),rgba(77,187,176,0.1)) border-box',
                    border: '1px solid transparent',
                  }}
                >
                  {card.icon}
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-white text-lg mb-3 group-hover:text-brand transition-colors duration-300 z-10 relative">
                {t(`services.${card.key}.title`)}
              </h3>

              {/* Description */}
              <p className="section-sub text-sm leading-relaxed flex-1 mb-6 z-10 relative">
                {t(`services.${card.key}.desc`)}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light transition-all duration-200 group/link mt-auto z-10 relative"
              >
                {t('services.card_cta')}
                <ArrowRight
                  size={14}
                  className="transform transition-transform duration-200 group-hover/link:translate-x-1.5"
                />
              </a>

              {/* Bottom accent line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand/70 to-brand/20 group-hover:w-full transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
