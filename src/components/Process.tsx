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
      {/* Background glows */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-brand/10 blur-[140px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full bg-brand/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-brand/5 blur-[100px]" />
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

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {STEPS.map(({ num, icon: Icon }, i) => {
            const key = `step${i + 1}` as `step${1 | 2 | 3 | 4}`;
            return (
              <div
                key={num}
                className="relative flex flex-col"
                data-aos="fade-up"
                data-aos-delay={i * 120}
                data-aos-duration="700"
              >
                {/* Arrow connector between cards (desktop only) */}
                {i < 3 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-3.5 z-10 items-center"
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="14" r="13" stroke="rgba(77,187,176,0.3)" strokeWidth="1" fill="rgba(10,16,30,0.6)" />
                      <path d="M11 9l5 5-5 5" stroke="rgba(77,187,176,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}

                {/* Card */}
                <div
                  className="relative flex flex-col flex-1 rounded-2xl p-7 overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                  style={{
                    background: 'rgba(11,17,32,0.80) padding-box, linear-gradient(145deg, rgba(77,187,176,0.40) 0%, rgba(255,255,255,0.06) 50%, rgba(77,187,176,0.18) 100%) border-box',
                    border: '1px solid transparent',
                    backdropFilter: 'blur(24px)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.40), inset 0 1px 0 rgba(77,187,176,0.08)',
                  }}
                >
                  {/* Large decorative step number */}
                  <span
                    className="absolute -bottom-2 -right-1 font-heading font-black text-[6rem] leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(77,187,176,0.06)' }}
                    aria-hidden="true"
                  >
                    {num}
                  </span>

                  {/* Top bar accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                    style={{ background: 'linear-gradient(to right, rgba(77,187,176,0.7), rgba(77,187,176,0.1), transparent)' }}
                    aria-hidden="true"
                  />

                  {/* Step badge + Icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-13 h-13 rounded-xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(77,187,176,0.25), rgba(77,187,176,0.08))',
                        border: '1px solid rgba(77,187,176,0.35)',
                        width: '52px',
                        height: '52px',
                      }}
                    >
                      <Icon size={24} className="text-brand" strokeWidth={1.6} />
                    </div>
                    <span
                      className="font-heading font-black text-2xl leading-none"
                      style={{ color: 'rgba(77,187,176,0.35)' }}
                    >
                      {num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-white text-xl mb-3">
                    {t(`process.${key}_title`)}
                  </h3>

                  {/* Divider */}
                  <div
                    className="h-px mb-4"
                    style={{ background: 'linear-gradient(to right, rgba(77,187,176,0.3), transparent)' }}
                  />

                  {/* Description */}
                  <p className="text-slate-300 font-body text-sm leading-relaxed flex-1">
                    {t(`process.${key}_desc`)}
                  </p>

                  {/* Bottom step indicator dots */}
                  <div className="flex items-center gap-1.5 mt-5">
                    {STEPS.map((_, j) => (
                      <div
                        key={j}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: j === i ? '16px' : '6px',
                          height: '6px',
                          background: j === i ? 'rgba(77,187,176,0.9)' : 'rgba(77,187,176,0.2)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
