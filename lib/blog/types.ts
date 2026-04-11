export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  niche: string;
  publishDate: string;
  readTime: string;
  content: string;
  author?: string;
  tags?: string[];
  relatedNiches?: string[];
  city?: string;
}
