export interface PublicationAuthor {
  name: string;
  isTeamMember: boolean;
  externalLink?: string;
}

export interface Publication {
  id: number;
  year: string;
  title: string;
  journal: string;
  authors: PublicationAuthor[];
  link: string;
  date: string; // ISO date for sorting
  codeLink?: string;
  dataLink?: string;
}

export const publications: Publication[] = [
  {
    id: 5,
    year: '2026',
    title:
      'An Energy Landscape Approach to Miniaturizing Enzymes using Protein Language Model Embeddings',
    journal: 'bioRxiv',
    authors: [
      { name: 'Jakub Lála', isTeamMember: true },
      { name: 'Harsh Agrawal', isTeamMember: true },
      { name: 'Fanfei Dong', isTeamMember: false },
      { name: 'Jude Wells', isTeamMember: true },
      { name: 'Dr. Stefano Angioletti-Uberti', isTeamMember: true },
    ],
    link: 'https://www.biorxiv.org/content/10.64898/2026.03.04.709378v1',
    date: '2026-03-05',
    codeLink: 'https://github.com/softnanolab/bagel/tree/main/scripts/mini-enzymes',
    dataLink: 'https://zenodo.org/records/18854113',
  },
  {
    id: 4,
    year: '2026',
    title:
      'Validation and Analysis of 12,000 AI-driven CAR-T Designs in the Bits to Binders Competition',
    journal: 'bioRxiv',
    authors: [
      { name: 'Colin W. Kosonocky', isTeamMember: false },
      { name: 'Alex M. Abel', isTeamMember: false },
      { name: 'Aaron L. Feller', isTeamMember: false },
      { name: 'Amanda E. Cifuentes Rieffer', isTeamMember: false },
      { name: 'Phillip R. Woolley', isTeamMember: false },
      { name: 'Jakub Lála', isTeamMember: true },
      { name: 'Daryl R. Barth', isTeamMember: false },
      { name: 'Tynan Gardner', isTeamMember: false },
      { name: 'Stephen C. Ekker', isTeamMember: false },
      { name: 'Andy D. Ellington', isTeamMember: false },
      { name: 'Wesley A. Wierson', isTeamMember: false },
      { name: 'Edward M. Marcotte', isTeamMember: false },
    ],
    link: 'https://www.biorxiv.org/content/10.64898/2026.03.03.709355v2',
    date: '2026-03-03',
  },
  {
    id: 3,
    year: '2025',
    title: 'Mind the Gap: An Embedding Guide to Safely Travel in Sequence Space',
    journal: 'bioRxiv',
    authors: [
      {
        name: 'Adam Wu',
        isTeamMember: false,
        externalLink: 'https://www.linkedin.com/in/akhwu/',
      },
      { name: 'Quentin Trolliet', isTeamMember: true },
      { name: 'Abhinav Rajendran', isTeamMember: true },
      { name: 'Jakub Lála', isTeamMember: true },
      { name: 'Dr. Stefano Angioletti-Uberti', isTeamMember: true },
    ],
    link: 'https://www.biorxiv.org/content/10.1101/2025.06.19.660524v3',
    date: '2025-06-19',
  },
  {
    id: 1,
    year: '2025',
    title: 'BAGEL: Protein Engineering via Exploration of an Energy Landscape',
    journal: 'PLOS Computational Biology',
    authors: [
      { name: 'Jakub Lála', isTeamMember: true },
      { name: 'Ayham Al-Saffar', isTeamMember: true },
      { name: 'Dr. Stefano Angioletti-Uberti', isTeamMember: true },
    ],
    link: 'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1013774',
    date: '2025-12-03',
    codeLink: 'https://github.com/softnanolab/bagel',
  },
  {
    id: 2,
    year: '2025',
    title: 'Harnessing Protein-Folding Algorithms to Drug Intrinsically Disordered Epitopes',
    journal: 'bioRxiv',
    authors: [
      { name: 'Jakub Lála', isTeamMember: true },
      { name: 'Dr. Stefano Angioletti-Uberti', isTeamMember: true },
    ],
    link: 'https://www.biorxiv.org/content/10.1101/2025.11.11.687846v1.abstract',
    date: '2025-11-11',
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
