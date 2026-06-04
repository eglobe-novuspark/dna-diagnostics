export interface Test {
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
  homeFeatured?: boolean;
  popular?: boolean;

  // NEW FIELDS FOR CATEGORY SECTION
  discount?: number;
  labName?: string;
  testName?: string;
  testPrice?: number;
  reportsTime?: string;
  specialist?: string;
  fullTestName?: string;
}