export interface OpenSourceProject {
  id: string;
  name: string;
  description: string;
  githubOwner: string;
  githubRepo: string;
  logo?: string;
  hidden?: boolean;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: 'bagel',
    name: 'BAGEL: Open Source Protein Engineering Framework',
    description: 'A Bayesian optimization framework for protein engineering',
    githubOwner: 'softnanolab',
    githubRepo: 'bagel',
    logo: '/logos/bagel-logo.png',
  },
  {
    id: 'boileroom',
    name: 'boileroom: a unified serverless platform for protein models',
    description:
      'Unified serverless platform for deploying and running protein structure prediction models',
    githubOwner: 'softnanolab',
    githubRepo: 'boileroom',
  },
  {
    id: 'protein-monte-carlo',
    name: 'Protein-MC',
    description: 'Minimal Metropolis Monte Carlo optimiser for protein sequence design',
    githubOwner: 'AminoAnalytica',
    githubRepo: 'protein-monte-carlo',
    hidden: true,
  },
];
