import Image from 'next/image';
import Link from 'next/link';
import type { NavLandingPage } from '@/content/nav-landing-pages';
import LandingHeroBanner from './landing-hero-banner';

type Props = {
  page: NavLandingPage;
};

type ClientLogo = { src: string; alt: string };

// ── All 55 client logos ────────────────────────────────────────────────────
const clientLogos: ClientLogo[] = [
  // Government & Semi-Government
  { src: '/images/seven-spikes/Pics/Clientele/DEWA.png', alt: 'DEWA' },
  { src: '/images/seven-spikes/Pics/Clientele/Dubai-Municipality.png', alt: 'Dubai Municipality' },
  { src: '/images/seven-spikes/Pics/Clientele/RTA.jpg', alt: 'RTA' },
  { src: '/images/seven-spikes/Pics/Clientele/Dubai-Police.jpg', alt: 'Dubai Police' },
  { src: '/images/seven-spikes/Pics/Clientele/Ministry-Of-Interior.jpg', alt: 'Ministry of Interior' },
  { src: '/images/seven-spikes/Pics/Clientele/Gov-Of-Sharjah.png', alt: 'Government of Sharjah' },
  { src: '/images/seven-spikes/Pics/Clientele/UAE-MOHRE.png', alt: 'UAE MOHRE' },
  { src: '/images/seven-spikes/Pics/Clientele/HH-The-Rulers-Court.jpg', alt: "HH The Ruler's Court" },
  { src: '/images/seven-spikes/Pics/Clientele/Presidential-Court.jpg', alt: 'Presidential Court' },
  { src: '/images/seven-spikes/Pics/Clientele/The-Office-of-HH-The-Crown-Prince-of-Dubai.jpg', alt: 'Office of HH Crown Prince of Dubai' },
  { src: '/images/seven-spikes/Pics/Clientele/Dubai-Silicon-Oasis-Authority.jpg', alt: 'Dubai Silicon Oasis Authority' },
  { src: '/images/seven-spikes/Pics/Clientele/Emirates-Council-For-Balanced-Development.jpg', alt: 'Emirates Council for Balanced Development' },
  // Major Developers & Holdings
  { src: '/images/seven-spikes/Pics/Clientele/Emaar.jpg', alt: 'Emaar' },
  { src: '/images/seven-spikes/Pics/Clientele/Nakheel.png', alt: 'Nakheel' },
  { src: '/images/seven-spikes/Pics/Clientele/Dubai-Holding.png', alt: 'Dubai Holding' },
  { src: '/images/seven-spikes/Pics/Clientele/DP-World.png', alt: 'DP World' },
  { src: '/images/seven-spikes/Pics/Clientele/Union-Properties.jpg', alt: 'Union Properties' },
  { src: '/images/seven-spikes/Pics/Clientele/Ithra-Dubai.jpg', alt: 'Ithra Dubai' },
  { src: '/images/seven-spikes/Pics/Clientele/Al-Futtaim.png', alt: 'Al Futtaim' },
  { src: '/images/seven-spikes/Pics/Clientele/Dubai-Investments-Park.jpg', alt: 'Dubai Investments Park' },
  { src: '/images/seven-spikes/Pics/Clientele/Global-Village.jpg', alt: 'Global Village' },
  { src: '/images/seven-spikes/Pics/Clientele/Lulu.png', alt: 'Lulu' },
  // Major Contractors & Builders
  { src: '/images/seven-spikes/Pics/Clientele/Larsen-Toubro.jpg', alt: 'Larsen & Toubro' },
  { src: '/images/seven-spikes/Pics/Clientele/China-State-Construction.png', alt: 'China State Construction' },
  { src: '/images/seven-spikes/Pics/Clientele/Strabag.jpg', alt: 'Strabag' },
  { src: '/images/seven-spikes/Pics/Clientele/Arabtec-Engineering-Services.jpg', alt: 'Arabtec Engineering Services' },
  { src: '/images/seven-spikes/Pics/Clientele/Belhasa-Six-Construct.jpg', alt: 'Belhasa Six Construct' },
  { src: '/images/seven-spikes/Pics/Clientele/Bam-International-Edition.png', alt: 'BAM International' },
  { src: '/images/seven-spikes/Pics/Clientele/Arabian-Construction-Co.jpg', alt: 'Arabian Construction Co.' },
  { src: '/images/seven-spikes/Pics/Clientele/Khansaheb.jpg', alt: 'Khansaheb' },
  { src: '/images/seven-spikes/Pics/Clientele/Amana.png', alt: 'Amana' },
  { src: '/images/seven-spikes/Pics/Clientele/Al-Nasr-Contracting.jpg', alt: 'Al Nasr Contracting' },
  { src: '/images/seven-spikes/Pics/Clientele/Accurate-Vision-Contracting.jpg', alt: 'Accurate Vision Contracting' },
  { src: '/images/seven-spikes/Pics/Clientele/Danway.png', alt: 'Danway' },
  { src: '/images/seven-spikes/Pics/Clientele/Dulsco.png', alt: 'Dulsco' },
  { src: '/images/seven-spikes/Pics/Clientele/Island-Tower-Electromechanical-Works.jpg', alt: 'Island Tower' },
  { src: '/images/seven-spikes/Pics/Clientele/Penta-Emirates.png', alt: 'Penta Emirates' },
  { src: '/images/seven-spikes/Pics/Clientele/SSANGYONG.jpg', alt: 'Ssangyong' },
  { src: '/images/seven-spikes/Pics/Clientele/Build-Max.jpg', alt: 'Build Max' },
  // Others
  { src: '/images/seven-spikes/Pics/Clientele/AASA.jpg', alt: 'AASA' },
  { src: '/images/seven-spikes/Pics/Clientele/Abec.png', alt: 'Abec' },
  { src: '/images/seven-spikes/Pics/Clientele/APCC.png', alt: 'APCC' },
  { src: '/images/seven-spikes/Pics/Clientele/ATC.png', alt: 'ATC' },
  { src: '/images/seven-spikes/Pics/Clientele/BCG.png', alt: 'BCG' },
  { src: '/images/seven-spikes/Pics/Clientele/Delta.png', alt: 'Delta' },
  { src: '/images/seven-spikes/Pics/Clientele/EDRAFOR.jpg', alt: 'EDRAFOR' },
  { src: '/images/seven-spikes/Pics/Clientele/Eng-Office.png', alt: 'Engineering Office' },
  { src: '/images/seven-spikes/Pics/Clientele/Focus-Tech.jpg', alt: 'Focus Tech' },
  { src: '/images/seven-spikes/Pics/Clientele/Gargash-Hospital.jpg', alt: 'Gargash Hospital' },
  { src: '/images/seven-spikes/Pics/Clientele/MAB.png', alt: 'MAB' },
  { src: '/images/seven-spikes/Pics/Clientele/MKM-Global-Commercial-Holdings.jpg', alt: 'MKM Global' },
  { src: '/images/seven-spikes/Pics/Clientele/Nablus.png', alt: 'Nablus' },
  { src: '/images/seven-spikes/Pics/Clientele/PLQC.png', alt: 'PLQC' },
  { src: '/images/seven-spikes/Pics/Clientele/Riyadh-Cables-Group.png', alt: 'Riyadh Cables Group' },
  { src: '/images/seven-spikes/Pics/Clientele/SCECO.png', alt: 'SCECO' },
];

