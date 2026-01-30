export interface OpenSourceProject {
  id: string;
  name: string;
  description: string;
  githubOwner: string;
  githubRepo: string;
  logo?: string;
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
    name: 'Boileroom: A unified serverless platform for protein models',
    description:
      'Unified serverless platform for deploying and running protein structure prediction models',
    githubOwner: 'softnanolab',
    githubRepo: 'boileroom',
  },
];
