import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About | Andrew Whitely',
};

export default function About() {
  return (
    <div>
      <section className='space-y-6'>
        <div className='text-xl font-normal'>
          I'm a software engineer who is passionate about making things that
          people can improve people's interactions with the technology that they
          use daily. I'm passionate about technology, photography, movies, and a
          slew of other interests and hobbies.
        </div>
        <div className='text-xl font-normal'>
          Currently at Booz Allen Hamilton, previously at FirstFloor Studios and
          Capital One.
        </div>
      </section>
    </div>
  );
}
