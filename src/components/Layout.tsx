import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { site } from '../data/site';

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
                textShadow: '6px 6px 0px #93B0DA, -2px -2px 0px #C9E7FB',
                scale: 1.02,
              }}
            >
              {site.title}
            </motion.h1>
          </Link>
          <p className="subtitle">{site.subtitle}</p>

          <nav className="funky-nav">
            {site.navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="nav-btn">
                <span className="btn-icon">{link.icon}</span> {link.label}
              </Link>
            ))}
          </nav>

          <div className="marquee-container">
            <div className="marquee-text">{site.marqueeText}</div>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <p>{site.footerText}</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
