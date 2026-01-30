import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getNameSlug } from '../data/team';

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="calendar-icon">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
  </svg>
);

const Updates = () => {
  return (
    <>
      <h2 className="section-title">Lab Updates</h2>
      <motion.div
        className="news-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
          <a
            href="https://x.com/_judewells/status/2003055862953512964"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              width: '60%',
              transform: 'rotate(-1.5deg)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(-1.5deg)')}
          >
            <video
              src="/media/profam.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="news-media"
              style={{ width: '100%', borderRadius: '4px', display: 'block' }}
            />
          </a>
        </div>
        <p>
          <strong className="news-date">
            <CalendarIcon />
            Dec 22, 2024:
          </strong>{' '}
          <span className="new-tag">NEW</span>{' '}
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
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
          <a
            href="https://x.com/jakublala/status/1999045952343065076"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              width: '60%',
              transform: 'rotate(1.5deg)',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(1.5deg)')}
          >
            <img
              src="/media/in_silico.jpeg"
              alt="In-Silico #3 Event"
              className="news-media"
              style={{ width: '100%', borderRadius: '4px', display: 'block' }}
            />
          </a>
        </div>
        <p>
          <strong className="news-date">
            <CalendarIcon />
            Dec 11, 2024:
          </strong>{' '}
          <Link to={`/person/${getNameSlug('Jakub Lala')}`} className="news-link">
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
          with Gabriele Corso (Boltz), Charlie Harris, Callum Dysdale, and Hiruna Cretu as speakers.
        </p>
      </motion.div>
    </>
  );
};

export default Updates;
