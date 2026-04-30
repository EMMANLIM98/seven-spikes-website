export type CompanySlug =
  | 'road-contracting-llc'
  | 'building-contracting-llc'
  | 'general-trading-llc'
  | 'al-safa-road-contracting-llc'
  | 'asphalt-manufacturing-llc'
  | 'construction-tourism-real-estate-trading-turkey'
  | 'road-contracting-jordan'
  | 'consultancy-india'
  | 'contracting-oman';

type CompanyHighlight = {
  label: string;
  value: string;
};

export type CompanyLandingPage = {
  slug: CompanySlug;
  name: string;
  shortName: string;
  region: string;
  umbrellaEntity: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  logoSrc: string;
  logoAlt: string;
  focusAreas: string[];
  capabilities: string[];
  highlights: CompanyHighlight[];
};

export const companyLandingPages: Record<CompanySlug, CompanyLandingPage> = {
  'road-contracting-llc': {
    slug: 'road-contracting-llc',
    name: 'Seven Spikes Road Contracting L.L.C.',
    shortName: 'Road Contracting',
    region: 'United Arab Emirates',
    umbrellaEntity: 'Seven Spikes Group L.L.C.',
    description:
      'Seven Spikes Road Contracting delivers road infrastructure solutions focused on safety, performance, and lifecycle durability. Our team handles marking, crack treatment, and modernized execution methods to support reliable transport networks.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Seven Spikes Road Contracting.jpg',
    heroImageAlt: 'Road contracting operations',
    logoSrc: '/images/seven-spikes/Logos/PNG/SSRC-PNG.png',
    logoAlt: 'Seven Spikes Road Contracting logo',
    focusAreas: ['Road Construction', 'Road Marking', 'Crack Sealant Works', 'Infrastructure Maintenance'],
    capabilities: [
      'Project planning and disciplined site execution.',
      'Road safety upgrades with modern control standards.',
      'Preventive maintenance strategy to extend road life.',
      'Coordination across civil, traffic, and utility interfaces.',
    ],
    highlights: [
      { label: 'Primary Sector', value: 'Road Infrastructure' },
      { label: 'Delivery Scope', value: 'End-to-End Execution' },
      { label: 'Operational Base', value: 'UAE' },
    ],
  },
  'building-contracting-llc': {
    slug: 'building-contracting-llc',
    name: 'Seven Spikes Building Contracting L.L.C.',
    shortName: 'Building Contracting',
    region: 'United Arab Emirates',
    umbrellaEntity: 'Seven Spikes Group L.L.C.',
    description:
      'Seven Spikes Building Contracting provides complete construction services for residential, commercial, and industrial developments. The company also delivers dependable facility management support for long-term asset performance.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Seven Spikes Building Contracting.avif',
    heroImageAlt: 'Building contracting and facility management',
    logoSrc: '/images/seven-spikes/Logos/PNG/SSBC-PNG.png',
    logoAlt: 'Seven Spikes Building Contracting logo',
    focusAreas: ['Building Construction', 'Facility Management', 'Interior Fit-Out', 'Maintenance Operations'],
    capabilities: [
      'Full-cycle project management from planning to handover.',
      'Quality-focused site supervision and compliance control.',
      'Operational maintenance for continuity and reliability.',
      'Integrated coordination with specialized subcontractors.',
    ],
    highlights: [
      { label: 'Primary Sector', value: 'Built Environment' },
      { label: 'Delivery Scope', value: 'Construction + FM' },
      { label: 'Operational Base', value: 'UAE' },
    ],
  },
  'general-trading-llc': {
    slug: 'general-trading-llc',
    name: 'Seven Spikes General Trading L.L.C.',
    shortName: 'General Trading',
    region: 'United Arab Emirates',
    umbrellaEntity: 'Seven Spikes Group L.L.C.',
    description:
      'Seven Spikes General Trading supports clients with efficient sourcing, procurement, and distribution across multiple product categories. Our supply chain approach prioritizes reliability, speed, and commercial clarity.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Seven Spikes General Trading.avif',
    heroImageAlt: 'General trading and logistics operations',
    logoSrc: '/images/seven-spikes/Logos/PNG/SSGT-PNG.png',
    logoAlt: 'Seven Spikes General Trading logo',
    focusAreas: ['Material Sourcing', 'Procurement', 'Distribution', 'Supply Chain Coordination'],
    capabilities: [
      'Vendor and product alignment based on project requirements.',
      'Efficient delivery planning across multiple destinations.',
      'Transparent documentation and commercial coordination.',
      'Scalable support for industrial and commercial demand.',
    ],
    highlights: [
      { label: 'Primary Sector', value: 'Trading & Logistics' },
      { label: 'Delivery Scope', value: 'Supply Chain Solutions' },
      { label: 'Operational Base', value: 'UAE' },
    ],
  },
  'al-safa-road-contracting-llc': {
    slug: 'al-safa-road-contracting-llc',
    name: 'Al Safa Road Contracting L.L.C.',
    shortName: 'Al Safa Road Contracting',
    region: 'United Arab Emirates',
    umbrellaEntity: 'Seven Spikes Group L.L.C.',
    description:
      'Al Safa Road Contracting focuses on building durable highways, access roads, and infrastructure corridors. Its teams execute with strong emphasis on safety, quality assurance, and long-term road performance.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Road Contracting.jpg',
    heroImageAlt: 'Road contracting works',
    logoSrc: '/images/seven-spikes/Logos/PNG/ASRC.png',
    logoAlt: 'Al Safa Road Contracting logo',
    focusAreas: ['Road Building', 'Highway Works', 'Infrastructure Access Routes', 'Road Maintenance'],
    capabilities: [
      'Civil works delivery with strict safety standards.',
      'Construction sequencing for complex traffic contexts.',
      'Durability-focused material and execution choices.',
      'Maintenance support for sustained roadway quality.',
    ],
    highlights: [
      { label: 'Primary Sector', value: 'Road Construction' },
      { label: 'Delivery Scope', value: 'Infrastructure Works' },
      { label: 'Operational Base', value: 'UAE' },
    ],
  },
  'asphalt-manufacturing-llc': {
    slug: 'asphalt-manufacturing-llc',
    name: 'Seven Spikes Asphalt Manufacturing L.L.C.',
    shortName: 'Asphalt Manufacturing',
    region: 'United Arab Emirates',
    umbrellaEntity: 'Seven Spikes Group L.L.C.',
    description:
      'Seven Spikes Asphalt Manufacturing develops asphalt mix production capabilities to support road and infrastructure projects across the network. The company is built around production consistency and technical quality control.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Seven Spikes Asphalt Manufacturing.jpg',
    heroImageAlt: 'Asphalt manufacturing operations',
    logoSrc: '/images/seven-spikes/Logos/PNG/SSAM-PNG.png',
    logoAlt: 'Seven Spikes Asphalt Manufacturing logo',
    focusAreas: ['Asphalt Mix Production', 'Industrial Supply', 'Road Material Support', 'Quality Control'],
    capabilities: [
      'Controlled production aligned to infrastructure demands.',
      'Operational support for internal and external projects.',
      'Consistency-focused process monitoring and testing.',
      'Scalable output planning for project timelines.',
    ],
    highlights: [
      { label: 'Primary Sector', value: 'Industrial Manufacturing' },
      { label: 'Delivery Scope', value: 'Asphalt Production' },
      { label: 'Operational Base', value: 'UAE' },
    ],
  },
  'construction-tourism-real-estate-trading-turkey': {
    slug: 'construction-tourism-real-estate-trading-turkey',
    name: 'Seven Spikes Construction, Tourism, Real Estate, and Trading Ltd. Turkey',
    shortName: 'Seven Spikes Turkey',
    region: 'Turkey',
    umbrellaEntity: 'Seven Spikes Overseas International Management Services L.L.C.',
    description:
      'Seven Spikes Turkey combines construction, real estate, tourism, and trading capabilities to deliver diversified value across commercial sectors. The company supports turnkey development and integrated operating solutions.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Real Estate.avif',
    heroImageAlt: 'Real estate and tourism development',
    logoSrc: '/images/seven-spikes/Logos/PNG/SST-PNG.png',
    logoAlt: 'Seven Spikes Turkey logo',
    focusAreas: ['Real Estate Development', 'Tourism Projects', 'Construction Delivery', 'Trading Operations'],
    capabilities: [
      'Turnkey coordination for mixed-sector developments.',
      'Integrated planning across hospitality and commercial assets.',
      'Business model flexibility for local market requirements.',
      'Execution aligned with long-term value and quality standards.',
    ],
    highlights: [
      { label: 'Primary Sector', value: 'Multi-Sector Development' },
      { label: 'Delivery Scope', value: 'Turnkey Solutions' },
      { label: 'Operational Base', value: 'Turkey' },
    ],
  },
  'road-contracting-jordan': {
    slug: 'road-contracting-jordan',
    name: 'Seven Spikes Road Contracting, Jordan',
    shortName: 'Seven Spikes Jordan',
    region: 'Jordan',
    umbrellaEntity: 'Seven Spikes Overseas International Management Services L.L.C.',
    description:
      'Seven Spikes Jordan supports clients through consultancy and logistics services designed to improve operational efficiency and project outcomes. Its work emphasizes planning quality and practical execution support.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Consulting.jpeg',
    heroImageAlt: 'Consultancy and logistics support',
    logoSrc: '/images/seven-spikes/Logos/PNG/SSJ-PNG.png',
    logoAlt: 'Seven Spikes Jordan logo',
    focusAreas: ['Consultancy Services', 'Logistics Strategy', 'Operational Optimization', 'Business Support'],
    capabilities: [
      'Advisory frameworks for operational improvement.',
      'Logistics planning aligned with project constraints.',
      'Performance-focused recommendations and execution support.',
      'Coordination across stakeholders and delivery teams.',
    ],
    highlights: [
      { label: 'Primary Sector', value: 'Consultancy & Logistics' },
      { label: 'Delivery Scope', value: 'Advisory + Coordination' },
      { label: 'Operational Base', value: 'Jordan' },
    ],
  },
  'consultancy-india': {
    slug: 'consultancy-india',
    name: 'Seven Spikes Consultancy Pvt. Ltd. India',
    shortName: 'Seven Spikes India',
    region: 'India',
    umbrellaEntity: 'Seven Spikes Overseas International Management Services L.L.C.',
    description:
      'Seven Spikes India delivers consultancy and design-led support for retail, hospitality, and commercial initiatives. The company combines creative thinking with practical business advisory capabilities.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Seven Spikes Consultancy.jpg',
    heroImageAlt: 'Consultancy and design services',
    logoSrc: '/images/seven-spikes/Logos/PNG/SSC-PNG.png',
    logoAlt: 'Seven Spikes India logo',
    focusAreas: ['Design Advisory', 'Hospitality Consulting', 'Retail Strategy', 'Business Planning'],
    capabilities: [
      'Creative and commercial alignment for project concepts.',
      'Design-oriented advisory for customer-facing spaces.',
      'Strategic inputs for operational and business growth.',
      'Execution guidance tailored to market and sector context.',
    ],
    highlights: [
      { label: 'Primary Sector', value: 'Consultancy & Design' },
      { label: 'Delivery Scope', value: 'Strategy + Advisory' },
      { label: 'Operational Base', value: 'India' },
    ],
  },
  'contracting-oman': {
    slug: 'contracting-oman',
    name: 'Seven Spikes Contracting L.L.C., Oman',
    shortName: 'Seven Spikes Oman',
    region: 'Oman',
    umbrellaEntity: 'Seven Spikes Overseas International Management Services L.L.C.',
    description:
      'Seven Spikes Oman extends the group\'s construction expertise into the Sultanate with focus on roads and civil infrastructure. The company is positioned to deliver durable solutions with high execution standards.',
    heroImage: '/images/seven-spikes/Pics/Expertise/Road Construction.jpg',
    heroImageAlt: 'Road construction and infrastructure works in Oman',
    logoSrc: '/images/seven-spikes/Logos/PNG/SSCH-PNG.png',
    logoAlt: 'Seven Spikes Oman logo',
    focusAreas: ['Road Works', 'Civil Infrastructure', 'Construction Delivery', 'Standards Compliance'],
    capabilities: [
      'Durable infrastructure execution for long-term performance.',
      'Structured project controls and delivery discipline.',
      'Context-aware planning for local regulatory requirements.',
      'Quality-focused site management and operational reliability.',
    ],
    highlights: [
      { label: 'Primary Sector', value: 'Contracting & Civil Works' },
      { label: 'Delivery Scope', value: 'Road + Infrastructure' },
      { label: 'Operational Base', value: 'Oman' },
    ],
  },
};

export const companySlugs = Object.keys(companyLandingPages) as CompanySlug[];

export function isCompanySlug(slug: string): slug is CompanySlug {
  return slug in companyLandingPages;
}
