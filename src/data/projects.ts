export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  iconType: 'invader1' | 'invader2';
  date?: string;
  author?: string;
  image?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 'bagel',
    title: 'Project BAGEL',
    description:
      'Bio-inspired Architecture for General Engineered Lattices. Investigating how toroidal structures can be utilized in microscopic drug delivery systems.',
    type: 'Nanotech',
    iconType: 'invader1',
    date: '2023-10-27',
    author: 'Dr. Freeman & Alyx V.',
    tags: ['Nanotechnology', 'Drug Delivery', 'Self-Assembly'],
  },
  {
    id: 'quantum-foam',
    title: 'Quantum Foam',
    description:
      'Studying the interactions of soft matter at the quantum level. Focus on stability and decoherence in biological environments.',
    type: 'Physics',
    iconType: 'invader2',
    date: '2023-08-01',
    author: 'Dr. Freeman & Gordon B.',
    tags: ['Quantum Physics', 'Soft Matter', 'Decoherence'],
  },
];
