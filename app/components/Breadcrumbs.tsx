'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbsProps {
  postTitle?: string;
}

export default function Breadcrumbs({ postTitle }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Split the pathname and filter out empty strings
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  // Function to format segment for display (capitalize and replace hyphens with spaces)
  const formatSegment = (segment: string, index: number) => {
    // If this is the last segment and it's a blog post slug, use the post title
    if (
      index === pathSegments.length - 1 &&
      pathSegments[0] === 'blog' &&
      postTitle
    ) {
      return postTitle;
    }
    return segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className='text-sm mb-4' aria-label='Breadcrumb'>
      <ol className='flex items-center'>
        <li>
          <Link
            href='/'
            className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          >
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={segment} className='flex items-center'>
            <span className='mx-2 text-gray-400'>»</span>
            {index === pathSegments.length - 1 ? (
              <span className='text-gray-900 dark:text-white'>
                {formatSegment(segment, index)}
              </span>
            ) : (
              <Link
                href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              >
                {formatSegment(segment, index)}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
