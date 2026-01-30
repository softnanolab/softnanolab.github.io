import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useTeam } from '../data/hooks';
import { SocialLinks, pastMembers } from '../data/team';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const GoogleScholarIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WebsiteIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

interface SocialIconsProps {
  socialLinks?: SocialLinks;
}

const SocialIcons = ({ socialLinks }: SocialIconsProps) => {
  if (!socialLinks) return null;

  const links = [
    { url: socialLinks.github, icon: <GithubIcon />, label: 'GitHub' },
    { url: socialLinks.googleScholar, icon: <GoogleScholarIcon />, label: 'Google Scholar' },
    { url: socialLinks.linkedin, icon: <LinkedInIcon />, label: 'LinkedIn' },
    { url: socialLinks.x, icon: <XIcon />, label: 'X' },
    { url: socialLinks.website, icon: <WebsiteIcon />, label: 'Website' },
  ].filter((link) => link.url);

  if (links.length === 0) return null;

  return (
    <div className="team-social-icons">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="team-social-icon"
          title={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

// Helper function to parse markdown-style links in text
const parseBioLinks = (text: string) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | ReactNode)[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Add the link
    parts.push(
      <a key={key++} href={match[2]} target="_blank" rel="noopener noreferrer" className="bio-link">
        {match[1]}
      </a>
    );
    lastIndex = linkRegex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
};

const Team = () => {
  const team = useTeam();

  return (
    <>
      <motion.section
        className="christmas-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ padding: '1rem 2rem' }}
      >
        <div className="christmas-hat-container">
          <div className="pixel-christmas-hat"></div>
        </div>

        <div className="christmas-content">
          <h2 className="christmas-title">🎄 Christmas Dinner 🎄</h2>
          <p className="christmas-date">16th December 2025</p>
          <div className="christmas-image-wrapper">
            <img
              src="/media/christmas-dinner.jpg"
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
            key={member.name}
            className="team-card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
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
            <p>{parseBioLinks(member.bio)}</p>
            {member.email && (
              <div className="member-email">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="email-icon"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="email-text">{member.email}</span>
              </div>
            )}
            <SocialIcons socialLinks={member.socialLinks} />
          </motion.div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: '60px' }}>
        Past Members
      </h2>

      <div className="team-grid">
        {pastMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="team-card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            whileHover={{ y: -10 }}
            style={{ opacity: 0.9 }}
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
            <p>{parseBioLinks(member.bio)}</p>
            {member.email && (
              <div className="member-email">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="email-icon"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="email-text">{member.email}</span>
              </div>
            )}
            <SocialIcons socialLinks={member.socialLinks} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Team;
