import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTeam } from '../data/hooks';

const Team = () => {
  const team = useTeam();
  return (
    <>
      <motion.section 
        className="christmas-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="christmas-hat-container">
          <div className="pixel-christmas-hat"></div>
        </div>
        <div className="christmas-sock-left"></div>
        <div className="christmas-sock-right"></div>
        
        <div className="christmas-content">
          <h2 className="christmas-title">🎄 Christmas Dinner 🎄</h2>
          <p className="christmas-date">16th December 2025</p>
          <div className="christmas-image-wrapper">
            <img 
              src="/christmas-dinner.jpg" 
              alt="Team Christmas Dinner" 
              className="christmas-dinner-image"
            />
          </div>
          <p className="christmas-tagline">"Santa prefers native conformations"</p>
        </div>
      </motion.section>

      <h2 className="section-title">The Team</h2>

      <div className="team-grid">
        {team.map((member, index) => (
          <motion.div 
            key={member.id}
            className="team-card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: (index * 0.1) + 0.5 }}
            whileHover={{ y: -10 }}
          >
            <div className="member-avatar">
              {member.image ? (
                <img src={member.image} alt={member.name} className="member-photo" />
              ) : (
                member.avatar
              )}
            </div>
            <h3>{member.name}</h3>
            <div className="member-role">{member.role}</div>
            <p>{member.bio}</p>
            <Link to={`/person/${member.id}`} className="pixel-btn">{">>"} KNOW MORE</Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Team;
