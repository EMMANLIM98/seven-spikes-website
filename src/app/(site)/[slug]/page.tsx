import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AboutLandingPageSection from '@/components/sections/about-landing-page';
import NavLandingPageSection from '@/components/sections/nav-landing-page';
import {
  isNavLandingSlug,
  navLandingPages,
  navLandingSlugs,
} from '@/content/nav-landing-pages';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return navLandingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isNavLandingSlug(slug)) {
    return {
      title: 'Page Not Found',
    };
  }

  const page = navLandingPages[slug];

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function NavLandingRoute({ params }: PageProps) {
  const { slug } = await params;

  if (!isNavLandingSlug(slug)) {
    notFound();
  }

  if (slug === 'about') {
    return <AboutLandingPageSection page={navLandingPages[slug]} />;
  }

  return <NavLandingPageSection page={navLandingPages[slug]} />;
}