// In your TESTS_MOCK file - Updated first 4 items

import { Test } from "../models/test.interface";

export const TESTS_MOCK: Test[] = [

  {
    id: 1,
    title: 'Paternity DNA Test',
    slug: 'paternity-dna-test',
    category: 'dna-test',
    shortDescription: 'DNA testing for biological father verification.',
    description: 'Accurate paternity DNA test with certified lab reports.',
    price: 13000,
    oldPrice: 20000,
    image: 'https://dnalabsindia.com/storage/2024/06/srg-dna-441x441.webp',
    popular:false,
    discount: 35,
    labName: 'DNA Labs India',
    testName: 'Whole Exome Sequencing WES Test',
    testPrice: 24000,
    reportsTime: '4 weeks',
    specialist: 'GENETICIAN',
    fullTestName: 'Whole Exome Sequencing + RAW DATA WES Test Cost',    
  },

  {
    id: 2,
    title: 'Pregnancy Non-Invasive Prenatal NIPT Test Cost',
    slug: 'nipt-test',
    category: 'dna-test',
    shortDescription: 'Biological mother verification test.',
    description: 'Highly accurate maternity DNA test reports.',
    price: 10000,
    oldPrice: 18000,
    image: 'https://dnalabsindia.com/storage/2024/06/nipt-test-report-cost-441x441.webp',
    popular:false,
    discount: 50,
    labName: 'DNA Labs India',
    testName: 'Breast Cancer BRCA1 BRCA2 Gene Test',
    testPrice: 15000,
    reportsTime: '3 Weeks',
    specialist: 'ONCOLOGIST',
    fullTestName: 'Breast Cancer BRCA1 BRCA2 Gene Test Cost'
  },

  {
    id: 3,
    title: 'DNA Genetic Methylation Test Cost',
    slug: 'dna-methylation-test',
    category: 'health-test',
    shortDescription: 'Genetic cancer risk analysis.',
    description: 'Identify inherited cancer risks through DNA.',
    price: 15000,
    oldPrice: 30000,
    image: 'https://dnalabsindia.com/storage/2024/06/DNA_Genetic_Methylation_Test-441x441.webp',
    popular:false,
    discount: 23,
    labName: 'DNA Labs India',
    testName: 'Comprehensive Hereditary Cancer Panel (150 Genes) Test',
    testPrice: 18000,
    reportsTime: '4 weeks',
    specialist: 'PHYSICIAN, ONCOLOGIST',
    fullTestName: 'Comprehensive Hereditary Cancer Panel (190 Genes) Test Cost'
  },

  {
    id: 4,
    title: 'Family Tree Ancestry DNA Test',
    slug: 'ancestry-dna-test',
    category: 'wellness-test',
    shortDescription: 'Discover your family ancestry.',
    description: 'Explore your genetic heritage and ethnicity.',
    price: 15000,
    oldPrice: 30000,
    image: 'https://dnalabsindia.com/storage/2024/06/ancestry-dna-test-441x441.png',
    popular:false,
    discount: 29,
    labName: 'DNA Labs India',
    testName: 'Clinical Exome Next Generation Sequencing Test',
    testPrice: 20000,
    reportsTime: '4 weeks',
    specialist: 'GENETICIAN',
    fullTestName: 'Clinical Exome Next Generation Sequencing Test Cost'
  },

  {
    id: 5,
    title: 'Congenital Hypothyroidism Confirmatory Panel Serum Test Cost',
    slug: 'sibling-dna-test',
    category: 'dna-test',
    shortDescription: 'DNA relationship testing between siblings.',
    description: 'Verify biological sibling relationships accurately.',
    price: 900,
    oldPrice: 1000,
    image: 'https://dnalabsindia.com/storage/2024/06/genetic-test-id-1-768x768.webp',
    popular:true,
  },

  // =====================================================
  // HEALTH TEST CATEGORY
  // =====================================================

  {
    id: 6,
    title: 'Cancer Risk DNA Test',
    slug: 'cancer-risk-dna-test',
    category: 'health-test',
    shortDescription: 'Genetic cancer risk analysis.',
    description: 'Identify inherited cancer risks through DNA.',
    price: 17999,
    oldPrice: 20999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl3.webp',
    popular:false,
    featured: true
  },

  {
    id: 7,
    title: 'Alkaline Phosphatase Bone-Specific; BSAP Test Cost',
    slug: 'diabetes-genetic-test',
    category: 'health-test',
    shortDescription: 'DNA-based diabetes risk analysis.',
    description: 'Understand genetic diabetes predisposition.',
    price: 900,
    oldPrice: 1000,
    image: 'https://dnalabsindia.com/storage/2024/06/genetic-test-id-2-768x768.webp',
    popular:true,
    
  },

  {
    id: 8,
    title: 'Beta CTx; Beta Crosslaps; Collagen Type 1C-Telopeptide Test Cost',
    slug: 'heart-health-dna-test',
    category: 'health-test',
    shortDescription: 'Cardiac genetic analysis.',
    description: 'Evaluate inherited heart disease risks.',
    price: 1000,
    oldPrice: 1200,
    image: 'https://dnalabsindia.com/storage/2024/06/genetic-test-id-3-768x768.webp',
    popular:true
  },
  

  {
    id: 9,
    title: 'Catecholamines Plasma Test Cost',
    slug: 'obesity-dna-test',
    category: 'health-test',
    shortDescription: 'Genetic obesity risk analysis.',
    description: 'Analyze obesity-related genetic markers.',
    price: 9499,
    oldPrice: 11499,
    image: 'https://dnalabsindia.com/storage/2024/06/genetic-test-id-4-768x768.webp',
    popular:true,
  },
  

  {
    id: 10,
    title: 'Brain Wellness DNA Test',
    slug: 'brain-wellness-dna-test',
    category: 'health-test',
    shortDescription: 'Mental wellness DNA profile.',
    description: 'Insights into brain and mental health genetics.',
    price: 13499,
    oldPrice: 15499,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl1.webp',
    popular:false,
  },
  

  // =====================================================
  // NIPT TEST CATEGORY
  // =====================================================

  {
    id: 11,
    title: 'Basic NIPT Test',
    slug: 'basic-nipt-test',
    category: 'nipt-test',
    shortDescription: 'Basic prenatal genetic screening.',
    description: 'Detect chromosomal abnormalities safely.',
    price: 14999,
    oldPrice: 17999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl2.webp',
    popular:false,
    featured: true
  },

  {
    id: 12,
    title: 'Advanced NIPT Test',
    slug: 'advanced-nipt-test',
    category: 'nipt-test',
    shortDescription: 'Advanced prenatal DNA screening.',
    description: 'Comprehensive fetal genetic screening test.',
    price: 19999,
    oldPrice: 22999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl3.webp',popular:false,
  },
  

  {
    id: 13,
    title: 'Twin Pregnancy NIPT Test',
    slug: 'twin-pregnancy-nipt-test',
    category: 'nipt-test',
    shortDescription: 'NIPT test for twin pregnancies.',
    description: 'Specialized genetic screening for twins.',
    price: 25999,
    oldPrice: 28999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl1.webp',popular:false
  },
  

  {
    id: 14,
    title: 'Chromosome Screening NIPT',
    slug: 'chromosome-screening-nipt',
    category: 'nipt-test',
    shortDescription: 'Chromosome abnormality screening.',
    description: 'Advanced fetal chromosome testing.',
    price: 21999,
    oldPrice: 24999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl2.webp',
    popular:false
  },
  

  {
    id: 15,
    title: 'Premium NIPT DNA Test',
    slug: 'premium-nipt-dna-test',
    category: 'nipt-test',
    shortDescription: 'Premium prenatal genetic test.',
    description: 'High-accuracy prenatal DNA analysis.',
    price: 29999,
    oldPrice: 33999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl3.webp',
    popular:false,
  },
  

  // =====================================================
  // WELLNESS TEST CATEGORY
  // =====================================================

  {
    id: 16,
    title: 'Nutrition DNA Test',
    slug: 'nutrition-dna-test',
    category: 'wellness-test',
    shortDescription: 'DNA nutrition profile.',
    description: 'Personalized nutrition recommendations.',
    price: 7999,
    oldPrice: 9999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl1.webp',
    popular:false,
  },
  

  {
    id: 17,
    title: 'Fitness DNA Test',
    slug: 'fitness-dna-test',
    category: 'wellness-test',
    shortDescription: 'Genetic fitness analysis.',
    description: 'Optimize workouts using DNA insights.',
    price: 8499,
    oldPrice: 10499,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl2.webp',
    popular:false
  },
  

  {
    id: 18,
    title: 'Skin Care DNA Test',
    slug: 'skin-care-dna-test',
    category: 'wellness-test',
    shortDescription: 'DNA-based skincare analysis.',
    description: 'Personalized skincare recommendations.',
    price: 7499,
    oldPrice: 9499,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl3.webp',
    popular:false,
  },
  

  {
    id: 19,
    title: 'Hair Health DNA Test',
    slug: 'hair-health-dna-test',
    category: 'wellness-test',
    shortDescription: 'Hair wellness genetic analysis.',
    description: 'Understand hair loss and scalp genetics.',
    price: 6999,
    oldPrice: 8999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl1.webp',
    popular:false,
  },
  

  {
    id: 20,
    title: 'Sleep & Stress DNA Test',
    slug: 'sleep-stress-dna-test',
    category: 'wellness-test',
    shortDescription: 'Sleep and stress genetic profile.',
    description: 'Analyze sleep and stress-related DNA markers.',
    price: 8999,
    oldPrice: 10999,
    image: 'https://dnalabsindia.com/storage/2025/05/banner-sl2.webp',
    popular:false,
  }
  

];