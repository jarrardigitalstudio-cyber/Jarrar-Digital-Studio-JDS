import { FAQItem, PricingPackage, ProcessStep, ProjectItem, ReviewItem, WhyChooseUsItem } from './types';

export const CONTACT_INFO = {
  studioName: 'Jarrar Digital Studio',
  founderName: 'Jarrar Hussain Naqvi',
  tagline: 'Premium apps and websites — built at startup speed.',
  defaultWhatsAppNumber: '919634300913',
  defaultEmail: 'jarrardigitalstudio@gmail.com',
  address: 'Mohalla Chaudhari, Sirsi, Sambhal, Uttar Pradesh, India',
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'launch',
    name: 'Launch',
    tagline: 'Get live fast',
    price: '₹8,499',
    deliveryTime: 'ships in 3–4 days',
    features: [
      '1 category template',
      'Up to 7 core screens',
      'Android + iOS (Flutter)',
      'Your logo, colors & fonts',
      'Guided store submission',
      '15 days free post-launch bug-fix support',
    ],
    ctaText: 'Start Building',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Start selling / booking',
    price: '₹13,999',
    deliveryTime: 'ships in 5–7 days',
    highlight: true,
    badge: 'Most Popular',
    headerNote: 'Everything in Launch, plus:',
    features: [
      'Up to 12 screens',
      'Payments (UPI/Cards via Razorpay)',
      'Cart or bookings',
      'Push notifications',
      '1 free round of post-delivery revisions',
    ],
    ctaText: 'Start Building',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For serious operators',
    price: '₹26,999',
    deliveryTime: 'ships in 7–10 days',
    headerNote: 'Everything in Growth, plus:',
    features: [
      'Up to 18 screens',
      'Multi-module + full admin panel',
      'Advanced payments + coupons',
      'Segmented push notifications',
      '30 days free post-launch support',
    ],
    ctaText: 'Start Building',
  },
];

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    number: '01',
    title: 'Direct line to the founder',
    description: 'No account managers, no relay chains. Every message reaches the person actually building your product.',
  },
  {
    number: '02',
    title: 'Agency quality, startup price',
    description: 'AI-assisted development means senior-level planning and design without a senior-agency invoice.',
  },
  {
    number: '03',
    title: '30-minute follow-up, always',
    description: 'Every inquiry gets a personal response within 30 minutes — not a support ticket number.',
  },
  {
    number: '04',
    title: 'Built for how you actually work',
    description: 'Plain-language explanations and WhatsApp-first communication — no unnecessary jargon.',
  },
  {
    number: '05',
    title: 'Fast, without cutting corners',
    description: "Startup speed doesn't mean shortcuts — every build goes through real review before it reaches you.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Share Your Idea',
    description: 'Fill out the inquiry form or message directly on WhatsApp.',
  },
  {
    step: 2,
    title: '30-Minute Callback',
    description: 'Jarrar personally reaches out to understand your business and goals.',
  },
  {
    step: 3,
    title: 'Design Your UI/UX',
    description: 'We turn your idea into screens you can see and react to.',
  },
  {
    step: 4,
    title: 'Review Your Design',
    description: 'You review the design and confirm it before development starts.',
  },
  {
    step: 5,
    title: 'Develop',
    description: 'AI-assisted development turns the approved design into a real, working product.',
  },
  {
    step: 6,
    title: 'Review & Change',
    description: 'You see the working build and request changes before anything is final.',
  },
  {
    step: 7,
    title: 'Launch',
    description: 'Your app, website, or software goes live — with support after launch.',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    q: 'What is “AI-assisted” or “vibe coding” development?',
    a: 'It means using modern AI tools to build software faster without skipping planning, design, or quality checks — one focused developer working at the speed of a small team.',
  },
  {
    q: 'How much does a project cost?',
    a: "It depends on what you need. After a quick discovery call, you'll get a clear cost estimate — no hidden fees, no surprise invoices.",
  },
  {
    q: 'How long does a project take?',
    a: 'Simple websites can be ready in days; fuller apps usually take a few weeks, depending on scope.',
  },
  {
    q: "I don't have a logo or design yet — is that a problem?",
    a: 'Not at all. Figuring out the look and feel together is part of the process.',
  },
  {
    q: 'Will I own my app or website after it’s delivered?',
    a: 'Yes — 100%. Once your project is delivered, full ownership of the code and design is yours. No hidden strings attached.',
  },
  {
    q: 'Can I request confidentiality (NDA) for my idea?',
    a: "Absolutely. If you'd like a confidentiality agreement signed before sharing your idea in detail, we're happy to do that.",
  },
  {
    q: 'What if I need to cancel before work has started?',
    a: "If your circumstances genuinely change, you're eligible for a full refund — just let us know why. This policy is meant for real cancellations; refunds aren't provided for orders placed without real intent to move forward.",
  },
  {
    q: 'Do I get to request changes before final delivery?',
    a: 'Yes — every project includes 1–2 rounds of free revisions before handover, so the final result truly matches what you had in mind.',
  },
  {
    q: 'What happens after my app or website launches?',
    a: 'You get support and bug fixes for an agreed period after launch, with the option to keep working together after that.',
  },
];

export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: 'spendx',
    title: 'Spend X — Money Tracker',
    description: 'A smart expense tracker with an AI advisor for budgeting and daily spend tracking.',
    badge: 'Live on Google Play',
    image: '/images/spendx-preview.png',
    imageAlt: 'Spend X — secure and private, AI powered expense tracker, and AI Advisor screens',
    linkText: 'View on Google Play →',
    linkUrl: 'https://play.google.com/store/apps/details?id=com.shivi.spendxmoneytracker',
  },
  {
    id: 'lekhpal',
    title: 'Lekhpal Diary — Work & Report',
    description: 'An offline case and task manager for field officers — organizes cases, daily tasks, documents, GPS photos, and inspection reports in one place.',
    badge: 'Live on Google Play',
    image: '/images/lekhpal-preview.png',
    imageAlt: 'Lekhpal Diary app screens — case list, calendar, tasks, dashboard',
    linkText: 'View on Google Play →',
    linkUrl: 'https://play.google.com/store/apps/details?id=com.lekhpaldiary.app',
  },
  {
    id: 'kisan-sahayak',
    title: 'Kisan Sahayak — Mandi Bhav & Farm Assistant',
    description:
      "A farmer's daily companion app — live mandi prices, government scheme information, weather updates, and a simple crop expense ledger, all in Hindi.",
    badge: 'Live on Google Play',
    image: '/images/kisan-sahayak-preview.png',
    imageAlt: 'Kisan Sahayak app screens — mandi prices, government schemes, price comparison, crop ledger',
    linkText: 'View on Google Play →',
    linkUrl: 'https://play.google.com/store/apps/details?id=com.shivi.kisansahayak',
  },
];

export const SAMPLE_REVIEWS: ReviewItem[] = [];
