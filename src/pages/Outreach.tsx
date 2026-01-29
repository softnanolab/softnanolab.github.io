import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Tweet {
  id: string;
  username: string;
  date: string; // ISO date string for sorting
}

const allTweets: Tweet[] = [
  {
    id: '2014288730928910824',
    username: '_judewells',
    date: '2025-01-20',
  },
  {
    id: '2003055862953512964',
    username: '_judewells',
    date: '2024-12-22',
  },
  {
    id: '2001351684514287794',
    username: 'jakublala',
    date: '2024-12-14',
  },
  {
    id: '1999045952343065076',
    username: 'jakublala',
    date: '2024-12-11',
  },
  {
    id: '1942956074241294801',
    username: 'jakublala',
    date: '2024-10-08',
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const TWEETS_PER_PAGE = 3;

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const Outreach = () => {
  const [visibleCount, setVisibleCount] = useState(TWEETS_PER_PAGE);

  useEffect(() => {
    // Load Twitter widgets script if not already loaded
    if (!(window as any).twttr) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    } else {
      // If script already loaded, reload widgets
      (window as any).twttr.widgets.load();
    }
  }, [visibleCount]);

  const visibleTweets = allTweets.slice(0, visibleCount);
  const hasMore = visibleCount < allTweets.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + TWEETS_PER_PAGE, allTweets.length));
  };

  return (
    <>
      <h2 className="section-title">Posts</h2>

      <div className="timeline-container">
        {visibleTweets.map((tweet, index) => (
          <motion.div
            key={tweet.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
          >
            <div className="timeline-marker">
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-content">
              <div className="tweet-date">{formatDate(tweet.date)}</div>
              <div className="tweet-wrapper">
                <blockquote className="twitter-tweet" data-theme="light" data-dnt="true">
                  <a href={`https://twitter.com/${tweet.username}/status/${tweet.id}`}></a>
                </blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <motion.div
          className="load-more-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button onClick={loadMore} className="pixel-btn load-more-btn">
            {'>> '} LOAD MORE
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Outreach;
