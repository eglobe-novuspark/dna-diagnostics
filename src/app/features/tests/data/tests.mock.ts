
import { Test } from '../models/test.interface';

/* =========================
   REAL DATA
========================= */

const REAL_TESTS: Test[] = [

  {
    id: 1,

    title: 'Paternity DNA Test',

    slug: 'paternity-dna-test',

    category: 'DNA TEST',

    price: 13000,

    oldPrice: 20000,

    discount: 35,

    image:
      'https://dnalabsindia.com/storage/2024/06/srg-dna-441x441.webp',

    images: [
      'https://dnalabsindia.com/storage/2024/06/srg-dna-441x441.webp',
      'https://dnalabsindia.com/storage/2024/06/srg-dna-441x441.webp',
      'https://dnalabsindia.com/storage/2024/06/srg-dna-441x441.webp'
    ],

    doctor: 'IVF CLINIC',

    reportsTime: '24 Hours',

    descriptionContent: [

      {
        title:
          'Professional Paternity DNA Test in India: ₹13,000 | Expert Clinic or Home Collection'
      },

      {
        heading:
          'Paternity DNA Test (पितृत्व डीएनए टेस्ट) – 100% Professional Sample Collection',

        content:
          'We provide professional DNA sample collection with highly accurate forensic laboratory analysis.'
      },

      {
        heading:
          'Medical Excellence. Absolute Certainty.',

        bullets: [

          'Service Fee: ₹13,000 (professional collection included)',

          'Accuracy: 99.9999% (28-Marker Forensic Standard)',

          'Collection: Blood or Professional Buccal Swab',

          '300+ Medical Centres and Mobile Collection Available'

        ]
      },

      {
        heading:
          'Why We Use Professional Blood and Buccal Sampling',

        content:
          'Your DNA is identical in every cell of your body. Professional medical collection eliminates contamination and improves forensic accuracy.'
      },

      {
        heading:
          'Questions About Our Professional Service',

        bullets: [

          'How technician verification works',

          'Can blood collection be selected',

          'Privacy maintained during home visit',

          'ISO certified laboratory process'

        ]
      }

    ],

    description:
      'A DNA Paternity Test examines aggregate genetic markers that are inherited from the parents to their descendants to ascertain that a given man is the actual biological father of a test child.',

    descriptionSections: [

      {
        heading: '28 Genetic Markers',
        content:
          'They compare certain locations on the DNA of a child with those of the putative father.'
      },

      {
        heading: 'Exclusion vs. Inclusion',
        content:
          'If markers differ, the man is excluded as biological father.'
      },

      {
        heading: 'Matching Markers and Probability',
        content:
          'If all markers match, probability becomes 99.9999%.'
      }

    ],

    serviceDetails: [

      {
        service: 'Clinical Collection',
        validity: 'Personal Use',
        price: '₹13,000'
      },

      {
        service: 'Home Collection',
        validity: 'Personal Use',
        price: '₹15,000'
      },

      {
        service: 'Legal DNA Test',
        validity: 'Court Valid',
        price: '₹26,000'
      }

    ]
  },

  {
    id: 2,

    title: 'Pregnancy Non-Invasive Prenatal NIPT Test',

    slug: 'pregnancy-nipt-test',

    category: 'NIPT TEST',

    price: 10000,

    oldPrice: 18000,

    discount: 44,

    image:
      'https://dnalabsindia.com/storage/2024/06/nipt-test-report-cost-441x441.webp',

    images: [
      'https://dnalabsindia.com/storage/2024/06/nipt-test-report-cost-441x441.webp'
    ],

    doctor: 'GYNECOLOGIST',

    reportsTime: '5 Days',

    descriptionContent: [

      {
        title:
          'Advanced NIPT Pregnancy Test in India'
      },

      {
        heading:
          'What is NIPT Test?',

        content:
          'NIPT (Non-Invasive Prenatal Testing) is an advanced prenatal screening test that detects chromosomal abnormalities using a blood sample from the mother.'
      },

      {
        heading:
          'Key Benefits',

        bullets: [

          'Safe for Mother and Baby',

          'No Risk to Pregnancy',

          'Early Detection of Genetic Disorders',

          'Highly Accurate Screening',

          'Fast Laboratory Reports',

          'Professional Medical Guidance'

        ]
      },

      {
        heading:
          'Conditions Screened',

        content:
          'The test helps identify chromosomal conditions such as Down Syndrome (Trisomy 21), Trisomy 18 and Trisomy 13.'
      },

      {
        heading:
          'Professional Laboratory Process',

        bullets: [

          'Maternal blood sample collection',

          'Advanced DNA sequencing technology',

          'Confidential pregnancy screening',

          'Medical expert report review'

        ]
      }

    ],

    description:
      'NIPT testing helps detect chromosomal abnormalities during pregnancy.',

    descriptionSections: [

      {
        heading: 'Safe Pregnancy Screening',
        content:
          'Uses maternal blood sample for advanced genetic screening.'
      },

      {
        heading: 'Early Detection',
        content:
          'Detects chromosomal abnormalities in early pregnancy.'
      },

      {
        heading: 'Professional Accuracy',
        content:
          'Advanced laboratory sequencing with highly accurate reports.'
      }

    ],

    serviceDetails: [

      {
        service: 'Lab Visit',
        validity: 'Medical Screening',
        price: '₹10,000'
      }

    ]
  },

  {
    id: 3,

    title: 'Rabies Antibody Test for Humans',

    slug: 'rabies-antibody-test',

    category: 'PCR TEST',

    price: 3500,

    oldPrice: 6000,

    discount: 49,

    image:
      'https://dnalabsindia.com/storage/2025/09/wXFdx4DNRjSFy91-s0vBs-768x768.webp',

    images: [
      'https://dnalabsindia.com/storage/2025/09/wXFdx4DNRjSFy91-s0vBs-768x768.webp'
    ],

    doctor: 'GENERAL PHYSICIAN',

    reportsTime: '2 Days',

    descriptionContent: [

      {
        title:
          'Rabies Antibody Test for Humans'
      },

      {
        heading:
          'What is Rabies Antibody Test?',

        content:
          'Rabies Antibody Testing measures protective antibodies in the blood to evaluate immunity against rabies infection.'
      },

      {
        heading:
          'Who Should Take This Test?',

        bullets: [

          'Veterinary Doctors',

          'Pet Handlers',

          'Animal Rescue Workers',

          'International Travellers',

          'Post Vaccination Monitoring'

        ]
      },

      {
        heading:
          'Test Advantages',

        bullets: [

          'Reliable Antibody Detection',

          'Professional Blood Collection',

          'Fast PCR Laboratory Analysis',

          'Accurate Immune Status Reports'

        ]
      },

      {
        heading:
          'Medical Importance',

        content:
          'This test helps verify whether rabies vaccination has produced sufficient immune protection in the body.'
      }

    ],

    description:
      'Measures rabies antibodies to verify vaccination effectiveness.',

    descriptionSections: [

      {
        heading: 'Antibody Detection',
        content:
          'Measures immune response against rabies virus.'
      },

      {
        heading: 'Post Vaccination Monitoring',
        content:
          'Useful after vaccination to verify immunity.'
      },

      {
        heading: 'Professional Testing',
        content:
          'PCR laboratory analysis with accurate reporting.'
      }

    ],

    serviceDetails: [

      {
        service: 'Blood Collection',
        validity: 'Medical Purpose',
        price: '₹3,500'
      }

    ]
  },

  {
    id: 4,

    title: 'Food Intolerance Allergy Test',

    slug: 'food-intolerance-allergy-test',

    category: 'ALLERGY TEST',

    price: 6000,

    oldPrice: 8500,

    discount: 29,

    image:
      'https://dnalabsindia.com/storage/2024/06/food-allergy-intolerance-test-report-cost-768x768.webp',

    images: [
      'https://dnalabsindia.com/storage/2024/06/food-allergy-intolerance-test-report-cost-768x768.webp'
    ],

    doctor: 'DERMATOLOGIST',

    reportsTime: '7 Days',

    descriptionContent: [

      {
        title:
          'Food Intolerance & Allergy Test'
      },

      {
        heading:
          'What is Food Allergy Testing?',

        content:
          'Food Allergy and Intolerance Testing identifies foods that may trigger allergic reactions, digestive issues or chronic inflammation.'
      },

      {
        heading:
          'Common Symptoms',

        bullets: [

          'Skin Rashes',

          'Digestive Problems',

          'Chronic Bloating',

          'Headaches & Fatigue',

          'Food Sensitivity Reactions'

        ]
      },

      {
        heading:
          'Why Choose This Test?',

        bullets: [

          'Advanced Allergy Analysis',

          'Professional Laboratory Testing',

          'Accurate Food Sensitivity Detection',

          'Personalized Health Insights',

          'Fast Report Delivery'

        ]
      },

      {
        heading:
          'How It Helps',

        content:
          'The test helps identify trigger foods so patients can improve diet management and reduce allergy-related symptoms.'
      }

    ],

    description:
      'Detects food allergies and intolerance reactions accurately.',

    descriptionSections: [

      {
        heading: 'Food Sensitivity Analysis',
        content:
          'Identifies foods causing allergic or digestive reactions.'
      },

      {
        heading: 'Advanced Allergy Detection',
        content:
          'Professional laboratory testing for accurate results.'
      },

      {
        heading: 'Better Health Management',
        content:
          'Helps improve dietary planning and reduce symptoms.'
      }

    ],

    serviceDetails: [

      {
        service: 'Allergy Panel',
        validity: 'Medical Analysis',
        price: '₹6,000'
      }

    ]
  }

];


