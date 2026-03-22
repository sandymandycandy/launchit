import { useTranslation } from 'react-i18next';
import { Shield, Palette, Clock, HeartHandshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCard {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  delay: number;
}

const FEATURES: FeatureCard[] = [
  {
    icon: Shield,
    titleKey: 'why.quality_title',
    descKey: 'why.quality_desc',
    delay: 0,
  },
  {
    icon: Palette,
    titleKey: 'why.design_title',
    descKey: 'why.design_desc',
    delay: 100,
  },
  {
    icon: Clock,
    titleKey: 'why.delivery_title',
    descKey: 'why.delivery_desc',
    delay: 200,
  },
  {
    icon: HeartHandshake,
    titleKey: 'why.support_title',
    descKey: 'why.support_desc',
    delay: 300,
  },
];

export default function WhyChooseUs() {
  const { t } = useTranslation('common');

  return (
    <section id="why" className="relative py-24 bg-dark-base overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-brand/8 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div
          className="text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
        >
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5">
            {t('why.headline').split(' ').slice(0, -2).join(' ')}{' '}
            <span className="text-gradient">
              {t('why.headline').split(' ').slice(-2).join(' ')}
            </span>
          </h2>
          <p className="section-sub text-base sm:text-lg">
            {t('why.subheadline')}
          </p>
        </div>

        {/* 2x2 feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURES.map(({ icon: Icon, titleKey, descKey, delay }) => (
            <div
              key={titleKey}
              className="glass-card p-8 flex flex-col gap-5 group"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/20 group-hover:border-brand/40 group-hover:shadow-brand transition-all duration-300">
                <Icon
                  size={26}
                  className="text-brand transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.75}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-semibold text-white text-lg leading-snug">
                  {t(titleKey)}
                </h3>
                <p className="section-sub text-sm leading-relaxed">
                  {t(descKey)}
                </p>
              </div>

              {/* Bottom brand accent line */}
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="w-10 h-0.5 rounded-full bg-brand/40 group-hover:w-16 group-hover:bg-brand transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
