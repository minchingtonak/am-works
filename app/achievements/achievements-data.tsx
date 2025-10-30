import { ResumeItem } from 'lib/types';

export interface Achievement extends ResumeItem {}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Replit Programming Language Jam',
    role: 'Replit Lang Jam Winner',
    organization: 'Replit',
    start: 2020,
    end: 2020,
    startMonth: 'October',
    endMonth: 'October',
    description:
      'Together with a partner, won first place for our work on Basil, a new programming language exploring partial evaluation, context-sensitive parsing, and metaprogramming. It was developed from scratch over the course of a week.',
    url: 'https://blog.replit.com/pljamresults',
    styles: 'hover:bg-[#FF6B35]',
  },
];
