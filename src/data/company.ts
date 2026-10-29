export const COMPANY = {
  name: 'Veterans Trading Company Inc.',
  shortName: 'VTC',
  tagline: 'Supply Chain Solutions and Procurement Support',
  email: 'info@veteranstradingcompanyinc.com',
  phone: '385-715-1970',
  phoneHref: 'tel:+13857151970',
  address: {
    line1: '15 WEST SOUTH TEMPLE',
    line2: 'GATEWAY TOWER WEST, SUITE 1050',
    city: 'SALT LAKE CITY',
    state: 'UT',
    zip: '84101',
    full: '15 West South Temple, Gateway Tower West, Suite 1050, Salt Lake City, UT 84101',
  },
  website: 'https://vtcusa.com',
  linkedin: 'https://www.linkedin.com/company/vtcusa',
  founded: 2005,
  description:
    'A Service-Disabled Veteran-Owned Small Business providing a full range of integrated, end-to-end supply chain solutions and procurement support programs to commercial firms and Federal prime contractors.',
  certifications: [
    'ISO 9001:2015',
    'AS9100D – Certificate Number 15144',
    'AS6081 Compliant',
    'SBA Certified HUBZone',
    'Service-Disabled Veteran-Owned Small Business (SDVOSB)',
  ],
};

export type NavItem = {
  label: string;
  path: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services/' },
  { label: 'Suppliers', path: '/suppliers/' },
  { label: 'News', path: '/news/' },
  { label: 'Contact', path: '/contact/' },
  { label: 'Careers', path: '/careers/' },
];

export const ABOUT_NAV_ITEM: NavItem = { label: 'About Us', path: '/about/' };

export const ABOUT_SUB_NAV_ITEMS: NavItem[] = [
  { label: 'Leadership', path: '/leadership/' },
  { label: 'Quality & Certifications', path: '/quality/' },
];

export type Service = {
  id: string;
  shortName: string;
  name: string;
  description: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    id: 'smi',
    shortName: 'SMI',
    name: 'Supplier Managed Inventory',
    description:
      'VTC SMI services include purchasing, incoming inspection, solder and steam age testing, kitting, bulk break down, and value-add (lead bend & trim). Through our SMIs and other divisions, VTC delivers quality, innovation, sourcing flexibility (as directed by our customers) and reduced cost and capital.',
    features: [
      'Purchasing and procurement management',
      'Incoming inspection and quality control',
      'Solder and steam age testing',
      'Kitting and bulk break down',
      'Value-add services (lead bend & trim)',
      'Point-of-use delivery',
    ],
  },
  {
    id: 'osp',
    shortName: 'OSP',
    name: 'On-Site Procurement',
    description:
      'VTC places dedicated procurement professionals on-site at customer facilities to manage day-to-day purchasing, materials planning, and supplier relationships—acting as a seamless extension of your team.',
    features: [
      'Dedicated on-site procurement staff',
      'Materials planning and acquisitions',
      'Bill of materials (BOM) oversight',
      'Supplier relationship management',
      'Real-time inventory visibility',
      'Reduced administrative burden',
    ],
  },
  {
    id: 'cdp',
    shortName: 'CDP',
    name: 'Customer Direct Procurement Services',
    description:
      'CDP gives customers the flexibility to direct-source components and materials through VTC while retaining control over supplier selection. We handle the purchasing, logistics, and quality processes on your behalf.',
    features: [
      'Customer-directed supplier selection',
      'Purchase order management',
      'Supplier qualifications and auditing',
      'Logistics and delivery coordination',
      'Quality assurance and documentation',
      'Diversity spend reporting',
    ],
  },
  {
    id: 'mro',
    shortName: 'MRO',
    name: 'Industrial Products and Supplies (MRO)',
    description:
      'As an Authorized Grainger Reseller, VTC provides access to Grainger’s large selection of maintenance, repair, and operations supplies—helping you consolidate suppliers, manage inventory, and operate a safer, more sustainable facility.',
    features: [
      'Authorized Grainger Reseller',
      'Access to Grainger’s full MRO catalog',
      'Competitively priced contracts',
      'Auditable diversity spend by line item',
      '24/7 customer support and training resources',
      'Sustainable facility products',
    ],
  },
];

