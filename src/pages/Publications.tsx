import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { publications, PublicationAuthor } from '../data/publications';
import { getNameSlug } from '../data/team';

import CalendarIcon from '../components/CalendarIcon';

const renderAuthors = (authors: PublicationAuthor[]) => {
  return authors.map((author) => (
    <span key={author.name}>
      {author.isTeamMember ? (
        <Link to={`/person/${getNameSlug(author.name)}`} className="pub-author-link">
          {author.name}
        </Link>
      ) : author.externalLink ? (
        <a
          href={author.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="pub-author-link"
        >
          {author.name}
        </a>
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
                <img src="/logos/bagel-logo.png" alt="BAGEL Logo" className="bagel-logo-pub" />
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
              <div className="pub-links">
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pixel-link">
                  Paper →
                </a>
                {pub.codeLink && (
                  <a
                    href={pub.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-link"
                  >
                    Code →
                  </a>
                )}
                {pub.dataLink && (
                  <a
                    href={pub.dataLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-link"
                  >
                    Data →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Publications;
