
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
      'assets/tests/dna-test/paternity-dna-test2.png',

    images: [
      'assets/tests/dna-test/paternity-dna-test.png',
      'assets/tests/dna-test/paternity-dna-test1.png',
      'assets/tests/dna-test/paternity-dna-test2.png'
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
    title: 'Legal Paternity DNA Test',
    slug: 'legal-paternity-dna-test',
    category: 'DNA TEST',
    price: 26000,
    oldPrice: 32000,
    discount: 19,
    image: 'assets/tests/dna-test/legal-paternity-dna-test.png',
    images: [
      'assets/tests/dna-test/legal-paternity-dna-test.png'
    ],
    doctor: 'GENETICIST',
    reportsTime: '7 Days',
    description:
      'Court admissible DNA paternity testing with chain of custody.',

    descriptionContent: [
      {
        title: 'Legal Paternity DNA Test Cost'
      },
      {
        heading: 'Court Valid DNA Test',
        content:
          'Used for legal disputes, immigration and court proceedings.'
      }
    ],

    descriptionSections: [
      {
        heading: 'Legal Documentation',
        content:
          'Identity verification and sealed reporting process.'
      }
    ],

    serviceDetails: [
      {
        service: 'Court Valid DNA Test',
        validity: 'Legal Purpose',
        price: '₹26,000'
      }
    ]
  },

  {
    id: 3,
    title: 'Home DNA Test Kit – Self Collection',
    slug: 'home-dna-test-kit',
    category: 'DNA TEST',
    price: 15000,
    oldPrice: 21000,
    discount: 29,
    image: 'assets/tests/dna-test/home-dna-test-kit.png',
    images: [
      'assets/tests/dna-test/home-dna-test-kit.png'
    ],
    doctor: 'GENETICIST',
    reportsTime: '5 Days',
    description:
      'Self collection DNA testing kit delivered to your home.',

    descriptionContent: [
      {
        title: 'Home DNA Test Kit Cost'
      },
      {
        heading: 'Easy Collection',
        content:
          'Collect buccal swab samples at home and courier them to the laboratory.'
      }
    ],

    descriptionSections: [
      {
        heading: 'Convenient Testing',
        content:
          'No clinic visit required.'
      }
    ],

    serviceDetails: [
      {
        service: 'Home Collection Kit',
        validity: 'Personal Use',
        price: '₹15,000'
      }
    ]
  },
  {
    id: 4,
    title: 'Maternity DNA Test',
    slug: 'maternity-dna-test',
    category: 'DNA TEST',
    price: 18000,
    oldPrice: 25000,
    discount: 28,

    image: 'assets/tests/dna-test/maternity-dna-test.png',

    images: [
      'assets/tests/dna-test/maternity-dna-test.png'
    ],

    doctor: 'GENETICIST',

    reportsTime: '5 Days',

    description:
      'Maternity DNA testing confirms the biological relationship between a child and the alleged mother with extremely high accuracy.',

    descriptionContent: [
      {
        title: 'Maternity DNA Test Cost in India'
      },
      {
        heading: 'What Is a Maternity DNA Test?',
        content:
          'A maternity DNA test compares DNA markers between a child and an alleged mother to establish a biological relationship.'
      },
      {
        heading: 'Key Benefits',
        bullets: [
          '99.9999% Accuracy',
          'Confidential Testing',
          'Professional Sample Collection',
          'Fast Turnaround Time'
        ]
      },
      {
        heading: 'Who Needs This Test?',
        content:
          'Useful in adoption cases, hospital mix-up concerns, immigration cases and family relationship verification.'
      }
    ],

    descriptionSections: [
      {
        heading: 'Highly Accurate Analysis',
        content:
          'Advanced forensic DNA analysis provides reliable maternity confirmation.'
      }
    ],

    serviceDetails: [
      {
        service: 'Lab Collection',
        validity: 'Personal Use',
        price: '₹18,000'
      }
    ]
  },

