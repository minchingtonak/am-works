import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Jobs, Role } from './experience-data';

const formatDateRange = (job: Role) => {
  const startDate = job.startMonth ? `${job.startMonth} ${job.start}` : job.start;

  if (job.end) {
    const endDate = job.endMonth ? `${job.endMonth} ${job.end}` : job.end;
    return `${startDate} – ${endDate}`;
  } else if (job.start > new Date().getFullYear()) {
    return startDate;
  } else {
    return `${startDate} – Present`;
  }
};

// TODO auto order by year/month
// can represent start and end as dayjs obj, stringify to render or compare to sort
export default function Experience() {
  return (
    <section>
      <div className='text-xl font-bold fade-in-bottom'>
        Currently at{' '}
        <mark
          style={{
            color: '#FF9900',
          }}
        >
          <a
            href='https://aws.amazon.com/'
            target='_blank'
            className='hover:bg-[#007481] hover:text-white decoration-dotted'
          >
            Amazon Web Services
          </a>
        </mark>
        , previously at{' '}
        <mark
          style={{
            color: '#4D8B31',
          }}
        >
          <a
            href='https://needlestack.tech/'
            target='_blank'
            className=' hover:bg-[#2356f6] hover:text-white'
          >
            Needlestack
          </a>
        </mark>
        {/* , and before then at{' '}
        <mark
          style={{
            color: '#4D8B31',
          }}
        >
          <a
            href='https://capitalone.com/'
            target='_blank'
            className=' hover:bg-[#355f7f] hover:text-white'
          >
            Capital One
          </a>
        </mark> */}
        .
        <div className='mt-6 mb-4'>
          <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
            Want a PDF copy to keep handy?{' '}
            <a
              href='/Alec-Minchington-Resume.pdf'
              download='Alec-Minchington-Resume.pdf'
              className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-dotted hover:decoration-solid transition-colors'
            >
              Grab it here 📄
            </a>
          </p>
        </div>
        <hr className='flex m-auto my-4 opacity-75 dark:opacity-25 w-full' />
      </div>
      <div className='fade-in-bottom delay-500'>
        <h1 className='mb-4 text-2xl font-medium tracking-tight'>Experience</h1>
        <div className='space-y-6'>
          {Jobs.map((job, index) => (
            <div key={index} className='pb-4'>
              <div className='w-full items-baseline'>
                <h3 className='text-black dark:text-white  tracking-tight block group transition-opacity duration-200 text-xl'>
                  {job.role}
                </h3>
                <small>
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
                    {job.title}
                    <FaArrowUpRightFromSquare className='inline-block align-baseline ml-1 w-2.5 h-2.5' />
                  </a>{' '}
                  <span className='text-black dark:text-white font-medium tracking-tight group transition-opacity duration-200'>
                    {' '}
                    • {formatDateRange(job)}
                  </span>
                </small>
              </div>
              {job.description && (
                <p className='prose prose-neutral dark:prose-invert pt-3'>
                  {job.description}
                </p>
              )}
              {job.bullets && job.bullets.length > 0 && (
                <ul className='prose prose-neutral dark:prose-invert pt-3 list-disc list-outside space-y-2 pl-5'>
                  {job.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className='text-md leading-relaxed'>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
