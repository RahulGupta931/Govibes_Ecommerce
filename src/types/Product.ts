export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: 'men' | 'women' | 'unisex';
  colors: string[];
  sizes?: string[];
  features: string[];
  description: string;
  isFeatured?: boolean;
  isNew?: boolean;
  rating: number;
  reviews: number;
  stock: number;
}