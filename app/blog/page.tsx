import { getAllPosts } from 'lib/mdx';
import { Suspense } from 'react';
import BlogList from './BlogList';

export const metadata = {
  title: 'Blog',
  description: 'Thoughts, ideas, and insights.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section>
      <Suspense>
        <BlogList posts={posts} />
      </Suspense>
    </section>
  );
}
