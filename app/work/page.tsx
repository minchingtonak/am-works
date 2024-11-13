import type { Metadata } from 'next';
import { Jobs, Projects } from './project-data';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Work | Andrew Whitely',
};

export default function Work() {
  const workExperience = [...Jobs, ...Projects].sort(
    (b, a) => a.start - b.start
  );

  return (
    <section>
      <div className='text-xl font-normal'>
        Currently at{' '}
        <a href='https://boozallen.com/' target='_blank' className='underline'>
          Booz Allen Hamilton
        </a>
        , previously at{' '}
        <a
          href='https://twitter.com/firstfloorapp'
          target='_blank'
          className='underline'
        >
          FirstFloor Studios
        </a>
        , and before then at{' '}
        <a href='https://capitalone.com/' target='_blank' className='underline'>
          Capital One
        </a>
        .
      </div>
      <hr className='my-4 opacity-25' />
      <h1 className='mb-8 text-2xl font-medium tracking-tight'>
        Work Experience
      </h1>
      <div className='space-y-6'>
        {workExperience.map((job, index) => (
          <a
            key={index}
            href={job.url}
            target='_blank'
            rel='noopener noreferrer'
            className='block group hover:opacity-80 transition-opacity duration-200'
          >
            <div className='flex flex-col'>
              <div className='w-full flex justify-between items-baseline'>
                <span className='text-black dark:text-white font-medium tracking-tight'>
                  {job.title} →
                </span>
                <span className='text-neutral-600 dark:text-neutral-400 tabular-nums text-sm'>
                  {job.start} {job?.end ? ` - ${job.end}` : ' - Present'}
                </span>
              </div>
              <p className='prose prose-neutral dark:prose-invert pt-3'>
                {job.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
