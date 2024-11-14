import type { Metadata } from 'next';
import { Products } from './uses-data';

export const metadata: Metadata = {
  title: `Uses`,
  description: 'all of the stuff',
};

export default function Uses() {
  return (
    <section>
      <div className='text-2xl font-bold'>Uses</div>
      <hr className='flex m-auto my-4 opacity-75 dark:opacity-25 w-full' />
      {/* Workspace */}
      <h1 className='mb-4 text-2xl font-medium tracking-tight'>Workspace</h1>
      {Products.filter(
        (product, index) => product.category === 'workspace'
      ).map((product, index) => (
        <div key={index} className='flex flex-col'>
          <div className='w-full flex justify-between items-baseline'>
            <span className='text-black dark:text-white font-medium tracking-tight block group transition-opacity duration-200'>
              <p key={index}>
                {product.name}
                <br />
                {product.description ? (
                  <small className='ml-3'>» {product.description}</small>
                ) : null}
              </p>
            </span>
          </div>
          <p className='prose prose-neutral dark:prose-invert pt-3'></p>
        </div>
      ))}

      <hr className='flex m-auto my-4 opacity-75 dark:opacity-25 w-full' />

      {/* Photography */}
      <h1 className='mb-4 text-2xl font-medium tracking-tight'>Photography</h1>
      {Products.filter(
        (product, index) => product.category === 'photography'
      ).map((product, index) => (
        <div key={index} className='flex flex-col'>
          <div className='w-full flex justify-between items-baseline'>
            <span className='text-black dark:text-white font-medium tracking-tight block group transition-opacity duration-200'>
              <p key={index}>
                {product.name}
                <br />
                {product.description ? (
                  <small className='ml-3'>» {product.description}</small>
                ) : null}
              </p>
            </span>
          </div>
          <p className='prose prose-neutral dark:prose-invert pt-3'></p>
        </div>
      ))}

      <hr className='flex m-auto my-4 opacity-75 dark:opacity-25 w-full' />

      {/* Software */}
      <h1 className='mb-4 text-2xl font-medium tracking-tight'>Software</h1>
      {Products.filter((product, index) => product.category === 'software').map(
        (product, index) => (
          <div key={index} className='flex flex-col'>
            <div className='w-full flex justify-between items-baseline'>
              <span className='text-black dark:text-white font-medium tracking-tight block group transition-opacity duration-200'>
                <p key={index}>
                  {product.name}
                  <br />
                  {product.description ? (
                    <small className='ml-3'>» {product.description}</small>
                  ) : null}
                </p>
              </span>
            </div>
            <p className='prose prose-neutral dark:prose-invert pt-3'></p>
          </div>
        )
      )}

      <hr className='flex m-auto my-4 opacity-75 dark:opacity-25 w-full' />

      {/* Gaming */}
      <h1 className='mb-4 text-2xl font-medium tracking-tight'>Gaming</h1>
      {Products.filter((product, index) => product.category === 'gaming').map(
        (product, index) => (
          <div key={index} className='flex flex-col'>
            <div className='w-full flex justify-between items-baseline'>
              <span className='text-black dark:text-white font-medium tracking-tight block group hover:opacity-80 transition-opacity duration-200'>
                <p key={index}>
                  {product.name}
                  <br />
                  {product.description ? (
                    <small className='ml-3'>» {product.description}</small>
                  ) : null}
                </p>
              </span>
            </div>
            <p className='prose prose-neutral dark:prose-invert pt-3'></p>
          </div>
        )
      )}

      <div className='space-y-6'></div>
    </section>
  );
}
