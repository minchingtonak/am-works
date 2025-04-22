export default function Page() {
  return (
    <section>
      <div className='prose prose-neutral dark:prose-invert'>
        <p className='text-2xl font-bold tracking-tight fade-in-bottom'>
          Hey, I'm{' '}
          <mark
            style={{
              color: '#4D8B31',
            }}
          >
            Andrew
          </mark>{' '}
          &mdash; a product-focused software engineer and chronic hobbyist based
          in Charlotte, North Carolina.
        </p>
        <p className='fade-in-bottom delay-500'>
          I'm a software engineer who loves diving into the deep end. I have a
          focus on front-end development, but love exploring all areas of the
          tech stack. I'm passionate about building solutions that not only
          improve how people interact with the things that they use daily, but
          providing a clean and enjoyable user experience and visual design to
          the products I deliver.
        </p>
        <p className='fade-in-bottom delay-500'>
          Currently open to freelance and full-time opportunities. Let's{' '}
          <a href='mailto:andrewnwhitely@gmail.com?Subject=Hey!'>talk</a>!
        </p>
      </div>
    </section>
  );
}
