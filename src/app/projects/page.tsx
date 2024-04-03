import type { Metadata } from "next";
import Arrow from "../components/arrow";

export const metadata: Metadata = {
  title: "Projects",
  description: "projects",
};
const Projects = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-8 tracking-tighter">
        things i've done
      </h1>
      <section className="prose prose-neutral dark:prose-invert">
        <p>
          Here's a running log of past, present, and future projects that I've
          done.
        </p>
        <div className="space-x-4">
          <a
            href="https://read.cv/andrewwhitely"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent dark:text-shade hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
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
            className="text-accent dark:text-shade hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
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
            className="text-accent dark:text-shade hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
          >
            github
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
        </div>
        <hr />
        <div id="bookshelvd">
          <h2 className="mt-6">Bookshelvd</h2>
          <span className="italic">the better book tracker</span>
          <p>
            I'm currently building out what I've been mentally calling "the
            better book tracker". Stemming from my huge love of Letterboxd,
            disdain of using Goodreads, and not necessarily thinking I need the
            analytics or other niche features in an application like Storygraph,
            I've decided there's no better way to get what I want than do it
            myself.
            <div className="space-x-4">
              <a
                href="/projects/bookshelvd"
                rel="noreferrer noopener"
                className="text-accent dark:text-shade hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              >
                read more
                <span className="inline-flex align-middle">
                  {" "}
                  <Arrow />
                </span>
              </a>
            </div>
          </p>
          <span className="space-x-4 flex flex-row items-center overflow-auto mt-4">
            <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
              React
            </div>
            <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
              TailwindCSS
            </div>
          </span>
        </div>
      </section>
    </div>
  );
};
export default Projects;
