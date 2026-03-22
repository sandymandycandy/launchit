import { useTranslation } from 'react-i18next';
import { Search, Pencil, Code2, Rocket } from 'lucide-react';

const STEPS = [
  { num: '01', icon: Search },
  { num: '02', icon: Pencil },
  { num: '03', icon: Code2 },
  { num: '04', icon: Rocket },
] as const;

export default function Process() {
  const { t } = useTranslation('common');

  return (
    <section id="process" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-brand/6 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-slow" />
            <span className="text-brand text-xs font-semibold uppercase tracking-widest font-body">
              {t('process.pill')}
            </span>
          </div>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5">
            {t('process.headline').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient">{t('process.headline').split(' ').slice(-1)}</span>
          </h2>
          <p className="section-sub text-base sm:text-lg max-w-2xl mx-auto">
            {t('process.subheadline')}
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map(({ num, icon: Icon }, i) => {
            const key = `step${i + 1}` as `step${1 | 2 | 3 | 4}`;
            return (
              <div
                key={num}
                className="relative flex flex-col"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                data-aos-duration="700"
              >
                {/* Connector line (desktop) */}
                {i < 3 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-px"
                    style={{
                      background: 'linear-gradient(to right, rgba(77,187,176,0.4), rgba(77,187,176,0.1))',
                    }}
                  />
                )}

                <div
                  className="relative flex flex-col flex-1 rounded-2xl p-7"
                  style={{
                    background: 'rgba(10,16,30,0.45) padding-box, linear-gradient(145deg, rgba(77,187,176,0.25) 0%, rgba(255,255,255,0.04) 50%, rgba(77,187,176,0.10) 100%) border-box',
                    border: '1px solid transparent',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  {/* Step number */}
                  <span
                    className="absolute top-4 right-5 font-heading font-black text-4xl leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(77,187,176,0.08)' }}
                    aria-hidden="true"
                  >
                    {num}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: 'linear-gradient(135deg, rgba(77,187,176,0.20), rgba(77,187,176,0.08))',
                      border: '1px solid rgba(77,187,176,0.30)',
                    }}
                  >
                    <Icon size={22} className="text-brand" strokeWidth={1.75} />
                  </div>

                  {/* Step label */}
                  <span className="text-brand/60 font-body text-xs font-semibold uppercase tracking-widest mb-1">
                    {num}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-white text-lg mb-3">
                    {t(`process.${key}_title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 font-body text-sm leading-relaxed">
                    {t(`process.${key}_desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
