import { getAllResources, getResourceBySlug } from "@/lib/resources";
import { generateBreadcrumbSchema } from "@/lib/schema-helpers";
import SchemaScript from "@/components/SchemaScript";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const BASE = "https://www.godfatherfunnelai.com";

export function generateStaticParams() {
  return getAllResources().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return {
    title: `${resource.title} | Godfather Funnel AI`,
    description: resource.description,
  };
}

export default async function ResourcePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  return (
    <>
      <SchemaScript
        data={generateBreadcrumbSchema([
          { name: "Home", url: BASE },
          { name: "Resources", url: `${BASE}/resources` },
          { name: resource.title, url: `${BASE}/resources/${resource.slug}` },
        ])}
      />

      <article className="pt-32 pb-16 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <a
              href="/resources"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              ← Back to Resources
            </a>
          </div>

          <div className="mb-12">
            <span className="text-5xl mb-4 block">{resource.icon}</span>
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-4">
              {resource.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
              {resource.title}
            </h1>
            <p className="text-lg text-gray-400">{resource.description}</p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-300 prose-li:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-code:bg-[#1a1a2e] prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-blue-300 prose-pre:bg-[#12121a] prose-pre:border prose-pre:border-white/5 prose-table:border-collapse prose-th:border prose-th:border-white/10 prose-th:p-3 prose-th:bg-[#12121a] prose-td:border prose-td:border-white/10 prose-td:p-3">
            <div
              dangerouslySetInnerHTML={{
                __html: resource.content
                  .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                  .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                  .replace(/^# (.*$)/gm, '<h1>$1</h1>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/^- (.*$)/gm, '<li>$1</li>')
                  .replace(/(<li>[\s\S]*<\/li>)/, '<ul>$1</ul>')
                  .replace(
                    /```(\w*)\n([\s\S]*?)```/g,
                    '<pre><code class="language-$1">$2</code></pre>',
                  )
                  .replace(
                    /\[([^\]]+)\]\(([^)]+)\)/g,
                    '<a href="$2">$1</a>',
                  ),
              }}
            />
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Want Help Implementing This?
          </h2>
          <p className="text-gray-400 mb-8">
            Our team handles all of this for you. Get a free AI visibility audit
            and see where you stand.
          </p>
          <a
            href="/audit"
            className="inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Get Your Free AI Audit →
          </a>
        </div>
      </section>
    </>
  );
}
