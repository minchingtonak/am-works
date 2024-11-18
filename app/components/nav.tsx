import Link from 'next/link';
import { ThemeSwitch } from './theme-switch';

const navItems = {
  '/': { name: 'home' },
  '/work': { name: 'work' },
  '/uses': { name: 'uses' },
};

export function Navbar() {
  return (
    <nav className='lg:mb-16 mb-12 py-5'>
      <div className='flex flex-col md:flex-row md:items-center justify-between'>
        <div className='flex items-center'>
          <Link href='/' className='text-3xl font-semibold tracking-tight'>
            👨🏾‍💻
          </Link>
        </div>
        <div className='flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center'>
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative'
            >
              {name}
            </Link>
          ))}
          <Link
            href='https://www.byandrew.xyz'
            target='_blank'
            className='align-middle'
          >
            photography →
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
