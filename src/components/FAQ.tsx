import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;

export default function FAQ() {
  const { t } = useTranslation('common');
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-brand/6 blur-[140px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-slow" />
            <span className="text-brand text-xs font-semibold uppercase tracking-widest font-body">{t('faq.pill')}</span>
          </div>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5">
            {t('faq.headline').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient">{t('faq.headline').split(' ').slice(-1)}</span>
          </h2>
          <p className="section-sub text-base sm:text-lg">{t('faq.subheadline')}</p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQ_KEYS.map((key, i) => {
            const isOpen = openKey === key;
            return (
              <div
                key={key}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen
                    ? 'rgba(10,16,30,0.55) padding-box, linear-gradient(135deg, rgba(77,187,176,0.55) 0%, rgba(255,255,255,0.05) 50%, rgba(77,187,176,0.20) 100%) border-box'
                    : 'rgba(10,16,30,0.38) padding-box, linear-gradient(145deg, rgba(77,187,176,0.22) 0%, rgba(255,255,255,0.03) 50%, rgba(77,187,176,0.08) 100%) border-box',
                  border: '1px solid transparent',
                  backdropFilter: 'blur(20px)',
                }}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                data-aos-duration="600"
              >
                {/* Question row */}
                <button
                  onClick={() => setOpenKey(isOpen ? null : key)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-heading font-semibold text-base sm:text-lg leading-snug transition-colors duration-200 ${isOpen ? 'text-brand' : 'text-white group-hover:text-brand'}`}>
                    {t(`faq.${key}`)}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-brand transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    strokeWidth={2}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-6 text-slate-300 font-body text-sm sm:text-base leading-relaxed">
                    {t(`faq.${key.replace('q', 'a')}`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
          <p className="text-slate-400 font-body text-sm mb-4">
            {t('faq.no_answer')}
          </p>
          <a href="#contact" className="btn-primary text-sm px-7 py-3">
            {t('faq.ask_question')}
          </a>
        </div>
      </div>
    </section>
  );
}
