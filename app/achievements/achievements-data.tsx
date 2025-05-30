export interface Achievement {
  title: string;
  start: number;
  startMonth?: string;
  end?: number | string;
  endMonth?: string;
  description?: string;
  url: string;
  locked?: boolean;
  current?: boolean;
  styles?: string;
  role?: string;
  bullets?: string[];
  organization?: string;
}

// TODO multiple links for achievements
export const Achievements: Achievement[] = [
  {
    title: 'Replit Programming Language Jam',
    role: 'Replit Lang Jam Winner',
    organization: 'Replit',
    start: 2020,
    end: 2020,
    startMonth: 'October',
    endMonth: 'October',
    description: 'Together with a partner, won first place for our work on Basil, a new programming language exploring partial evaluation, context-sensitive parsing, and metaprogramming. It was developed from scratch over the course of a week.',
    url: 'https://blog.replit.com/pljamresults',
    locked: false,
    current: false,
    styles: 'hover:bg-[#FF6B35] hover:text-white font-semibold align-baseline',
  },
];