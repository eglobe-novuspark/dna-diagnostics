
export interface TestCategory {
  id: number;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  featured?: boolean;
}