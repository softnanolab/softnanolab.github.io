import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <h2 className="section-title">Contact Us</h2>
      
      <motion.div 
        className="contact-card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="contact-info">
          <p><strong>Email:</strong> contact@softnanolab.edu</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong><br/>
          Department of Physics<br/>
          Building 42, Room 101<br/>
          University of Science</p>
        </div>

        <form className="retro-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>NAME:</label>
            <input type="text" className="pixel-input" placeholder="Dr. Freeman" />
          </div>
          <div className="form-group">
            <label>MESSAGE:</label>
            <textarea className="pixel-input" rows={4} placeholder="Enter transmission..."></textarea>
          </div>
          <button className="pixel-btn">{">>"} SEND TRANSMISSION</button>
        </form>
      </motion.div>
    </>
  );
};

export default Contact;
