export interface Role {
  title: string;
  start: number;
  end?: number | string;
  description: string;
  url: string;
  locked?: boolean;
  current?: boolean;
  styles?: string;
  role?: string;
  bullets?: string[];
}

export const Jobs: Role[] = [
  {
    title: 'Booz Allen Hamilton',
    start: 2023,
    description:
      'Developing a data analysis platform to simplify complex datasets into manageable, manipulative, and usable visualizations for government clients.',
    url: 'https://boozallen.com/',
    locked: false,
    current: true,
    styles: 'hover:bg-[#007481] hover:text-white font-semibold align-baseline',
    role: 'Senior Software Engineer',
  },
  {
    title: 'FirstFloor Studios',
    start: 2022,
    end: 2022,
    description:
      'Delivered a mobile-first, web3 marketplace and on-the-go smart contract creation and digital token live-auction platform.',
    url: 'https://firstfloor.app/',
    locked: false,
    current: false,
    styles: 'hover:bg-[#2356f6] hover:text-white font-semibold align-baseline',
    role: 'Senior Software Engineer',
  },
  {
    title: 'Capital One',
    start: 2018,
    end: 2022,
    description:
      'Shipped internal and consumer-facing applications, helping to change banking for good.',
    url: 'https://capitalone.com/',
    locked: false,
    current: false,
    styles: 'hover:bg-[#355f7f] hover:text-white font-semibold align-baseline',
    role: 'Software Engineer',
  },
];
export const Projects: Role[] = [
  {
    title: 'Lunchbox Studio',
    description:
      "Where I'll optimistically say that I'm creating something in my free time.",
    url: 'https://lunchbox.studio',
    start: 2025,
    locked: false,
    current: false,
    styles: 'hover:bg-[#007d46] hover:text-white font-semibold align-baseline',
    role: 'Founder',
  },
  {
    title: 'Surely + Work',
    start: 2024,
    end: 2025,
    locked: false,
    current: true,
    description: 'Leading development for a freelance gig economy platform.',
    url: 'https://surelywork.com/',
    styles:
      'hover:bg-[#A3FD3D] dark:hover:text-[#060402] font-semibold align-baseline',
    role: 'Lead Software Engineer',
  },
];
