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
    bio: '"Pretends to care about code. Accidentally reveals true love for immunology"',
    avatar: '\ud83d\udc68\u200d\ud83e\uddd1\u200d\ud83c\udf93',
    image: '/stefano-angioletti-uberti.jpeg',
    socialLinks: {
      googleScholar: 'https://scholar.google.com/citations?user=example',
      x: 'https://x.com/example',
      website: 'https://example.com',
      linkedin: 'https://linkedin.com/in/example',
      github: 'https://github.com/example',
    },
  },
  {
    name: 'Jakub Lala',
    role: 'PhD Student',
    bio: '"Takes a break from orchestrating 20 cursor agents by shitposting on X"',
    avatar: '\ud83d\udc68\u200d\ud83d\udcbb',
    image: '/jakub-lala.jpg',
  },
  {
    name: 'Jude Wells',
    role: 'Post Doc',
    bio: '"1PHD.pdb, 1DJ2.pdb"',
    avatar: '\ud83c\udfb6',
    image: '/jude-wells.jpg',
  },
  {
    name: 'Harsh Agrawal',
    role: 'Master\'s Student',
    bio: '"Will wake up every sunday and refactor the entire codebase rather than writing tests"',
    avatar: '\ud83d\udc68\u200d\ud83d\udcbb',
    image: '/harsh-agrawal.jpg',
  },
  {
    name: 'Jiayang Zhang',
    role: 'Master\'s Student',
    bio: '"huggingface is never as good as hugging trees"',
    avatar: '\ud83c\udf32',
    image: '/jiyang-zhang.jpg',
  },
];
