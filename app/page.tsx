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
          &mdash; a product-focused software engineer and serial hobbyist based
          in Seattle, WA.
        </p>
        <p className="fade-in-bottom delay-500">
          As a software engineer, I thrive on tackling complex challenges. While
          my expertise centers on front-end development, I enjoy exploring every
          layer of the technology stack. I'm driven by creating solutions that
          enhance daily user interactions while delivering polished, intuitive
          experiences and thoughtful visual design.
        </p>
        <p className="fade-in-bottom delay-500">
          I'm actively seeking freelance projects and full-time roles. Let's{' '}
          <a href="mailto:contact@minch.cc?Subject=Hey!">talk</a>!
        </p>
      </div>
      <div className="mt-6 mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 fade-in-bottom delay-700">
          Want a PDF copy of my resumé to keep handy?{' '}
          <a
            href="/Alec-Minchington-Resume.pdf"
            download="Alec-Minchington-Resume.pdf"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-dotted hover:decoration-solid transition-colors"
          >
            Grab it here 📄
          </a>
        </p>
      </div>
    </section>
  );
}
