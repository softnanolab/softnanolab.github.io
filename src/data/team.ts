export interface SocialLinks {
  googleScholar?: string;
  x?: string; // X (formerly Twitter)
  website?: string;
  linkedin?: string;
  github?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string; // Can be emoji or image URL
  image?: string; // Optional image URL for photo
  email?: string; // Optional email address
  socialLinks?: SocialLinks; // Optional social media links
}

// Helper function to create slug from name for routing
export function getNameSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const team: TeamMember[] = [
  {
    name: 'Dr. Stefano Angioletti-Uberti',
    role: 'Lab Lead',
    bio: 'Dr. Stefano Angioletti-Uberti is an Imperial College PI and biotech entrepreneur specializing in nanobiotechnology and multivalent selectivity for gene delivery. He is deeply interested in the computational modelling of proteins and shares a deep love for immunobiology.',
    avatar: '\ud83d\udc68\u200d\ud83e\uddd1\u200d\ud83c\udf93',
    image: '/team/stefano-angioletti-uberti.jpeg',
    email: 's.angioletti-uberti@imperial.ac.uk',
    socialLinks: {
      googleScholar: 'https://scholar.google.co.uk/citations?user=l17sXL0AAAAJ&hl=en',
      website: 'https://profiles.imperial.ac.uk/s.angioletti-uberti',
      linkedin:
        'https://www.linkedin.com/in/stefano-angioletti-uberti-b8319860/?originalSubdomain=uk',
      github: 'https://github.com/sangioletti',
    },
  },
  {
    name: 'Jude Wells',
    role: 'Research Fellow',
    bio: 'Encode AI for Science Research Fellow working on machine learning methods for protein design. Most recent project is [ProFam](https://www.biorxiv.org/content/10.64898/2025.12.19.695431v1), an autoregressive protein family language model for functional protein design.',
    avatar: '\ud83c\udfb6',
    image: '/team/jude-wells.jpg',
    email: 'jude.wells@encode.ai',
    socialLinks: {
      github: 'https://github.com/judeWells/',
      googleScholar: 'https://scholar.google.com/citations?user=6otdJFgAAAAJ&hl=en&oi=ao',
      linkedin: 'https://www.linkedin.com/in/jude-wells/',
      x: 'https://x.com/_judewells',
    },
  },
  {
    name: 'Jakub Lala',
    role: 'PhD Student',
    bio: 'PhD student researching computational methods for protein engineering and design.',
    avatar: '\ud83d\udc68\u200d\ud83d\udcbb',
    image: '/team/jakub-lala.jpg',
    email: 'jakublala@gmail.com',
    socialLinks: {
      github: 'https://github.com/jakublala',
      googleScholar: 'https://scholar.google.com/citations?user=Syk0xGgAAAAJ&hl=en',
      linkedin: 'https://www.linkedin.com/in/jlala/',
      x: 'https://x.com/jakublala',
      website: 'https://jakub.bio/',
    },
  },
  {
    name: 'Erik Baldauf',
    role: 'Visiting Researcher',
    bio: "Visiting student working on flow matching and stochastic interpolants to improve structure prediction with a focus on protein binder design. Holds a Bachelor's in Physics and a Master's in Biophysics",
    avatar: '\ud83e\uddec',
    image: '/team/erik.png',
    email: 'erik.baldauf@imperial.ac.uk',
    socialLinks: {
      github: 'https://github.com/EMB-Git',
      linkedin: 'https://www.linkedin.com/in/erik-baldauf-970893292',
    },
  },
  {
    name: 'Harsh Agrawal',
    role: "Master's Student",
    bio: 'Masters student training Protein Language Models specialized for multimers. Broadly interested in structure prediction and protein design.',
    avatar: '\ud83d\udc68\u200d\ud83d\udcbb',
    image: '/team/harsh-agrawal.jpg',
    email: 'harshagrawal.1312@gmail.com',
    socialLinks: {
      github: 'https://github.com/harshagrawal13',
      linkedin: 'https://www.linkedin.com/in/harshag1312/',
      x: 'https://x.com/harshag1312',
      website: 'https://harsh-agrawa.com',
    },
  },
  {
    name: 'Jiayang Zhang',
    role: "Master's Student",
    bio: 'Using BAGEL to investigate de novo enzyme design by imposing catalytic triads onto the surfaces of non-enzymatic protein scaffolds.',
    avatar: '\ud83c\udf32',
    image: '/team/jiyang-zhang.jpg',
    email: 'jiayangzhang@gmail.com',
    socialLinks: {
      github: 'https://github.com/jiayang-zhang',
      googleScholar: 'https://scholar.google.com/citations?user=DKtXpJcAAAAJ&hl=en',
      website: 'https://jiayangzh.com/',
    },
  },
  {
    name: 'Toby Hallett',
    role: 'Incoming PhD Student',
    bio: 'Toby is interested in both computational and experimental protein engineering. Previously, he was an undergraduate student in the Department of Materials at Imperial College, receiving the Rolls Royce / Armourers and Brasiers award for his performance in his studies.',
    avatar: '🎓',
    image: '/team/toby-hallett.png',
    socialLinks: {
      github: 'https://github.com/TobyH9',
      linkedin: 'https://www.linkedin.com/in/toby-hallett-0684a5329/?originalSubdomain=uk',
    },
  },
];

export const pastMembers: TeamMember[] = [
  {
    name: 'Aayham Al-Saffar',
    role: 'Former Undergraduate Student',
    bio: 'Materials Science and Engineering undergraduate who co-authored the [BAGEL](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1013774) protein engineering framework. Created molecular simulation tools for materials science education at Imperial.',
    avatar: '🔬',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ayhamalsaffar/?originalSubdomain=uk',
      github: 'https://github.com/AyhamSaffar',
    },
  },
  {
    name: 'Arnav Cheruku',
    role: 'Former Student',
    bio: 'Former member associated with computational biology research at Imperial College London.',
    avatar: '💻',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/arnav-cheruku-a616671b3/?originalSubdomain=uk',
    },
  },
];
