// Single source of truth for site content.
// All information carried over from https://directinstallations.co.uk/

export const business = {
  name: 'Direct Installations',
  tagline: 'Authorised VELFAC Distributor & Approved DOVISTA Service Agent',
  intro:
    'Specialist supply, installation and servicing of VELFAC and Rationel windows and doors. Over 20 years’ experience with DOVISTA products.',
  about:
    'Here at Direct Installations, we are an Authorised VELFAC Distributor and Approved DOVISTA Service Agent, specialising in the supply, installation and servicing of premium VELFAC composite windows and doors. We also continue to support and service existing Rationel products as the Rationel range transitions into the VELFAC Classic portfolio. Based in Denton, Manchester, we supply and install VELFAC windows and doors throughout Manchester, the North West and North Wales. Our experienced team also provides specialist servicing and repairs across Northern England, Wales and the Midlands, using genuine replacement parts and extensive product knowledge. Customers are welcome to visit our Denton showroom by appointment to discuss their project, view selected VELFAC products and receive expert advice from our experienced team.',
  distributorLine:
    'Authorised Distributor of Rationel and VELFAC Windows and Doors.',
} as const;

export const contact = {
  phone: '0161 320 4993',
  phoneHref: 'tel:+441613204993',
  salesEmail: 'sales@directinstall.co.uk',
  serviceEmail: 'service@directinstall.co.uk',
  address: {
    line1: 'Unit 24b Alpha Court',
    line2: 'Denton',
    city: 'Manchester',
    postcode: 'M34 3RB',
  },
  mapsQuery: 'Unit 24b Alpha Court, Denton, Manchester, M34 3RB',
} as const;

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  icon: 'window' | 'install' | 'service';
};

export const services: Service[] = [
  {
    id: 'windows-doors',
    title: 'VELFAC Windows & Doors',
    short: 'Explore our range of VELFAC and Rationel windows and doors.',
    description:
      'Premium VELFAC composite windows and doors combining a slim aluminium exterior with a warm timber interior. As the Rationel range transitions into the VELFAC Classic portfolio, we continue to supply and support both.',
    points: [
      'Authorised VELFAC distributor',
      'VELFAC composite aluminium / timber systems',
      'Rationel products supported into the VELFAC Classic range',
      'Expert advice at our Denton showroom by appointment',
    ],
    icon: 'window',
  },
  {
    id: 'supply-installation',
    title: 'Supply & Installation',
    short: 'Supply and installation across the North West and North Wales.',
    description:
      'Full supply and professional installation of VELFAC windows and doors throughout Manchester, the North West and North Wales, delivered by our experienced in-house team.',
    points: [
      'Coverage across Manchester, the North West & North Wales',
      'Experienced, specialist installation team',
      'New build and replacement projects',
      'Genuine VELFAC products',
    ],
    icon: 'install',
  },
  {
    id: 'servicing-repairs',
    title: 'Servicing & Repairs',
    short: 'Specialist servicing and repairs in Northern England and Wales.',
    description:
      'Specialist servicing and repairs across Northern England, Wales and the Midlands, using genuine replacement parts and extensive product knowledge built over 20+ years with DOVISTA products.',
    points: [
      'Coverage across Northern England, Wales & the Midlands',
      'Genuine replacement parts',
      'Refurbishment of sliding doors & window systems',
      '20+ years of DOVISTA product knowledge',
    ],
    icon: 'service',
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  source: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'We have had Velfac aluminium windows fitted to our new build and have been very happy with the products. Jon and Chris have been easy to deal with and provide a high quality service.',
    author: 'Mike James',
    source: 'Google Review',
    rating: 5,
  },
  {
    quote:
      'My sliding door needed a complete refurbishment and I was introduced to Direct Installations by the original supplier. From the initial call out to the completion of the work, Direct Installations were helpful, friendly and professional. They carried out the work in less time than was quoted and they’ve left me with what is essentially a brand new sliding door. Strongly recommend them.',
    author: 'Sean Van Hales',
    source: 'Google Review',
    rating: 5,
  },
  {
    quote:
      'Hello all at Direct Installations, I just thought i’d leave a review telling you all, thank you so much for making my home look superb i couldn’t be happier – the design, colour and the quality is outstanding. I’ve had people stop and stare outside my home they really stand out that much. Thank you thank you thank you.',
    author: 'John Osborne',
    source: 'Google Review',
    rating: 5,
  },
];

// Regions served — used by the interactive coverage section.
export const coverage = {
  installation: ['Manchester', 'North West England', 'North Wales'],
  servicing: ['Northern England', 'Wales', 'The Midlands'],
} as const;

export type Project = {
  title: string;
  location: string;
  category: 'Windows' | 'Doors' | 'Servicing';
  // Placeholder images live in /public/projects — swap these for real photos.
  image: string;
};

export const projects: Project[] = [
  { title: 'Aluminium VELFAC New Build', location: 'Cheshire', category: 'Windows', image: '/projects/project-1.svg' },
  { title: 'Sliding Door Refurbishment', location: 'Manchester', category: 'Servicing', image: '/projects/project-2.svg' },
  { title: 'Full House Window Replacement', location: 'North Wales', category: 'Windows', image: '/projects/project-3.svg' },
  { title: 'Composite Entrance Doors', location: 'Stockport', category: 'Doors', image: '/projects/project-4.svg' },
  { title: 'Rationel to VELFAC Upgrade', location: 'Lancashire', category: 'Windows', image: '/projects/project-5.svg' },
  { title: 'Bi-fold & Patio Doors', location: 'Denton', category: 'Doors', image: '/projects/project-6.svg' },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
