'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { NavLandingPage } from '@/content/nav-landing-pages';

type Props = {
  page: NavLandingPage;
};

type PillarDetails = {
  id: 'environmental' | 'social' | 'economic';
  title: string;
  tag: string;
  color: string;
  textColor: string;
  ring: string;
  gradient: string;
  description: string;
  points: { title: string; description: string }[];
};

const ENVIRONMENT_KEYS = [
  'Energy Efficiency',
  'Waste Reduction',
  'Water Conservation',
  'Eco-Friendly Construction',
];

const SOCIAL_KEYS = ['Employee Welfare', 'Community Engagement', 'Health & Safety'];

const ECONOMIC_KEYS = [
  'Ethical Business Practices',
  'Innovation & Technology',
  'Long-Term Partnerships',
];

function parseBulletLine(line: string): { title: string; description: string } {
  const idx = line.indexOf(':');
  if (idx === -1) return { title: line, description: '' };
  return {
    title: line.slice(0, idx).trim(),
    description: line.slice(idx + 1).trim(),
  };
}

function extractPoints(
  bullets: string[],
  keys: string[]
): { title: string; description: string }[] {
  return keys
    .map((key) => {
      const found = bullets.find((line) => line.startsWith(`${key}:`));
      if (!found) return null;
      return parseBulletLine(found);
    })
    .filter((item): item is { title: string; description: string } => item !== null);
}

