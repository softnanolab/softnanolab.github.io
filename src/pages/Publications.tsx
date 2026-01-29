import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { publications, PublicationAuthor } from '../data/publications';
import { getNameSlug } from '../data/team';

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="calendar-icon">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
  </svg>
);

const renderAuthors = (authors: PublicationAuthor[]) => {
  return authors.map((author) => (
    <span key={author.name}>
      {author.isTeamMember ? (
        <Link to={`/person/${getNameSlug(author.name)}`} className="pub-author-link">
          {author.name}
        </Link>
      ) : (
        <span className="pub-author-box">{author.name}</span>
      )}
    </span>
  ));
};

const Publications = () => {
  return (
    <>
      <h2 className="section-title">Publications</h2>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.id}
            className="pub-item"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="pub-icon">
              {pub.title.includes('BAGEL') ? (
                <img src="/bagel-logo.png" alt="BAGEL Logo" className="bagel-logo-pub" />
              ) : (
                <div className="pub-year-badge">{pub.year}</div>
              )}
            </div>
            <div className="pub-content">
              <div className="pub-year-label">
                <CalendarIcon />
                {new Date(pub.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <h4>{pub.title}</h4>
              <p className="pub-journal">{pub.journal}</p>
              <div className="pub-authors">{renderAuthors(pub.authors)}</div>
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pixel-link">
                Read Article →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Publications;
