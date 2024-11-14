export default function Page() {
  return (
    <section>
      <div className='prose prose-neutral dark:prose-invert'>
        <p className='text-2xl font-bold tracking-tight'>
          Hey, I'm <mark className='text-[#B95B54] bg-transparent'>Andrew</mark>{' '}
          &mdash; a{' '}
          <mark className='text-[#B95B54] bg-transparent'>
            product-focused, fullstack software engineer
          </mark>{' '}
          and{' '}
          <mark className='text-[#B95B54] bg-transparent'>
            chronic hobbyist
          </mark>{' '}
          based in Charlotte, North Carolina.
        </p>
        <p>
          I’m passionate about building solutions that improve how people
          interact with the technology that they use daily. I’ve had the
          privilege to work in various industries and build a variety of
          products across the tech stack. With a creative approach to my work, I
          focus on user experience and visual design to bring a thoughtful touch
          to the products I build. Outside of work, I enjoy photography, movies,
          cycling, and a slew of other interests and hobbies.
        </p>
        <p>
          Currently open to freelance and full-time opportunities. Let's{' '}
          <a href='mailto:andrewnwhitely@gmail.com?Subject=Hey!'>talk</a>!
        </p>
      </div>
    </section>
  );
}
