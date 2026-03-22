import { useTranslation } from 'react-i18next';
import { Linkedin } from 'lucide-react';

interface TeamMember {
  nameKey: string;
  roleKey: string;
  bioKey: string;
  initial: string;
  avatarUrl: string;
  tags: string[];
  delay: number;
  linkedinHref: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    nameKey: 'team.thomas_name',
    roleKey: 'team.thomas_role',
    bioKey: 'team.thomas_bio',
    initial: 'T',
    avatarUrl: 'https://i.pravatar.cc/200?img=68',
    tags: ['Web Dev', 'Strategy', 'Leadership'],
    delay: 0,
    linkedinHref: '#',
  },
  {
    nameKey: 'team.sophie_name',
    roleKey: 'team.sophie_role',
    bioKey: 'team.sophie_bio',
    initial: 'S',
    avatarUrl: 'https://i.pravatar.cc/200?img=47',
    tags: ['Full-Stack', 'Architecture', 'DevOps'],
    delay: 150,
    linkedinHref: '#',
  },
  {
    nameKey: 'team.emilie_name',
    roleKey: 'team.emilie_role',
    bioKey: 'team.emilie_bio',
    initial: 'É',
    avatarUrl: 'https://i.pravatar.cc/200?img=49',
    tags: ['Agile', 'UX', 'Client Relations'],
    delay: 300,
    linkedinHref: '#',
  },
];

export default function Team() {
  const { t } = useTranslation('common');

  return (
    <section
      id="team"
      className="relative py-24 bg-white/[0.018] overflow-hidden"
    >
      {/* Subtle central radial teal glow */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-brand/5 blur-[160px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-brand/4 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Label pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-slow" />
            <span className="text-brand text-xs font-semibold uppercase tracking-widest font-body">
              {t('team.headline')}
            </span>
          </div>

          {/* Headline */}
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight">
            {t('team.headline').split(' ').slice(0, 1).join(' ')}{' '}
            <span className="text-gradient">
              {t('team.headline').split(' ').slice(1).join(' ')}
            </span>
          </h2>

          {/* Sub-headline */}
          <p className="section-sub text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('team.subheadline')}
          </p>
        </div>

        {/* ── Team Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.nameKey}
              className="glass-card flex flex-col items-center text-center p-8 group"
              data-aos="fade-up"
              data-aos-delay={member.delay}
              data-aos-duration="800"
            >
              {/* ── Avatar ── */}
              <div className="relative mb-6">
                {/* Outer ring glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-brand/15 blur-md scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Avatar photo */}
                <img
                  src={member.avatarUrl}
                  alt={t(member.nameKey)}
                  width={80}
                  height={80}
                  className="relative w-20 h-20 rounded-full object-cover ring-2 ring-brand/40 shadow-brand"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = 'none';
                    (el.nextElementSibling as HTMLElement | null)?.style.setProperty('display', 'flex');
                  }}
                />
                {/* Fallback initial */}
                <div
                  className="relative w-20 h-20 rounded-full bg-gradient-to-br from-brand to-[#2A9D91] items-center justify-center ring-2 ring-brand/40 shadow-brand"
                  style={{ display: 'none' }}
                >
                  <span className="font-heading font-bold text-white text-3xl leading-none select-none">
                    {member.initial}
                  </span>
                </div>
              </div>

              {/* ── Name ── */}
              <h3 className="font-heading font-bold text-white text-xl mb-3 leading-snug">
                {t(member.nameKey)}
              </h3>

              {/* ── Role badge ── */}
              <span className="inline-block bg-brand/10 text-brand text-sm font-medium px-3 py-1 rounded-full mb-4 font-body border border-brand/20">
                {t(member.roleKey)}
              </span>

              {/* ── Bio ── */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-body">
                {t(member.bioKey)}
              </p>

              {/* ── Specialty tags ── */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/[0.05] border border-white/10 text-slate-300 text-xs px-2 py-1 rounded-full font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ── LinkedIn link ── */}
              <a
                href={member.linkedinHref}
                aria-label={`LinkedIn — ${t(member.nameKey)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-brand transition-colors duration-200 mt-auto"
              >
                <Linkedin size={18} strokeWidth={1.75} />
                <span className="text-xs font-body font-medium">LinkedIn</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
