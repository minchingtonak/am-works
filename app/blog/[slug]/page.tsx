import { format } from 'date-fns';
import { getAdjacentPosts, getPostBySlug } from 'lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const { prev, next } = getAdjacentPosts(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className='container mx-auto px-4 py-8'>
      <p className='text-gray-600 mb-8'>
        {format(new Date(post.date), 'MMMM dd, yyyy')}
      </p>
      <div className='prose prose-lg max-w-none'>
        <MDXRemote source={post.content} />
      </div>

      <div className='mt-12 flex justify-between border-t pt-8'>
        {prev && (
          <Link
            href={`/blog/${prev.slug}`}
            className='text-blue-600 hover:text-blue-800'
          >
            ← {prev.title}
          </Link>
        )}
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className='text-blue-600 hover:text-blue-800 ml-auto'
          >
            {next.title} →
          </Link>
        )}
      </div>
    </article>
  );
}
