import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  delay: number;
}

function StarRating() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="text-yellow-400"
          fill="currentColor"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, role, delay }: TestimonialCardProps) {
  return (
    <div
      className="glass-card p-8 flex flex-col gap-4 hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="700"
    >
      {/* Quote Icon */}
      <div className="flex items-start justify-between">
        <Quote size={40} className="text-brand opacity-80" />
        <StarRating />
      </div>

      {/* Quote Text */}
      <p className="text-slate-300 font-body text-base leading-relaxed flex-grow">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center shadow-brand flex-shrink-0">
          <span className="text-brand font-heading font-bold text-sm">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white font-heading font-bold text-sm leading-tight">
            {name}
          </p>
          <p className="text-brand text-xs font-body mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useTranslation('common');

  const testimonials = [
    {
      quoteKey: 'testimonials.sophie_quote',
      nameKey: 'testimonials.sophie_name',
      roleKey: 'testimonials.sophie_role',
      delay: 0,
    },
    {
      quoteKey: 'testimonials.thomas_quote',
      nameKey: 'testimonials.thomas_name',
      roleKey: 'testimonials.thomas_role',
      delay: 150,
    },
    {
      quoteKey: 'testimonials.marie_quote',
      nameKey: 'testimonials.marie_name',
      roleKey: 'testimonials.marie_role',
      delay: 300,
    },
  ];

  return (
    <section className="relative py-24 bg-dark-base overflow-hidden">
      {/* Background brand glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] rounded-full bg-brand/5 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-brand/5 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h2 className="section-heading font-heading font-bold text-gradient">
            {t('testimonials.headline')}
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 rounded-full bg-brand shadow-brand" />
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(({ quoteKey, nameKey, roleKey, delay }) => (
            <TestimonialCard
              key={nameKey}
              quote={t(quoteKey)}
              name={t(nameKey)}
              role={t(roleKey)}
              delay={delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
