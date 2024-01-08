import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bookshelved',
  description: 'bookshelvd',
};

const Bookshelvd = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-8 tracking-tighter">Bookshelvd</h1>
      <section className="prose prose-neutral dark:prose-invert">
        <span className="italic">The better book tracker.</span>
        <hr />
        <div id="bookshelvd">
          <p>
            I'm currently building out what I've been mentally calling "the
            better book tracker". Stemming from my huge love of Letterboxd,
            disdain of using Goodreads, and not necessarily thinking I need the
            analytics or other niche features in an application like Storygraph,
            I've decided there's no better way to get what I want than do it
            myself.
          </p>
          <p>
            Not meant to be anything more than a project for personal use, I
            want to test my abilities and also learn new. Here's a loose,
            "roadmap" of sorts, listing out key features:
            <ul>
              <li>Have common sense shelves</li>
              <li>
                Proper <span className="text-xs">(to me*)</span> search
                functionality{' '}
                <span className="text-xs">(also an autocomplete search)</span>
              </li>
              <li>Better support for book formats</li>
              <li>Better rating system</li>
              <li>
                Good explore or search functionality. Some sort of
                recommendation on the book's page
              </li>
              <li>Ability to view history of books read + all stats of them</li>
              <li>Simple tracking stats</li>
              <ul>
                <li>Number of books read (weekly/monthly/yearly/all time)</li>
                <li>Progress to yearly goal</li>
                <li>Favorites</li>
                <li>Recently read</li>
                <li>Currently reading</li>
              </ul>
            </ul>
          </p>
          <p>
            Now that that's out of the way. There are some things I want to
            accomplish. This is the first project I'm really putting in effort
            to try and build. As a result, my main goal is to finish it. Whether
            or not I use it long term, update it, share it with friends, doesn't
            really matter to me all that much. Now with that in mind, it would
            be pretty sweet to port this to an iOS app so I could use it as an
            actual app. Becoming a published App Store developer would be pretty
            sweet.
          </p>
          <p>So that's all for now. I'll update this along the way 🤠</p>
          <p className="italic text-sm">last updated: january 7th, 2024</p>
          <span className="space-x-4 flex flex-row items-center overflow-auto mt-4">
            <div className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 w-fit">
              React.js
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
export default Bookshelvd;
