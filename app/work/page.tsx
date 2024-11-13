import type { Metadata } from 'next';
import { Jobs, Projects } from './experience-data';

export const metadata: Metadata = {
  title: `Work`,
  description: '',
};

export default function Work() {
  const workExperience = [...Jobs, ...Projects].sort(
    (b, a) => a.start - b.start
  );

  return (
    <section>
      <div className='text-xl font-normal'>
        Currently at{' '}
        <a
          href='https://boozallen.com/'
          target='_blank'
          className='underline hover:bg-[#007481] hover:text-white'
        >
          Booz Allen Hamilton
        </a>
        , previously at{' '}
        <a
          href='https://twitter.com/firstfloorapp'
          target='_blank'
          className='underline hover:bg-[#2356f6] hover:text-white'
        >
          FirstFloor Studios
        </a>
        , and before then at{' '}
        <a
          href='https://capitalone.com/'
          target='_blank'
          className='underline hover:bg-[#355f7f] hover:text-white'
        >
          Capital One
        </a>
        . Building something at{' '}
        <a
          href='https://lunchbox.studio/'
          target='_blank'
          className='cursor-not-allowed underline'
        >
          Lunchbox Studio
        </a>
        .
      </div>
      <hr className='flex m-auto my-4 opacity-75 dark:opacity-25 w-full' />
      <h1 className='mb-4 text-2xl font-medium tracking-tight'>
        Work Experience
      </h1>
      <div className='space-y-6'>
        {workExperience.map((job, index) => (
          <div className='flex flex-col'>
            <div className='w-full flex justify-between items-baseline'>
              <span className='text-black dark:text-white font-medium tracking-tight block group hover:opacity-80 transition-opacity duration-200'>
                <a
                  key={index}
                  href={job.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={
                    job.locked === true
                      ? `cursor-not-allowed ${job.styles}`
                      : `cursor-pointer ${job.styles}`
                  }
                >
                  {job.title} →
                </a>
              </span>
              <span className='text-neutral-600 dark:text-neutral-400 tabular-nums text-sm'>
                {job.start}{' '}
                {job.start && job?.end
                  ? ` – ${job.end}`
                  : job?.start > new Date().getFullYear()
                  ? null
                  : ' – Present'}
              </span>
            </div>
            <p className='prose prose-neutral dark:prose-invert pt-3'>
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