export type Leader = {
  name: string;
  title: string;
  responsibilities: string[];
  linkedin?: string;
  group: 'Executive Leadership' | 'Profit Center Directors' | 'Cost Center Directors';
};

export const LEADERS: Leader[] = [
  {
    name: 'George Smith',
    title: 'President',
    responsibilities: ['Corporate Strategy', 'Executive Leadership'],
    linkedin: 'https://www.linkedin.com/in/gesmith02',
    group: 'Executive Leadership',
  },
  {
    name: 'John Pierce',
    title: 'VP Business Development',
    responsibilities: ['Business Development', 'All ABU Directors'],
    linkedin: 'https://www.linkedin.com/in/john-pierce-3904671/',
    group: 'Executive Leadership',
  },
  {
    name: 'Craig Lambourne',
    title: 'Director of Quality',
    responsibilities: [
      'Quality Management System',
      'QMS Certification Management',
      'Internal/External QMS Audits',
      'Quality/Engineering Programs',
      'Lean Enterprise Management',
      'Continuous Improvement',
    ],
    linkedin: 'https://www.linkedin.com/in/craig-lambourne-37177426/',
    group: 'Executive Leadership',
  },
  {
    name: 'Scott Roberts',
    title: 'VP Finance',
    responsibilities: [
      'Corporate Finance – Director',
      'Business Unit Finance',
      'Human Resources',
      'Information Systems',
    ],
    linkedin: 'https://www.linkedin.com/in/scott-roberts-9ba5806',
    group: 'Executive Leadership',
  },
  {
    name: 'Bill Percival',
    title: 'VP Business Operations',
    responsibilities: [
      'Business Operations',
      'Long Term Forecasting',
      'Information Technology',
      'Cyber Security',
    ],
    linkedin:
      'https://www.linkedin.com/in/utahpercival?trk=people-guest_people_search-card',
    group: 'Executive Leadership',
  },
  {
    name: 'Rebecca Belanger',
    title: 'Director, LMCO SMI',
    responsibilities: [
      'Procurement',
      'Quality',
      'Engineering/CM',
      'Business Finance',
      'Management',
      'Warehousing',
    ],
    group: 'Profit Center Directors',
  },
  {
    name: 'Jeanette Veiga',
    title: 'Director, OSP Programs',
    responsibilities: ['Procurement', 'Quality', 'Engineering', 'Business Finance', 'Management'],
    linkedin: 'https://www.linkedin.com/in/jeanette-veiga-10755b2/',
    group: 'Profit Center Directors',
  },
  {
    name: 'Doug Norman',
    title: 'Director, Boeing & Grainger',
    responsibilities: ['Procurement', 'Quality', 'Engineering', 'Business Finance', 'Management'],
    group: 'Profit Center Directors',
  },
  {
    name: 'Nicole Eugster',
    title: 'Director, NG SMI SLC',
    responsibilities: [
      'Procurement',
      'Quality',
      'Engineering/CM',
      'Business Finance',
      'Management',
      'Warehousing',
    ],
    linkedin: 'https://www.linkedin.com/in/nicole-eugster-90320a19/',
    group: 'Profit Center Directors',
  },
  {
    name: 'Katie Buisman',
    title: 'Manager, Human Resources',
    responsibilities: [
      'HR Planning & Compliance',
      'Benefits Programs & Support',
      'Workplace Culture & Development',
      'Organizational Conflict Resolution',
      'Safety Programs Records',
      'Training Records',
      'Time & Attendance Records',
      'Rewards & Incentives Programs',
    ],
    group: 'Cost Center Directors',
  },
  {
    name: 'Laurie Butler',
    title: 'Representative, LMCO',
    responsibilities: ['LMCO Representative'],
    group: 'Cost Center Directors',
  },
];

export type SupplierDoc = {
  title: string;
  description: string;
};

