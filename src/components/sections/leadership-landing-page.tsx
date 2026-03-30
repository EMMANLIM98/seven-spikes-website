import Image from 'next/image';
import Link from 'next/link';
import type { NavLandingPage } from '@/content/nav-landing-pages';

type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

const seniorLeadership: TeamMember[] = [
  { name: 'Shantha Kumar', role: 'Director', photo: '/images/seven-spikes/Pics/Leadership/Shantha-Kumar.jpg' },
  { name: 'Abdul Samad', role: 'Commercial Director', photo: '/images/seven-spikes/Pics/Leadership/Abdul-Samad.jpg' },
  { name: 'Biju Nath', role: 'General Manager — Building & FM Division', photo: '/images/seven-spikes/Pics/Leadership/Biju-Nath.jpg' },
  { name: 'Omar Dmairi', role: 'Division Manager — Roads', photo: '/images/seven-spikes/Pics/Leadership/Omar-Dmairi.jpg' },
];

const managementTeam: TeamMember[] = [
  { name: 'Mohammed Sameeullah', role: 'Finance Manager', photo: '/images/seven-spikes/Pics/Leadership/Mohammed-Sameeullah.jpg' },
  { name: 'Avlon Dsouza', role: 'HR Manager', photo: '/images/seven-spikes/Pics/Leadership/Avlon-Dsouza.jpg' },
  { name: 'Abdul Latheef', role: 'Administration Manager', photo: '/images/seven-spikes/Pics/Leadership/Abdul-Latheef.jpg' },
  { name: 'Moath Sholi', role: 'Logistics Manager', photo: '/images/seven-spikes/Pics/Leadership/Moath-Sholi.jpg' },
  { name: 'Christo Guevarra', role: 'Procurement Manager', photo: '/images/seven-spikes/Pics/Leadership/Christo-Guevarra.jpg' },
  { name: 'Nasser Y M Mushtaha', role: 'Information & Digital Technology Manager', photo: '/images/seven-spikes/Pics/Leadership/Nasser-Mushtaha.jpg' },
  { name: 'Nitesh Bhardwaj', role: 'Planning Manager', photo: '/images/seven-spikes/Pics/Leadership/Nitesh-Bhardwaj.jpg' },
  { name: 'Sudath Kumara', role: 'Commercial Manager', photo: '/images/seven-spikes/Pics/Leadership/Sudath-Kumara.jpg' },
  { name: 'Ateef Idrees Syed', role: 'QHSE Manager', photo: '/images/seven-spikes/Pics/Leadership/Ateef-Syed.jpg' },
  { name: 'Sreepad Kelkar', role: 'Audit Manager', photo: '/images/seven-spikes/Pics/Leadership/Sreepad-Kelkar.jpg' },
  { name: 'Shihab', role: 'Design Manager', photo: '/images/seven-spikes/Pics/Leadership/Shihab.jpg' },
  { name: 'Mohamad Maadarani', role: 'Transport Manager', photo: '/images/seven-spikes/Pics/Leadership/Mohamad-Maadarani.jpg' },
  { name: 'Farid Al Kindi', role: 'Govt. Liaison Manager', photo: '/images/seven-spikes/Pics/Leadership/Farid-Kindi.jpg' },
  { name: 'Wael Ahmed', role: 'Legal Advisor', photo: '/images/seven-spikes/Pics/Leadership/Wael-Ahmed.jpg' },
];

const operationsTeam: TeamMember[] = [
  { name: 'Osama Abdou', role: 'Sr. Operations Manager — Roads', photo: '/images/seven-spikes/Pics/Leadership/Osama-Abdou.jpg' },
  { name: 'Ayham Ababneh', role: 'Sr. Operations Manager — Roads', photo: '/images/seven-spikes/Pics/Leadership/Ayham-Ababneh.jpg' },
  { name: 'Hilario Badua', role: 'Operations Manager — Roads', photo: '/images/seven-spikes/Pics/Leadership/Hilario-Badua.jpg' },
  { name: 'Sajeev Plachery', role: 'Operations Manager — Building', photo: '/images/seven-spikes/Pics/Leadership/Sajeev-Plachery.jpg' },
  { name: 'Basma Ayad', role: 'Operations Manager — FM Division', photo: '/images/seven-spikes/Pics/Leadership/Basma-Ayad.jpg' },
  { name: 'Basil Mathai', role: 'Operations Manager — Electrical Division', photo: '/images/seven-spikes/Pics/Leadership/Basil-Mathai.jpg' },
  { name: 'Sheila Saturno', role: 'International Business Coordinator', photo: '/images/seven-spikes/Pics/Leadership/Sheila-Saturno.jpg' },
  { name: 'Arnel Dungo', role: 'Senior Coordinator', photo: '/images/seven-spikes/Pics/Leadership/Arnel-Dungo.jpg' },
];

