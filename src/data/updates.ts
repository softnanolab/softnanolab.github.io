export interface LabUpdate {
  id: string;
  date: string;
  content: string | null;
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
    id: 'profam-dec-2024',
    date: '2024-12-22',
    content: null, // Will be rendered in the component
    media: {
      type: 'video',
      src: '/media/profam.mp4',
      link: 'https://x.com/_judewells/status/2003055862953512964',
    },
    isNew: true,
  },
  {
    id: 'in-silico-3-dec-2024',
    date: '2024-12-11',
    content: null, // Will be rendered in the component
    media: {
      type: 'image',
      src: '/media/in_silico.jpeg',
      alt: 'In-Silico #3 Event',
      link: 'https://x.com/jakublala/status/1999045952343065076',
    },
  },
];
