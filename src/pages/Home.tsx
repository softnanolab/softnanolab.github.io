import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useGitHubRepoStats } from '../data/hooks';
import { getNameSlug } from '../data/team';
import { publications, PublicationAuthor } from '../data/publications';
import { useEffect, useState } from 'react';

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

interface GitHubStatsProps {
  owner: string;
  repo: string;
}

const StarIcon = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
  </svg>
);

const ForkIcon = () => (
  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
  </svg>
);

const GitHubStats = ({ owner, repo }: GitHubStatsProps) => {
  const stats = useGitHubRepoStats(owner, repo);
  const [displayStars, setDisplayStars] = useState(0);
  const [displayForks, setDisplayForks] = useState(0);

  useEffect(() => {
    if (!stats.loading && !stats.error) {
      // Animate stars
      const starsDuration = 1000;
      const starsStep = Math.ceil(stats.stars / 50);
      let currentStars = 0;
      const starsInterval = setInterval(() => {
        currentStars += starsStep;
        if (currentStars >= stats.stars) {
          setDisplayStars(stats.stars);
          clearInterval(starsInterval);
        } else {
          setDisplayStars(currentStars);
        }
      }, starsDuration / 50);

      // Animate forks
      const forksDuration = 1000;
      const forksStep = Math.ceil(stats.forks / 50);
      let currentForks = 0;
      const forksInterval = setInterval(() => {
        currentForks += forksStep;
        if (currentForks >= stats.forks) {
          setDisplayForks(stats.forks);
          clearInterval(forksInterval);
        } else {
          setDisplayForks(currentForks);
        }
      }, forksDuration / 50);

      return () => {
        clearInterval(starsInterval);
        clearInterval(forksInterval);
      };
    }
  }, [stats.loading, stats.error, stats.stars, stats.forks]);

  if (stats.loading) {
    return (
      <div className="github-stats">
        <span className="github-stat-loading">Loading...</span>
      </div>
    );
  }

  if (stats.error) {
    return null;
  }

  return (
    <div className="github-stats">
      <motion.div
        className="github-stat"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
      >
        <StarIcon />
        <span className="github-stat-label">Stars</span>
        <span className="github-stat-count">{displayStars}</span>
      </motion.div>
      <motion.div
        className="github-stat"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
      >
        <ForkIcon />
        <span className="github-stat-label">Forks</span>
        <span className="github-stat-count">{displayForks}</span>
      </motion.div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <motion.section
        className="news-box"
        initial={{ rotate: -1, scale: 0.9 }}
        animate={{ rotate: -1, scale: 1 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="news-header">
          <span className="pixel-icon blink-fast">👾</span> LAB UPDATES
        </div>
        <div className="news-content">
          <p>
            <strong>Dec 22, 2024:</strong> <span className="new-tag">NEW</span> Jude Wells published{' '}
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
          <p>
            <strong>Dec 11, 2024:</strong> Jakub co-organized{' '}
            <a
              href="https://x.com/jakublala/status/1999045952343065076"
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              In-Silico #3
            </a>{' '}
            with Gabrielle Corso (Boltz), Charlie Harris, Callum Dysdale, and Hiruna Cretu as
            speakers.
          </p>
        </div>
      </motion.section>

      <h2 className="section-title">Publications</h2>

      <motion.div
        className="publications-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {publications.slice(0, 2).map((pub, index) => (
          <motion.div
            key={pub.id}
            className="pub-item"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
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
      </motion.div>

      {publications.length > 2 && (
        <motion.div
          className="view-more-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/publications" className="pixel-btn view-more-btn">
            {'>> '} VIEW ALL PUBLICATIONS
          </Link>
        </motion.div>
      )}

      <h2 className="section-title">Open Source</h2>

      <motion.div
        className="opensource-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="opensource-item">
          <div className="opensource-header">
            <h4>BAGEL: Open Source Protein Engineering Framework</h4>
            <GitHubStats owner="softnanolab" repo="bagel" />
          </div>
          <a
            href="https://github.com/softnanolab/bagel"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-link"
          >
            View on GitHub →
          </a>
        </div>

        <div className="opensource-item">
          <div className="opensource-header">
            <h4>Boileroom: A unified serverless platform for protein models</h4>
            <GitHubStats owner="softnanolab" repo="boileroom" />
          </div>
          <a
            href="https://github.com/softnanolab/boileroom"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-link"
          >
            View on GitHub →
          </a>
        </div>
      </motion.div>

      <motion.section
        className="contact-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p className="contact-text">
          If you are an experimental biologist, chemist, ML engineer, or just want to chat, please
          drop an email to{' '}
          <a href="mailto:stefano@ic.ac.uk" className="contact-link">
            Stefano
          </a>{' '}
          (stefano@ic.ac.uk) or{' '}
          <a href="mailto:jakublala@gmail.com" className="contact-link">
            Jakub
          </a>{' '}
          (jakublala@gmail.com)
        </p>
      </motion.section>
    </>
  );
};

export default Home;
