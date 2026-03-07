import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useGitHubRepoStats } from '../data/hooks';
import { getNameSlug } from '../data/team';
import { publications, PublicationAuthor } from '../data/publications';
import { openSourceProjects } from '../data/opensource';
import { labUpdates } from '../data/updates';
import { useEffect, useState } from 'react';
import CalendarIcon from '../components/CalendarIcon';
import UpdateEntry from '../components/UpdateEntry';

const visibleProjects = openSourceProjects.filter((project) => !project.hidden);

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
          {labUpdates.slice(0, 4).map((update, index) => (
            <UpdateEntry key={update.id} update={update} index={index} />
          ))}
        </div>
      </motion.section>

      <motion.div
        className="view-more-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/updates" className="pixel-btn view-more-btn">
          {'>> '} VIEW ALL UPDATES
        </Link>
      </motion.div>

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
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pixel-link">
                Read Article →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

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

      <h2 className="section-title">Open Source</h2>

      <motion.div
        className="opensource-list"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {visibleProjects.slice(0, 3).map((project) => (
          <div key={project.id} className="opensource-item">
            <div className="opensource-header">
              {project.logo ? (
                <div className="opensource-title-with-logo">
                  <img src={project.logo} alt={`${project.name} Logo`} className="bagel-logo" />
                  <h4>{project.name}</h4>
                </div>
              ) : (
                <h4>{project.name}</h4>
              )}
              <GitHubStats owner={project.githubOwner} repo={project.githubRepo} />
            </div>
            <p>{project.description}</p>
            <a
              href={`https://github.com/${project.githubOwner}/${project.githubRepo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-link"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="view-more-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/opensource" className="pixel-btn view-more-btn">
          {'>> '} VIEW ALL OPEN SOURCE
        </Link>
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
          <Link
            to={`/person/${getNameSlug('Dr. Stefano Angioletti-Uberti')}`}
            className="contact-link"
          >
            Stefano
          </Link>{' '}
          (s.angioletti-uberti@imperial.ac.uk)
        </p>
      </motion.section>
    </>
  );
};

export default Home;
