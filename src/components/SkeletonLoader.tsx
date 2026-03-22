interface SkeletonBlockProps {
  className?: string;
}

function S({ className = '' }: SkeletonBlockProps) {
  return <div className={`skeleton-shimmer rounded-lg ${className}`} />;
}

function SCircle({ className = '' }: SkeletonBlockProps) {
  return <div className={`skeleton-shimmer rounded-full ${className}`} />;
}

export default function SkeletonLoader() {
  return (
    <div className="min-h-screen w-full overflow-hidden" aria-hidden="true">

      {/* ── Fixed background (matches App) ── */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#050B14]" />
        <div className="absolute -top-1/4 -left-1/4 w-[900px] h-[900px] rounded-full bg-brand/[0.15] blur-[200px]" />
        <div className="absolute top-1/3 -right-1/4 w-[700px] h-[700px] rounded-full bg-brand/[0.08] blur-[180px]" />
      </div>

      {/* ── Navbar skeleton ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <SCircle className="w-10 h-10" />
              <S className="w-28 h-5" />
            </div>

            {/* Nav links */}
            <div className="hidden lg:flex items-center gap-3">
              <S className="w-16 h-4" />
              <S className="w-20 h-4" />
              <S className="w-14 h-4" />
              <S className="w-20 h-4" />
              <S className="w-16 h-4" />
              <S className="w-16 h-4" />
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <S className="w-16 h-8 rounded-lg" />
              <S className="w-28 h-10 rounded-xl" />
            </div>

            {/* Mobile hamburger */}
            <S className="w-8 h-8 lg:hidden rounded-md" />
          </div>
        </div>
      </nav>

      {/* ── Hero skeleton ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20">
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center gap-8 text-center">

          {/* Badge pill */}
          <S className="w-48 h-8 rounded-full" />

          {/* Headline lines */}
          <div className="flex flex-col items-center gap-3 w-full">
            <S className="w-[85%] max-w-xl h-10 sm:h-14" />
            <S className="w-[70%] max-w-lg h-10 sm:h-14" />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <S className="w-12 h-px" />
            <SCircle className="w-2 h-2" />
            <S className="w-12 h-px" />
          </div>

          {/* Sub-headline */}
          <div className="flex flex-col items-center gap-2 w-full">
            <S className="w-[90%] max-w-md h-4" />
            <S className="w-[75%] max-w-sm h-4" />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <S className="w-52 h-13 rounded-xl" />
            <S className="w-48 h-13 rounded-xl" />
          </div>

          {/* Stat badges */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl"
                style={{
                  background: 'rgba(10,16,30,0.45)',
                  border: '1px solid rgba(77,187,176,0.15)',
                }}
              >
                <SCircle className="w-8 h-8" />
                <div className="flex flex-col gap-1.5">
                  <S className="w-12 h-5" />
                  <S className="w-16 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services skeleton (peek) ── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-12">
            <S className="w-36 h-7 rounded-full" />
            <S className="w-72 h-9" />
            <S className="w-80 h-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col gap-5"
                style={{
                  background: 'rgba(10,16,30,0.45)',
                  border: '1px solid rgba(77,187,176,0.15)',
                }}
              >
                <S className="w-14 h-14 rounded-2xl" />
                <S className="w-3/4 h-5" />
                <div className="flex flex-col gap-2">
                  <S className="w-full h-3" />
                  <S className="w-full h-3" />
                  <S className="w-2/3 h-3" />
                </div>
                <S className="w-24 h-4 mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
