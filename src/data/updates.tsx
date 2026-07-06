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
    id: 'harsh-encode-fellowship-jul-2026',
    date: '2026-07-06',
    isNew: true,
    renderContent: () => (
      <>
        Huge congratulations to{' '}
        <Link to="/team" state={{ scrollTo: getNameSlug('Harsh Agrawal') }} className="news-link">
          Harsh Agrawal
        </Link>
        , who has been awarded a prestigious{' '}
        <a
          href="https://encode.pillar.vc/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Encode: AI for Science Fellowship
        </a>{' '}
        to work with the group of{' '}
        <a
          href="https://eng.ox.ac.uk/people/molly-stevens"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Molly Stevens
        </a>{' '}
        at the University of Oxford. A richly deserved recognition — we couldn&apos;t be prouder.
        Congratulations, Harsh!
      </>
    ),
  },
  {
    id: 'isambard-ai-compute-jul-2026',
    date: '2026-07-02',
    isNew: true,
    renderContent: () => (
      <>
        We&apos;ve been awarded 10,000 hours of compute on{' '}
        <a
          href="https://www.bristol.ac.uk/research/centres/bristol-supercomputing/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Isambard-AI
        </a>
        , the UK&apos;s most powerful AI supercomputer, to train a model focused on protein-multimer
        structure prediction — extending{' '}
        <Link to="/team" state={{ scrollTo: getNameSlug('Harsh Agrawal') }} className="news-link">
          Harsh
        </Link>
        &apos;s work on protein language models specialized for multimers.
      </>
    ),
  },
  {
    id: 'glycocalyx-phd-mar-2026',
    date: '2026-03-18',
    media: {
      type: 'image',
      src: '/media/glycocalyx_virus.png',
      alt: 'SARS-CoV-2 virus attaching to cell glycocalyx — illustration of viral attachment mechanism',
      link: 'https://www.glycocalyx.org/',
    },
    renderContent: () => (
      <>
        Open PhD position — come work with{' '}
        <Link
          to="/team"
          state={{ scrollTo: getNameSlug('Dr. Stefano Angioletti-Uberti') }}
          className="news-link"
        >
          Stefano
        </Link>
        ! He&apos;s recruiting for DC15 in the EU{' '}
        <a
          href="https://www.glycocalyx.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          GLYCOCALYX
        </a>{' '}
        network: using CG modelling + ML to unravel how the glycocalyx — the sugar coat on cell
        surfaces — gates viral attachment to cells. Fully funded at Imperial College London for 36
        months.{' '}
        <a
          href="https://www.imperial.ac.uk/jobs/search-jobs/description/index.php?jobId=27204&jobTitle=Marie+Sk%C5%82odowska-Curie+Doctoral+Network+Researcher"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Apply by 30 March →
        </a>
      </>
    ),
  },
  {
    id: 'mini-enzymes-mar-2026',
    date: '2026-03-05',
    media: {
      type: 'video',
      src: '/media/mini_enzymes.mp4',
      link: 'https://x.com/jakublala/status/2029918079094829357',
    },
    renderContent: () => (
      <>
        <Link to="/team" state={{ scrollTo: getNameSlug('Jakub Lála') }} className="news-link">
          Jakub
        </Link>
        , Harsh, Fanfei,{' '}
        <Link to="/team" state={{ scrollTo: getNameSlug('Jude Wells') }} className="news-link">
          Jude
        </Link>
        , and{' '}
        <Link
          to="/team"
          state={{ scrollTo: getNameSlug('Dr. Stefano Angioletti-Uberti') }}
          className="news-link"
        >
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
    media: {
      type: 'image',
      src: '/media/bits_to_binders_fig.png',
      alt: 'Bits to Binders — BAGEL achieved the best hit-rate in the pooled proliferation assay',
      link: 'https://www.biorxiv.org/content/10.64898/2026.03.03.709355v2',
    },
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
        AI-driven protein design competition are out!{' '}
        <a
          href="https://github.com/softnanolab/bagel"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          BAGEL
        </a>{' '}
        achieved the best hit-rate in the pooled CD20-specific proliferation assay — more than 2x
        better than Chroma, from a recently IPO&apos;d company.{' '}
        <Link to="/team" state={{ scrollTo: getNameSlug('Jakub Lála') }} className="news-link">
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
    renderContent: () => (
      <>
        <Link to="/team" state={{ scrollTo: getNameSlug('Jude Wells') }} className="news-link">
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
    renderContent: () => (
      <>
        <Link to="/team" state={{ scrollTo: getNameSlug('Jakub Lála') }} className="news-link">
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
    id: 'stefano-sabbatical-odense-feb-2026',
    date: '2026-02-09',
    media: {
      type: 'image',
      src: '/media/stefano_odense.jpg',
      alt: 'Stefano at Odense University Hospital doing wet-lab CAR-T cell therapy training',
    },
    renderContent: () => (
      <>
        <Link
          to="/team"
          state={{ scrollTo: getNameSlug('Dr. Stefano Angioletti-Uberti') }}
          className="news-link"
        >
          Stefano
        </Link>{' '}
        has landed in Odense! He's on sabbatical at{' '}
        <a
          href="https://en.ouh.dk/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Odense University Hospital
        </a>
        , getting hands-on wet-lab training in CAR-T cell therapy with{' '}
        <a
          href="https://portal.findresearcher.sdu.dk/en/persons/mike-bogetofte-barnkob-2"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          Mike Bogetofte Barnkob
        </a>{' '}
        and the{' '}
        <a
          href="https://www.sdu.dk/en/forskning/citco"
          target="_blank"
          rel="noopener noreferrer"
          className="news-link"
        >
          CITCO
        </a>{' '}
        team at the University of Southern Denmark — pioneers in cancer cellular immunotherapy. A
        fantastic new chapter bridging our computational work with cutting-edge clinical science!
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
    renderContent: () => (
      <>
        <Link to="/team" state={{ scrollTo: getNameSlug('Jakub Lála') }} className="news-link">
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
        <Link to="/team" state={{ scrollTo: getNameSlug('Jude Wells') }} className="news-link">
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
        <Link to="/team" state={{ scrollTo: getNameSlug('Jakub Lála') }} className="news-link">
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
