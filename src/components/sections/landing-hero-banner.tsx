import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type HeroStat = {
  value: string;
  label: string;
};

type HeroCTA = {
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

type Props = {
  title: string;
  subtitle?: string;
  descriptionLines: string[];
  imageSrc: string;
  imageAlt: string;
  cta?: HeroCTA;
  stats?: HeroStat[];
  theme?: 'light' | 'dark';
  className?: string;
};

export default function LandingHeroBanner({
  title,
  subtitle,
  descriptionLines,
  imageSrc,
  imageAlt,
  cta,
  stats,
  theme = 'light',
  className,
}: Props) {
  const isDark = theme === 'dark';

  return (
    <section
      className={cn(
        'overflow-hidden rounded-[34px] border p-5 shadow-[0_24px_64px_rgba(0,0,0,0.45)] sm:p-8 lg:p-10',
        isDark
          ? 'border-[#1e3050]/70 bg-[linear-gradient(120deg,#0e1926_0%,#132035_48%,#1a2a42_100%)]'
          : 'border-white/60 bg-[linear-gradient(120deg,#f8f8f8_0%,#f1f1f1_45%,#ece8de_100%)] dark:border-white/10 dark:bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)]',
        className
      )}
    >
      <div
        className={cn(
          'grid items-center gap-8 rounded-[28px] p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]',
          isDark
            ? 'bg-[linear-gradient(110deg,rgba(255,255,255,0.055)_0%,rgba(255,255,255,0.04)_55%,rgba(255,255,255,0.03)_100%)]'
            : 'bg-[linear-gradient(110deg,#ffffff_0%,#f3f4f6_52%,#ece9df_100%)] dark:bg-[linear-gradient(110deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)]'
        )}
      >
        <div>
          <h1
            className={cn(
              'text-4xl font-bold tracking-tight sm:text-5xl',
              isDark ? 'text-white' : 'text-gray-900 dark:text-white'
            )}
          >
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b5961d]">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-6 space-y-4">
            {descriptionLines.map((paragraph) => (
              <p
                key={paragraph}
                className={cn(
                  'text-base leading-8',
                  isDark ? 'text-white/85' : 'text-gray-700 dark:text-gray-300'
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {cta ? (
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Link
                href={cta.primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-[#c9af2c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b79b1c]"
              >
                {cta.primaryLabel}
              </Link>
              {cta.secondaryHref && cta.secondaryLabel ? (
                <Link
                  href={cta.secondaryHref}
                  className={cn(
                    'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold backdrop-blur-sm transition',
                    isDark
                      ? 'border-white/20 bg-white/8 text-white hover:bg-white/14'
                      : 'border-gray-300 bg-white/80 text-gray-900 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15'
                  )}
                >
                  {cta.secondaryLabel}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div
          className={cn(
            'relative min-h-[240px] overflow-hidden rounded-[24px] border sm:min-h-[300px]',
            isDark ? 'border-white/20' : 'border-gray-200/70 dark:border-white/10'
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 35vw"
          />
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-t',
              isDark ? 'from-black/45 via-black/10 to-transparent' : 'from-black/30 via-black/5 to-transparent'
            )}
          />
        </div>
      </div>

      {stats && stats.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={cn(
                'rounded-[22px] border p-5 backdrop-blur-md',
                isDark
                  ? 'border-[#1e3050]/80 bg-[#111e32]/80'
                  : 'border-gray-200/80 bg-white/90 dark:border-white/10 dark:bg-white/[0.04]'
              )}
            >
              <p className={cn('text-3xl font-bold sm:text-[2rem]', isDark ? 'text-white' : 'text-gray-900 dark:text-white')}>
                {stat.value}
              </p>
              <p className={cn('mt-2 text-sm leading-6', isDark ? 'text-white/70' : 'text-gray-600 dark:text-gray-300')}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}