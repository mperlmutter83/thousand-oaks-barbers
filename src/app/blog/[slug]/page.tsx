import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog-data';

// Revalidate every 24 hours (86400 seconds) so scheduled posts surface automatically
export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const title = post.seoTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-amber-500 hover:text-amber-400 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <p className="text-amber-500 text-sm mb-4">{post.date} • {post.category}</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-white">{post.title}</h1>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-xl shadow-2xl -mt-8"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-li:text-gray-300 prose-a:text-amber-500 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index}>{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index}>
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '').replace(/\*\*/g, '')}</li>
                    ))}
                  </ul>
                );
              } else {
                return <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
              }
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-zinc-900 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for Your Next Cut?</h3>
            <p className="text-gray-400 mb-6">Book your appointment at Thousand Oaks Barbers today.</p>
            <Link
              href="/book"
              className="inline-block bg-amber-500 text-zinc-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
