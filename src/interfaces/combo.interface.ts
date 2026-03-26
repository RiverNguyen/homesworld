export interface ApiResponse {
  success: boolean;
  total: number;
  totalPages: number;
  page: number;
  limit: number;
  count: number;
  data: ComboItem[];
}

export interface ComboItem {
  id: number;
  title: string;
  slug: string;
  type: string;
  excerpt: string;
  published: string;
  permalink: string;
  thumbnail: Thumbnail;
  taxonomies: Taxonomies;
  acf: any | null;
}

export interface Thumbnail {
  id: number;
  url: string | null;
}

export interface Taxonomies {
  service_combo: ServiceCombo[];
}

export interface ServiceCombo {
  id: number;
  name: string;
  slug: string;
}