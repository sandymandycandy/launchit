import { useTranslation } from 'react-i18next';
import { CheckCircle2, Zap, Users, TrendingUp, Clock } from 'lucide-react';

const STATS: { value: string; labelKey: string }[] = [
  { value: '5+', labelKey: 'about.stat_experience' },
  { value: '80+', labelKey: 'about.stat_projects' },
  { value: '98%', labelKey: 'about.stat_satisfaction' },
];

const BULLET_ICONS = [
  <Zap size={16} key="zap" />,
  <Users size={16} key="users" />,
  <TrendingUp size={16} key="trend" />,
  <Clock size={16} key="clock" />,
];

export default function About() {
  const { t } = useTranslation('common');

  const bullets: string[] = [
    t('about.bullet_1'),
    t('about.bullet_2'),
    t('about.bullet_3'),
    t('about.bullet_4'),
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-white/[0.018] overflow-hidden"
    >
      {/* Background accents */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand/5 blur-[140px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-brand/4 blur-[120px] -translate-x-1/4 translate-y-1/4" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(53,184,168,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(53,184,168,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left column: text content ── */}
          <div>
            {/* Label pill */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 mb-5"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-slow" />
              <span className="text-brand text-xs font-semibold uppercase tracking-widest font-body">
                {t('about.headline')}
              </span>
            </div>

            {/* Headline */}
            <h2
              className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
            >
              {t('about.subheadline').split(' ').slice(0, 3).join(' ')}{' '}
              <span className="text-gradient">
                {t('about.subheadline').split(' ').slice(3).join(' ')}
              </span>
            </h2>

            {/* Description */}
            <p
              className="section-sub text-base sm:text-lg leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="700"
            >
              {t('about.desc')}
            </p>

            {/* Bullet points */}
            <ul className="space-y-4 mb-10">
              {bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 80}
                  data-aos-duration="600"
                >
                  <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-brand" strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <a href="#contact" className="btn-primary text-sm sm:text-base">
                {t('about.cta')}
              </a>
            </div>
          </div>

          {/* ── Right column: photo + floating stats ── */}
          <div
            className="flex items-center justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="relative w-full max-w-md">
              {/* Outer glow ring */}
              <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-brand/10 blur-2xl scale-110" />

              {/* Photo card */}
              <div className="relative rounded-3xl overflow-hidden shadow-brand-lg"
                style={{
                  background: 'rgba(10,16,30,0.45) padding-box, linear-gradient(145deg, rgba(77,187,176,0.40) 0%, rgba(255,255,255,0.04) 50%, rgba(77,187,176,0.15) 100%) border-box',
                  border: '1px solid transparent',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Team photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="E-LaunchIT team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/80 via-[#050B14]/20 to-transparent" />
                  {/* Live badge overlay */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050B14]/70 border border-brand/40 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    <span className="text-brand text-[10px] font-mono font-bold uppercase tracking-widest">{t('about.active_badge')}</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {STATS.map((stat, i) => (
                      <div
                        key={i}
                        className="text-center px-2 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-brand/25 hover:bg-brand/5 transition-all duration-200"
                      >
                        <div className="font-heading font-bold text-xl text-brand leading-none mb-1">
                          {stat.value}
                        </div>
                        <div className="text-slate-500 text-[11px] font-body leading-tight">
                          {t(stat.labelKey)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Icon row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {BULLET_ICONS.map((icon, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand hover:bg-brand/20 hover:shadow-brand transition-all duration-200"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-500 text-xs font-body tracking-wide">
                      {t('about.since')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
