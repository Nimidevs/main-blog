export interface Post {
  _id: string;
  title: string;
  post: string;
  post_text: string;
  title_text: string;
  title_preview: string;
  subtitle_preview: string;
  image_preview: string;
  created_at: string;
  published: boolean;
  visit_count: number;
  featured: boolean;
  editors_pick: boolean;
  likes: number;
  updated_at: string;
  trending_score: number;
  viewTimeStamps: string[];
  author: author;
  categories: categories[];
}

interface author {
  _id: string;
  first_name: string;
  last_name: string;
}

interface categories {
  _id: string;
  name: string;
}
