export interface Publication {
  id: number;
  year: string;
  title: string;
  journal: string;
  authors: string;
  link: string;
  isNew: boolean;
}

export const publications: Publication[] = [
  {
    id: 1,
    year: '2023',
    title: 'Self-assembling bagel structures in soft matter',
    journal: 'Nature Nanotechnology',
    authors: 'Freeman, D., Vance, A.',
    link: '#',
    isNew: true,
  },
  {
    id: 2,
    year: '2022',
    title: 'Quantum effects in biological foam',
    journal: 'Physical Review Letters',
    authors: 'Freeman, D., Barney, G.',
    link: '#',
    isNew: false,
  },
];
