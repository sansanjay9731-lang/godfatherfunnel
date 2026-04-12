import { notFound } from "next/navigation";
import { getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";

const blogPosts = getAllBlogPosts();

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Godfather Funnel AI`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishDate,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Related posts (same category or niche, max 3)
  const related = blogPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category || p.niche === post.niche)
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      <article className="max-w-3xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-400">{post.category}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full font-medium">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">{post.readTime} read</span>
            <span className="text-xs text-gray-500">{post.publishDate}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            {post.description}
          </p>
        </div>

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.godfatherfunnelai.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: "https://www.godfatherfunnelai.com/blog",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: `https://www.godfatherfunnelai.com/blog/${post.slug}`,
                },
              ],
            }),
          }}
        />
        {/* Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              datePublished: post.publishDate,
              dateModified: post.publishDate,
              image: "https://www.godfatherfunnelai.com/og-image.png",
              author: {
                "@type": "Organization",
                name: "Godfather Funnel AI",
                url: "https://www.godfatherfunnelai.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Godfather Funnel AI",
                url: "https://www.godfatherfunnelai.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.godfatherfunnelai.com/logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://www.godfatherfunnelai.com/blog/${post.slug}`,
              },
            }),
          }}
        />

        {/* Content */}
        <div className="prose prose-invert prose-sm max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-li:text-gray-300 prose-table:text-sm prose-th:text-white prose-th:bg-white/5 prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 prose-td:border-white/5 prose-code:text-purple-300 prose-pre:bg-[#12121a] prose-pre:border prose-pre:border-white/5">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("## "))
              return (
                <h2 key={i} className="text-2xl mt-10 mb-4">
                  {line.replace("## ", "")}
                </h2>
              );
            if (line.startsWith("### "))
              return (
                <h3 key={i} className="text-xl mt-8 mb-3">
                  {line.replace("### ", "")}
                </h3>
              );
            if (line.startsWith("- [ ] "))
              return (
                <div key={i} className="flex items-start gap-2 my-1">
                  <span className="text-gray-600 mt-0.5">☐</span>
                  <span className="text-gray-300 text-sm">
                    {line.replace("- [ ] ", "").replace(/\*\*/g, "")}
                  </span>
                </div>
              );
            if (line.startsWith("- "))
              return (
                <li key={i} className="text-gray-300 text-sm my-1">
                  {line.replace("- ", "").replace(/\*\*/g, "")}
                </li>
              );
            if (line.startsWith("> "))
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-purple-500/50 pl-4 text-gray-400 italic my-4"
                >
                  {line.replace("> ", "")}
                </blockquote>
              );
            if (line.startsWith("| ")) {
              const cells = line
                .split("|")
                .filter((c) => c.trim())
                .map((c) => c.trim());
              if (cells.every((c) => c.match(/^[-]+$/))) return null;
              return (
                <div
                  key={i}
                  className="grid gap-2 text-sm my-1"
                  style={{
                    gridTemplateColumns: `repeat(${cells.length}, 1fr)`,
                  }}
                >
                  {cells.map((cell, ci) => (
                    <div
                      key={ci}
                      className="px-3 py-1.5 bg-white/5 rounded text-gray-300"
                    >
                      {cell.replace(/\*\*/g, "")}
                    </div>
                  ))}
                </div>
              );
            }
            if (line.trim() === "") return <div key={i} className="h-2" />;
            if (line.startsWith("```")) return null;
            // Handle links in text
            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
            if (linkRegex.test(line)) {
              const parts = line.split(linkRegex);
              return (
                <p key={i} className="text-gray-300 text-sm leading-relaxed my-2">
                  {parts.map((part, pi) => {
                    if (pi % 3 === 1)
                      return (
                        <Link
                          key={pi}
                          href={parts[pi + 1]}
                          className="text-blue-400 hover:underline"
                        >
                          {part}
                        </Link>
                      );
                    if (pi % 3 === 2) return null;
                    return <span key={pi}>{part.replace(/\*\*/g, "")}</span>;
                  })}
                </p>
              );
            }
            return (
              <p key={i} className="text-gray-300 text-sm leading-relaxed my-2">
                {line.replace(/\*\*/g, "")}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Check Your AI Visibility Now
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Free audit in 30 seconds. See what AI sees about your business.
          </p>
          <Link
            href="/audit"
            className="inline-block px-8 py-4 text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all"
          >
            Get Free AI Audit →
          </Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-white mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block bg-[#12121a] border border-white/5 rounded-xl p-5 hover:border-purple-500/20 transition-all"
                >
                  <span className="text-[10px] text-purple-400">
                    {r.category}
                  </span>
                  <h3 className="text-sm font-semibold text-white mt-1 line-clamp-2">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
