import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { NavLandingPage } from '@/content/nav-landing-pages';
import AboutHeroBanner from './about-hero-banner';

type Props = {
  page: NavLandingPage;
};

export default function AboutLandingPageSection({ page }: Props) {
  if (!page.aboutContent) {
    return null;
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0b1321] pb-16 pt-16 text-white sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
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
            <AboutHeroBanner page={page} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#f8f6ef_100%)] py-16 dark:bg-[#101828] dark:bg-none sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-[#c9af2c]/8 blur-3xl" />
      </div>

      <div className="wrapper relative z-10">
        <div className="mx-auto max-w-6xl">

          <section className="space-y-10 overflow-hidden rounded-[34px] border border-gray-200/70 bg-white/95 p-5 shadow-[0_20px_60px_rgba(15,23,40,0.08)] dark:border-white/10 dark:bg-white/[0.03] sm:p-8 lg:p-10">
            <div className="rounded-[28px] bg-[linear-gradient(180deg,#ededed_0%,#f5f5f5_100%)] p-6 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] sm:p-8">
              <h3 className="text-2xl font-bold text-[#8f2222] dark:text-[#f0b4b4] sm:text-3xl">
                {page.aboutContent.storyTitle}
              </h3>
              <div className="mt-5 space-y-4">
                {page.aboutContent.storyParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-gray-700 dark:text-gray-300 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  Growth Timeline
                </h4>
                <span className="rounded-full bg-[#f2df94]/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6514]">
                  Milestones
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {page.aboutContent.milestones.map((milestone, index) => (
                  <article
                    key={`${milestone.year}-${milestone.title}`}
                    className={cn(
                      'overflow-hidden rounded-[24px] border border-gray-200/80 bg-white/95 shadow-[0_16px_40px_rgba(15,23,40,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(15,23,40,0.12)] dark:border-white/10 dark:bg-white/[0.04]',
                      page.aboutContent!.milestones.length % 3 === 1 &&
                        index === page.aboutContent!.milestones.length - 1 &&
                        'md:col-span-2 xl:col-span-3'
                    )}
                  >
                    <div className="relative min-h-[190px]">
                      <Image
                        src={milestone.image}
                        alt={milestone.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 32vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                      {milestone.year ? (
                        <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-[#c9af2c]/95 px-3 py-1 text-sm font-bold text-[#111827] shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                          {milestone.year}
                        </div>
                      ) : null}
                    </div>

                    <div className="space-y-2 bg-[linear-gradient(180deg,#ffffff_0%,#f8f8f8_100%)] p-5 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)]">
                      <h4
                        title={milestone.title}
                        aria-label={milestone.title}
                        className="truncate text-sm font-semibold leading-tight text-gray-900 dark:text-white sm:text-[15px]"
                      >
                        {milestone.title}
                      </h4>
                      {milestone.description ? (
                        <p
                          title={milestone.description}
                          aria-label={milestone.description}
                          className="truncate text-xs font-medium leading-5 text-gray-600 dark:text-gray-300 sm:text-[13px]"
                        >
                          {milestone.description}
                        </p>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <article className="rounded-[24px] border border-[#d7c778] bg-[linear-gradient(140deg,#fffdf3_0%,#f4eed7_100%)] p-6 shadow-[0_14px_36px_rgba(15,23,40,0.08)] dark:border-[#66541b] dark:bg-[linear-gradient(140deg,#2b2414_0%,#1f1a11_100%)]">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Mission</h4>
                <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-200">
                  {page.aboutContent.mission}
                </p>
              </article>

              <article className="rounded-[24px] border border-[#5f7191]/50 bg-[linear-gradient(140deg,#172237_0%,#1f2b40_52%,#22304a_100%)] p-6 text-white shadow-[0_16px_40px_rgba(15,23,40,0.2)]">
                <h4 className="text-lg font-semibold">Our Vision</h4>
                <p className="mt-3 text-sm leading-7 text-white/82">
                  {page.aboutContent.vision}
                </p>
              </article>

              <article className="rounded-[24px] border border-[#3f3a1f] bg-[linear-gradient(145deg,#0f1218_0%,#161b24_55%,#302613_130%)] p-6 text-white shadow-[0_16px_40px_rgba(15,23,40,0.2)]">
                <h4 className="text-lg font-semibold">Our Values</h4>
                <div className="mt-4 grid gap-2">
                  {page.aboutContent.values.map((value) => (
                    <div key={value} className="flex items-start gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f2df94]" />
                      <p className="text-sm leading-6 text-white/85">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <article className="overflow-hidden rounded-[24px] bg-[linear-gradient(110deg,#111827_0%,#1f2937_55%,#6f5312_130%)] px-6 py-10 text-center text-white shadow-[0_24px_70px_rgba(15,23,40,0.2)] sm:px-10 lg:py-12">
              <h4 className="text-2xl font-semibold tracking-tight sm:text-4xl">A Trusted Partner for Growth</h4>
              <p className="mx-auto mt-5 max-w-5xl text-sm font-normal leading-7 text-white/84 sm:mt-6 sm:text-lg sm:leading-9">
                We take pride in our long-standing partnerships with key government entities and major corporations. By consistently delivering quality solutions, we have earned a reputation as a trusted partner in the industry.
              </p>
            </article>
          </section>
        </div>
      </div>
      </section>
    </>
  );
}