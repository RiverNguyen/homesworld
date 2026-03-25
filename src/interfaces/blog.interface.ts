export interface ApiResponse<T> {
  success: boolean;
  total: number;
  totalPages: number;
  page: number;
  limit: number;
  count: number;
  data: T[];
};

export interface PostItem {
  id: number;
  title: string;
  slug: string;
  type: string;
  excerpt: string;
  published: string;
  permalink: string;
  thumbnail: {
    id: number;
    url: string;
  };
  taxonomies: {
    category: Category[];
  };
  acf: any | null;
};

export interface Category {
  id: number;
  name: string;
  slug: string;
};
