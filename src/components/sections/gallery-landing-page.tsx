'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { NavLandingPage } from '@/content/nav-landing-pages';

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

const CATEGORY_LIST = [
  { id: 'all',      label: 'All Work' },
  { id: 'road',     label: 'Road & Infrastructure' },
  { id: 'building', label: 'Building & Construction' },
  { id: 'beach',    label: 'Beach Development' },
  { id: 'traffic',  label: 'Traffic Management' },
  { id: 'lighting', label: 'Street Lighting' },
  { id: 'marine',   label: 'Marine & Landscaping' },
  { id: 'events',   label: 'Events & Logistics' },
] as const;

// Colour map — fully static class strings so Tailwind detects them
const CATEGORY_DOT: Record<string, string> = {
  road:     'bg-blue-500',
  building: 'bg-amber-500',
  beach:    'bg-cyan-500',
  traffic:  'bg-orange-500',
  lighting: 'bg-yellow-400',
  marine:   'bg-emerald-500',
  events:   'bg-purple-500',
};

const CATEGORY_TEXT: Record<string, string> = {
  road:     'text-blue-400',
  building: 'text-amber-400',
  beach:    'text-cyan-400',
  traffic:  'text-orange-400',
  lighting: 'text-yellow-300',
  marine:   'text-emerald-400',
  events:   'text-purple-400',
};

const GALLERY: GalleryImage[] = [
  // ── Road & Infrastructure ────────────────────────────────
  {
    src: '/images/seven-spikes/Pics/Gallery/Road-and-Infrastructure-Works.jpg',
    alt: 'Road and infrastructure works',
    title: 'Road & Infrastructure Works',
    category: 'road',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Road-and-Infrastructure-Works-1.jpg',
    alt: 'Road and infrastructure works',
    title: 'Road & Infrastructure Project',
    category: 'road',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Road-and-Infrastructure-Works1.jpg',
    alt: 'Road works in progress',
    title: 'Road Works in Progress',
    category: 'road',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Road-and-Infrastructure-Works3.jpg',
    alt: 'Road construction',
    title: 'Road Construction Works',
    category: 'road',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Road-and-Infrastructure-Works4.jpg',
    alt: 'Infrastructure development',
    title: 'Infrastructure Development',
    category: 'road',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Crack-Sealant-Works-1.jpg',
    alt: 'Crack sealant works',
    title: 'Crack Sealant Works',
    category: 'road',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Earthworks.jpg',
    alt: 'Earthworks',
    title: 'Earthworks',
    category: 'road',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Infrastructure-Works.jpg',
    alt: 'Infrastructure works',
    title: 'Infrastructure Works',
    category: 'road',
  },
  // ── Building & Construction ──────────────────────────────
  {
    src: '/images/seven-spikes/Pics/Gallery/Building-Construction-Works.jpg',
    alt: 'Building construction',
    title: 'Building Construction Works',
    category: 'building',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Building-construction-works-2.jpg',
    alt: 'Building construction works',
    title: 'Building Construction — Phase 2',
    category: 'building',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Rooftop-Landscaping-Works.jpg',
    alt: 'Rooftop landscaping',
    title: 'Rooftop Landscaping',
    category: 'building',
  },
  // ── Beach Development ────────────────────────────────────
  {
    src: '/images/seven-spikes/Pics/Gallery/Qidfa-Beach-Front-Development.jpg',
    alt: 'Qidfa beach front development',
    title: 'Qidfa Beach Front Development',
    category: 'beach',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Beach-Front-Development-Fitness-Area.jpg',
    alt: 'Beach front fitness area',
    title: 'Beach Front — Fitness Area',
    category: 'beach',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Beach-Front-Development-Kids-Recreational-Area.jpg',
    alt: 'Beach front kids recreational area',
    title: 'Beach Front — Kids Recreational Area',
    category: 'beach',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Beach-Front-Development-Kids-Recreational-Area1.jpg',
    alt: 'Beach front play zone',
    title: 'Beach Front — Play Zone',
    category: 'beach',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Beach-Front-Development-Shade-Structures.jpg',
    alt: 'Beach front shade structures',
    title: 'Beach Front — Shade Structures',
    category: 'beach',
  },
  // ── Traffic Management ───────────────────────────────────
  {
    src: '/images/seven-spikes/Pics/Gallery/Traffic-Management.jpg',
    alt: 'Traffic management operations',
    title: 'Traffic Management Operations',
    category: 'traffic',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Traffic-Management.jpeg',
    alt: 'Traffic control works',
    title: 'Traffic Control Works',
    category: 'traffic',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Traffic-Management-1.jpeg',
    alt: 'Traffic management site 1',
    title: 'Traffic Management — Site 1',
    category: 'traffic',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Traffic-Management-3.jpeg',
    alt: 'Traffic management site 3',
    title: 'Traffic Management — Site 3',
    category: 'traffic',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Traffic-Management1.jpeg',
    alt: 'Traffic management detail',
    title: 'Traffic Management — Detail',
    category: 'traffic',
  },
  // ── Street Lighting ──────────────────────────────────────
  {
    src: '/images/seven-spikes/Pics/Gallery/Street-Lighting-Works.jpg',
    alt: 'Street lighting works',
    title: 'Street Lighting Works',
    category: 'lighting',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Street-Lighting-Works1.jpg',
    alt: 'Street lighting installation',
    title: 'Street Lighting Installation',
    category: 'lighting',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Street-Lighting-Works2.jpg',
    alt: 'Street lighting night view',
    title: 'Street Lighting — Night View',
    category: 'lighting',
  },
  // ── Marine & Landscaping ─────────────────────────────────
  {
    src: '/images/seven-spikes/Pics/Gallery/Landscaping-and-Hardscaping-Works.jpg',
    alt: 'Landscaping and hardscaping',
    title: 'Landscaping & Hardscaping',
    category: 'marine',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Marine-Protection-Works-2.jpg',
    alt: 'Marine protection works',
    title: 'Marine Protection Works',
    category: 'marine',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Structural-and-Marine-Protection-Works-1.jpg',
    alt: 'Structural and marine protection works',
    title: 'Structural & Marine Protection',
    category: 'marine',
  },
  {
    src: '/images/seven-spikes/Pics/Gallery/Hide-and-Seek-Area-at-Masfout-Marble-Park.jpg',
    alt: 'Masfout Marble Park',
    title: 'Masfout Marble Park',
    category: 'marine',
  },
  // ── Events & Logistics ───────────────────────────────────
  {
    src: '/images/seven-spikes/Pics/Gallery/Events-Logistics-Management.jpg',
    alt: 'Events logistics management',
    title: 'Events & Logistics Management',
    category: 'events',
  },
];

