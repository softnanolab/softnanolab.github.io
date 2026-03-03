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
}

export const publications: Publication[] = [
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
