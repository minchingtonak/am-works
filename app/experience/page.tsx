import { ResumeItem } from 'app/components/ResumeItem';
import { ROLES } from './experience-data';
import { ResumeDownloadLink } from 'app/components/ResumeDownloadLink';

export default function Experience() {
  return (
    <section>
      <div className="text-xl font-bold fade-in-bottom">
        Currently at{' '}
        <mark
          style={{
            color: '#DE3341',
          }}
        >
          <a
            href="https://www.rocketloans.com/"
            target="_blank"
            className="hover:bg-[#007481] hover:text-white decoration-dotted underline"
          >
            Rocket Loans
          </a>
        </mark>
        , previously at{' '}
        <mark
          style={{
            color: '#FF9900',
          }}
        >
          <a
            href="https://aws.amazon.com/"
            target="_blank"
            className="hover:bg-[#007481] hover:text-white decoration-dotted underline"
          >
            Amazon Web Services
          </a>
        </mark>
        , and before then at{' '}
        <mark
          style={{
            color: '#4D8B31',
          }}
        >
          <a
            href="https://needlestack.tech/"
            target="_blank"
            className=" hover:bg-[#007481] hover:text-white underline"
          >
            Needlestack
          </a>
        </mark>
        .
        <div className="mt-6 mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Want a PDF copy of my resumé to keep handy? <ResumeDownloadLink />
          </p>
        </div>
        <hr className="flex m-auto my-4 opacity-75 dark:opacity-25 w-full" />
      </div>
      <div className="fade-in-bottom delay-500">
        <h1 className="mb-4 text-2xl font-medium tracking-tight">Experience</h1>
        {/* // TODO auto order by year/month. can represent start and end as dayjs obj, stringify to render or compare to sort */}
        <div className="space-y-6">
          {ROLES.map((job) => (
            <ResumeItem key={job.title} item={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
