import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const frame = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setCount(Math.round(eased * end));
      if (elapsed < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [started, end, duration]);

  return { count, ref };
}

interface StatItem {
  value: number;
  suffix: string;
  labelKey: string;
}

const STATS: StatItem[] = [
  { value: 25, suffix: '+', labelKey: 'stats.projects' },
  { value: 15, suffix: '+', labelKey: 'stats.experts' },
  { value: 98, suffix: '%', labelKey: 'stats.clients' },
  { value: 2,  suffix: '+', labelKey: 'stats.experience' },
];

function StatItem({ stat }: { stat: StatItem }) {
  const { t } = useTranslation('common');
  const { count, ref } = useCountUp(stat.value);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center px-6 py-4 group"
    >
      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-brand leading-none tracking-tight group-hover:drop-shadow-[0_0_16px_rgba(53,184,168,0.6)] transition-all duration-300">
        {count}<span>{stat.suffix}</span>
      </div>
      <p className="mt-3 text-slate-400 font-body text-sm sm:text-base leading-snug">
        {t(stat.labelKey)}
      </p>
      <div className="mt-4 w-8 h-0.5 rounded-full bg-brand/40 group-hover:w-12 group-hover:bg-brand transition-all duration-300" />
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 bg-dark-surface/50 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-brand/10 blur-[100px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
          {STATS.map((stat) => (
            <StatItem key={stat.labelKey} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