// 4 images for the hero mosaic (diverse mix)
const HERO_MOSAIC = [GALLERY[0], GALLERY[11], GALLERY[8], GALLERY[21]] as const;

// ── Component ─────────────────────────────────────────────────────────────
export default function GalleryLandingPageSection({ page }: { page: NavLandingPage }) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === 'all' ? GALLERY : GALLERY.filter((img) => img.category === activeCategory);

  const lightboxImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const total = filteredImages.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')
        setLightboxIndex((i) => (i !== null ? Math.max(0, i - 1) : null));
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i !== null ? Math.min(total - 1, i + 1) : null));
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, filteredImages.length]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const catLabel = (id: string) =>
    CATEGORY_LIST.find((c) => c.id === id)?.label ?? id;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative isolate h-[65vh] min-h-[480px] overflow-hidden bg-[#060d1a]">
        {/* Desktop: split mosaic — left tall image + right 2×2 grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden lg:grid"
          style={{
            gridTemplateColumns: '55% 45%',
            gridTemplateRows: '50% 50%',
          }}
        >
          <div className="relative row-span-2 overflow-hidden">
            <Image
              src={HERO_MOSAIC[0].src}
              alt={HERO_MOSAIC[0].alt}
              fill
              className="object-cover"
              sizes="55vw"
              priority
            />
          </div>
          {HERO_MOSAIC.slice(1).map((img) => (
            <div key={img.src} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="22.5vw"
                priority
              />
            </div>
          ))}
        </div>

        {/* Mobile: single image */}
        <div aria-hidden="true" className="absolute inset-0 lg:hidden">
          <Image
            src={HERO_MOSAIC[0].src}
            alt={HERO_MOSAIC[0].alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Dark overlay + gradient */}
        <div className="absolute inset-0 bg-[#060d1a]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(39,63,98,0.5),transparent)]" />
        {/* Thin grid lines overlay for magazine feel */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden opacity-[0.04] lg:block"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent calc(100%/4))',
          }}
        />

        {/* Hero content */}
        <div className="wrapper relative z-10 flex h-full flex-col items-center justify-center text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#c9a82a]">
            {page.eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
            {page.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-300/90 sm:text-base">
            {page.description}
          </p>

          {/* Category quick-jump pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORY_LIST.filter((c) => c.id !== 'all').map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-[#c9a82a]/50 hover:text-[#c9a82a]',
                  activeCategory === cat.id &&
                    'border-[#c9a82a]/60 bg-[#c9a82a]/15 text-[#c9a82a]'
                )}
              >
                <span className={cn('h-1.5 w-1.5 shrink-0 rounded-full', CATEGORY_DOT[cat.id])} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BAR + MASONRY GRID ─────────────────────── */}
      <section className="min-h-screen bg-[#0a1120] py-10 lg:py-14">
        <div className="wrapper">

          {/* Sticky scrollable filter bar */}
          <div className="sticky top-0 z-20 -mx-5 mb-8 overflow-x-auto bg-[#0a1120]/95 px-5 py-3 backdrop-blur-sm sm:-mx-7 sm:px-7">
            <div className="flex min-w-max gap-2">
              {CATEGORY_LIST.map((cat) => {
                const count =
                  cat.id === 'all'
                    ? GALLERY.length
                    : GALLERY.filter((i) => i.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      'flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200',
                      activeCategory === cat.id
                        ? 'bg-[#c9a82a] text-white shadow-[0_4px_20px_rgba(201,168,42,0.35)]'
                        : 'bg-white/[0.07] text-gray-400 hover:bg-white/[0.13] hover:text-white'
                    )}
                  >
                    {cat.id !== 'all' && (
                      <span
                        className={cn('h-2 w-2 shrink-0 rounded-full', CATEGORY_DOT[cat.id])}
                      />
                    )}
                    {cat.label}
                    <span
                      className={cn(
                        'rounded-full px-1.5 py-0.5 text-[10px] font-extrabold',
                        activeCategory === cat.id
                          ? 'bg-white/25 text-white'
                          : 'bg-white/10 text-gray-500'
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Masonry columns grid */}
          <div className="columns-2 gap-3 sm:gap-4 md:columns-3 xl:columns-4">
            {filteredImages.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(idx)}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-[#111c30] ring-1 ring-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:ring-white/20 sm:mb-4"
                aria-label={`View ${img.title}`}
              >
                {/* Image */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={idx < 8 ? 'eager' : 'lazy'}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Caption slides up */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3.5 transition-transform duration-300 group-hover:translate-y-0 sm:p-4">
                  <span
                    className={cn(
                      'text-[10px] font-extrabold uppercase tracking-[0.14em]',
                      CATEGORY_TEXT[img.category]
                    )}
                  >
                    {catLabel(img.category)}
                  </span>
                  <p className="mt-0.5 text-sm font-bold leading-tight text-white">{img.title}</p>
                </div>

                {/* Expand icon (top-right) */}
                <div className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 sm:h-8 sm:w-8">
                  <svg
                    className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 1H2a1 1 0 0 0-1 1v3M11 1h3a1 1 0 0 1 1 1v3M5 15H2a1 1 0 0 1-1-1v-3M11 15h3a1 1 0 0 0 1-1v-3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Category dot badge (always visible, top-left) */}
                <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-1 backdrop-blur-sm">
                  <span
                    className={cn('h-1.5 w-1.5 shrink-0 rounded-full', CATEGORY_DOT[img.category])}
                  />
                  <span className="text-[9px] font-extrabold uppercase tracking-[0.1em] text-white/80 sm:text-[10px]">
                    {catLabel(img.category)}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <p className="py-24 text-center text-gray-500">No images in this category.</p>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ─────────────────────────────────────── */}
      {lightboxImage && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.title}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/96 backdrop-blur-lg"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            aria-label="Close lightbox"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-white/20 hover:text-white"
            onClick={() => setLightboxIndex(null)}
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </button>

          {/* Previous arrow */}
          {lightboxIndex > 0 && (
            <button
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 sm:left-5"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i !== null ? i - 1 : null));
              }}
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 0 1 0 1.414L9.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          {/* Main image + caption */}
          <div
            className="mx-14 flex flex-col items-center sm:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1400}
              height={900}
              className="max-h-[78vh] w-auto max-w-[84vw] rounded-2xl object-contain shadow-[0_30px_80px_rgba(0,0,0,0.70)]"
              priority
            />
            <div className="mt-5 space-y-1 text-center">
              <span
                className={cn(
                  'text-[11px] font-extrabold uppercase tracking-[0.18em]',
                  CATEGORY_TEXT[lightboxImage.category]
                )}
              >
                {catLabel(lightboxImage.category)}
              </span>
              <p className="text-base font-bold text-white">{lightboxImage.title}</p>
              <p className="text-xs text-gray-500">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next arrow */}
          {lightboxIndex < filteredImages.length - 1 && (
            <button
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 sm:right-5"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i !== null ? i + 1 : null));
              }}
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          {/* Keyboard hint */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-600">
            ← → to navigate · Esc to close
          </p>
        </div>
      )}

      {/* ── STATS + CTA ──────────────────────────────────── */}
      <section className="bg-[#060d1a] pb-20 pt-12 lg:pb-28">
        <div className="wrapper">
          <div className="mx-auto max-w-7xl space-y-10">

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/[0.05] ring-1 ring-white/[0.06] sm:grid-cols-4">
              {page.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-[#060d1a] px-5 py-8"
                >
                  <span className="text-3xl font-black text-[#c9a82a] sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-center text-xs font-semibold uppercase leading-4 tracking-[0.12em] text-gray-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <article className="relative overflow-hidden rounded-3xl bg-[#0c1828] px-8 py-14 text-center shadow-[0_40px_100px_rgba(8,15,28,0.36)] sm:px-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a82a]/50 to-transparent" />
                <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#c9a82a]/6 blur-3xl" />
                <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#3358a0]/10 blur-3xl" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
              <div className="relative">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c9a82a]">
                  Get in Touch
                </p>
                <h4 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">
                  {page.cta.title}
                </h4>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                  {page.cta.description}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
