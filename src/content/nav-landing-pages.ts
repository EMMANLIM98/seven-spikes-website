export type NavLandingSlug =
  | 'about'
  | 'leadership'
  | 'companies'
  | 'services'
  | 'clientele'
  | 'gallery'
  | 'career'
  | 'sustainability'
  | 'terms';

type LandingStat = {
  value: string;
  label: string;
};

type LandingCard = {
  title: string;
  description: string;
};

type SpotlightSection = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

type LogoItem = {
  src: string;
  alt: string;
};

type ImageShowcaseItem = {
  title: string;
  image: string;
  imageAlt: string;
};

type ShowcaseSection = {
  title: string;
  description: string;
  kind: 'logos' | 'images';
  items: Array<LogoItem | ImageShowcaseItem>;
};

type CTASection = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

type AboutMilestone = {
  year: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type AboutContent = {
  sectionTitle: string;
  sectionSubtitle: string;
  introParagraphs: string[];
  overviewImage: string;
  overviewImageAlt: string;
  storyTitle: string;
  storyParagraphs: string[];
  milestones: AboutMilestone[];
  mission: string;
  vision: string;
  values: string[];
};

export type NavLandingPage = {
  slug: NavLandingSlug;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  stats: LandingStat[];
  cards: LandingCard[];
  spotlight: SpotlightSection;
  showcase?: ShowcaseSection;
  aboutContent?: AboutContent;
  cta: CTASection;
};

export const navLandingPages: Record<NavLandingSlug, NavLandingPage> = {
  about: {
    slug: 'about',
    title: 'About Seven Spikes',
    eyebrow: 'Who We Are',
    description:
      'Seven Spikes is a coordinated network of specialized companies delivering infrastructure, construction, trading, consultancy, and operational excellence across the UAE and international markets.',
    heroImage: '/images/seven-spikes/Pics/About/About-Us.jpg',
    heroImageAlt: 'Seven Spikes team collaboration',
    stats: [
      { value: '15+', label: 'Years of market presence' },
      { value: '2', label: 'Strategic operating platforms' },
      { value: '5+', label: 'Core sectors represented' },
      { value: '1', label: 'Shared performance standard' },
    ],
    cards: [
      {
        title: 'Structured Independence',
        description:
          'Each operating company remains legally independent while aligning on shared commercial discipline, quality expectations, and market reputation.',
      },
      {
        title: 'Regional Reach',
        description:
          'Our network spans the UAE and selected international markets, helping clients navigate local conditions while maintaining coordinated execution.',
      },
      {
        title: 'Sector Depth',
        description:
          'Our experience extends across contracting, logistics, facilities management, real estate, hospitality, and advisory services.',
      },
    ],
    spotlight: {
      eyebrow: 'Operating Model',
      title: 'Built around clarity, accountability, and local strength.',
      description:
        'Seven Spikes coordinates through focused regional structures to keep execution agile, legally compliant, and commercially responsive in each market it serves.',
      bullets: [
        'UAE platform aligned to local delivery, contracting, and operational support.',
        'International platform enabling overseas engagement under dedicated management.',
        'Shared brand discipline with flexible execution by specialized entities.',
      ],
      image: '/images/seven-spikes/Pics/Expertise/Seven Spikes General Trading.avif',
      imageAlt: 'Seven Spikes logistics operations',
    },
    aboutContent: {
      sectionTitle: 'Seven Spikes',
      sectionSubtitle: 'Seamless Integration, Superior Performance',
      introParagraphs: [
        'Seven Spikes is a global enterprise with a strong presence in construction, infrastructure, general trading, facilities management, real estate, hospitality, and consultancy.',
        'Since our establishment, we have grown steadily, expanding across key markets worldwide, while maintaining a commitment to quality, innovation, and sustainable growth.',
      ],
      overviewImage: '/images/seven-spikes/Pics/About/About-Us.jpg',
      overviewImageAlt: 'Seven Spikes team collaboration',
      storyTitle: 'Our Story',
      storyParagraphs: [
        'From our beginnings in the Middle East, we have expanded our operations across key international markets in MENA, South Asia, Europe, and the Americas. Each milestone reflects our dedication to meeting industry demands, evolving with technology, and delivering exceptional value to our clients.',
        'Over the years, we\'ve built lasting partnerships, earned the trust of global enterprises, and nurtured a culture of innovation and excellence. Our journey is defined not just by our geographic growth, but by the impact we\'ve made solving real-world challenges, empowering businesses, and shaping a more connected future.',
      ],
      milestones: [
        {
          year: '2009',
          title: 'Al Safa Road Contracting L.L.C.',
          description: 'United Arab Emirates',
          image: '/images/seven-spikes/Pics/About/2009.webp',
          imageAlt: 'Early road infrastructure operations',
        },
        {
          year: '2014',
          title: 'Seven Spikes Building Contracting L.L.C.',
          description: 'United Arab Emirates',
          image: '/images/seven-spikes/Pics/About/2014.jpg',
          imageAlt: 'Building contracting expansion',
        },
        {
          year: '2015',
          title: 'Seven Spikes Road Contracting L.L.C.',
          description: 'United Arab Emirates',
          image: '/images/seven-spikes/Pics/About/2015.jpg',
          imageAlt: 'Road contracting growth',
        },
        {
          year: '2020',
          title: 'Seven Spikes Construction, Tourism, Real Estate, and Trading Ltd.',
          description: 'Turkey',
          image: '/images/seven-spikes/Pics/About/2020.jpg',
          imageAlt: 'Real estate and hospitality expansion',
        },
        {
          year: '2021',
          title: 'Seven Spikes General Trading L.L.C.',
          description: 'United Arab Emirates',
          image: '/images/seven-spikes/Pics/About/2021.jpg',
          imageAlt: 'General trading and logistics platform',
        },
        {
          year: '2025',
          title: 'Seven Spikes Consultancy Pvt. Ltd.',
          description: 'India',
          image: '/images/seven-spikes/Pics/About/2025-India.jpg',
          imageAlt: 'Consultancy and advisory services',
        },
        {
          year: '2025',
          title: 'Seven Spikes',
          description: 'Jordan',
          image: '/images/seven-spikes/Pics/About/2025-Jordan.jpg',
          imageAlt: 'Seven Spikes Jordan expansion',
        },
        {
          year: '2026',
          title: 'Seven Spikes Contracting L.L.C.',
          description: 'Oman',
          image: '/images/seven-spikes/Pics/About/2026-Oman.jpg',
          imageAlt: 'Seven Spikes Oman contracting',
        },
        {
          year: '2026',
          title: 'Seven Spikes Asphalt Manufacturing L.L.C.',
          description: 'United Arab Emirates',
          image: '/images/seven-spikes/Pics/About/2026-Seven-Spikes-Asphalt-Manufacturing.jpg',
          imageAlt: 'Integrated growth and industrial operations',
        },
        {
          year: '',
          title: 'Strategic Growth Initiatives',
          description: 'United Kingdom, Philippines, Srilanka, St. Kitts & Nevis',
          image: '/images/seven-spikes/Pics/About/Strategic-Growth-Initiatives.png',
          imageAlt: 'Strategic growth initiatives',
        },
      ],
      mission:
        'We are committed to deliver excellence, innovation, and sustainable growth across diverse industries. With a strong global presence, we leverage expertise, technology, and strategic partnerships to create high-value solutions that drive economic progress and enhance communities. Our mission is to foster long-term success for our stakeholders through integrity, operational efficiency, and a relentless pursuit of excellence.',
      vision:
        'Our vision is to be industry-leading enterprise that drives transformative solutions, sets new benchmarks for excellence, and sustainable growth. We are committed to shape the future of infrastructure, by fostering innovation, responsible business practices, and long-term economic and social progress.',
      values: [
        'Integrity & Ethical Leadership',
        'Excellence & Quality',
        'Sustainability & Corporate Responsibility',
        'Client-Centric Approach',
        'Collaboration & Synergy',
        'Employee Empowerment & Development',
        'Community Engagement & Social Impact',
      ],
    },
    cta: {
      title: 'Explore the group structure in more detail.',
      description:
        'Review our companies, services, and operating capabilities to understand how Seven Spikes is organized across markets.',
      primaryLabel: 'View Our Companies',
      primaryHref: '/companies',
      secondaryLabel: 'Contact Us',
      secondaryHref: '/contact',
    },
  },
  leadership: {
    slug: 'leadership',
    title: 'Our Leadership',
    eyebrow: 'Leadership',
    description:
      'Seven Spikes is guided by leadership that values disciplined execution, long-term relationships, operational trust, and responsible market expansion.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Consulting.jpeg',
    heroImageAlt: 'Leadership strategy session',
    stats: [
      { value: '1', label: 'Unified strategic direction' },
      { value: '3', label: 'Leadership priorities' },
      { value: '24/7', label: 'Operational accountability mindset' },
      { value: '100%', label: 'Commitment to client trust' },
    ],
    cards: [
      {
        title: 'Strategic Vision',
        description:
          'Leadership aligns independent operating entities around market relevance, sustainable growth, and execution quality.',
      },
      {
        title: 'Performance Culture',
        description:
          'The organization emphasizes measurable delivery, timely coordination, and high standards across project and service environments.',
      },
      {
        title: 'Relationship Focus',
        description:
          'Long-term partnerships are treated as a strategic asset, shaping how decisions are made and how commitments are honored.',
      },
    ],
    spotlight: {
      eyebrow: 'Leadership Principles',
      title: 'Decision-making grounded in confidence and control.',
      description:
        'Leadership at Seven Spikes prioritizes execution discipline, transparent stewardship, and the ability to move from planning to delivery without friction.',
      bullets: [
        'Operational oversight matched to sector-specific realities.',
        'Fast coordination between business units and field execution teams.',
        'A steady focus on resilience, compliance, and reputation.',
      ],
      image: '/images/seven-spikes/Pics/Expertise/Seven Spikes Consultancy.jpg',
      imageAlt: 'Consultancy and leadership collaboration',
    },
    cta: {
      title: 'Connect with our team.',
      description:
        'Reach out if you would like to discuss strategic partnerships, operating capabilities, or regional opportunities.',
      primaryLabel: 'Contact Leadership',
      primaryHref: '/contact',
      secondaryLabel: 'View Services',
      secondaryHref: '/services',
    },
  },
  companies: {
    slug: 'companies',
    title: 'Our Companies',
    eyebrow: 'Corporate Network',
    description:
      'The Seven Spikes network brings together specialized entities under one coordinated brand framework, allowing clients to engage targeted expertise with confidence.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Seven Spikes Building Contracting.avif',
    heroImageAlt: 'Construction and corporate operations',
    stats: [
      { value: '10+', label: 'Brand-aligned entities' },
      { value: '2', label: 'Operating jurisdictions' },
      { value: '5+', label: 'Business verticals served' },
      { value: '1', label: 'Integrated group identity' },
    ],
    cards: [
      {
        title: 'Sector Specialization',
        description:
          'Each company is positioned to focus on the technical and commercial demands of its own market vertical.',
      },
      {
        title: 'Brand Alignment',
        description:
          'Shared brand standards reinforce client trust while allowing each entity to operate within its own legal structure.',
      },
      {
        title: 'Flexible Collaboration',
        description:
          'Companies can operate independently or in coordination depending on project scope, geography, and delivery needs.',
      },
    ],
    spotlight: {
      eyebrow: 'Business Portfolio',
      title: 'A network designed for breadth without losing focus.',
      description:
        'From contracting and logistics to hospitality and consultancy, the group structure gives clients access to targeted capabilities across multiple sectors.',
      bullets: [
        'Dedicated entities for construction, road contracting, and trading activities.',
        'Aligned support for overseas operations and market entry coordination.',
        'Brand consistency that improves visibility and confidence across engagements.',
      ],
      image: '/images/seven-spikes/Pics/Expertise/Seven Spikes Road Contracting.jpg',
      imageAlt: 'Road contracting operations',
    },
    showcase: {
      title: 'Representative Company Marks',
      description:
        'A selection of logos across the Seven Spikes network, reflecting the breadth of our operating portfolio.',
      kind: 'logos',
      items: [
        { src: '/images/seven-spikes/Logos/PNG/SSG-PNG.png', alt: 'Seven Spikes Group logo' },
        { src: '/images/seven-spikes/Logos/PNG/SSRC-PNG.png', alt: 'Seven Spikes Road Contracting logo' },
        { src: '/images/seven-spikes/Logos/PNG/SSGT-PNG.png', alt: 'Seven Spikes General Trading logo' },
        { src: '/images/seven-spikes/Logos/PNG/SSBC-PNG.png', alt: 'Seven Spikes Building Contracting logo' },
        { src: '/images/seven-spikes/Logos/PNG/SSCH-PNG.png', alt: 'Seven Spikes consultancy and hospitality logo' },
        { src: '/images/seven-spikes/Logos/PNG/SSOS-PNG.png', alt: 'Seven Spikes Overseas logo' },
      ],
    },
    cta: {
      title: 'Need the right entity for your next engagement?',
      description:
        'We can help direct your inquiry to the most relevant Seven Spikes company based on sector and region.',
      primaryLabel: 'Contact Us',
      primaryHref: '/contact',
      secondaryLabel: 'Explore Services',
      secondaryHref: '/services',
    },
  },
  services: {
    slug: 'services',
    title: 'Our Services',
    eyebrow: 'Capabilities',
    description:
      'Seven Spikes delivers a broad service portfolio covering infrastructure, building, consultancy, trading, and operational support for complex business environments.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Road Construction.jpg',
    heroImageAlt: 'Road construction and service delivery',
    stats: [
      { value: '5', label: 'Primary service verticals' },
      { value: '360', label: 'End-to-end support approach' },
      { value: '2', label: 'Regional operating platforms' },
      { value: '1', label: 'Trusted service standard' },
    ],
    cards: [
      {
        title: 'Road Contracting & Infrastructure',
        description:
          'Execution support for highways, urban roads, infrastructure packages, and preventive maintenance requirements.',
      },
      {
        title: 'Building & Facility Management',
        description:
          'Capabilities spanning construction delivery, facility upkeep, and building-related operational management.',
      },
      {
        title: 'Trading, Hospitality & Advisory',
        description:
          'Commercial, operational, and consultancy services designed to support broader business growth and execution.',
      },
    ],
    spotlight: {
      eyebrow: 'Execution Strength',
      title: 'Services shaped around real operating requirements.',
      description:
        'Our service mix is built to support both project delivery and long-term business operations, giving clients access to practical expertise across sectors.',
      bullets: [
        'Integrated support from planning through implementation.',
        'Operational flexibility for public, private, and mixed-use environments.',
        'Cross-functional capability spanning field execution and business advisory.',
      ],
      image: '/images/seven-spikes/Pics/Expertise/Seven Spikes Asphalt Manufacturing.jpg',
      imageAlt: 'Industrial services and asphalt manufacturing',
    },
    showcase: {
      title: 'Service Highlights',
      description:
        'Selected sectors represented across the Seven Spikes operating portfolio.',
      kind: 'images',
      items: [
        {
          title: 'General Trading & Logistics',
          image: '/images/seven-spikes/Pics/Expertise/Seven Spikes General Trading.avif',
          imageAlt: 'General trading and logistics',
        },
        {
          title: 'Real Estate & Hospitality',
          image: '/images/seven-spikes/Pics/Expertise/Real Estate.avif',
          imageAlt: 'Real estate and hospitality',
        },
        {
          title: 'Consultancy Services',
          image: '/images/seven-spikes/Pics/Expertise/Consulting.jpeg',
          imageAlt: 'Consultancy services',
        },
      ],
    },
    cta: {
      title: 'Discuss the service mix your project needs.',
      description:
        'Tell us your sector, scope, and geography and we will direct your inquiry to the right team.',
      primaryLabel: 'Talk to Seven Spikes',
      primaryHref: '/contact',
      secondaryLabel: 'View Companies',
      secondaryHref: '/companies',
    },
  },
  clientele: {
    slug: 'clientele',
    title: 'Our Clientele',
    eyebrow: 'Trusted Relationships',
    description:
      'Our client base reflects the trust placed in Seven Spikes by public entities, major contractors, developers, and respected private-sector organizations.',
    heroImage: '/images/seven-spikes/Pics/Clientele/Emaar.jpg',
    heroImageAlt: 'Client partner reference',
    stats: [
      { value: '50+', label: 'Recognizable client organizations' },
      { value: 'Public', label: 'Government and semi-government exposure' },
      { value: 'Private', label: 'Developer and contractor relationships' },
      { value: 'Long-term', label: 'Partnership mindset' },
    ],
    cards: [
      {
        title: 'Institutional Trust',
        description:
          'Our clientele includes organizations that demand consistency, compliance, and confidence in delivery.',
      },
      {
        title: 'Sector Diversity',
        description:
          'We have supported clients across construction, utilities, real estate, government, and infrastructure-related sectors.',
      },
      {
        title: 'Reputation Through Delivery',
        description:
          'Client relationships are strengthened through dependable execution, responsiveness, and long-term support.',
      },
    ],
    spotlight: {
      eyebrow: 'Client Confidence',
      title: 'Partnerships earned by performance, not claims.',
      description:
        'The breadth of our clientele reflects a reputation built through delivery discipline, practical coordination, and long-term credibility in demanding environments.',
      bullets: [
        'Experience engaging both public and private stakeholders.',
        'Relationships supported across infrastructure, development, and support services.',
        'A portfolio that reinforces our ability to operate at scale.',
      ],
      image: '/images/seven-spikes/Pics/Clientele/Dubai-World-Trade-Centre.jpg',
      imageAlt: 'Recognized client project context',
    },
    showcase: {
      title: 'Selected Client Partners',
      description:
        'A sample of organizations connected to the Seven Spikes operating ecosystem.',
      kind: 'logos',
      items: [
        { src: '/images/seven-spikes/Pics/Clientele/DEWA.png', alt: 'DEWA logo' },
        { src: '/images/seven-spikes/Pics/Clientele/Amana.png', alt: 'Amana logo' },
        { src: '/images/seven-spikes/Pics/Clientele/Emaar.jpg', alt: 'Emaar logo' },
        { src: '/images/seven-spikes/Pics/Clientele/Dubai-Holding.png', alt: 'Dubai Holding logo' },
        { src: '/images/seven-spikes/Pics/Clientele/Nakheel.png', alt: 'Nakheel logo' },
        { src: '/images/seven-spikes/Pics/Clientele/RTA.jpg', alt: 'RTA logo' },
        { src: '/images/seven-spikes/Pics/Clientele/UAE-MOHRE.png', alt: 'UAE MOHRE logo' },
        { src: '/images/seven-spikes/Pics/Clientele/DP-World.png', alt: 'DP World logo' },
      ],
    },
    cta: {
      title: 'Bring your next requirement to a trusted operator.',
      description:
        'If you are evaluating capability, coverage, or delivery confidence, our team can help you assess the right fit.',
      primaryLabel: 'Contact Us',
      primaryHref: '/contact',
      secondaryLabel: 'Explore Services',
      secondaryHref: '/services',
    },
  },
  gallery: {
    slug: 'gallery',
    title: 'Gallery',
    eyebrow: 'Visual Highlights',
    description:
      'A visual look at the sectors, operating environments, and delivery context that shape the Seven Spikes brand across markets.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Seven Spikes Building Contracting.avif',
    heroImageAlt: 'Construction gallery hero',
    stats: [
      { value: '9', label: 'Featured visual moments' },
      { value: 'Multi-sector', label: 'Coverage across business verticals' },
      { value: 'UAE+', label: 'Regional and international context' },
      { value: 'Live', label: 'Real operational imagery' },
    ],
    cards: [
      {
        title: 'Field Perspective',
        description:
          'Images selected to reflect the pace, scale, and variety of Seven Spikes operations across sectors.',
      },
      {
        title: 'Brand Atmosphere',
        description:
          'The gallery blends corporate polish with practical site-level visibility to present the brand authentically.',
      },
      {
        title: 'Responsive Experience',
        description:
          'The layout is designed to scale cleanly from mobile to widescreen without losing image impact.',
      },
    ],
    spotlight: {
      eyebrow: 'Visual Narrative',
      title: 'A more tactile view of the work behind the brand.',
      description:
        'From construction and roadwork to consultancy and commercial operations, the gallery brings the Seven Spikes story into a more immediate visual format.',
      bullets: [
        'A balanced mix of infrastructure, commercial, and advisory imagery.',
        'Strong emphasis on atmosphere, not just documentation.',
        'Built to feel premium while remaining practical on smaller screens.',
      ],
      image: '/images/seven-spikes/Pics/Expertise/Seven Spikes Road Contracting.jpg',
      imageAlt: 'Road contracting gallery item',
    },
    showcase: {
      title: 'Featured Gallery',
      description:
        'Selected visuals from across Seven Spikes capabilities and operating environments.',
      kind: 'images',
      items: [
        {
          title: 'General Trading',
          image: '/images/seven-spikes/Pics/Expertise/Seven Spikes General Trading.avif',
          imageAlt: 'General trading visual',
        },
        {
          title: 'Real Estate',
          image: '/images/seven-spikes/Pics/Expertise/Real Estate.avif',
          imageAlt: 'Real estate visual',
        },
        {
          title: 'Consulting',
          image: '/images/seven-spikes/Pics/Expertise/Consulting.jpeg',
          imageAlt: 'Consulting visual',
        },
        {
          title: 'Road Construction',
          image: '/images/seven-spikes/Pics/Expertise/Road Construction.jpg',
          imageAlt: 'Road construction visual',
        },
        {
          title: 'Building Contracting',
          image: '/images/seven-spikes/Pics/Expertise/Seven Spikes Building Contracting.avif',
          imageAlt: 'Building contracting visual',
        },
        {
          title: 'Industrial Support',
          image: '/images/seven-spikes/Pics/Expertise/Seven Spikes Asphalt Manufacturing.jpg',
          imageAlt: 'Industrial operations visual',
        },
      ],
    },
    cta: {
      title: 'Want a closer view of our capabilities?',
      description:
        'Reach out to request more information on sectors, companies, or representative work areas.',
      primaryLabel: 'Contact Us',
      primaryHref: '/contact',
      secondaryLabel: 'Explore Services',
      secondaryHref: '/services',
    },
  },
  career: {
    slug: 'career',
    title: 'Career',
    eyebrow: 'Join Seven Spikes',
    description:
      'We value disciplined professionals who thrive in fast-moving environments and want to contribute to projects, operations, and business growth with purpose.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Seven Spikes Consultancy.jpg',
    heroImageAlt: 'Career and professional growth',
    stats: [
      { value: 'Growth', label: 'Across multiple sectors' },
      { value: 'Teamwork', label: 'Cross-functional culture' },
      { value: 'Impact', label: 'Execution-driven roles' },
      { value: 'Regional', label: 'Opportunities in dynamic markets' },
    ],
    cards: [
      {
        title: 'Meaningful Work',
        description:
          'Opportunities connect directly to live operations, strategic growth, and delivery outcomes that matter.',
      },
      {
        title: 'Professional Momentum',
        description:
          'Our environment rewards reliability, initiative, and the ability to work well across diverse operating contexts.',
      },
      {
        title: 'Multi-Sector Exposure',
        description:
          'Team members can contribute to varied business environments, from site-based operations to corporate coordination.',
      },
    ],
    spotlight: {
      eyebrow: 'What We Value',
      title: 'People who bring discipline, ownership, and adaptability.',
      description:
        'We look for individuals who can operate with accountability, contribute to high standards, and add value in collaborative business environments.',
      bullets: [
        'Professional standards matched with practical execution mindset.',
        'Readiness to support quality, compliance, and client confidence.',
        'Strong communication across operational and administrative roles.',
      ],
      image: '/images/seven-spikes/Pics/Clientele/Focus-Tech.jpg',
      imageAlt: 'Professional working environment',
    },
    cta: {
      title: 'Interested in joining Seven Spikes?',
      description:
        'Send us your details and tell us where your skills can contribute most across our operating network.',
      primaryLabel: 'Contact Us',
      primaryHref: '/contact',
      secondaryLabel: 'Learn About Us',
      secondaryHref: '/about',
    },
  },
  sustainability: {
    slug: 'sustainability',
    title: 'Sustainability',
    eyebrow: 'Long-Term Responsibility',
    description:
      'Seven Spikes approaches sustainability through responsible operations, resilient delivery standards, practical efficiency, and long-term value creation.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Real Estate.avif',
    heroImageAlt: 'Sustainable built environment',
    stats: [
      { value: '3', label: 'Core sustainability pillars' },
      { value: 'Operational', label: 'Focus on practical improvement' },
      { value: 'Long-term', label: 'View on asset and project value' },
      { value: 'Shared', label: 'Responsibility across teams' },
    ],
    cards: [
      {
        title: 'Responsible Operations',
        description:
          'We value process discipline, controlled execution, and efficient coordination that reduces waste and protects delivery quality.',
      },
      {
        title: 'Durable Outcomes',
        description:
          'Projects and services should support long-term performance, reliability, and sensible stewardship of resources.',
      },
      {
        title: 'People & Standards',
        description:
          'Sustainability also depends on safe, responsible, and accountable ways of working across teams and partners.',
      },
    ],
    spotlight: {
      eyebrow: 'Our Approach',
      title: 'Sustainability as a practical operating principle.',
      description:
        'Rather than treating sustainability as a decorative claim, Seven Spikes frames it through long-term thinking, operational efficiency, and disciplined delivery standards.',
      bullets: [
        'Better planning and coordination across operational workflows.',
        'Attention to lifecycle value in built and managed environments.',
        'Commitment to responsible growth across markets and sectors.',
      ],
      image: '/images/seven-spikes/Pics/Clientele/Dubai-Silicon-Oasis-Authority.jpg',
      imageAlt: 'Sustainable urban development context',
    },
    cta: {
      title: 'Discuss sustainable delivery with our team.',
      description:
        'We can share how our operating mindset supports resilient, responsible project and business outcomes.',
      primaryLabel: 'Contact Us',
      primaryHref: '/contact',
      secondaryLabel: 'View Services',
      secondaryHref: '/services',
    },
  },
  terms: {
    slug: 'terms',
    title: 'Terms & Conditions',
    eyebrow: 'Terms',
    description:
      'Review the guiding principles that shape how Seven Spikes presents information, handles inquiries, and communicates its services across digital platforms.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Seven Spikes General Trading.avif',
    heroImageAlt: 'Seven Spikes terms and policies page',
    stats: [
      { value: 'Clear', label: 'Use expectations' },
      { value: 'Transparent', label: 'Communication standards' },
      { value: 'Legal', label: 'Entity independence awareness' },
      { value: 'Current', label: 'Policy review mindset' },
    ],
    cards: [
      {
        title: 'Informational Use',
        description:
          'Website content is intended to support general understanding of the Seven Spikes network, services, and capabilities.',
      },
      {
        title: 'Independent Entities',
        description:
          'Operating companies under the Seven Spikes name remain legally independent and governed by their own jurisdictions.',
      },
      {
        title: 'Direct Confirmation',
        description:
          'Project-specific commitments, scope, and commercial terms should always be confirmed directly with the relevant company or representative.',
      },
    ],
    spotlight: {
      eyebrow: 'Usage Principles',
      title: 'Designed for clarity, reference, and responsible engagement.',
      description:
        'Our terms presentation is intended to support a transparent user experience while reinforcing that formal engagements depend on direct communication and agreed documentation.',
      bullets: [
        'Digital content should not be treated as a substitute for formal contracts.',
        'Users should verify the relevant operating entity for specific engagements.',
        'Questions about terms or use can be directed to our team through the contact page.',
      ],
      image: '/images/seven-spikes/Pics/Expertise/Consulting.jpeg',
      imageAlt: 'Terms and advisory context',
    },
    cta: {
      title: 'Need clarification on our terms or operating structure?',
      description:
        'We can help direct your inquiry to the right team for further clarification and next steps.',
      primaryLabel: 'Contact Us',
      primaryHref: '/contact',
      secondaryLabel: 'View About Us',
      secondaryHref: '/about',
    },
  },
};

export const navLandingSlugs = Object.keys(navLandingPages) as NavLandingSlug[];

export function isNavLandingSlug(slug: string): slug is NavLandingSlug {
  return slug in navLandingPages;
}