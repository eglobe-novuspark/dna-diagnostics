import { TestCategory } from "../models/category.interface";

export const TEST_CATEGORIES :TestCategory [] = [

  {
    id: 1,
    title: 'Paternity DNA Test',
    slug: 'paternity-dna-test',
    category: 'dna-test',
    shortDescription: 'DNA testing for biological father verification.',
    description: 'Accurate paternity DNA test with certified lab reports.',
    price: 12999,
    oldPrice: 14999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl2.webp',
    featured: true
  },

  {
    id: 2,
    title: 'Maternity DNA Test',
    slug: 'maternity-dna-test',
    category: 'dna-test',
    shortDescription: 'Biological mother verification test.',
    description: 'Highly accurate maternity DNA test reports.',
    price: 11999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl1.webp',
    featured: true
  },

  {
    id: 3,
    title: 'Ancestry DNA Test',
    slug: 'ancestry-dna-test',
    category: 'dna-test',
    shortDescription: 'Discover your family ancestry.',
    description: 'Explore your genetic heritage and ethnicity.',
    price: 8999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl3.webp',
    featured: true
  },

  {
    id: 4,
    title: 'Prenatal DNA Test',
    slug: 'prenatal-dna-test',
    category: 'dna-test',
    shortDescription: 'Safe prenatal DNA testing.',
    description: 'Non-invasive prenatal DNA test during pregnancy.',
    price: 24999,
    image: 'assets/images/tests/prenatal.jpg'
  },

  {
    id: 5,
    title: 'Cancer Risk DNA Test',
    slug: 'cancer-risk-dna-test',
    category: 'health-test',
    shortDescription: 'Genetic cancer risk analysis.',
    description: 'Identify inherited cancer risks through DNA.',
    price: 17999,
    image: 'assets/images/tests/cancer.jpg'
  },

  {
    id: 6,
    title: 'Diabetes Genetic Test',
    slug: 'diabetes-genetic-test',
    category: 'health-test',
    shortDescription: 'DNA-based diabetes risk analysis.',
    description: 'Understand genetic diabetes predisposition.',
    price: 9999,
    image: 'assets/images/tests/diabetes.jpg'
  },

  {
    id: 7,
    title: 'Heart Health DNA Test',
    slug: 'heart-health-dna-test',
    category: 'health-test',
    shortDescription: 'Cardiac genetic analysis.',
    description: 'Evaluate inherited heart disease risks.',
    price: 10999,
    image: 'assets/images/tests/heart.jpg'
  },

  {
    id: 8,
    title: 'Nutrition DNA Test',
    slug: 'nutrition-dna-test',
    category: 'wellness-test',
    shortDescription: 'DNA nutrition profile.',
    description: 'Personalized nutrition recommendations.',
    price: 7999,
    image: 'assets/images/tests/nutrition.jpg'
  }

];
