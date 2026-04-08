import Link from "next/link";
import { blogPosts } from "@/lib/seo-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Godfather Funnel AI | AEO & AI Marketing Insights",
  description:
    "Learn how to make AI recommend your business. Guides on AEO, schema markup, AI visibility, and industry-specific AI marketing strategies.",
};

export default function BlogIndex() {
  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
            Knowledge Hub
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            AEO & AI Marketing{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Everything you need to know about making AI recommend your business.
            Guides, strategies, and industry-specific playbooks.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-16">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
              {cat}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.category === cat)
                .map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-purple-500/20 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-gray-600">
                        {post.readTime} read
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                    <div className="mt-4 text-sm text-blue-400 font-medium group-hover:text-blue-300 transition">
                      Read article →
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
