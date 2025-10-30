import { ResumeDownloadLink } from './components/ResumeDownloadLink';

export default function Page() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
        <p className="text-2xl font-bold tracking-tight fade-in-bottom">
          Hey, I'm{' '}
          <mark
            style={{
              color: '#61d22e',
            }}
          >
            Alec
          </mark>{' '}
          &mdash; a product-focused software engineer and lifelong hobbyist based
          in Detroit, MI.
        </p>
        <p className="fade-in-bottom delay-500">
          As a software engineer, I thrive on tackling complex challenges. While
          my expertise centers on front-end development, I enjoy exploring every
          layer of the technology stack. I'm driven by creating solutions that
          enhance daily user interactions while delivering polished, intuitive
          experiences and thoughtful visual design.
        </p>
      </div>
      <div className="mt-12">
        <p className="text-sm text-gray-600 dark:text-gray-400 fade-in-bottom delay-700">
          Want a PDF copy of my resumé to keep handy? <ResumeDownloadLink />
        </p>
      </div>
    </section>
  );
}
