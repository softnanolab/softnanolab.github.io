import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-wrapper">
      <div className="vintage-overlay"></div>
      <div className="scanlines"></div>

      <div className="container">
        <header>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <motion.h1 
              className="pixel-title"
              whileHover={{ 
                textShadow: "6px 6px 0px #93B0DA, -2px -2px 0px #C9E7FB",
                scale: 1.02
              }}
            >
              SoftNanoLab
            </motion.h1>
          </Link>
          <p className="subtitle">Exploring the soft and small.</p>
          
          <nav className="funky-nav">
            <Link to="/team" className="nav-btn team-btn">
              <span className="btn-icon">👥</span> TEAM
            </Link>
            <Link to="/publications" className="nav-btn pub-btn">
              <span className="btn-icon">📜</span> PUBLICATIONS
            </Link>
            <Link to="/contact" className="nav-btn contact-btn">
              <span className="btn-icon">📠</span> CONTACT
            </Link>
          </nav>

          <div className="marquee-container">
            <div className="marquee-text">
              +++ LATEST: New paper in Nature Nanotech +++ PhD positions open for Fall 2025 +++ Seminar this Friday: Dr. Freeman on Quantum Foam +++
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer>
          <p>&copy; 2025 SoftNanoLab. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
