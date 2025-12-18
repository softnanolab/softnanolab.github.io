import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useProjects } from '../data/hooks';

const Home = () => {
  const projects = useProjects();
  return (
    <>
      <motion.section 
        className="news-box"
        initial={{ rotate: -1, scale: 0.9 }}
        animate={{ rotate: -1, scale: 1 }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="news-header">
          <span className="pixel-icon blink-fast">👾</span> LAB UPDATES
        </div>
        <div className="news-content">
          <p><strong>2023-10-27:</strong> <span className="new-tag">NEW</span> New paper published in <em>Nature Nanotechnology</em> regarding self-assembling bagel structures!</p>
          <p><strong>2023-09-15:</strong> Welcome to our new PhD students joining the group this fall.</p>
          <p><strong>2023-08-01:</strong> SoftNanoLab receives grant for "Quantum Foam" research.</p>
        </div>
      </motion.section>

      <h2 className="section-title">Research Projects</h2>
      
      {projects.map((project) => (
        <motion.div 
          key={project.id}
          className="project-card"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.02, rotate: 1, boxShadow: "10px 10px 0px #E63946" }}
        >
          <div className="project-icon-container">
            <div className={`space-invader-${project.iconType === 'invader1' ? '1' : '2'}`}></div>
          </div>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <Link to={`/project/${project.id}`} className="pixel-btn">{">>"} VIEW PROJECT</Link>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Home;