export default function SustainabilityLandingPageSection({ page }: Props) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = useMemo<PillarDetails[]>(() => {
    const environmental = page.cards.find((card) =>
      card.title.toLowerCase().includes('environment')
    );
    const social = page.cards.find((card) => card.title.toLowerCase().includes('social'));
    const economic = page.cards.find((card) => card.title.toLowerCase().includes('economic'));

    return [
      {
        id: 'environmental',
        title: environmental?.title ?? 'Environmental Responsibility',
        tag: 'Planet',
        color: 'bg-emerald-500',
        textColor: 'text-emerald-300',
        ring: 'ring-emerald-300/45',
        gradient:
          'bg-[linear-gradient(145deg,rgba(16,185,129,0.2)_0%,rgba(6,78,59,0.35)_70%,rgba(4,24,20,0.5)_100%)]',
        description: environmental?.description ?? '',
        points: extractPoints(page.spotlight.bullets, ENVIRONMENT_KEYS),
      },
      {
        id: 'social',
        title: social?.title ?? 'Social Commitment',
        tag: 'People',
        color: 'bg-sky-500',
        textColor: 'text-sky-300',
        ring: 'ring-sky-300/45',
        gradient:
          'bg-[linear-gradient(145deg,rgba(14,165,233,0.2)_0%,rgba(30,64,175,0.32)_70%,rgba(10,20,40,0.55)_100%)]',
        description: social?.description ?? '',
        points: extractPoints(page.spotlight.bullets, SOCIAL_KEYS),
      },
      {
        id: 'economic',
        title: economic?.title ?? 'Economic Growth',
        tag: 'Prosperity',
        color: 'bg-amber-400',
        textColor: 'text-amber-300',
        ring: 'ring-amber-300/45',
        gradient:
          'bg-[linear-gradient(145deg,rgba(251,191,36,0.2)_0%,rgba(161,98,7,0.34)_70%,rgba(41,27,11,0.58)_100%)]',
        description: economic?.description ?? '',
        points: extractPoints(page.spotlight.bullets, ECONOMIC_KEYS),
      },
    ];
  }, [page.cards, page.spotlight.bullets]);

  const active = pillars[activePillar];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#081325] text-white">
        <div className="absolute inset-0">
          <Image
            src={page.heroImage}
            alt={page.heroImageAlt}
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,19,37,0.96)_0%,rgba(8,19,37,0.82)_42%,rgba(201,168,42,0.12)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_58%_at_20%_0%,rgba(16,185,129,0.15),transparent)]" />
        </div>

        <div className="wrapper relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c9a82a]">
                {page.eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                {page.title} in Motion
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                {page.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 rounded-3xl border border-white/15 bg-white/[0.04] p-3 backdrop-blur-sm">
              {page.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-[#0b1a30]/80 p-4 text-center"
                >
                  <p className="text-2xl font-black text-[#c9a82a] sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/65">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#081325_0%,#0c1f34_46%,#eef4fb_46.5%,#f7fafc_100%)] py-10 lg:py-14">
        <div className="wrapper">
          <div className="mx-auto grid max-w-[1450px] gap-8 lg:grid-cols-12 xl:gap-10 2xl:gap-12">
            <aside className="lg:col-span-5 2xl:col-span-4">
              <div className="rounded-3xl border border-white/10 bg-[#0b1a30] p-4 shadow-[0_22px_60px_rgba(8,19,37,0.35)]">
                <p className="px-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#c9a82a]">
                  Select A Pillar
                </p>
                <div className="mt-3 grid gap-2">
                  {pillars.map((pillar, index) => (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(index)}
                      className={cn(
                        'group rounded-2xl border px-4 py-4 text-left transition-all',
                        activePillar === index
                          ? 'border-white/30 bg-white/10 shadow-[0_12px_34px_rgba(0,0,0,0.2)]'
                          : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-2">
                          <span className={cn('h-2.5 w-2.5 rounded-full', pillar.color)} />
                          <span className="text-sm font-bold text-white">{pillar.title}</span>
                        </span>
                        <span
                          className={cn(
                            'rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.1em]',
                            pillar.textColor,
                            'bg-white/10'
                          )}
                        >
                          {pillar.tag}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="space-y-6 lg:col-span-7 2xl:col-span-8">
              <article
                className={cn(
                  'overflow-hidden rounded-3xl p-6 text-white ring-1 shadow-[0_26px_70px_rgba(6,12,24,0.3)] sm:p-8',
                  active.ring,
                  active.gradient
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                    {page.spotlight.eyebrow}
                  </p>
                  <span className={cn('h-2.5 w-2.5 rounded-full', active.color)} />
                </div>

                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{active.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/82 sm:text-base">{active.description}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {active.points.map((point) => (
                    <div
                      key={point.title}
                      className="rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm"
                    >
                      <h3 className={cn('text-sm font-bold', active.textColor)}>{point.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/80">{point.description}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,40,0.08)] sm:p-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b5961d]">
                      Commitment Balance
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-[#0a1a31] sm:text-3xl">
                      Planet. People. Prosperity.
                    </h3>
                  </div>

                  <div className="w-full max-w-sm space-y-3">
                    {pillars.map((pillar, idx) => {
                      const values = [88, 84, 86];
                      const value = values[idx];
                      return (
                        <div key={pillar.id}>
                          <div className="mb-1 flex items-center justify-between text-xs font-semibold text-slate-600">
                            <span>{pillar.title}</span>
                            <span>{value}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-200">
                            <div
                              className={cn('h-full rounded-full', pillar.color)}
                              style={{ width: `${value}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-[linear-gradient(120deg,#f3fbf7_0%,#eff8ff_55%,#f8f4e9_100%)] p-6 shadow-[0_18px_45px_rgba(15,23,40,0.08)] sm:p-8">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-300/30 blur-2xl" />
                <div className="absolute -left-14 bottom-0 h-36 w-36 rounded-full bg-[#c9a82a]/20 blur-2xl" />

                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
                    Long-Term Vision
                  </p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-[#0a1a31] sm:text-3xl">
                    Our Commitment to the Future
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                    At Seven Spikes, sustainability is not just an initiative; it is a core principle guiding our growth and decision-making. We are dedicated to making continuous improvements, ensuring our business practices align with global sustainability standards, and creating lasting value for our stakeholders.
                  </p>
                  <p className="mt-4 text-base font-semibold text-[#123a2f] sm:text-lg">
                    Together, we can build a more sustainable future for generations to come.
                  </p>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-3xl border border-[#d8c17a]/45 bg-[#0d1a2d] p-6 text-white shadow-[0_20px_56px_rgba(8,19,37,0.3)] sm:p-8">
                <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#c9a82a]/15 blur-2xl" />
                <div className="absolute -left-16 bottom-2 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />

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
