// features/tests/models/test.interface.ts
export interface Test {
  id: number;
  title: string;
  category: string;
  displayCategory?: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  reportsIn?: string;
  doctor?: string; // e.g. "DIABETOLOGIST, GYNECOLOGIST"
  badge?: string;  // "NA Labs India", etc.
}