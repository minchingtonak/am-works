import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About | Alec Minchington',
};

// FIXME this is unused
export default function About() {
  return (
    <div>
      <section className="space-y-6">
        <div className="text-xl font-normal">
          I'm a software engineer passionate about creating technology that
          enhances how people interact with the tools they use every day. Beyond
          coding, I'm deeply interested in music, cinema, and video games.
        </div>
        <div className="text-xl font-normal">
          Currently at
          <a href="https://aws.amazon.com/" target="_blank">
            Amazon Web Services
          </a>
          , previously at Needlestack
        </div>
      </section>
    </div>
  );
}
