// Blog post data type
export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
};

// Resource type for downloadable items
export type Resource = {
  id: string;
  title: string;
  description: string;
  type: 'ebook' | 'whitepaper' | 'template' | 'video' | 'webinar';
  downloadUrl: string;
  imageUrl: string;
  publishedAt: string;
  featured?: boolean;
}; 