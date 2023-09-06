import type { Metadata } from 'next';
import Arrow from '../components/arrow';
import Tooltip from '../components/tooltip';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'about',
};
const About = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-8 tracking-tighter">
        a bit about me
      </h1>
      <div className="w-52 h-52 relative float-left">
        <Image src="/avatar.png" layout="fill" alt="memoji avatar" />
      </div>
      <section className="prose prose-neutral dark:prose-invert">
        <p>
          I'm what I like to call a chronic new hobbyist. It may seem like I'm
          always getting myself into something new,{' '}
          <span className="italic">which I am</span>, but I genuinely love to
          learn and try new things. As proof, you could also say that I'm also a
          photographer, reader, runner, gamer, bartender, chef, potter, and the
          list goes on and on.
        </p>
        <hr />
        <p className="">
          I studied at{' '}
          <a
            href="https://fsu.edu/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent dark:text-[#e70e27]"
          >
            Florida State University
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>{' '}
          where bounced around from{' '}
          <Tooltip message={'Pre-med!'}>
            <text>major</text>
          </Tooltip>{' '}
          to{' '}
          <Tooltip message={'Criminology anyone?'}>
            <text>major</text>
          </Tooltip>
          , until I got my degree in Information Technology with a minor in
          Computer Science.
        </p>
        <p>
          A few facts about me:
          <ul>
            <li>
              I'm currently plowing through a stack of eight books on my
              nightstand. My last read was{' '}
              <a
                href="https://www.goodreads.com/book/show/58784475-tomorrow-and-tomorrow-and-tomorrow"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent dark:text-[#e70e27]"
              >
                Tomorrow, and Tomorrow, and Tomorrow by Gabrielle Zevin
                <span className="inline-flex align-middle">
                  <Arrow />
                </span>
              </a>
            </li>
            <li>My favorite cocktail is a Manhattan</li>
            <li>I'm a fan of Formula 1, cheering on Mercedes</li>
            <li>My fastest NY Times mini crossword time was 0:07 seconds</li>
            <li>
              I'm currently learning UI/UX design through the Google UX Design
              Certificate program. I first got into design in elementary school
              where I would make{' '}
              <a
                href="https://twitter.com/ilyamiskov/status/1679535386987462656"
                target="_blank"
                rel="noreferrer noopener"
                className="text-accent dark:text-[#e70e27]"
              >
                userbars
                <span className="inline-flex align-middle">
                  <Arrow />
                </span>
              </a>{' '}
              on RuneScape web forums
            </li>
          </ul>
        </p>
        <p>You can also find me on the sites below, feel free to follow me!</p>
        <div className="space-x-4">
          <a
            href="https://letterboxd.com/andrewwhitely"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent dark:text-[#e70e27]"
          >
            letterboxd
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
          <a
            href="https://goodreads.com/andrewwhitely"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent dark:text-[#e70e27]"
          >
            goodreads
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
          <a
            href="https://www.threads.net/@ndrewwhitely"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent dark:text-[#e70e27]"
          >
            threads
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
          <a
            href="https://www.instagram.com/thrdsense"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent dark:text-[#e70e27]"
          >
            instagram
            <span className="inline-flex align-middle">
              <Arrow />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};
export default About;
