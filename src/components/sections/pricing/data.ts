export const BILLING_PERIODS = [
  {
    label: 'Monthly',
    key: 'monthly',
    saving: null,
  },
  {
    label: 'Annually',
    key: 'yearly',
    saving: '20%',
  },
] as const;

const AMOUNTS = {
  free: {
    monthly: 49,
    yearly: 468,
  },
  plus: {
    monthly: 149,
    yearly: 1428,
  },
  pro: {
    monthly: 399,
    yearly: 3828,
  },
  enterprise: {
    monthly: null,
    yearly: null,
  },
};

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number];
export const BILLING_PLANS = [
  {
    name: 'Starter Hosting',
    description:
      'For company brochure and corporate sites running Next.js with core performance and security setup.',
    pricing: {
      monthly: {
        amount: AMOUNTS['free']['monthly'],
        formattedPrice: '$' + AMOUNTS['free']['monthly'],
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['free']['yearly'],
        formattedPrice: '$' + AMOUNTS['free']['yearly'],
        stripeId: null,
      },
    },
    features: [
      'Managed Next.js deployment (Vercel-ready)',
      'SSL, CDN, and DNS setup',
      'Uptime monitoring and weekly backups',
      'Basic contact form and anti-spam setup',
      'Monthly maintenance support',
    ],
    cta: 'Choose Starter',
    popular: false,
  },
  {
    name: 'Growth Hosting',
    description:
      'For business websites that need auth flows, database-backed pages, and API integrations.',
    pricing: {
      monthly: {
        amount: AMOUNTS['plus']['monthly'],
        formattedPrice: '$' + AMOUNTS['plus']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PLUS_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS['plus']['yearly'],
        formattedPrice: '$' + AMOUNTS['plus']['yearly'],
        stripeId: process.env.NEXT_PUBLIC_PLUS_YEARLY_PRICE_ID!,
      },
    },
    features: [
      'Everything in Starter Hosting',
      'Managed PostgreSQL (Neon/Supabase/Vercel Postgres)',
      'NextAuth and social sign-in setup',
      'API routes, cron jobs, and webhook support',
      'Environment and secret management',
      'Priority support and faster incident response',
    ],
    cta: 'Choose Growth',
    popular: true,
  },
  {
    name: 'Scale Hosting',
    description:
      'For high-traffic platforms that require stronger performance, observability, and controlled releases.',
    pricing: {
      monthly: {
        amount: AMOUNTS['pro']['monthly'],
        formattedPrice: '$' + AMOUNTS['pro']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PRO_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS['pro']['yearly'],
        formattedPrice: '$' + AMOUNTS['pro']['yearly'],
        stripeId: process.env.NEXT_PUBLIC_PRO_YEARLY_PRICE_ID!,
      },
    },
    features: [
      'Everything in Growth Hosting',
      'Performance tuning for Next.js and caching strategy',
      'Structured staging and production deployment workflow',
      'Analytics, logs, and alerting setup',
      'Security hardening and access controls',
      'Dedicated technical account support',
    ],
    cta: 'Choose Scale',
    popular: false,
  },
  {
    name: 'Enterprise Infrastructure',
    description:
      'Tailored cloud architecture for multi-region reliability, strict compliance, and enterprise governance.',
    pricing: {
      monthly: {
        amount: AMOUNTS['enterprise']['monthly'],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['enterprise']['yearly'],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
    },
    features: [
      'Everything in Scale Hosting',
      'Custom cloud architecture and migration plan',
      'SLA-backed support with 24/7 escalation',
      'Disaster recovery and business continuity planning',
      'Advanced compliance controls and audit trails',
    ],
    cta: 'Talk to Enterprise Team',
    popular: false,
  },
];
