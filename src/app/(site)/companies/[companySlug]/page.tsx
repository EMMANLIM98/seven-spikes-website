import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  companyLandingPages,
  companySlugs,
  isCompanySlug,
  type CompanySlug,
} from '@/content/company-landing-pages';

type PageProps = {
  params: Promise<{ companySlug: string }>;
};

function getPalette(slug: CompanySlug) {
  if (slug === 'building-contracting-llc' || slug === 'construction-tourism-real-estate-trading-turkey') {
    return {
      accent: 'text-amber-300',
      dot: 'bg-amber-400',
      heroOverlay:
        'bg-[linear-gradient(112deg,rgba(9,17,31,0.95)_0%,rgba(11,24,43,0.86)_45%,rgba(201,168,42,0.22)_100%)]',
      glow: 'bg-amber-400/16',
      chip: 'border-amber-300/30 bg-amber-300/10 text-amber-100',
      cta: 'bg-amber-500 hover:bg-amber-400 text-[#10203a]',
    };
  }

  if (slug === 'general-trading-llc' || slug === 'road-contracting-jordan') {
    return {
      accent: 'text-sky-300',
      dot: 'bg-sky-400',
      heroOverlay:
        'bg-[linear-gradient(112deg,rgba(8,16,32,0.95)_0%,rgba(10,26,52,0.86)_44%,rgba(56,189,248,0.20)_100%)]',
      glow: 'bg-sky-400/14',
      chip: 'border-sky-300/30 bg-sky-300/10 text-sky-100',
      cta: 'bg-sky-400 hover:bg-sky-300 text-[#0a1a33]',
    };
  }

  return {
    accent: 'text-emerald-300',
    dot: 'bg-emerald-400',
    heroOverlay:
      'bg-[linear-gradient(112deg,rgba(8,17,30,0.95)_0%,rgba(7,28,44,0.86)_45%,rgba(52,211,153,0.20)_100%)]',
    glow: 'bg-emerald-400/14',
    chip: 'border-emerald-300/30 bg-emerald-300/10 text-emerald-100',
    cta: 'bg-emerald-400 hover:bg-emerald-300 text-[#0b1f2f]',
  };
}

export async function generateStaticParams() {
  return companySlugs.map((companySlug) => ({ companySlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { companySlug } = await params;

  if (!isCompanySlug(companySlug)) {
    return {
      title: 'Company Not Found',
    };
  }

  const company = companyLandingPages[companySlug];

  return {
    title: `${company.shortName} | Seven Spikes`,
    description: company.description,
  };
}

export default async function CompanyLandingPageRoute({ params }: PageProps) {
  const { companySlug } = await params;

  if (!isCompanySlug(companySlug)) {
    notFound();
  }

  const company = companyLandingPages[companySlug];
  const palette = getPalette(company.slug);
  const otherCompanies = companySlugs.filter((slug) => slug !== company.slug).slice(0, 4);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#091427] text-white">
        <div className="absolute inset-0">
          <Image
            src={company.heroImage}
            alt={company.heroImageAlt}
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className={`absolute inset-0 ${palette.heroOverlay}`} />
          <div className={`absolute -left-10 top-16 h-52 w-52 rounded-full blur-3xl ${palette.glow}`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_85%_0%,rgba(255,255,255,0.10),transparent)]" />
        </div>

        <div className="wrapper relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
            <div>
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white/75 transition hover:text-white"
              >
                <span aria-hidden="true">&larr;</span>
                Back to Companies
              </Link>
              <p className={`mt-5 text-[11px] font-black uppercase tracking-[0.22em] ${palette.accent}`}>
                {company.region}
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                {company.name}
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/82 sm:text-base">
                {company.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {company.focusAreas.map((area) => (
                  <span key={area} className={`rounded-full border px-3 py-1 text-xs font-semibold ${palette.chip}`}>
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <article className="rounded-3xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white/90 p-2">
                  <Image
                    src={company.logoSrc}
                    alt={company.logoAlt}
                    fill
                    className="object-contain p-2"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/70">Umbrella Entity</p>
                  <p className="mt-1 text-sm font-semibold text-white">{company.umbrellaEntity}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                {company.highlights.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/12 bg-[#0c1b33]/85 px-3 py-2.5">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-white/65">{item.label}</span>
                    <span className="text-xs font-bold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#0d1b31_0%,#edf3f9_26%,#f7fafd_100%)] py-12 sm:py-14 lg:py-16">
        <div className="wrapper">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12 xl:gap-8">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,40,0.08)] lg:col-span-4">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#b5961d]">Company Focus</p>
              <h2 className="mt-2 text-2xl font-black text-[#0f1d35]">Operational Capabilities</h2>
              <div className="mt-5 space-y-3">
                {company.capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-2.5 rounded-xl bg-slate-50 px-3 py-2.5">
                    <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${palette.dot}`} />
                    <p className="text-sm leading-6 text-slate-700">{capability}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="space-y-6 lg:col-span-8">
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,40,0.08)] sm:p-7">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#b5961d]">Service Domains</p>
                <h3 className="mt-2 text-2xl font-black text-[#0f1d35] sm:text-3xl">What This Company Delivers</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {company.focusAreas.map((area) => (
                    <div key={area} className="rounded-2xl border border-slate-200 bg-[linear-gradient(145deg,#ffffff_0%,#f8fafc_100%)] p-4">
                      <p className="text-sm font-bold text-[#12213b]">{area}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,40,0.08)] sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#b5961d]">Explore More</p>
                    <h3 className="mt-2 text-2xl font-black text-[#0f1d35] sm:text-3xl">Other Group Companies</h3>
                  </div>
                  <Link
                    href="/companies"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 transition hover:bg-slate-50"
                  >
                    View Full Portfolio
                  </Link>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {otherCompanies.map((slug) => {
                    const item = companyLandingPages[slug];
                    return (
                      <Link
                        key={item.slug}
                        href={`/companies/${item.slug}`}
                        className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
                      >
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-500">{item.region}</p>
                        <p className="mt-1 text-sm font-bold text-[#13233f] transition group-hover:text-[#0b3b67]">{item.shortName}</p>
                      </Link>
                    );
                  })}
                </div>
              </article>

              <article className="relative overflow-hidden rounded-3xl bg-[#0d1a2d] px-7 py-10 text-white shadow-[0_24px_70px_rgba(8,19,37,0.32)] sm:px-10 sm:py-12">
                <div className="absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-white/6 blur-3xl" />
                <div className={`absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full blur-3xl ${palette.glow}`} />
                <div className="relative">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/65">Project Inquiry</p>
                  <h3 className="mt-2 max-w-2xl text-2xl font-black leading-tight sm:text-3xl">
                    Connect with {company.shortName} for your next project.
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                    Share your project requirements and our team will guide you to the right service pathway.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${palette.cta}`}
                    >
                      Contact This Company
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
                    >
                      View Group Services
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
