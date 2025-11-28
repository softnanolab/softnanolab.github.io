export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  iconType: 'invader1' | 'invader2';
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface Publication {
  id: number;
  year: string;
  title: string;
  journal: string;
  authors: string;
  link: string;
  isNew: boolean;
}

export const projects: Project[] = [
  {
    id: "bagel",
    title: "Project BAGEL",
    description: "Bio-inspired Architecture for General Engineered Lattices. Investigating how toroidal structures can be utilized in microscopic drug delivery systems.",
    type: "Nanotech",
    iconType: "invader1"
  },
  {
    id: "quantum-foam",
    title: "Quantum Foam",
    description: "Studying the interactions of soft matter at the quantum level. Focus on stability and decoherence in biological environments.",
    type: "Physics",
    iconType: "invader2"
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Freeman",
    role: "Principal Investigator",
    bio: "Expert in soft matter physics and retro gaming.",
    avatar: "👾"
  },
  {
    id: 2,
    name: "Alyx V.",
    role: "Postdoc",
    bio: "Specializes in toroidal structures.",
    avatar: "👩‍🔬"
  },
  {
    id: 3,
    name: "Gordon B.",
    role: "PhD Student",
    bio: "Researching quantum decoherence.",
    avatar: "👨‍💻"
  }
];

export const publications: Publication[] = [
  {
    id: 1,
    year: "2023",
    title: "Self-assembling bagel structures in soft matter",
    journal: "Nature Nanotechnology",
    authors: "Freeman, D., Vance, A.",
    link: "#",
    isNew: true
  },
  {
    id: 2,
    year: "2022",
    title: "Quantum effects in biological foam",
    journal: "Physical Review Letters",
    authors: "Freeman, D., Barney, G.",
    link: "#",
    isNew: false
  }
];
