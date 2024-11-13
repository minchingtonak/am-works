export interface Role {
  title: string;
  start: number;
  end?: number | string;
  description: string;
  url: string;
  locked?: boolean;
  current?: boolean;
  styles?: string;
}

export const Jobs: Role[] = [
  {
    title: 'Lunchbox Studio',
    description: 'Coming Soon',
    url: 'https://lunchbox.studio',
    start: 2025,
    locked: true,
    current: false,
  },
  {
    title: 'Booz Allen Hamilton',
    start: 2023,
    description: 'Developing full-stack web applications for various clients.',
    url: 'https://boozallen.com/',
    locked: false,
    current: true,
    styles: 'hover:bg-[#007481] hover:text-white',
  },
  {
    title: 'FirstFloor Studios',
    start: 2022,
    end: 2022,
    description:
      'Developed a mobile-first web3 marketplace and on-the-go smart contract creation platform.',
    url: 'https://firstfloor.app/',
    locked: false,
    current: false,
    styles: 'hover:bg-[#2356f6] hover:text-white',
  },
  {
    title: 'Capital One',
    start: 2018,
    end: 2022,
    description:
      'Worked on internal facing and consumer applications, helping to change banking for good.',
    url: 'https://capitalone.com/',
    locked: false,
    current: false,
    styles: 'hover:bg-[#355f7f] hover:text-white',
  },
];
export const Projects: Role[] = [
  {
    title: 'Surely + Work',
    start: 2024,
    locked: false,
    current: true,
    description:
      'Building a freelance networking platform to open pathways to jobs in entertainment industries by connecting freelancers directly to employers.',
    url: 'https://surelywork.com/',
    styles: 'hover:bg-[#A3FD3D]',
  },
];
