export interface Role {
  title: string;
  start: number;
  end?: number | string;
  description: string;
  url: string;
}

export const Jobs: Role[] = [
  {
    title: 'Booz Allen Hamilton',
    start: 2023,
    description:
      'Currently doing full-stack web development for government clients.',
    url: 'https://boozallen.com/',
  },
  {
    title: 'FirstFloor Studios',
    start: 2022,
    end: 2022,
    description:
      'Created a fully-fledged mobile-first web3 marketplace and smart contract creation platform.',
    url: 'https://firstfloor.app/',
  },
  {
    title: 'Capital One',
    start: 2018,
    end: 2022,
    description: 'Worked on various teams, helping to change banking for good.',
    url: 'https://capitalone.com/',
  },
];
export const Projects: Role[] = [
  {
    title: 'Surely + Work',
    start: 2024,
    description:
      'Un-gatekeeping creative jobs in media, music, and entertainment by connecting employers to freelancers.',
    url: 'https://surelywork.com/',
  },
];
