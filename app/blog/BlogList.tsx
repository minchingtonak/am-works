'use client';

import { format } from 'date-fns';
import { Post } from 'lib/mdx';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedTag = searchParams.get('tag');

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  // Filter posts if a tag is selected
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.tags?.includes(selectedTag));
  }, [posts, selectedTag]);

  const handleTagClick = (tag: string) => {
    if (tag === selectedTag) {
      router.push('/blog');
    } else {
      router.push(`/blog?tag=${tag}`);
    }
  };

  return (
    <div className='m-auto grid gap-8 fade-in-bottom'>
      {/* Tags section */}
      <div className='flex flex-wrap gap-2 h-2'>
        <button
          onClick={() => router.push('/blog')}
          className={`px-3 py-1 rounded-full text-sm ${
            !selectedTag
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
          }`}
        >
          all
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              tag === selectedTag
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts section */}
      {filteredPosts.map((post) => (
        <article key={post.slug} className='border-b border-gray-200 pb-8'>
          <Link href={`/blog/${post.slug}`}>
            <span className='text-black dark:text-white font-medium tracking-tight block group transition-opacity duration-200'>
              {post.title} →
            </span>
          </Link>
          <span className='text-neutral-600 dark:text-neutral-400 tabular-nums text-sm'>
            {format(new Date(post.date), 'MMMM dd, yyyy')}
          </span>
          <p className='prose prose-neutral dark:prose-invert pt-3'>
            {post.excerpt}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className='flex flex-wrap gap-2 mt-2'>
              {post.tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className='text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
