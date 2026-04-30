import Image from 'next/image';
import Link from 'next/link';
import type { NavLandingPage } from '@/content/nav-landing-pages';
import { cn } from '@/lib/utils';
import LandingHeroBanner from './landing-hero-banner';

type Props = {
  page: NavLandingPage;
};

type CompanyItem = {
  name: string;
  description: string;
  href: string;
  logoSrc?: string;
  logoAlt?: string;
  logoCode?: string;
};

type CompanyGroup = {
  umbrellaEntity: string;
  operationTitle: string;
  companies: CompanyItem[];
};

const companyGroups: CompanyGroup[] = [
  {
    umbrellaEntity: 'Seven Spikes Group L.L.C.',
    operationTitle: 'UAE Operations',
    companies: [
      {
        name: 'Seven Spikes Road Contracting L.L.C.',
        description:
          'Seven Spikes Road Contracting is a leader in road construction services, providing road marking, crack sealant application, and AI integration to enhance road safety and durability. Its solutions are designed to meet modern infrastructure standards.',
        href: '/companies/road-contracting-llc',
        logoSrc: '/images/seven-spikes/Logos/PNG/SSRC-PNG.png',
        logoAlt: 'Seven Spikes Road Contracting logo',
      },
      {
        name: 'Seven Spikes Building Contracting L.L.C.',
        description:
          'Seven Spikes Building Contracting offers complete building construction solutions, covering residential, commercial, and industrial projects. The company also specializes in facility management services, ensuring smooth operations and maintenance of built environments.',
        href: '/companies/building-contracting-llc',
        logoSrc: '/images/seven-spikes/Logos/PNG/SSBC-PNG.png',
        logoAlt: 'Seven Spikes Building Contracting logo',
      },
      {
        name: 'Seven Spikes General Trading L.L.C.',
        description:
          'This division focuses on providing reliable general trading and logistics solutions. The company sources and supplies a wide range of products across multiple industries while ensuring efficient distribution and supply chain management.',
        href: '/companies/general-trading-llc',
        logoSrc: '/images/seven-spikes/Logos/PNG/SSGT-PNG.png',
        logoAlt: 'Seven Spikes General Trading logo',
      },
      {
        name: 'Al Safa Road Contracting L.L.C.',
        description:
          'Al Safa Road Contracting specializes in road construction and infrastructure works. The company excels in building durable roads, highways, and access routes. With a strong focus on safety and quality, its services also include comprehensive road maintenance.',
        href: '/companies/al-safa-road-contracting-llc',
        logoSrc: '/images/seven-spikes/Logos/PNG/ASRC.png',
        logoAlt: 'Al Safa Road Contracting logo',
      },
      {
        name: 'Seven Spikes Asphalt Manufacturing L.L.C.',
        description:
          'Seven Spikes Asphalt Manufacturing is an industrial company established to develop asphalt mix manufacturing operations for road construction and infrastructure applications, supporting the Seven Spikes brand ecosystem with dedicated production capabilities.',
        href: '/companies/asphalt-manufacturing-llc',
        logoSrc: '/images/seven-spikes/Logos/PNG/SSAM-PNG.png',
        logoAlt: 'Seven Spikes Asphalt Manufacturing logo',
      },
    ],
  },
  {
    umbrellaEntity: 'Seven Spikes Overseas International Management Services L.L.C.',
    operationTitle: 'International Operations',
    companies: [
      {
        name: 'Seven Spikes Construction, Tourism, Real Estate, and Trading Ltd. Turkey',
        description:
          'This branch combines expertise in real estate, hospitality, and building works with general trading services. It plays a key role in property development, offering turnkey solutions that cater to the tourism and commercial sectors.',
        href: '/companies/construction-tourism-real-estate-trading-turkey',
        logoSrc: '/images/seven-spikes/Logos/PNG/SST-PNG.png',
        logoAlt: 'Seven Spikes Turkey logo',
      },
      {
        name: 'Seven Spikes Road Contracting, Jordan',
        description:
          'This entity specializes in consultancy and logistics services. It provides expert guidance for businesses, helping them streamline operations, improve strategies, and optimize logistics for better efficiency.',
        href: '/companies/road-contracting-jordan',
        logoSrc: '/images/seven-spikes/Logos/PNG/SSJ-PNG.png',
        logoAlt: 'Seven Spikes Jordan logo',
      },
      {
        name: 'Seven Spikes Consultancy Pvt. Ltd. India',
        description:
          'Specializing in creative solutions, this branch offers design services along with expertise in the designing, retail, and hospitality sectors.',
        href: '/companies/consultancy-india',
        logoSrc: '/images/seven-spikes/Logos/PNG/SSC-PNG.png',
        logoAlt: 'Seven Spikes Consultancy logo',
      },
      {
        name: 'Seven Spikes Contracting L.L.C., Oman',
        description:
          'Expanding our road and infrastructure expertise to Oman. We focus on delivering durable, high-standard construction solutions for roads and civil works throughout the Sultanate.',
        href: '/companies/contracting-oman',
        logoSrc: '/images/seven-spikes/Logos/PNG/SSCH-PNG.png',
        logoAlt: 'Seven Spikes Contracting logo',
      },
    ],
  },
];

