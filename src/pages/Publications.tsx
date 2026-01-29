import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { publications, PublicationAuthor } from '../data/publications';
import { getNameSlug } from '../data/team';

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
            <div className="pub-year">{pub.year}</div>
            <div className="pub-content">
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