const internationalTeam: TeamMember[] = [
  { name: 'Ahmad Abdou', role: 'Operations Manager — Turkey Branch', photo: '/images/seven-spikes/Pics/Leadership/Ahmad-Abdou.jpg' },
  { name: 'Eyup Ozdemir', role: 'Branch Manager — Turkey Branch', photo: '/images/seven-spikes/Pics/Leadership/Eyup-Ozdemir.jpg' },
  { name: 'Emel Tok', role: 'Accounts In-Charge — Turkey Branch', photo: '/images/seven-spikes/Pics/Leadership/Emel-Tok.jpg' },
  { name: 'Fatma Yaman Akin', role: 'General Trading In-Charge — Turkey Branch', photo: '/images/seven-spikes/Pics/Leadership/Fatma-Akın.jpg' },
  { name: 'Mohannad Omar Mohammad Saleh', role: 'Sr. Branch Coordinator — Jordan', photo: '/images/seven-spikes/Pics/Leadership/Mohannad-Saleh.jpg' },
  { name: 'Mufeed', role: 'Branch Coordinator — India', photo: '/images/seven-spikes/Pics/Leadership/Mufeed.jpg' },
];

type Props = { page: NavLandingPage };

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8 flex items-end justify-between border-b border-gray-200/80 pb-4 dark:border-white/10">
      <div>
        <span className="mb-2 inline-block rounded-full bg-[#f2df94]/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#7b6514]">
          {eyebrow}
        </span>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">{title}</h2>
      </div>
    </div>
  );
}

function SeniorCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-[#d4b84a]/30 bg-[linear-gradient(160deg,#fffdf4_0%,#f9f6ea_100%)] shadow-[0_16px_48px_rgba(15,23,40,0.1)] transition hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(15,23,40,0.15)] dark:border-[#c9af2c]/20 dark:bg-[linear-gradient(160deg,#1c1a10_0%,#111008_100%)]">
      <div className="relative h-72 w-full overflow-hidden sm:h-80">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-lg font-bold leading-tight text-white drop-shadow-sm">{member.name}</p>
          <p className="mt-1 text-xs font-medium text-[#f2df94]">{member.role}</p>
        </div>
      </div>
      <div className="h-1 w-full bg-[linear-gradient(90deg,#c9af2c,#e8d26a,#c9af2c)]" />
    </article>
  );
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-[20px] border border-gray-200/80 bg-white shadow-[0_8px_28px_rgba(15,23,40,0.07)] transition hover:-translate-y-1 hover:border-[#c9af2c]/40 hover:shadow-[0_16px_40px_rgba(15,23,40,0.12)] dark:border-white/8 dark:bg-[#111827]">
      <div className="relative h-52 w-full overflow-hidden sm:h-56">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
      </div>
      <div className="p-4">
        <p className="truncate text-[15px] font-semibold leading-tight text-gray-900 dark:text-white">
          {member.name}
        </p>
        <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
          {member.role}
        </p>
      </div>
      <div className="mx-4 mb-4 h-px bg-[linear-gradient(90deg,#c9af2c40,transparent)]" />
    </article>
  );
}