{
  id: 5,
  title: 'Sibling DNA Test',
  slug: 'sibling-dna-test',
  category: 'DNA TEST',
  price: 16000,
  oldPrice: 22000,
  discount: 27,

  image: 'assets/tests/dna-test/sibling-dna-test.png',

  images: [
    'assets/tests/dna-test/sibling-dna-test.png'
  ],

  doctor: 'GENETICIST',

  reportsTime: '6 Days',

  description:
    'Sibling DNA testing determines whether two individuals share one or both biological parents.',

  descriptionContent: [
    {
      title: 'Sibling DNA Test Cost in India'
    },
    {
      heading: 'What Is a Sibling DNA Test?',
      content:
        'This test evaluates shared DNA markers between two individuals to determine sibling relationships.'
    },
    {
      heading: 'Applications',
      bullets: [
        'Family Relationship Verification',
        'Inheritance Claims',
        'Immigration Cases',
        'Missing Family Members'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Relationship Analysis',
      content:
        'Determines full sibling, half sibling or unrelated status.'
    }
  ],

  serviceDetails: [
    {
      service: 'Sibling DNA Analysis',
      validity: 'Personal Use',
      price: '₹16,000'
    }
  ]
},

{
  id: 6,
  title: 'Twin Zygosity DNA Test',
  slug: 'twin-zygosity-dna-test',
  category: 'DNA TEST',
  price: 14000,
  oldPrice: 20000,
  discount: 30,

  image: 'assets/tests/dna-test/twin-zygosity-dna-test.png',

  images: [
    'assets/tests/dna-test/twin-zygosity-dna-test.png'
  ],

  doctor: 'GENETICIST',

  reportsTime: '4 Days',

  description:
    'Twin zygosity testing determines whether twins are identical or fraternal.',

  descriptionContent: [
    {
      title: 'Twin Zygosity DNA Test Cost'
    },
    {
      heading: 'What Is Twin Zygosity Testing?',
      content:
        'The test analyzes DNA markers from twins to determine if they originated from one fertilized egg or two separate eggs.'
    },
    {
      heading: 'Benefits',
      bullets: [
        'Accurate Twin Classification',
        'Medical Insights',
        'Genetic Risk Assessment',
        'Simple Sample Collection'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Identical vs Fraternal',
      content:
        'Provides definitive confirmation of twin type.'
    }
  ],

  serviceDetails: [
    {
      service: 'Twin DNA Analysis',
      validity: 'Personal Use',
      price: '₹14,000'
    }
  ]
},

{
  id: 7,
  title: 'Grandparent DNA Test',
  slug: 'grandparent-dna-test',
  category: 'DNA TEST',
  price: 18000,
  oldPrice: 26000,
  discount: 31,

  image: 'assets/tests/dna-test/grandparent-dna-test.png',

  images: [
    'assets/tests/dna-test/grandparent-dna-test.png'
  ],

  doctor: 'GENETICIST',

  reportsTime: '7 Days',

  description:
    'Grandparent DNA testing helps establish biological relationships when a parent is unavailable for testing.',

  descriptionContent: [
    {
      title: 'Grandparent DNA Test Cost'
    },
    {
      heading: 'Purpose of the Test',
      content:
        'This test compares DNA between grandparents and grandchildren to verify biological lineage.'
    },
    {
      heading: 'Common Uses',
      bullets: [
        'Paternity Support Cases',
        'Inheritance Matters',
        'Immigration Applications',
        'Family Verification'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Alternative Relationship Testing',
      content:
        'Useful when the alleged parent cannot provide a DNA sample.'
    }
  ],

  serviceDetails: [
    {
      service: 'Grandparent DNA Analysis',
      validity: 'Personal Use',
      price: '₹18,000'
    }
  ]
},

{
  id: 8,
  title: 'Y Chromosome DNA Test',
  slug: 'y-chromosome-dna-test',
  category: 'DNA TEST',
  price: 17000,
  oldPrice: 24000,
  discount: 29,

  image: 'assets/tests/dna-test/y-chromosome-dna-test.png',

  images: [
    'assets/tests/dna-test/y-chromosome-dna-test.png'
  ],

  doctor: 'GENETICIST',

  reportsTime: '6 Days',

  description:
    'Y Chromosome DNA testing traces paternal lineage through the male bloodline.',

  descriptionContent: [
    {
      title: 'Y Chromosome DNA Test Cost'
    },
    {
      heading: 'What Is Y-DNA Testing?',
      content:
        'Y chromosome testing examines markers inherited from father to son through generations.'
    },
    {
      heading: 'Applications',
      bullets: [
        'Paternal Lineage Research',
        'Ancestry Studies',
        'Family Tree Verification',
        'Male Relationship Testing'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Paternal Heritage Analysis',
      content:
        'Tracks direct male lineage accurately.'
    }
  ],

  serviceDetails: [
    {
      service: 'Y-DNA Analysis',
      validity: 'Personal Use',
      price: '₹17,000'
    }
  ]
},

{
  id: 9,
  title: 'Avuncular DNA Test',
  slug: 'avuncular-dna-test',
  category: 'DNA TEST',
  price: 19000,
  oldPrice: 27000,
  discount: 30,

  image: 'assets/tests/dna-test/avuncular-dna-test.png',

  images: [
    'assets/tests/dna-test/avuncular-dna-test.png'
  ],

  doctor: 'GENETICIST',

  reportsTime: '7 Days',

  description:
    'Avuncular DNA testing determines whether an individual is biologically related to an alleged aunt or uncle.',

  descriptionContent: [
    {
      title: 'Avuncular DNA Test Cost in India'
    },
    {
      heading: 'What Is an Avuncular DNA Test?',
      content:
        'This test analyzes DNA between an individual and an alleged aunt or uncle to establish biological relationships.'
    },
    {
      heading: 'Common Reasons',
      bullets: [
        'Paternity Reconstruction',
        'Inheritance Disputes',
        'Immigration Cases',
        'Family Relationship Verification'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Extended Family DNA Testing',
      content:
        'Provides relationship evidence when direct parental samples are unavailable.'
    }
  ],

  serviceDetails: [
    {
      service: 'Avuncular DNA Analysis',
      validity: 'Personal Use',
      price: '₹19,000'
    }
  ]
},

{
  id: 10,
  title: 'Pregnancy NIPT Test',
  slug: 'pregnancy-nipt-test',
  category: 'NIPT TEST',
  price: 10000,
  oldPrice: 18000,
  discount: 44,

  image: 'assets/tests/nipt-test/pregnancy-nipt-test.png',

  images: [
    'assets/tests/nipt-test/pregnancy-nipt-test.png'
  ],

  doctor: 'GYNECOLOGIST',

  reportsTime: '5 Days',

  description:
    'Non-Invasive Prenatal Testing (NIPT) screens fetal DNA from the mother’s blood to detect common chromosomal abnormalities during pregnancy.',

  descriptionContent: [
    {
      title: 'Pregnancy NIPT Test Cost in India'
    },
    {
      heading: 'What Is NIPT?',
      content:
        'NIPT is a highly accurate prenatal screening test performed using a simple maternal blood sample.'
    },
    {
      heading: 'Key Benefits',
      bullets: [
        'Safe For Mother And Baby',
        'No Risk Of Miscarriage',
        'Early Pregnancy Screening',
        'High Accuracy Results'
      ]
    },
    {
      heading: 'Conditions Screened',
      content:
        'Screens for Down Syndrome (Trisomy 21), Trisomy 18 and Trisomy 13.'
    }
  ],

  descriptionSections: [
    {
      heading: 'Safe Prenatal Screening',
      content:
        'No invasive procedure is required to obtain fetal genetic information.'
    }
  ],

  serviceDetails: [
    {
      service: 'NIPT Screening',
      validity: 'Pregnancy Screening',
      price: '₹10,000'
    }
  ]
},

{
  id: 11,
  title: 'NIPT Advanced 23 Chromosomes',
  slug: 'nipt-advanced-23-chromosomes',
  category: 'NIPT TEST',
  price: 16000,
  oldPrice: 24000,
  discount: 33,

  image: 'assets/tests/nipt-test/nipt-advanced-23-chromosomes.png',

  images: [
    'assets/tests/nipt-test/nipt-advanced-23-chromosomes.png'
  ],

  doctor: 'GYNECOLOGIST',

  reportsTime: '7 Days',

  description:
    'Advanced NIPT screening covering all 23 chromosome pairs for comprehensive prenatal genetic assessment.',

  descriptionContent: [
    {
      title: 'NIPT Advanced 23 Chromosomes Cost'
    },
    {
      heading: 'Comprehensive Chromosome Analysis',
      content:
        'Evaluates all chromosome pairs to identify chromosomal abnormalities and aneuploidies.'
    },
    {
      heading: 'Why Choose Advanced NIPT?',
      bullets: [
        'Broader Genetic Coverage',
        'Improved Prenatal Insights',
        'Highly Accurate Results',
        'Non-Invasive Testing'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Extended Chromosomal Screening',
      content:
        'Provides a more detailed genetic overview than basic NIPT testing.'
    }
  ],

  serviceDetails: [
    {
      service: 'Advanced NIPT',
      validity: 'Pregnancy Screening',
      price: '₹16,000'
    }
  ]
},

{
  id: 12,
  title: 'NIPT Microdeletion Test',
  slug: 'nipt-microdeletion-test',
  category: 'NIPT TEST',
  price: 22000,
  oldPrice: 30000,
  discount: 27,

  image: 'assets/tests/nipt-test/nipt-microdeletion-test.png',

  images: [
    'assets/tests/dna-test/nipt-microdeletion-test.png'
  ],

  doctor: 'GYNECOLOGIST',

  reportsTime: '7 Days',

  description:
    'NIPT Microdeletion Testing screens for specific chromosomal microdeletion syndromes that may affect fetal development.',

  descriptionContent: [
    {
      title: 'NIPT Microdeletion Test Cost'
    },
    {
      heading: 'What Are Microdeletions?',
      content:
        'Microdeletions are small missing chromosome segments associated with certain genetic disorders.'
    },
    {
      heading: 'Conditions Included',
      bullets: [
        '22q11.2 Deletion Syndrome',
        'Cri-du-chat Syndrome',
        'Prader-Willi Syndrome',
        'Angelman Syndrome'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Advanced Prenatal Genetics',
      content:
        'Provides additional screening beyond standard trisomy testing.'
    }
  ],

  serviceDetails: [
    {
      service: 'Microdeletion Screening',
      validity: 'Pregnancy Screening',
      price: '₹22,000'
    }
  ]
},

{
  id: 13,
  title: 'NIPT Twins Test',
  slug: 'nipt-twins-test',
  category: 'NIPT TEST',
  price: 18000,
  oldPrice: 26000,
  discount: 31,

  image: 'assets/tests/nipt-test/nipt-twins-test.png',

  images: [
    'assets/tests/dna-test/nipt-twins-test.png'
  ],

  doctor: 'GYNECOLOGIST',

  reportsTime: '7 Days',

  description:
    'Specialized NIPT screening designed for twin pregnancies using maternal blood samples.',

  descriptionContent: [
    {
      title: 'NIPT Twins Test Cost'
    },
    {
      heading: 'Twin Pregnancy Screening',
      content:
        'Advanced fetal DNA analysis specifically optimized for twin pregnancies.'
    },
    {
      heading: 'Benefits',
      bullets: [
        'Safe For Twin Pregnancies',
        'High Detection Accuracy',
        'No Risk To Fetuses',
        'Professional Genetic Reporting'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Twin Pregnancy Care',
      content:
        'Provides valuable genetic screening information for expecting parents.'
    }
  ],

  serviceDetails: [
    {
      service: 'Twins NIPT',
      validity: 'Pregnancy Screening',
      price: '₹18,000'
    }
  ]
},

{
  id: 14,
  title: 'NIPT Gender Screening Test',
  slug: 'nipt-gender-screening-test',
  category: 'NIPT TEST',
  price: 15000,
  oldPrice: 22000,
  discount: 32,

  image: 'assets/tests/dna-test/nipt-gender-screening-test.png',

  images: [
    'assets/tests/dna-test/nipt-gender-screening-test.png'
  ],

  doctor: 'GYNECOLOGIST',

  reportsTime: '5 Days',

  description:
    'Advanced fetal DNA screening that includes fetal sex chromosome analysis along with prenatal chromosomal assessment.',

  descriptionContent: [
    {
      title: 'NIPT Gender Screening Test Cost'
    },
    {
      heading: 'Advanced Fetal DNA Screening',
      content:
        'Evaluates fetal DNA circulating in maternal blood for chromosomal analysis.'
    },
    {
      heading: 'Test Features',
      bullets: [
        'Non-Invasive Procedure',
        'High Accuracy Screening',
        'Early Pregnancy Testing',
        'Professional Laboratory Analysis'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Prenatal Genetic Screening',
      content:
        'Provides comprehensive chromosomal assessment using advanced sequencing technology.'
    }
  ],

  serviceDetails: [
    {
      service: 'Advanced NIPT Screening',
      validity: 'Pregnancy Screening',
      price: '₹15,000'
    }
  ]
},
{
  id: 15,
  title: 'Genetic Counselling',
  slug: 'genetic-counselling',
  category: 'GENETIC TEST',
  price: 2500,
  oldPrice: 4000,
  discount: 38,

  image: 'assets/tests/dna-test/genetic-counselling.png',

  images: [
    'assets/tests/dna-test/genetic-counselling.png'
  ],

  doctor: 'GENETICIST',

  reportsTime: 'Same Day',

  description:
    'Genetic counselling helps individuals and families understand genetic conditions, testing options and inherited health risks.',

  descriptionContent: [
    {
      title: 'Genetic Counselling Cost in India'
    },
    {
      heading: 'What Is Genetic Counselling?',
      content:
        'Genetic counselling provides professional guidance regarding inherited diseases, genetic testing and family health planning.'
    },
    {
      heading: 'Who Should Consider It?',
      bullets: [
        'Couples Planning Pregnancy',
        'Family History Of Genetic Disorders',
        'Repeated Pregnancy Loss',
        'Abnormal Prenatal Screening Results'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Professional Genetic Guidance',
      content:
        'Expert counselling helps patients understand risks, testing options and future healthcare decisions.'
    }
  ],

  serviceDetails: [
    {
      service: 'Genetic Counselling Session',
      validity: 'One Consultation',
      price: '₹2,500'
    }
  ]
},

{
  id: 16,
  title: 'Carrier Screening Test',
  slug: 'carrier-screening-test',
  category: 'GENETIC TEST',
  price: 9000,
  oldPrice: 14000,
  discount: 36,

  image: 'assets/tests/dna-test/carrier-screening-test.png',

  images: [
    'assets/tests/dna-test/carrier-screening-test.png'
  ],

  doctor: 'GENETICIST',

  reportsTime: '10 Days',

  description:
    'Carrier screening identifies whether an individual carries genetic mutations that may be passed to future children.',

  descriptionContent: [
    {
      title: 'Carrier Screening Test Cost'
    },
    {
      heading: 'Why Carrier Screening?',
      content:
        'The test identifies inherited genetic mutations before pregnancy or family planning.'
    },
    {
      heading: 'Benefits',
      bullets: [
        'Preconception Planning',
        'Family Risk Assessment',
        'Early Detection Of Genetic Disorders',
        'Informed Reproductive Decisions'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Family Planning Support',
      content:
        'Helps couples understand potential genetic risks before conception.'
    }
  ],

  serviceDetails: [
    {
      service: 'Carrier Screening Panel',
      validity: 'Medical Use',
      price: '₹9,000'
    }
  ]
},

{
  id: 17,
  title: 'Fragile X Syndrome (FMR1) Test',
  slug: 'fragile-x-syndrome-fmr1-test',
  category: 'GENETIC TEST',
  price: 8500,
  oldPrice: 13000,
  discount: 35,

  image: 'assets/tests/dna-test/fragile-x-syndrome-test.png',

  images: [
    'assets/tests/dna-test/fragile-x-syndrome-test.png'
  ],

  doctor: 'GENETICIST',

  reportsTime: '8 Days',

  description:
    'Fragile X Syndrome testing detects mutations in the FMR1 gene associated with intellectual disability and developmental disorders.',

  descriptionContent: [
    {
      title: 'Fragile X Syndrome (FMR1) Test Cost'
    },
    {
      heading: 'What Is Fragile X Syndrome?',
      content:
        'Fragile X Syndrome is one of the most common inherited causes of intellectual disability.'
    },
    {
      heading: 'When Is Testing Recommended?',
      bullets: [
        'Developmental Delay',
        'Learning Disabilities',
        'Autism Spectrum Disorders',
        'Family History Of Fragile X Syndrome'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'FMR1 Gene Analysis',
      content:
        'Advanced molecular testing identifies mutations associated with Fragile X Syndrome.'
    }
  ],

  serviceDetails: [
    {
      service: 'FMR1 Gene Testing',
      validity: 'Medical Diagnosis',
      price: '₹8,500'
    }
  ]
},

{
  id: 18,
  title: 'Spino Cerebellar Ataxia (SCA Panel) Test',
  slug: 'sca-panel-test',
  category: 'GENETIC TEST',
  price: 14000,
  oldPrice: 20000,
  discount: 30,

  image: 'assets/tests/dna-test/sca-panel-test.png',

  images: [
    'assets/tests/dna-test/sca-panel-test.png'
  ],

  doctor: 'GENETICIST',

  reportsTime: '12 Days',

  description:
    'SCA Panel testing detects genetic mutations associated with inherited neurodegenerative disorders known as Spinocerebellar Ataxias.',

  descriptionContent: [
    {
      title: 'SCA Panel Test Cost'
    },
    {
      heading: 'What Is SCA Testing?',
      content:
        'The panel screens common genetic variants associated with hereditary ataxia disorders.'
    },
    {
      heading: 'Panel Coverage',
      bullets: [
        'SCA 1',
        'SCA 2',
        'SCA 3',
        'SCA 6',
        'SCA 7',
        'SCA 10',
        'SCA 12'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Neurological Genetic Analysis',
      content:
        'Provides valuable information for diagnosis and family risk assessment.'
    }
  ],

  serviceDetails: [
    {
      service: 'SCA Genetic Panel',
      validity: 'Medical Diagnosis',
      price: '₹14,000'
    }
  ]
},

{
  id: 19,
  title: 'BRCA1 BRCA2 Gene Test',
  slug: 'brca1-brca2-gene-test',
  category: 'GENETIC TEST',
  price: 18000,
  oldPrice: 26000,
  discount: 31,

  image: 'assets/tests/dna-test/brca1-brca2-test.png',

  images: [
    'assets/tests/dna-test/brca1-brca2-test.png'
  ],

  doctor: 'GENETICIST',

  reportsTime: '14 Days',

  description:
    'BRCA1 and BRCA2 testing identifies inherited mutations associated with increased risk of breast and ovarian cancer.',

  descriptionContent: [
    {
      title: 'BRCA1 BRCA2 Test Cost in India'
    },
    {
      heading: 'What Is BRCA Testing?',
      content:
        'BRCA gene analysis detects inherited mutations that may increase cancer susceptibility.'
    },
    {
      heading: 'Who Should Consider Testing?',
      bullets: [
        'Family History Of Breast Cancer',
        'Family History Of Ovarian Cancer',
        'Multiple Cancer Cases In Family',
        'Preventive Health Screening'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Cancer Risk Assessment',
      content:
        'Genetic testing helps identify inherited cancer risk and supports preventive healthcare planning.'
    }
  ],

  serviceDetails: [
    {
      service: 'BRCA1 BRCA2 Analysis',
      validity: 'Medical Screening',
      price: '₹18,000'
    }
  ]
},
{
  id: 20,
  title: 'Rabies Antibody Test for Humans',
  slug: 'rabies-antibody-test-for-humans',
  category: 'PCR TEST',
  price: 3500,
  oldPrice: 6000,
  discount: 42,

  image: 'assets/tests/dna-test/rabies-antibody-test.png',

  images: [
    'assets/tests/dna-test/rabies-antibody-test.png'
  ],

  doctor: 'GENERAL PHYSICIAN',

  reportsTime: '2 Days',

  description:
    'Rabies Antibody Testing measures protective antibodies in the blood to evaluate immunity against rabies infection.',

  descriptionContent: [
    {
      title: 'Rabies Antibody Test Cost in India'
    },
    {
      heading: 'What Is Rabies Antibody Testing?',
      content:
        'This test measures rabies virus neutralizing antibodies to determine whether adequate immune protection has developed after vaccination.'
    },
    {
      heading: 'Who Should Take This Test?',
      bullets: [
        'Veterinary Doctors',
        'Pet Handlers',
        'Animal Rescue Workers',
        'International Travellers',
        'Post Vaccination Monitoring'
      ]
    },
    {
      heading: 'Benefits',
      bullets: [
        'Reliable Antibody Detection',
        'Professional Blood Collection',
        'Fast Laboratory Analysis',
        'Accurate Immune Status Reports'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Post Vaccination Monitoring',
      content:
        'Useful for confirming immunity following rabies vaccination.'
    }
  ],

  serviceDetails: [
    {
      service: 'Rabies Antibody Analysis',
      validity: 'Medical Purpose',
      price: '₹3,500'
    }
  ]
},

{
  id: 21,
  title: 'HIV 4th Generation Test',
  slug: 'hiv-4th-generation-test',
  category: 'PCR TEST',
  price: 1200,
  oldPrice: 2500,
  discount: 52,

  image: 'assets/tests/dna-test/hiv-4th-generation-test.png',

  images: [
    'assets/tests/dna-test/hiv-4th-generation-test.png'
  ],

  doctor: 'GENERAL PHYSICIAN',

  reportsTime: '24 Hours',

  description:
    'HIV 4th Generation testing detects both HIV antibodies and p24 antigen for early and accurate screening.',

  descriptionContent: [
    {
      title: 'HIV 4th Generation Test Price'
    },
    {
      heading: 'What Is HIV 4th Generation Testing?',
      content:
        'The test detects HIV antibodies and p24 antigen, allowing earlier detection compared to older HIV screening methods.'
    },
    {
      heading: 'Advantages',
      bullets: [
        'Early Detection',
        'High Accuracy',
        'Confidential Testing',
        'Fast Reporting'
      ]
    },
    {
      heading: 'Who Should Consider Testing?',
      bullets: [
        'Routine Health Screening',
        'High Risk Exposure',
        'Pre-Marital Screening',
        'Medical Evaluation'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Early HIV Detection',
      content:
        'Detects infection sooner than antibody-only HIV tests.'
    }
  ],

  serviceDetails: [
    {
      service: 'HIV 4th Generation Screening',
      validity: 'Medical Screening',
      price: '₹1,200'
    }
  ]
},

{
  id: 22,
  title: 'Hepatitis B Viral Load Test',
  slug: 'hepatitis-b-viral-load-test',
  category: 'PCR TEST',
  price: 4500,
  oldPrice: 7000,
  discount: 36,

  image: 'assets/tests/dna-test/hepatitis-b-viral-load-test.png',

  images: [
    'assets/tests/dna-test/hepatitis-b-viral-load-test.png'
  ],

  doctor: 'GENERAL PHYSICIAN',

  reportsTime: '3 Days',

  description:
    'Hepatitis B Viral Load Testing measures the amount of Hepatitis B virus present in the blood using advanced PCR technology.',

  descriptionContent: [
    {
      title: 'Hepatitis B Viral Load Test Cost'
    },
    {
      heading: 'What Is Viral Load Testing?',
      content:
        'This PCR-based test quantifies Hepatitis B virus DNA in the bloodstream to assess disease activity and treatment response.'
    },
    {
      heading: 'When Is Testing Recommended?',
      bullets: [
        'Chronic Hepatitis B Infection',
        'Treatment Monitoring',
        'Disease Progression Assessment',
        'Specialist Follow-Up'
      ]
    },
    {
      heading: 'Benefits',
      bullets: [
        'Accurate Viral Quantification',
        'Advanced PCR Technology',
        'Treatment Monitoring Support',
        'Reliable Laboratory Results'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'PCR-Based Viral Analysis',
      content:
        'Measures viral DNA concentration to assist clinical decision making.'
    }
  ],

  serviceDetails: [
    {
      service: 'HBV Viral Load Analysis',
      validity: 'Medical Monitoring',
      price: '₹4,500'
    }
  ]
},
{
  id: 23,
  title: 'Food Intolerance Allergy Test',
  slug: 'food-intolerance-allergy-test',
  category: 'ALLERGY TEST',
  price: 6000,
  oldPrice: 8500,
  discount: 29,

  image: 'assets/tests/dna-test/food-intolerance-allergy-test.png',

  images: [
    'assets/tests/dna-test/food-intolerance-allergy-test.png'
  ],

  doctor: 'DERMATOLOGIST',

  reportsTime: '7 Days',

  description:
    'Food Intolerance and Allergy Testing helps identify foods that may trigger allergic reactions, digestive discomfort or chronic inflammation.',

  descriptionContent: [
    {
      title: 'Food Intolerance Allergy Test Cost in India'
    },
    {
      heading: 'What Is Food Intolerance Testing?',
      content:
        'The test identifies foods that may cause intolerance symptoms such as bloating, headaches, digestive disturbances and skin reactions.'
    },
    {
      heading: 'Common Symptoms',
      bullets: [
        'Bloating',
        'Digestive Discomfort',
        'Skin Rashes',
        'Headaches',
        'Fatigue'
      ]
    },
    {
      heading: 'Benefits',
      bullets: [
        'Identify Trigger Foods',
        'Improve Digestive Health',
        'Personalized Dietary Planning',
        'Comprehensive Laboratory Analysis'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Food Sensitivity Analysis',
      content:
        'Advanced testing helps identify foods associated with adverse reactions.'
    }
  ],

  serviceDetails: [
    {
      service: 'Food Intolerance Panel',
      validity: 'Medical Analysis',
      price: '₹6,000'
    }
  ]
},

{
  id: 24,
  title: 'Food Intolerance Complete Panel',
  slug: 'food-intolerance-complete-panel',
  category: 'ALLERGY TEST',
  price: 12000,
  oldPrice: 17000,
  discount: 29,

  image: 'assets/tests/dna-test/food-intolerance-complete-panel.png',

  images: [
    'assets/tests/dna-test/food-intolerance-complete-panel.png'
  ],

  doctor: 'DERMATOLOGIST',

  reportsTime: '8 Days',

  description:
    'Comprehensive food intolerance screening covering a broad range of commonly consumed food items.',

  descriptionContent: [
    {
      title: 'Food Intolerance Complete Panel Cost'
    },
    {
      heading: 'Comprehensive Screening',
      content:
        'The complete panel evaluates a large number of food items to identify potential dietary triggers.'
    },
    {
      heading: 'Panel Features',
      bullets: [
        'Expanded Food Coverage',
        'Detailed Laboratory Report',
        'Personalized Dietary Insights',
        'Professional Testing Standards'
      ]
    },
    {
      heading: 'Who Should Consider This Test?',
      bullets: [
        'Chronic Digestive Symptoms',
        'Persistent Bloating',
        'Frequent Headaches',
        'Unexplained Food Reactions'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Advanced Food Screening',
      content:
        'Provides a broader analysis than standard food intolerance testing.'
    }
  ],

  serviceDetails: [
    {
      service: 'Complete Food Panel',
      validity: 'Medical Analysis',
      price: '₹12,000'
    }
  ]
},

{
  id: 25,
  title: 'Medicine Drug Allergy Test',
  slug: 'medicine-drug-allergy-test',
  category: 'ALLERGY TEST',
  price: 7500,
  oldPrice: 11000,
  discount: 32,

  image: 'assets/tests/dna-test/medicine-drug-allergy-test.png',

  images: [
    'assets/tests/dna-test/medicine-drug-allergy-test.png'
  ],

  doctor: 'DERMATOLOGIST',

  reportsTime: '7 Days',

  description:
    'Medicine Drug Allergy Testing helps identify allergic reactions associated with specific medications and pharmaceutical compounds.',

  descriptionContent: [
    {
      title: 'Medicine Drug Allergy Test Cost in India'
    },
    {
      heading: 'What Is Drug Allergy Testing?',
      content:
        'Drug allergy testing evaluates immune responses associated with certain medications to support safer treatment planning.'
    },
    {
      heading: 'Common Reasons For Testing',
      bullets: [
        'Previous Drug Reactions',
        'Medication Safety Assessment',
        'Allergy Investigation',
        'Treatment Planning'
      ]
    },
    {
      heading: 'Benefits',
      bullets: [
        'Improved Medication Safety',
        'Professional Laboratory Analysis',
        'Accurate Allergy Assessment',
        'Detailed Medical Reports'
      ]
    }
  ],

  descriptionSections: [
    {
      heading: 'Medication Allergy Evaluation',
      content:
        'Supports clinicians in identifying possible medication-related allergic reactions.'
    }
  ],

  serviceDetails: [
    {
      service: 'Drug Allergy Analysis',
      validity: 'Medical Evaluation',
      price: '₹7,500'
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
