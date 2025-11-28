import { motion } from 'framer-motion';
import { team } from '../data/content';

const Team = () => {
  return (
    <>
      <h2 className="section-title">The Team</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <motion.div 
            key={member.id}
            className="team-card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="member-avatar">{member.avatar}</div>
            <h3>{member.name}</h3>
            <div className="member-role">{member.role}</div>
            <p>{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Team;
