import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { getNameSlug } from './team';

export interface LabUpdate {
  id: string;
  date: string;
  renderContent: () => ReactNode;
  media?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    link?: string;
  };
  isNew?: boolean;
}

export const labUpdates: LabUpdate[] = [
  {
    id: 'mini-enzymes-mar-2026',
    date: '2026-03-05',
    media: {
      type: 'video',
      src: '/media/mini_enzymes.mp4',
      link: 'https://x.com/jakublala/status/2029918079094829357',
    },
    isNew: true,
    renderContent: () => (
      <>
        <Link to={`/person/${getNameSlug('Jakub Lála')}`} className="news-link">
          Jakub
        </Link>
        , Harsh, Fanfei,{' '}
        <Link to={`/person/${getNameSlug('Jude Wells')}`} className="news-link">
          Jude
        </Link>
        , and{' '}
        <Link to={`/person/${getNameSlug('Dr. Stefano Angioletti-Uberti')}`} className="news-link">
          Stefano
        </Link>{' '}
        published a new{' '}
        <a
          href="https://github.com/softnanolab/bagel"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          BAGEL
        </a>{' '}
        case study — miniaturizing enzymes by up to 80% while preserving active-site geometry. A
        simple inference-time technique using protein language models, no extra training required.{' '}
        <a
          href="https://www.biorxiv.org/content/10.64898/2026.03.04.709378v1"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Paper
        </a>
        {' · '}
        <a
          href="https://zenodo.org/records/18854113"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Data
        </a>
        {' · '}
        <a
          href="https://github.com/softnanolab/bagel/tree/main/scripts/mini-enzymes"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Code
        </a>
      </>
    ),
  },
  {
    id: 'bits-to-binders-mar-2026',
    date: '2026-03-03',
    isNew: true,
    renderContent: () => (
      <>
        The results of the{' '}
        <a
          href="https://www.biorxiv.org/content/10.64898/2026.03.03.709355v2"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Bits to Binders
        </a>{' '}
        AI-driven protein design competition are out! Competitors from 42+ countries submitted
        12,000 CD20 binder sequences for CAR-T immunotherapy — 707 showed CD20-specific
        proliferation, with 3 confirmed to bind CD20 as non-CAR binders.{' '}
        <Link to={`/person/${getNameSlug('Jakub Lála')}`} className="news-link">
          Jakub
        </Link>{' '}
        co-authored the manuscript.
      </>
    ),
  },
  {
    id: 'berlin-bio-ai-hackathon-feb-2026',
    date: '2026-02-28',
    media: {
      type: 'image',
      src: '/media/berlin_bio_ai_hackathon.jpeg',
      alt: 'Berlin Bio x AI Hackathon - Team In Silico presenting ProFam-DEvo',
      link: 'https://www.biohack.berlin/',
    },
    isNew: true,
    renderContent: () => (
      <>
        <Link to={`/person/${getNameSlug('Jude Wells')}`} className="news-link">
          Jude Wells
        </Link>{' '}
        and team won the protein binder design track at the{' '}
        <a
          href="https://www.biohack.berlin/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Berlin Bio × AI Hackathon
        </a>{' '}
        with ProFam-DEvo, a new method for designing protein binders using directed evolution guided
        by the{' '}
        <a
          href="https://www.biorxiv.org/content/10.64898/2025.12.19.695431v1"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          ProFam language model
        </a>
        .
      </>
    ),
  },
  {
    id: 'in-silico-4-feb-2026',
    date: '2026-02-25',
    media: {
      type: 'image',
      src: '/media/in_silico_004.jpg',
      alt: 'In Silico #004 Event',
      link: 'https://luma.com/gb3uso7t',
    },
    isNew: true,
    renderContent: () => (
      <>
        <Link to={`/person/${getNameSlug('Jakub Lála')}`} className="news-link">
          Jakub
        </Link>{' '}
        co-organized{' '}
        <a
          href="https://luma.com/gb3uso7t"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          In Silico #004
        </a>{' '}
        with talks from McClain Thiel, Patrick Kidger, Katarina Petrovic, and Ivan Jayapurna on AI
        for biology.
      </>
    ),
  },
  {
    id: 'foresight-fellow-jan-2026',
    date: '2026-01-22',
    media: {
      type: 'image',
      src: '/media/foresight_fellow_jakub.jpg',
      alt: 'Jakub Lála - Foresight Institute 2026 Fellow',
      link: 'https://foresight.org/fellowship/',
    },
    isNew: true,
    renderContent: () => (
      <>
        <Link to={`/person/${getNameSlug('Jakub Lála')}`} className="news-link">
          Jakub
        </Link>{' '}
        was selected as a 2026{' '}
        <a
          href="https://foresight.org/fellowship/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Foresight Institute Fellow
        </a>{' '}
        in Longevity Biotechnology, joining a cohort of early-career scientists advancing
        transformative science and technology.
      </>
    ),
  },
  {
    id: 'profam-dec-2025',
    date: '2025-12-22',
    media: {
      type: 'video',
      src: '/media/profam.mp4',
      link: 'https://x.com/_judewells/status/2003055862953512964',
    },
    renderContent: () => (
      <>
        <Link to={`/person/${getNameSlug('Jude Wells')}`} className="news-link">
          Jude Wells
        </Link>{' '}
        published{' '}
        <a
          href="https://x.com/_judewells/status/2003055862953512964"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          ProFam
        </a>
        , a protein family language model designed to generate functional protein variants and
        predict fitness.
      </>
    ),
  },
  {
    id: 'in-silico-3-dec-2025',
    date: '2025-12-11',
    media: {
      type: 'image',
      src: '/media/in_silico.jpeg',
      alt: 'In-Silico #3 Event',
      link: 'https://x.com/jakublala/status/1999045952343065076',
    },
    renderContent: () => (
      <>
        <Link to={`/person/${getNameSlug('Jakub Lála')}`} className="news-link">
          Jakub
        </Link>{' '}
        co-organized{' '}
        <a
          href="https://x.com/jakublala/status/1999045952343065076"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          In-Silico #3
        </a>{' '}
        with Gabriele Corso (Boltz), Charlie Harris, Callum Dysdale, and Miruna Cretu as speakers.
      </>
    ),
  },
];