export const SUPPLIER_DOCS: SupplierDoc[] = [
  {
    title: 'CF-019 Rev C — VTC Terms and Conditions',
    description: 'Standard terms and conditions for suppliers doing business with VTC.',
  },
  {
    title: 'CP-007 Rev D — VTC Avoidance and Mitigation',
    description: 'Policy for avoidance and mitigation of counterfeit parts.',
  },
  {
    title: 'PF-039 Rev C — VTC Standard PO Flowdown',
    description: 'Standard purchase order flowdown requirements for suppliers.',
  },
  {
    title: 'Supplier Code of Conduct',
    description: 'Expectations for ethical conduct and business practices.',
  },
  {
    title: 'Cyber Security Statement',
    description: 'VTC’s commitment to cybersecurity across the supply chain.',
  },
  {
    title: 'Human Trafficking Policy',
    description: 'Zero-tolerance policy on human trafficking and forced labor.',
  },
  {
    title: 'Conflict Mineral Policy Statement',
    description: 'VTC’s policy on conflict minerals and responsible sourcing.',
  },
];

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'lockheed-outstanding-2021',
    title: 'Lockheed Martin Selects VTC as Outstanding Small Business for 2021',
    date: 'August 2, 2022',
    category: 'Awards',
    excerpt:
      'Lockheed Martin has chosen VTC as a recipient of their Outstanding Small Business Award for 2021, one of 12 awards given to Outstanding Small Business Suppliers on behalf of Lockheed Martin Missiles.',
    body: [
      'Tuesday, August 2, 2022 — Veterans Trading Company, Inc. received one of 12 awards given to Outstanding Small Business Suppliers on behalf of Lockheed Martin Missiles and Fire Control.',
      'This recognition reflects VTC’s sustained commitment to quality, on-time delivery, and customer focus across all of its supply chain programs.',
    ],
  },
  {
    id: 'bae-silver-tier-2022',
    title: 'BAE Systems Honors VTC with a Silver Tier Supplier Award',
    date: 'March 2022',
    category: 'Awards',
    excerpt:
      'VTC received a Silver Tier Award for exceptional performance and contributions to supply chain success for BAE Systems, Inc.’s Electronic Systems sector, processing over 390,000 deliveries.',
    body: [
      'Ocala, FL — March 2022 — Veterans Trading Company (VTC) received a Silver Tier Award for exceptional performance and contributions to supply chain success for BAE Systems, Inc.’s Electronic Systems sector.',
      'VTC was honored at a virtual ceremony and was selected from the pool of suppliers that worked with BAE Systems in 2021. The VTC Team processed over 390,000 deliveries while reaching the performance challenges for both delivery and quality.',
      '“VTC has had the privilege of being a partner with BAE Systems for twelve years. The work that went into attaining the Silver Supplier recognition this year has been extraordinary,” said George Smith, President/CEO of VTC.',
    ],
  },
  {
    id: 'womens-history-2022',
    title: "Women's History Month 2022",
    date: 'March 29, 2022',
    category: 'Community',
    excerpt:
      'As Women’s History Month comes to an end, VTC recognizes those closely aligned to us—including the 17.2% of Dept. of Defense active-duty military who are women.',
    body: [
      'As Women’s History Month comes to an end for 2022, VTC would like to give recognition to those who are closely aligned to us.',
      '17.2% of Dept. of Defense active-duty military are women (as of 2020), 21.1% of the Reserve & Guard are women, and 9% of Veterans in the U.S. are women.',
      'VTC is proud to support and celebrate the women who serve our country and our communities.',
    ],
  },
  {
    id: 'special-olympics-utah',
    title: 'VTC Donates to Special Olympics Utah',
    date: 'December 19, 2021',
    category: 'Community',
    excerpt:
      'VTC was proud to work with Haley Nall to donate to the Special Olympics Utah, alongside other donors supporting the community.',
    body: [
      'A few months ago, VTC was lucky enough to work with Haley Nall to donate to the Special Olympics Utah.',
      'Alongside other donors, VTC’s community contribution helped support athletes across Utah. We believe in giving back to the communities where we live and work.',
    ],
  },
];
