import type { Metadata } from 'next';
import Arrow from '../components/arrow';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'projects',
};
const Projects = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-8 tracking-tighter">projects</h1>
      <section className="prose prose-neutral dark:prose-invert">
        <p>
          Eventually, this page will become a running log of past, present, and
          future projects or works that I've done.
        </p>
        <div className="space-x-4">
          <a
            href="https://read.cv/andrewwhitely"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >
            read.cv
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
          <a
            href="https://linkedin.com/in/andrewwhitely"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >
            linkedin
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
          <a
            href="https://github.com/andrewwhitely"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >
            github
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};
export default Projects;
