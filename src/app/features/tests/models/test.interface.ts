export interface ServiceDetail {
  service: string;
  validity: string;
  price: string;
}

export interface Test {

  id: number;

  title: string;

  slug: string;
  displayCategory?: string;
  descriptionSections?: {
  heading: string;
  content: string;
}[];

  badge?: string;
  category: string;

  price: number;

  oldPrice: number;

  discount: number;

  image: string;

  // MULTIPLE IMAGES
  images: string[];

  doctor: string;

  reportsTime: string;

  // SHORT DESCRIPTION
  description: string;


  // TABLE DATA
  serviceDetails: ServiceDetail[];
  descriptionContent?: DescriptionBlock[];

}


export interface DescriptionBlock {

  title?: string;

  heading?: string;

  content?: string;

  bullets?: string[];

}