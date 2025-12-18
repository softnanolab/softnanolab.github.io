export interface SocialLinks {
  googleScholar?: string;
  x?: string; // X (formerly Twitter)
  website?: string;
  linkedin?: string;
  github?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string; // Can be emoji or image URL
  image?: string; // Optional image URL for photo
  socialLinks?: SocialLinks; // Optional social media links
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Freeman',
    role: 'Principal Investigator',
    bio: 'Expert in soft matter physics and retro gaming.',
    avatar: '\ud83d\udc7e',
  },
  {
    id: 2,
    name: 'Alyx V.',
    role: 'Postdoc',
    bio: 'Specializes in toroidal structures.',
    avatar: '\ud83d\udc69\u200d\ud83e\udd1d',
  },
  {
    id: 3,
    name: 'Gordon B.',
    role: 'PhD Student',
    bio: 'Researching quantum decoherence.',
    avatar: '\ud83d\udc68\u200d\ud83d\udcbb',
  },
  {
    id: 4,
    name: 'Dr. Stefano Angioletti-Uberti',
    role: 'Lab Lead',
    bio: 'Will calmly discuss algorithms — until someone mentions \'immune system\' and his eyes light up',
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
];
