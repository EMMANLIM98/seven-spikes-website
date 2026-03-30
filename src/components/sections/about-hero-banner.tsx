import type { NavLandingPage } from '@/content/nav-landing-pages';
import LandingHeroBanner from './landing-hero-banner';

type Props = {
  page: NavLandingPage;
};

export default function AboutHeroBanner({ page }: Props) {
  if (!page.aboutContent) {
    return null;
  }

  return (
    <LandingHeroBanner
      className="mb-10 sm:mb-12"
      title={page.aboutContent.sectionTitle}
      subtitle={page.aboutContent.sectionSubtitle}
      descriptionLines={page.aboutContent.introParagraphs}
      imageSrc={page.aboutContent.overviewImage}
      imageAlt={page.aboutContent.overviewImageAlt}
      theme="dark"
    />
  );
}