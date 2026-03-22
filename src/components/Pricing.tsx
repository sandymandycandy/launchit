import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Globe, Smartphone, ShoppingBag, Code2 } from 'lucide-react';

type TabKey = 'web' | 'mobile' | 'ecommerce' | 'software';

const WA_BASE = 'https://wa.me/33651990642?text=';
const WA_MESSAGES: Record<TabKey, [string, string, string]> = {
  web: [
    encodeURIComponent('Bonjour, je suis intéressé par la formule Vitrine (399€) pour mon site web. Pouvez-vous me contacter ?'),
    encodeURIComponent('Bonjour, je suis intéressé par la formule Site Complet (999€). Pouvez-vous me contacter ?'),
    encodeURIComponent('Bonjour, je souhaite discuter d\'un projet web sur mesure. Pouvez-vous me contacter ?'),
  ],
  mobile: [
    encodeURIComponent('Bonjour, je suis intéressé par la formule MVP Rapide (799€) pour mon application mobile. Pouvez-vous me contacter ?'),
    encodeURIComponent('Bonjour, je suis intéressé par la formule App Multiplateforme (1 299€). Pouvez-vous me contacter ?'),
    encodeURIComponent('Bonjour, je souhaite discuter d\'un projet mobile sur mesure. Pouvez-vous me contacter ?'),
  ],
  ecommerce: [
    encodeURIComponent('Bonjour, je suis intéressé par la formule Boutique Standard (899€). Pouvez-vous me contacter ?'),
    encodeURIComponent('Bonjour, je suis intéressé par la formule Boutique Growth (1 499€). Pouvez-vous me contacter ?'),
    encodeURIComponent('Bonjour, je souhaite discuter d\'un projet e-commerce sur mesure. Pouvez-vous me contacter ?'),
  ],
  software: [
    encodeURIComponent('Bonjour, je suis intéressé par la formule Module Métier (3 499€). Pouvez-vous me contacter ?'),
    encodeURIComponent('Bonjour, je suis intéressé par la formule Solution Métier (6 999€). Pouvez-vous me contacter ?'),
    encodeURIComponent('Bonjour, je souhaite discuter d\'un projet de transformation digitale sur mesure. Pouvez-vous me contacter ?'),
  ],
};

interface Tab {
  key: TabKey;
  icon: React.ReactNode;
}

const TABS: Tab[] = [
  { key: 'web', icon: <Globe size={16} strokeWidth={1.75} /> },
  { key: 'mobile', icon: <Smartphone size={16} strokeWidth={1.75} /> },
  { key: 'ecommerce', icon: <ShoppingBag size={16} strokeWidth={1.75} /> },
  { key: 'software', icon: <Code2 size={16} strokeWidth={1.75} /> },
];

interface Tier {
  tier: 1 | 2 | 3;
  popular: boolean;
}

const TIERS: Tier[] = [
  { tier: 1, popular: false },
  { tier: 2, popular: true },
  { tier: 3, popular: false },
];

function PricingCard({ tabKey, tier, popular }: { tabKey: TabKey; tier: 1 | 2 | 3; popular: boolean }) {
  const { t } = useTranslation('common');
  const prefix = `pricing.${tabKey}_t${tier}`;
  const features = [1, 2, 3, 4, 5].map((n) => t(`${prefix}_f${n}`));
  const isCustom = tier === 3;
  const price = t(`${prefix}_price`);
  const waHref = WA_BASE + WA_MESSAGES[tabKey][tier - 1];

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-500 ${
        popular
          ? 'scale-[1.03] z-10'
          : ''
      }`}
      style={
        popular
          ? {
              background: 'rgba(10,16,30,0.55) padding-box, linear-gradient(135deg, rgba(77,187,176,0.80) 0%, rgba(77,187,176,0.20) 50%, rgba(77,187,176,0.60) 100%) border-box',
              border: '1px solid transparent',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 0 60px rgba(77,187,176,0.25), 0 8px 40px rgba(0,0,0,0.45)',
            }
          : {
              background: 'rgba(10,16,30,0.40) padding-box, linear-gradient(145deg, rgba(77,187,176,0.25) 0%, rgba(255,255,255,0.04) 50%, rgba(77,187,176,0.10) 100%) border-box',
              border: '1px solid transparent',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            }
      }
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand text-dark-base shadow-brand">
            {t('pricing.popular')}
          </span>
        </div>
      )}

      {/* Tier name */}
      <h3 className={`font-heading font-bold text-xl mb-3 ${popular ? 'text-brand' : 'text-white'}`}>
        {t(`${prefix}_name`)}
      </h3>

      {/* Price */}
      <div className="mb-4">
        {isCustom ? (
          <span className={`font-heading font-bold text-2xl ${popular ? 'text-brand' : 'text-slate-300'}`}>
            {price}
          </span>
        ) : (
          <div className="flex items-baseline gap-1.5">
            <span className="text-slate-500 font-body text-xs">{t('pricing.from')}</span>
            <span className={`font-heading font-bold text-3xl ${popular ? 'text-brand' : 'text-white'}`}>
              {price}
            </span>
            <span className="text-slate-500 font-body text-xs">{t('pricing.per_project')}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-slate-400 font-body text-sm leading-relaxed mb-6 flex-shrink-0">
        {t(`${prefix}_desc`)}
      </p>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-brand/30 via-brand/10 to-transparent mb-6" />

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${popular ? 'bg-brand/25 text-brand' : 'bg-brand/15 text-brand'}`}>
              <Check size={11} strokeWidth={3} />
            </div>
            <span className="text-slate-300 font-body text-sm leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full text-center py-3 rounded-xl font-semibold text-sm font-body transition-all duration-300 ${
          popular ? 'btn-primary' : 'btn-secondary'
        }`}
      >
        {isCustom ? t('pricing.cta_custom') : t('pricing.cta')}
      </a>
    </div>
  );
}

export default function Pricing() {
  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState<TabKey>('web');

  return (
    <section id="pricing" className="relative py-24 bg-white/[0.018] overflow-hidden">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-brand/8 blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-slow" />
            <span className="text-brand text-xs font-semibold uppercase tracking-widest font-body">
              {t('pricing.headline')}
            </span>
          </div>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5">
            {t('pricing.headline').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient">{t('pricing.headline').split(' ').slice(-1)}</span>
          </h2>
          <p className="section-sub text-base sm:text-lg max-w-2xl mx-auto">
            {t('pricing.subheadline')}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="100">
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-sm sm:max-w-none sm:w-auto p-2 rounded-2xl"
            style={{
              background: 'rgba(10,16,30,0.50)',
              border: '1px solid rgba(77,187,176,0.18)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {TABS.map(({ key, icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold font-body transition-all duration-300 whitespace-nowrap ${
                  activeTab === key
                    ? 'bg-brand text-dark-base shadow-brand'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {icon}
                {t(`pricing.tab_${key}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="700"
        >
          {TIERS.map(({ tier, popular }) => (
            <PricingCard
              key={tier}
              tabKey={activeTab}
              tier={tier}
              popular={popular}
            />
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-center text-slate-500 text-sm font-body mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t('pricing.bottom_note')}{' '}
          <a href="#contact" className="text-brand hover:text-brand-light underline underline-offset-4 transition-colors">
            {t('pricing.bottom_cta')}
          </a>{' '}
          {t('pricing.bottom_suffix')}
        </p>
      </div>
    </section>
  );
}