export default function LeadershipLandingPageSection({ page }: Props) {
  return (
    <>
      {/* ── Dark blurred hero ── */}
      <section className="relative isolate overflow-hidden bg-[#0b1321] pb-16 pt-16 text-white dark-hero-bg sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
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
            <div className="mb-8 text-center sm:mb-10">
              <span className="inline-block rounded-full border border-[#c9af2c]/40 bg-[#c9af2c]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#e8d26a]">
                {page.eyebrow}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Message From the Founders
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Leadership rooted in excellence, integrity, and innovation across every Seven Spikes division.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-[#c9af2c]/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.055)_0%,rgba(255,255,255,0.03)_55%,rgba(201,175,44,0.06)_100%)] p-7 shadow-[0_32px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:p-10 lg:p-12">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 -top-4 select-none font-serif text-[10rem] leading-none text-[#c9af2c]/10 sm:text-[14rem]"
              >
                &ldquo;
              </span>

              <div className="relative grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-base leading-8 text-white/82 sm:text-lg sm:leading-9">
                    At <span className="font-semibold text-[#e8d26a]">Seven Spikes</span>, our journey has been defined by a steadfast commitment to excellence, integrity, and innovation. Since our inception, we have grown into a globally diversified group, delivering impactful solutions across industries such as Road Contracting, Building Construction, Facilities Management, Real Estate, Hospitality, General Trading, and Logistics.
                  </p>
                  <p className="mt-5 text-base leading-8 text-white/82 sm:text-lg sm:leading-9">
                    Our success is built on a strong foundation of values, with a relentless focus on quality, a client-centric approach, and a dedication to sustainable growth. By embracing innovation, adopting best practices, and empowering our people, we have earned the trust of clients, partners, and stakeholders worldwide.
                  </p>
                  <p className="mt-5 text-base leading-8 text-white/82 sm:text-lg sm:leading-9">
                    We believe that true progress is measured not only by business achievements but also by the positive impact we create in the communities we serve. As we expand our global footprint, we remain committed to fostering meaningful partnerships, strengthening our capabilities, and delivering solutions that shape industries and enhance societies.
                  </p>
                  <p className="mt-5 text-base leading-8 text-white/82 sm:text-lg sm:leading-9">
                    Our journey would not have been possible without the dedication of our exceptional team and the trust of our valued clients. Together, we will continue to set new benchmarks for excellence, innovation, and responsible growth.
                  </p>
                  <div className="mt-8 h-px w-full bg-[linear-gradient(90deg,rgba(201,175,44,0.35),transparent)]" />
                  <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-[#c9af2c]/80">
                    Founders: Ashraf Ayad & Said Mohamed
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={page.cta.primaryHref}
                      className="inline-flex items-center justify-center rounded-full bg-[#c9af2c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b79b1c]"
                    >
                      {page.cta.primaryLabel}
                    </Link>
                    {page.cta.secondaryHref && page.cta.secondaryLabel ? (
                      <Link
                        href={page.cta.secondaryHref}
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/14"
                      >
                        {page.cta.secondaryLabel}
                      </Link>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    { name: 'Ashraf Ayad', photo: '/images/seven-spikes/Pics/Leadership/Ashraf-Ayad.jpg' },
                    { name: 'Said Mohamed', photo: '/images/seven-spikes/Pics/Leadership/Said-Mohamed.jpg' },
                  ].map((founder) => (
                    <article
                      key={founder.name}
                      className="group overflow-hidden rounded-[26px] border border-[#c9af2c]/35 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_24px_56px_rgba(0,0,0,0.45)]"
                    >
                      <div className="relative h-[320px] overflow-hidden sm:h-[360px] lg:h-[340px]">
                        <Image
                          src={founder.photo}
                          alt={founder.name}
                          fill
                          className="object-cover object-top transition duration-500 group-hover:scale-105"
                          sizes="(max-width: 1024px) 50vw, 34vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1321]/85 via-transparent to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <p className="text-lg font-bold text-white sm:text-xl">{founder.name}</p>
                          <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#e8d26a]">Founder</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team directory ── */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fafaff_0%,#f4f2ea_100%)] py-16 dark:dark-surface-bg sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#c9af2c]/6 blur-3xl" />
          <div className="absolute -left-16 bottom-40 h-64 w-64 rounded-full bg-[#355c9d]/6 blur-3xl" />
        </div>

        <div className="wrapper relative z-10">
          <div className="mx-auto max-w-6xl space-y-16">

            {/* ── Senior Leadership ── */}
            <div>
              <SectionHeader eyebrow="Executive" title="Senior Leadership" />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {seniorLeadership.map((m) => (
                  <SeniorCard key={m.name} member={m} />
                ))}
              </div>
            </div>

            {/* ── Management Team ── */}
            <div>
              <SectionHeader eyebrow="Management" title="Management Team" />
              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {managementTeam.map((m) => (
                  <MemberCard key={m.name} member={m} />
                ))}
              </div>
            </div>

            {/* ── Operations Team ── */}
            <div>
              <SectionHeader eyebrow="Operations" title="Operations Team" />
              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {operationsTeam.map((m) => (
                  <MemberCard key={m.name} member={m} />
                ))}
              </div>
            </div>

            {/* ── International Offices ── */}
            <div>
              <SectionHeader eyebrow="Global Network" title="International Offices" />
              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {internationalTeam.map((m) => (
                  <MemberCard key={m.name} member={m} />
                ))}
              </div>
            </div>

            {/* ── CTA banner ── */}
            <article className="overflow-hidden rounded-[24px] bg-[linear-gradient(110deg,#111827_0%,#1f2937_55%,#6f5312_130%)] px-6 py-10 text-center text-white shadow-[0_24px_70px_rgba(15,23,40,0.2)] sm:px-10 lg:py-12">
              <h4 className="text-2xl font-semibold tracking-tight sm:text-4xl">{page.cta.title}</h4>
              <p className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-7 text-white/84 sm:mt-6 sm:text-lg sm:leading-9">
                {page.cta.description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={page.cta.primaryHref}
                  className="inline-flex items-center justify-center rounded-full bg-[#c9af2c] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#b79b1c]"
                >
                  {page.cta.primaryLabel}
                </Link>
                {page.cta.secondaryHref && page.cta.secondaryLabel ? (
                  <Link
                    href={page.cta.secondaryHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/14"
                  >
                    {page.cta.secondaryLabel}
                  </Link>
                ) : null}
              </div>
            </article>

          </div>
        </div>
      </section>
    </>
  );
}