/* =========================
   AUTO GENERATED MOCK DATA
========================= */

const AUTO_TESTS: Test[] = Array.from(
  { length: 996 },
  (_, index) => {

    const id = index + 5;

    const title = `DNA Test ${id}`;

    const image =
      `https://picsum.photos/800/800?random=${id}`;

    return {

      id,

      title,

      slug: title
        .toLowerCase()
        .replace(/ /g, '-'),

      category: [
        'DNA TEST',
        'GENETIC TEST',
        'PCR TEST',
        'ALLERGY TEST'
      ][index % 4],

      price: 1000 + (index * 25),

      oldPrice: 2000 + (index * 50),

      discount: 10 + (index % 70),

      image,

      images: [
        image,
        `https://picsum.photos/800/800?random=${id + 1000}`
      ],

      doctor: [
        'GENERAL PHYSICIAN',
        'GENETICIST',
        'CARDIOLOGIST',
        'GASTROENTEROLOGIST'
      ][index % 4],

      reportsTime: [
        '24 Hours',
        '2 Days',
        '5 Days',
        '7 Days'
      ][index % 4],

      description:
        `This is detailed information about ${title}.`,

      descriptionSections: [],

      descriptionContent: [],

      serviceDetails: []

    };
  }
);


/* =========================
   FINAL EXPORT
========================= */

export const TESTS_MOCK: Test[] = [
  ...REAL_TESTS,
  ...AUTO_TESTS
];

export const TOTAL_RESULTS = 6457;
