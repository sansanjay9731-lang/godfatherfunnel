import type { InternalLink } from "@/lib/internal-links";

export default function RelatedPages({
  title,
  links,
  columns = 3,
}: {
  title: string;
  links: InternalLink[];
  columns?: 2 | 3 | 4;
}) {
  if (links.length === 0) return null;
  const gridClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-16 bg-[#0a0a0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>
        <div className={`grid ${gridClass} gap-4`}>
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="block p-4 bg-[#12121a] border border-white/5 rounded-xl hover:border-white/10 hover:bg-[#16161f] transition-all group"
            >
              <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                {link.title}
              </h3>
              {link.description && (
                <p className="mt-1 text-xs text-gray-500">{link.description}</p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