export default function CompaniesLandingPageSection({ page }: Props) {
  const logos =
    page.showcase?.kind === 'logos'
      ? page.showcase.items.filter((item): item is { src: string; alt: string } => 'src' in item)
      : [];

  return (
    <>
      {/*  HERO  */}
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

      {/*  MAIN CONTENT  */}
      <div className="bg-[#f5f4f0] dark:dark-surface-bg">

        {/*  Strategic Pillars  */}
        <section className="bg-white py-20 dark:bg-transparent lg:py-28">
          <div className="wrapper">
            <div className="mx-auto max-w-7xl">
              <header className="mb-14 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#b5961d]">
                    Strategic Foundation
                  </p>
                  <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Strategic Company Pillars
                  </h2>
                </div>
                <span className="shrink-0 rounded-full bg-[#f5edbb] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#7b6514] dark:bg-[#c9a82a]/15 dark:text-[#e8d26a]">
                  Portfolio
                </span>
              </header>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {page.cards.map((card, i) => (
                  <article
                    key={card.title}
                    className="group relative overflow-hidden rounded-2xl bg-[#faf9f6] p-7 ring-1 ring-gray-200/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,40,0.10)] hover:ring-[#c9a82a]/50 dark:bg-white/[0.04] dark:ring-white/8 dark:hover:ring-[#c9a82a]/25"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-5 top-3 select-none text-7xl font-black leading-none text-gray-900/[0.035] dark:text-white/[0.05]"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="mb-5 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#c9a82a] to-[#e8d26a]" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*  Operating Companies  */}
        <section className="py-20 lg:py-28">
          <div className="wrapper">
            <div className="mx-auto max-w-7xl">

              {/* Section header */}
              <header className="mb-16 border-b border-gray-300/60 pb-10 dark:border-white/10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#b5961d] dark:text-[#e8d26a]">
                      Group Structure
                    </p>
                    <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                      Operating Companies
                    </h2>
                  </div>
                  <p className="max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-right">
                    Independent legal entities, aligned under one quality philosophy and leadership standard.
                  </p>
                </div>
              </header>

              {/* Company groups */}
              <div className="space-y-20">
                {companyGroups.map((group, gi) => {
                  const gridClass =
                    group.companies.length === 4
                      ? 'sm:grid-cols-2 lg:grid-cols-4'
                      : group.companies.length === 5
                        ? 'sm:grid-cols-2 lg:grid-cols-3'
                        : 'sm:grid-cols-2 lg:grid-cols-3';

                  return (
                    <div
                      key={group.umbrellaEntity}
                      className={cn(gi > 0 && 'border-t border-gray-300/60 pt-16 dark:border-white/10')}
                    >
                      {/* Group label row */}
                      <div className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#b5961d] dark:text-[#e8d26a]">
                            {group.operationTitle}
                          </p>
                          <h3 className="mt-2 max-w-xl text-2xl font-black text-gray-900 dark:text-white">
                            {group.umbrellaEntity}
                          </h3>
                        </div>
                        <span className="shrink-0 rounded-full border border-[#c9a82a]/30 bg-[#f5edbb]/70 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#7b6514] dark:border-[#c9a82a]/20 dark:bg-[#c9a82a]/8 dark:text-[#e8d26a]">
                          {group.companies.length}{' '}
                          {group.companies.length === 1 ? 'Company' : 'Companies'}
                        </span>
                      </div>

                      {/* Cards */}
                      <div className={cn('grid gap-5', gridClass)}>
                        {group.companies.map((company) => (
                          <article
                            key={company.name}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_72px_rgba(15,23,40,0.13)] hover:ring-transparent dark:bg-[#101a2d] dark:ring-white/[0.07] dark:hover:shadow-[0_32px_72px_rgba(0,0,0,0.40)] dark:hover:ring-white/15"
                          >
                            {/* Gold accent bar */}
                            <div className="h-[3px] shrink-0 bg-[linear-gradient(90deg,#c9a82a_0%,#e8d26a_50%,#c9a82a_100%)]" />

                            {/* Logo area */}
                            <div className="relative flex h-56 shrink-0 items-center justify-center overflow-hidden bg-[#f8f7f2] transition-colors duration-300 group-hover:bg-[#f0ede0] dark:bg-[#0d1729] dark:group-hover:bg-[#111f36]">
                              {company.logoSrc ? (
                                <Image
                                  src={company.logoSrc}
                                  alt={company.logoAlt ?? `${company.name} logo`}
                                  width={220}
                                  height={160}
                                  className="h-auto max-h-[130px] w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                              ) : (
                                <span className="select-none text-2xl font-black tracking-[0.1em] text-[#8f7313] dark:text-[#f2df94]">
                                  {company.logoCode ?? 'SS'}
                                </span>
                              )}
                            </div>

                            {/* Body */}
                            <div className="flex flex-1 flex-col p-6">
                              <h4
                                title={company.name}
                                className="line-clamp-2 text-[15px] font-bold leading-snug text-gray-900 dark:text-white"
                              >
                                {company.name}
                              </h4>
                              <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-400">
                                {company.description}
                              </p>
                              <div className="mt-6 flex items-center justify-between border-t border-gray-100/80 pt-5 dark:border-white/[0.06]">
                                <Link
                                  href={company.href}
                                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#9e7e19] transition-all duration-200 hover:gap-3 dark:text-[#f0d86a]"
                                >
                                  Learn More
                                  <svg
                                    className="h-4 w-4 shrink-0"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M3 8h10M9 4l4 4-4 4"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </Link>
                                <span className="rounded-full bg-gray-100/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-gray-500 dark:bg-white/[0.07] dark:text-gray-500">
                                  {company.logoCode}
                                </span>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/*  Spotlight  */}
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
                  <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
                    {page.spotlight.description}
                  </p>
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

        {/*  Logo Showcase  */}
        {logos.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="wrapper">
              <div className="mx-auto max-w-7xl">
                <div className="mb-10">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white sm:text-3xl">
                    {page.showcase?.title}
                  </h3>
                  {page.showcase?.description && (
                    <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {page.showcase.description}
                    </p>
                  )}
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {logos.map((logo) => (
                    <div
                      key={logo.src}
                      className="flex min-h-[100px] items-center justify-center rounded-2xl bg-white p-6 ring-1 ring-gray-200/80 transition hover:shadow-md dark:bg-white/[0.04] dark:ring-white/8"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={170}
                        height={90}
                        className="h-auto max-h-14 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/*  CTA  */}
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
                    Get in Touch
                  </p>
                  <h4 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
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