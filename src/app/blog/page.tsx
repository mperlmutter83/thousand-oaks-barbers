import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedPosts } from '@/lib/blog-data';
import { getPosts, toRenderPost, type RenderPost } from '@/lib/api';

// Revalidate every 24 hours (86400 seconds) so scheduled posts surface automatically

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Barber tips, haircut trends, and grooming advice from Thousand Oaks Barbers. Expert insights for men\'s grooming.',
};

const SITE_DOMAIN = 'thousandoaksbarbers.com';

export const revalidate = 60;

export default async function BlogPage() {
  const apiPosts = await getPosts(SITE_DOMAIN);
  const publishedPosts: RenderPost[] = apiPosts.length > 0 ? apiPosts.map(toRenderPost) : getPublishedPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-gray-400 text-lg">Tips, trends, and advice from your local barbers</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-zinc-900 rounded-xl overflow-hidden hover:bg-zinc-800 transition-colors group"
              >
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-amber-500 text-sm mb-2">{post.date} • {post.category}</p>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Notified Of New Posts</h2>
          <p className="text-gray-400 mb-8">Stay updated with the latest grooming tips and trends.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
            <button className="bg-amber-500 text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
