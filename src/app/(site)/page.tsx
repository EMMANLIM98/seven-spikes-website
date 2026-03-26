import AboutSevenSpikes from '@/components/sections/about-seven-spikes';
import ExpertiseGrid from '@/components/sections/expertise';
import HeroSection from '@/components/sections/hero-section';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSevenSpikes />
      <ExpertiseGrid />
    </>
  );
}
