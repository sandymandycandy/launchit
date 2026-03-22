import { useTranslation } from 'react-i18next';
import {
  Smartphone,
  BarChart2,
  ShoppingCart,
  Globe,
  Tablet,
  Settings,
  ExternalLink,
} from 'lucide-react';

/* ── Types ────────────────────────────────────────────────────────────────── */

interface ProjectData {
  key: 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6';
  icon: React.ReactNode;
  imageUrl: string;
  tags: string[];
  delay: number;
}

/* ── Static project configuration ────────────────────────────────────────── */

const PROJECTS: ProjectData[] = [
  {
    key: 'p1',
    icon: <Globe size={22} strokeWidth={1.5} />,
    imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    delay: 0,
  },
  {
    key: 'p2',
    icon: <BarChart2 size={22} strokeWidth={1.5} />,
    imageUrl: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Angular', 'Python', 'PostgreSQL'],
    delay: 100,
  },
  {
    key: 'p3',
    icon: <ShoppingCart size={22} strokeWidth={1.5} />,
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'E-commerce', 'WebRTC'],
    delay: 200,
  },
  {
    key: 'p4',
    icon: <Smartphone size={22} strokeWidth={1.5} />,
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Firebase', 'Node.js'],
    delay: 300,
  },
  {
    key: 'p5',
    icon: <Tablet size={22} strokeWidth={1.5} />,
    imageUrl: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    delay: 400,
  },
  {
    key: 'p6',
    icon: <Settings size={22} strokeWidth={1.5} />,
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Laravel', 'IoT'],
    delay: 500,
  },
];

/* ── Helpers ──────────────────────────────────────────────────────────────── */

/**
 * Splits the headline string and wraps the last word in a text-gradient span.
 */
function renderHeadlineWithGradient(headline: string): React.ReactNode {
  const words = headline.trim().split(' ');
  if (words.length === 0) return headline;
  const last = words.pop() ?? '';
  return (
    <>
      {words.join(' ')}{' '}
      <span className="text-gradient">{last}</span>
    </>
  );
}

/* ── Sub-component: Project Card ──────────────────────────────────────────── */

interface ProjectCardProps {
  project: ProjectData;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation('common');

  return (
    <div
      className="glass-card group flex flex-col overflow-hidden p-0"
      data-aos="fade-up"
      data-aos-delay={project.delay}
      data-aos-duration="800"
    >
      {/* ── Screenshot header ───────────────────────────────────────────── */}
      <div className="relative h-48 overflow-hidden border-b border-brand/20">
        {/* Project screenshot */}
        <img
          src={project.imageUrl}
          alt={t(`portfolio.${project.key}_title`)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 via-dark-base/20 to-transparent" />

        {/* Category pill — top-left */}
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-base/70 border border-brand/40 text-brand text-[10px] font-semibold uppercase tracking-widest font-body backdrop-blur-sm">
          {project.icon}
          {t(`portfolio.${project.key}_cat`)}
        </span>
      </div>

      {/* ── Card body ───────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Title */}
        <h3 className="font-heading font-bold text-white text-lg leading-snug group-hover:text-brand transition-colors duration-300">
          {t(`portfolio.${project.key}_title`)}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {t(`portfolio.${project.key}_desc`)}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 text-[10px] font-medium font-body tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View project link */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-light hover:underline underline-offset-4 transition-colors duration-200 group/link mt-auto pt-2 border-t border-slate-700/40"
        >
          {t('portfolio.view_project')}
          <ExternalLink
            size={13}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
}

/* ── Main Portfolio Section ───────────────────────────────────────────────── */

export default function Portfolio() {
  const { t } = useTranslation('common');

  return (
    <section
      id="portfolio"
      className="relative w-full py-24 overflow-hidden"
    >
      {/* ── Background radial glows ─────────────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Top-left glow */}
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-brand/8 blur-[140px]" />
        {/* Bottom-right glow */}
        <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-brand/8 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ────────────────────────────────────────────── */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Eye-brow pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-brand text-xs font-semibold uppercase tracking-widest font-body">
              {t('nav.portfolio')}
            </span>
          </div>

          {/* Headline */}
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5">
            {renderHeadlineWithGradient(t('portfolio.headline'))}
          </h2>

          {/* Sub-headline */}
          <p className="section-sub text-base sm:text-lg max-w-2xl mx-auto">
            {t('portfolio.subheadline')}
          </p>
        </div>

        {/* ── Projects Grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.key} project={project} />
          ))}
        </div>

        {/* ── "View all projects" CTA ───────────────────────────────────── */}
        <div
          className="flex justify-center mt-14"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <a href="#contact" className="btn-secondary text-base px-8 py-4">
            {t('portfolio.view_all')}
          </a>
        </div>
      </div>
    </section>
  );
}
