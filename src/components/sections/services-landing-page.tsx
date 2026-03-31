import Image from 'next/image';
import Link from 'next/link';
import type { NavLandingPage } from '@/content/nav-landing-pages';
import { cn } from '@/lib/utils';
import LandingHeroBanner from './landing-hero-banner';

type Props = {
  page: NavLandingPage;
};

export default function ServicesLandingPageSection({ page }: Props) {
  const showcaseItems =
    page.showcase?.kind === 'images'
      ? page.showcase.items.filter((item): item is { title: string; image: string; imageAlt: string } => 'image' in item)
      : [];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#0b1321] py-16 text-white dark-hero-bg sm:py-20 lg:py-24">
        <Image
          src={page.heroImage}
          alt=""
          fill
          priority
          aria-hidden="true"
          className="scale-110 object-cover blur-md"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#070e1a]/78" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(19,32,53,0.6),transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b1321] to-transparent" />
        <div className="wrapper relative z-10">
          <div className="mx-auto max-w-6xl">
            <LandingHeroBanner
              title={page.title}
              subtitle={page.eyebrow}
              descriptionLines={[page.description]}
              imageSrc={page.heroImage}
              imageAlt={page.heroImageAlt}
              cta={{
                primaryLabel: page.cta.primaryLabel,
                primaryHref: page.cta.primaryHref,
                secondaryLabel: page.cta.secondaryLabel,
                secondaryHref: page.cta.secondaryHref,
              }}
              stats={page.stats}
              theme="dark"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <div className="bg-[#f5f4f0] dark:dark-surface-bg">

        {/* ── SERVICE SECTIONS (Alternating Layout) ── */}
        <section className="py-20 lg:py-28">
          <div className="space-y-0">
            {page.cards.map((service, idx) => {
              const showcase = showcaseItems[idx];
              const isEven = idx % 2 === 0;

              return (
                <article
                  key={service.title}
                  className={cn(
                    'grid items-stretch gap-0 lg:grid-cols-2',
                    'bg-white dark:bg-transparent',
                    idx > 0 && 'border-t border-gray-200/80 dark:border-white/10'
                  )}
                >
                  {/* ── Image Section ── */}
                  <div
                    className={cn(
                      'relative min-h-[280px] sm:min-h-[380px] lg:min-h-[520px] overflow-hidden',
                      !isEven && 'lg:order-last'
                    )}
                  >
                    {showcase ? (
                      <Image
                        src={showcase.image}
                        alt={showcase.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-black/30 lg:to-transparent" />
                  </div>

                  {/* ── Content Section ── */}
                  <div className="flex flex-col justify-center p-7 sm:p-8 lg:p-12">
                    {/* ── Service Number ── */}
                    <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#b5961d] dark:text-[#e8d26a]">
                      Service {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* ── Title ── */}
                    <h2 className="mt-3 text-2xl font-black leading-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h2>

                    {/* ── Gold Accent Line ── */}
                    <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#c9a82a] to-[#e8d26a]" />

                    {/* ── Description ── */}
                    <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base lg:mt-8 lg:leading-8">
                      {service.description}
                    </p>

                    {/* ── CTA Link ── */}
                    <div className="mt-10">
                      <Link
                        href={page.cta.primaryHref}
                        className="inline-flex items-center justify-center rounded-full bg-[#c9a82a] px-7 py-3 text-sm font-bold text-white shadow-[0_10px_32px_rgba(201,168,42,0.30)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#b09020] hover:shadow-[0_14px_44px_rgba(201,168,42,0.40)]"
                      >
                        {page.cta.primaryLabel}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── SPOTLIGHT ── */}
        <section className="bg-white py-20 dark:bg-transparent lg:py-28">
          <div className="wrapper">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl shadow-[0_48px_120px_rgba(8,15,28,0.18)] dark:shadow-[0_48px_120px_rgba(0,0,0,0.50)]">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
                  <Image
                    src={page.spotlight.image}
                    alt={page.spotlight.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
                </div>
                <div className="flex flex-col justify-center bg-[#0d1828] p-8 sm:p-10 lg:p-14">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c9a82a]">
                    {page.spotlight.eyebrow}
                  </p>
                  <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                    {page.spotlight.title}
                  </h3>
                  {page.spotlight.description && (
                    <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                      {page.spotlight.description}
                    </p>
                  )}
                  <ul className="mt-8 space-y-4">
                    {page.spotlight.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a82a]" />
                        <span className="text-sm leading-7 text-gray-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="pb-20 pt-4 sm:pb-28 lg:pb-32">
          <div className="wrapper">
            <div className="mx-auto max-w-7xl">
              <article className="relative overflow-hidden rounded-3xl bg-[#0c1828] px-8 py-16 text-center shadow-[0_40px_100px_rgba(8,15,28,0.36)] sm:px-12 lg:py-20">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a82a]/50 to-transparent" />
                  <div className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#c9a82a]/6 blur-3xl" />
                  <div className="absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#3358a0]/10 blur-3xl" />
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
                <div className="relative">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c9a82a]">
                    Ready to Engage
                  </p>
                  <h4 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                    {page.cta.title}
                  </h4>
                  <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                    {page.cta.description}
                  </p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                      href={page.cta.primaryHref}
                      className="inline-flex items-center justify-center rounded-full bg-[#c9a82a] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_32px_rgba(201,168,42,0.40)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b09020] hover:shadow-[0_14px_44px_rgba(201,168,42,0.50)]"
                    >
                      {page.cta.primaryLabel}
                    </Link>
                    {page.cta.secondaryHref && page.cta.secondaryLabel && (
                      <Link
                        href={page.cta.secondaryHref}
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/14"
                      >
                        {page.cta.secondaryLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
