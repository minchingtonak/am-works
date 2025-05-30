'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeSwitch } from './theme-switch';

const navItems = {
  '/': { name: 'home' },
  '/experience': { name: 'experience' },
  // TODO uses page
  // '/uses': { name: 'uses' },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            🧔🏻‍♂️💻🌱
          </Link>
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span
                className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center`}
        >
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
