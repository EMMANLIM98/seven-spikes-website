import Image from 'next/image';
import Link from 'next/link';
import type { NavLandingPage } from '@/content/nav-landing-pages';

type Props = {
  page: NavLandingPage;
};

type ClauseSection = {
  id: string;
  number: string;
  title: string;
  clauses: string[];
  bullets?: string[];
};

const CLAUSE_SECTIONS: ClauseSection[] = [
  {
    id: 'use-of-website',
    number: '1.0',
    title: 'Use of the Website',
    clauses: [
      '1.1 By accessing the Website, you agree to use it solely for lawful purposes and in a manner that does not infringe upon the rights of, or restrict or inhibit the use and enjoyment of the Website by any third party. Prohibited behavior includes but is not limited to:',
      '1.2 Users are responsible for ensuring that all information provided to the Website is accurate and current.',
    ],
    bullets: [
      'Engaging in conduct that is unlawful, fraudulent, or harmful.',
      'Transmitting or disseminating material that is obscene, offensive, or defamatory.',
      'Attempting to gain unauthorized access to the Website, server, or networks connected to the Website.',
    ],
  },
  {
    id: 'intellectual-property',
    number: '2.0',
    title: 'Intellectual Property',
    clauses: [
      '2.1 The content, design, graphics, logos, trademarks, and other materials on the Website are owned by or licensed to Seven Spikes and are protected by intellectual property laws.',
      '2.2 Users may download or print content from the Website for personal, non-commercial use only. Any other use, including reproduction, modification, or distribution of Website content without written consent from Seven Spikes is strictly prohibited.',
    ],
  },
  {
    id: 'disclaimer',
    number: '3.0',
    title: 'Disclaimer',
    clauses: [
      '3.1 The information contained on the Website is provided on an "as is" basis without any warranties of any kind, either express or implied. While we strive to ensure that the information provided is accurate and up to date, Seven Spikes makes no representations or warranties about the completeness, accuracy, reliability, suitability, or availability of the Website or the information contained therein.',
      "3.2 Seven Spikes shall not be liable for any loss or damage, including but not limited to indirect or consequential loss or damage, arising from the use of or reliance on the Website's content.",
    ],
  },
  {
    id: 'general',
    number: '4.0',
    title: 'General',
    clauses: [
      '4.1 Seven Spikes reserves the right to revise these Conditions at any time by updating this page. Users are encouraged to review the Conditions regularly to ensure they are aware of any changes. Continued use of the Website after changes are posted constitutes acceptance of the updated Conditions.',
      '4.2 These Conditions shall be governed by and interpreted in accordance with the laws of the jurisdiction in which Seven Spikes operates. Any disputes arising under these Conditions shall be subject to the exclusive jurisdiction of the local courts.',
      '4.3 If any provision of these Conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.',
    ],
  },
];

export default function TermsLandingPageSection({ page }: Props) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0a1324] text-white">
        <div className="absolute inset-0">
          <Image
            src={page.heroImage}
            alt={page.heroImageAlt}
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(8,14,28,0.96)_0%,rgba(9,18,36,0.86)_46%,rgba(201,168,42,0.16)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_52%_at_80%_0%,rgba(38,111,189,0.25),transparent)]" />
        </div>

        <div className="wrapper relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c9a82a]">Terms & Conditions</p>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Conditions of Use and Disclaimer
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/82 sm:text-base">
                These Conditions of Use and Disclaimer (the &quot;Conditions&quot;) set out important information about the Seven Spikes Website hosted under the URL https://sevenspikesgroup.com (the &quot;Website&quot;). Please read it carefully as it affects your rights and liabilities under the law. If you disagree with the Conditions, please do not use the Website.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#c9a82a]">Quick Access</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {CLAUSE_SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded-2xl border border-white/12 bg-[#0c1b33]/85 px-3 py-3 text-sm font-semibold text-white/88 transition hover:border-white/25 hover:bg-[#102445]"
                  >
                    <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#c9a82a]">
                      {section.number}
                    </span>
                    <p className="mt-1 leading-tight">{section.title}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#0d1a31_0%,#edf1f7_24%,#f6f9fc_100%)] py-10 sm:py-14 lg:py-16">
        <div className="wrapper">
          <div className="mx-auto grid max-w-[1450px] gap-6 lg:grid-cols-12 xl:gap-8">
            <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_44px_rgba(15,23,40,0.08)] lg:col-span-4">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#b5961d]">Legal Summary</p>
              <h2 className="mt-2 text-2xl font-black text-[#0e1a30]">Important Notes</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <p>Use this Website lawfully and respectfully.</p>
                <p>All website assets are protected intellectual property.</p>
                <p>Information is provided as-is and should be independently verified.</p>
                <p>Updated terms apply after publication on this page.</p>
              </div>
            </aside>

            <div className="space-y-5 lg:col-span-8">
              {CLAUSE_SECTIONS.map((section) => (
                <article
                  id={section.id}
                  key={section.id}
                  className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_44px_rgba(15,23,40,0.08)] sm:p-6"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#f2e6bb] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#7a6110]">
                      {section.number}
                    </span>
                    <h3 className="text-2xl font-black text-[#0f1d35]">{section.title}</h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    {section.clauses.map((clause) => (
                      <p key={clause} className="text-sm leading-7 text-slate-700 sm:text-[15px]">
                        {clause}
                      </p>
                    ))}
                  </div>

                  {section.bullets ? (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 rounded-xl bg-slate-50 px-3 py-2.5">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c9a82a]" />
                          <span className="text-sm leading-6 text-slate-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}

              <article className="relative overflow-hidden rounded-3xl border border-[#d6bf73]/45 bg-[#0c192d] p-6 text-white shadow-[0_22px_60px_rgba(8,19,37,0.32)] sm:p-8">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#c9a82a]/14 blur-3xl" />
                <div className="absolute -left-16 bottom-2 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />

                <h3 className="relative text-2xl font-black sm:text-3xl">{page.cta.title}</h3>
                <p className="relative mt-3 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
                  {page.cta.description}
                </p>
                <div className="relative mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={page.cta.primaryHref}
                    className="inline-flex items-center justify-center rounded-full bg-[#c9a82a] px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#b09020]"
                  >
                    {page.cta.primaryLabel}
                  </Link>
                  {page.cta.secondaryHref && page.cta.secondaryLabel ? (
                    <Link
                      href={page.cta.secondaryHref}
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
                    >
                      {page.cta.secondaryLabel}
                    </Link>
                  ) : null}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
