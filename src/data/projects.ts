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
    id: 'mint',
    title: 'MINT',
    description: 'Creating a structurally aware protein language model specialized on multimers.',
    type: 'ML',
    iconType: 'invader2',
    date: '2024-01-15',
    author: 'SoftNanoLab Team',
    tags: ['Machine Learning', 'Protein Language Models', 'Multimers'],
  },
];
