import { motion } from 'framer-motion';
import { labUpdates } from '../data/updates';
import UpdateEntry from '../components/UpdateEntry';

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
        {labUpdates.map((update, index) => (
          <UpdateEntry key={update.id} update={update} index={index} />
        ))}
      </motion.div>
    </>
  );
};

export default Updates;
