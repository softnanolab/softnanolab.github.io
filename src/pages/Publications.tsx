import { motion } from 'framer-motion';
import { publications } from '../data/publications';

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
              <h4>
                {pub.title}
                {pub.isNew && <span className="new-tag">NEW</span>}
              </h4>
              <p className="pub-authors">{pub.authors}</p>
              <p className="pub-journal">
                In <em>{pub.journal}</em>
              </p>
              <a href={pub.link} className="pixel-link">
                [PDF]
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Publications;
