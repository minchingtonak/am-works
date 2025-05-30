export interface Role {
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
}

export const Jobs: Role[] = [
  {
    title: 'Amazon Web Services – AWS App Studio & TBA Generative AI product',
    start: 2022,
    startMonth: 'September',
    bullets: [
      'Developed a new, simplified onboarding feature for AWS App Studio, a generative AI-powered, low-code web application builder for business users, which increased the onboarding completion rate by 30% and decreased the abandon rate by 6%',
      'Designed and implemented a framework to allow App Studio engineers to securely and quickly scrub Personally Identifiable Information from service logs stored in CloudWatch, which was used to clean log data across two production instances and successfully redacted 90GB of log data',
      "Optimized App Studio's code generation engine by migrating the existing state management implementation to use a more efficient state management library and by simplifying rendering algorithms, resulting in a 90% decrease in code generation render latency across all use cases",
      "Improved App Studio's app creation flow by creating a new API for customer teams to optimize their code, leading to a 95% decrease in app creation latency for all customers",
      'Designed and implemented an all-new foundational testing framework for easy snapshot testing of auto-generated code that has been adopted ubiquitously across the App Studio organization to rapidly write tests',
      'Implemented core functionality of the highly customer-requested Undo/Redo feature for App Studio, saving customers hours of manually undoing and redoing changes',
    ],
    url: 'https://aws.amazon.com/appstudio/',
    locked: false,
    current: true,
    styles: 'hover:bg-[#007481] hover:text-white font-semibold align-baseline',
    role: 'Software Development Engineer I',
  },
  {
    title: 'Needlestack LLC – Athena Learning Management System',
    start: 2022,
    end: 2022,
    startMonth: 'May',
    endMonth: 'September',
    description:
      'Designed and implemented UX for core features of the Athena Learning Management System, an innovative competitor to Canvas, including assignment & exam administration, and AI-powered student insights',
    url: 'https://needlestack.tech',
    locked: false,
    current: false,
    styles: 'hover:bg-[#2356f6] hover:text-white font-semibold align-baseline',
    role: 'Front End Development Engineer',
  },
  {
    title: 'Amazon – Consumables Shopping Experience',
    start: 2021,
    end: 2021,
    startMonth: 'May',
    endMonth: 'August',
    description:
      'Developed web application to simplify the complex process of onboarding internal customers’ new A/B feature experiments on amazon.com',
    url: 'https://amazon.com',
    locked: false,
    current: false,
    styles: 'hover:bg-[#2356f6] hover:text-white font-semibold align-baseline',
    role: 'Software Development Engineer Intern',
  },
  {
    title: 'University of Michigan – EECS  485',
    start: 2021,
    end: 2021,
    startMonth: 'January',
    endMonth: 'May',
    description: 'Instructed students in web programming concepts and helped solve code issues during office hours',
    url: 'https://eecs485.org/',
    locked: false,
    current: false,
    styles: 'hover:bg-[#2356f6] hover:text-white font-semibold align-baseline',
    role: 'Instructional Aide – Web Systems',
  },
  {
    title: 'University of Michigan – EECS 398',
    start: 2020,
    end: 2021,
    startMonth: 'September',
    endMonth: 'January',
    description: 'Guided students through implementation of a programming language interpreter via lab sessions & office hours',
    url: 'https://amirkamil.github.io/eecs398/syllabus.html',
    locked: false,
    current: false,
    styles: 'hover:bg-[#2356f6] hover:text-white font-semibold align-baseline',
    role: 'Instructional Aide – Programming Paradigms',
  },
  {
    title: 'Amazon – Consumables Customer Experience',
    start: 2021,
    end: 2021,
    startMonth: 'July',
    endMonth: 'September',
    description:
      'Created a web application to query Amazon product listing data from Elasticsearch and allow internal customers to gain insights into the data via dynamic visualizations',
    url: 'https://amazon.com',
    locked: false,
    current: false,
    styles: 'hover:bg-[#2356f6] hover:text-white font-semibold align-baseline',
    role: 'Software Development Engineer Intern',
  },
  {
    title: 'University of Michigan – EECS 280',
    start: 2019,
    end: 2020,
    startMonth: 'January',
    endMonth: 'May',
    bullets: [
      'Bolstered students’ understanding of C++ programming concepts by hosting a weekly lab session',
      'Helped students solve their software & programming problems in office hours',
      'Analyzed student code submissions to find evidence of cheating'
    ],
    url: 'https://eecs280.org/',
    locked: false,
    current: false,
    styles: 'hover:bg-[#2356f6] hover:text-white font-semibold align-baseline',
    role: 'Instructional Aide & Cheat Checking Lead – Programming and Introductory Data Structures',
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
