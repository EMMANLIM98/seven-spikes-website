import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { NavLandingPage } from '@/content/nav-landing-pages';
import LandingHeroBanner from './landing-hero-banner';

type Props = {
  page: NavLandingPage;
};

export default function NavLandingPageSection({ page }: Props) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0b1321] text-white dark-hero-bg">
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

        <div className="wrapper relative z-10 py-16 sm:py-20 lg:py-24 xl:py-28">
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

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff_0%,#f8f6ef_100%)] py-16 dark:dark-surface-bg sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -left-8 top-10 h-48 w-48 rotate-45 border border-[#e9ddbb] bg-white/40" />
          <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-[#c9af2c]/8 blur-3xl" />
        </div>

        <div className="wrapper relative z-10">
          <div className="mx-auto max-w-6xl space-y-16">
            {page.aboutContent ? (
              <section className="space-y-10 overflow-hidden rounded-[34px] border border-gray-200/70 bg-white/95 p-5 shadow-[0_20px_60px_rgba(15,23,40,0.08)] dark:border-white/10 dark:bg-white/[0.03] sm:p-8 lg:p-10">
                <div className="grid items-center gap-8 rounded-[28px] bg-[radial-gradient(circle_at_20%_20%,rgba(214,214,214,0.18)_0%,transparent_35%),linear-gradient(120deg,#fcfcfc_0%,#f6f6f6_50%,#faf7eb_100%)] p-6 dark:bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                      {page.aboutContent.sectionTitle}
                    </h2>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b5961d]">
                      {page.aboutContent.sectionSubtitle}
                    </p>

                    <div className="mt-6 space-y-4">
                      {page.aboutContent.introParagraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-gray-700 dark:text-gray-300 sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-h-[220px] overflow-hidden rounded-[24px] border border-gray-200/70 dark:border-white/10 sm:min-h-[280px]">
                    <Image
                      src={page.aboutContent.overviewImage}
                      alt={page.aboutContent.overviewImageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 32vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                  </div>
                </div>

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
            ) : null}

            {page.slug !== 'about' ? (
              <>
                <div className="grid gap-6 lg:grid-cols-3">
                  {page.cards.map((card, index) => (
                    <article
                      key={card.title}
                      className={cn(
                        'rounded-[30px] border border-gray-200/80 bg-white/90 p-7 shadow-[0_20px_60px_rgba(15,23,40,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,40,0.1)] dark:border-white/10 dark:bg-white/[0.04]',
                        index === 1 && 'lg:-translate-y-4'
                      )}
                    >
                      <div className="mb-5 h-10 w-10 rounded-full bg-gradient-to-br from-[#c9af2c] to-[#f2df94]" />
                      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {card.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                        {card.description}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b5961d]">
                      {page.spotlight.eyebrow}
                    </p>
                    <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
                      {page.spotlight.title}
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300">
                      {page.spotlight.description}
                    </p>

                    <div className="mt-8 space-y-4">
                      {page.spotlight.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c9af2c]" />
                          <p className="text-sm leading-7 text-gray-700 dark:text-gray-300">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[36px] border border-gray-200/80 bg-[#0f1728] p-3 shadow-[0_30px_80px_rgba(15,23,40,0.18)] dark:border-white/10">
                    <div className="relative min-h-[300px] overflow-hidden rounded-[28px] sm:min-h-[360px]">
                      <Image
                        src={page.spotlight.image}
                        alt={page.spotlight.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1728]/65 via-transparent to-transparent" />
                    </div>
                    <div className="pointer-events-none absolute -bottom-10 left-0 h-32 w-32 rounded-tr-[120px] bg-gradient-to-tr from-white/80 to-white/0" />
                  </div>
                </div>
              </>
            ) : null}

            {page.showcase ? (
              <div>
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    {page.showcase.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {page.showcase.description}
                  </p>
                </div>

                {page.showcase.kind === 'logos' ? (
                  <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {page.showcase.items.map((item) => {
                      const logo = item as { src: string; alt: string };

                      return (
                        <div
                          key={logo.src}
                          className="flex min-h-[110px] items-center justify-center rounded-[24px] border border-gray-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,40,0.05)] dark:border-white/10 dark:bg-white/[0.04]"
                        >
                          <div className="relative h-14 w-full max-w-[160px]">
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              fill
                              className="object-contain"
                              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 24vw, 15vw"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {page.showcase.items.map((item) => {
                      const imageItem = item as {
                        title: string;
                        image: string;
                        imageAlt: string;
                      };

                      return (
                        <article
                          key={imageItem.title}
                          className="overflow-hidden rounded-[28px] border border-gray-200/80 bg-white shadow-[0_18px_50px_rgba(15,23,40,0.08)] dark:border-white/10 dark:bg-white/[0.04]"
                        >
                          <div className="relative min-h-[260px]">
                            <Image
                              src={imageItem.image}
                              alt={imageItem.imageAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 30vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                              <h3 className="text-xl font-semibold">{imageItem.title}</h3>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : null}

            {page.slug !== 'about' ? (
              <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#131e31_0%,#20304d_55%,#b3941d_130%)] p-8 text-white shadow-[0_28px_80px_rgba(15,23,40,0.22)] sm:p-10 lg:p-12">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-center">
                  <div>
                    <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                      {page.cta.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-white/78">
                      {page.cta.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                    <Link
                      href={page.cta.primaryHref}
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#162235] transition hover:bg-[#f3f4f6]"
                    >
                      {page.cta.primaryLabel}
                    </Link>
                    {page.cta.secondaryHref && page.cta.secondaryLabel ? (
                      <Link
                        href={page.cta.secondaryHref}
                        className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/14"
                      >
                        {page.cta.secondaryLabel}
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}