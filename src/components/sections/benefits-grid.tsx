import Image from 'next/image';

const expertiseCards = [
  {
    title: 'General Trading & Logistics',
    description: 'Reliable solutions tailored to diverse industry needs.',
    image: '/images/seven-spikes/expertise/general-trading-logistics.jpg',
  },
  {
    title: 'Real Estate & Hospitality',
    description: 'Creating spaces that inspire comfort and luxury.',
    image: '/images/seven-spikes/expertise/real-estate-hospitality.jpg',
  },
  {
    title: 'Consultancy Services',
    description: 'Offering strategic insights and guidance for business growth.',
    image: '/images/seven-spikes/expertise/consultancy-services.jpg',
  },
  {
    title: 'Road Contracting & Infrastructure',
    description: 'Comprehensive solutions for highways, urban roads, infrastructure and preventive maintenance.',
    image: '/images/seven-spikes/expertise/road-contracting-infrastructure.jpg',
  },
  {
    title: 'Building Construction & Facility Management',
    description: 'Expertly managing projects from villas to commercial spaces, providing services related to construction and facility management.',
    image: '/images/seven-spikes/expertise/building-construction-facility-management.jpg',
  },
];

function ExpertiseCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="group relative min-h-[430px] overflow-hidden rounded-[32px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/65" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <h3 className="mb-4 text-center text-2xl font-bold leading-tight text-[#ffd67c] drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
          {title}
        </h3>
        <p className="text-left text-[15px] leading-8 text-white sm:text-base">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-tr-[120px] bg-white/92" />
    </div>
  );
}

export default function BenefitsGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-0 h-56 w-56 rotate-45 border border-[#f3efe7] bg-white/40" />
        <div className="absolute left-48 top-8 h-64 w-64 rotate-45 border border-[#f3efe7] bg-white/30" />
      </div>

      <div className="wrapper relative z-10 max-w-[1900px]">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Our Expertise
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid gap-6 xl:grid-cols-4 md:grid-cols-2">
            {expertiseCards.slice(0, 4).map((card) => (
              <ExpertiseCard key={`${card.title}-${card.image}`} {...card} />
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-3 md:grid-cols-2">
            {expertiseCards.slice(2).map((card) => (
              <ExpertiseCard key={`${card.title}-${card.image}-bottom`} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