// ── Split evenly into 3 marquee rows ──────────────────────────────────────
const CHUNK = Math.ceil(clientLogos.length / 3);
const rows: [ClientLogo[], ClientLogo[], ClientLogo[]] = [
  clientLogos.slice(0, CHUNK),
  clientLogos.slice(CHUNK, CHUNK * 2),
  clientLogos.slice(CHUNK * 2),
];

function LogoCard({ logo }: { logo: ClientLogo }) {
  return (
    <div className="flex h-[84px] w-48 shrink-0 items-center justify-center rounded-2xl bg-white/[0.055] p-4 ring-1 ring-white/[0.08] transition-colors duration-200 hover:bg-white/[0.10] hover:ring-white/20">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={160}
        height={60}
        className="h-auto max-h-12 w-auto max-w-[136px] object-contain brightness-110 contrast-90"
      />
    </div>
  );
}

type MarqueeRowProps = {
  logos: ClientLogo[];
  direction: 'left' | 'right';
  duration: string;
};

function MarqueeRow({ logos, direction, duration }: MarqueeRowProps) {
  // 3 copies → translate -33.33% for a seamless loop
  const tripled = [...logos, ...logos, ...logos];
  return (
    <div className="relative overflow-hidden">
      {/* Edge fade – left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#060d1a] to-transparent sm:w-32"
      />
      {/* Edge fade – right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#060d1a] to-transparent sm:w-32"
      />
      <div
        className={`marquee-track flex w-max gap-4`}
        style={{ animation: `marquee-${direction} ${duration} linear infinite` }}
      >
        {tripled.map((logo, i) => (
          <LogoCard key={`${logo.src}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

export default function ClienteleLandingPageSection({ page }: Props) {
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

      {/* ── WALL OF TRUST ────────────────────────────────── */}
      <section className="overflow-hidden bg-[#060d1a] py-20 lg:py-28">

        {/* Section header */}
        <div className="wrapper">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c9a82a]">
              {page.spotlight.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              50+ Trusted Partners
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              From government authorities and flagship developers to tier-one international contractors — Seven Spikes has earned the confidence of organizations that demand the highest standard of delivery.
            </p>
          </div>

          {/* Stats row */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/[0.06] ring-1 ring-white/[0.08] sm:grid-cols-4">
            {page.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-[#060d1a] px-5 py-8"
              >
                <span className="text-3xl font-black text-[#c9a82a] sm:text-4xl">{stat.value}</span>
                <span className="mt-2 text-center text-xs font-semibold uppercase leading-4 tracking-[0.12em] text-gray-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee rows */}
        <div className="mt-16 space-y-4">
          <MarqueeRow logos={rows[0]} direction="left"  duration="55s" />
          <MarqueeRow logos={rows[1]} direction="right" duration="45s" />
          <MarqueeRow logos={rows[2]} direction="left"  duration="65s" />
        </div>

        {/* Bottom label */}
        <div className="wrapper mt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-gray-600">
            Hover over any row to pause · {clientLogos.length} partner organisations
          </p>
        </div>
      </section>

      {/* ── SPOTLIGHT ── */}
      <section className="bg-[#f5f4f0] py-20 dark:dark-surface-bg lg:py-28">
        <div className="wrapper">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl shadow-[0_48px_120px_rgba(8,15,28,0.18)] dark:shadow-[0_48px_120px_rgba(0,0,0,0.50)]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-full">
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

      {/* ── CTA ── */}
      <section className="bg-[#f5f4f0] pb-20 pt-4 dark:dark-surface-bg sm:pb-28 lg:pb-32">
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
                  Work With Us
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
    </>
  );
}
