import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { usePersonById } from '../data/hooks';

const personMarkdownFiles = import.meta.glob('../content/people/*.md', {
  as: 'raw',
  eager: true,
});

const PersonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const person = usePersonById(id);

  if (!person) {
    return (
      <div className="project-not-found">
        <h2>Person Not Found</h2>
        <p>The person you're looking for doesn't exist.</p>
        <Link to="/team" className="pixel-btn">← Back to Team</Link>
      </div>
    );
  }

  // Simple markdown-like parsing for headers and paragraphs
  const parseContent = (content: string) => {
    const lines = content.split('\n').filter(line => line.trim());
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let listKey = 0;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`} className="blog-ul">
            {listItems.map((item, idx) => (
              <li key={idx} className="blog-li">{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('# ')) {
        flushList();
        elements.push(<h1 key={index} className="blog-h1">{trimmed.substring(2)}</h1>);
      } else if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(<h2 key={index} className="blog-h2">{trimmed.substring(3)}</h2>);
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={index} className="blog-h3">{trimmed.substring(4)}</h3>);
      } else if (trimmed.startsWith('- ')) {
        listItems.push(trimmed.substring(2));
      } else if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
        flushList();
        elements.push(<p key={index} className="blog-emphasis"><em>{trimmed.slice(1, -1)}</em></p>);
      } else if (trimmed) {
        flushList();
        elements.push(<p key={index} className="blog-p">{trimmed}</p>);
      }
    });
    
    flushList(); // Flush any remaining list items
    return elements;
  };

  const getPersonContent = (personId: number | undefined): string | null => {
    if (!personId) return null;
    const path = `../content/people/${personId}.md`;
    const file = personMarkdownFiles[path] as string | undefined;
    return file ?? null;
  };

  return (
    <motion.article
      className="project-detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/team" className="back-link">
        ← Back to Team
      </Link>

      <div className="person-header">
        <div className="person-photo-large">
          {person.image ? (
            <img src={person.image} alt={person.name} className="person-photo-detail" />
          ) : (
            <div className="person-avatar-large">{person.avatar}</div>
          )}
        </div>
        <div className="person-header-info">
          <h1 className="person-title-large">{person.name}</h1>
          <div className="person-meta">
            <span className="person-role">{person.role}</span>
          </div>
        </div>
      </div>

      <div className="person-description-box">
        <p className="person-description-large">{person.bio}</p>
      </div>

      {getPersonContent(person.id) && (
        <div className="project-content">
          {parseContent(getPersonContent(person.id) as string)}
        </div>
      )}

      {person.socialLinks && (
        <div className="person-social-links">
          <h2 className="social-links-title">Links</h2>
          <div className="social-links-grid">
            {person.socialLinks.googleScholar && (
              <a 
                href={person.socialLinks.googleScholar} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">📚</span>
                <span className="social-label">Google Scholar</span>
              </a>
            )}
            {person.socialLinks.x && (
              <a 
                href={person.socialLinks.x} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">𝕏</span>
                <span className="social-label">X</span>
              </a>
            )}
            {person.socialLinks.website && (
              <a 
                href={person.socialLinks.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">🌐</span>
                <span className="social-label">Website</span>
              </a>
            )}
            {person.socialLinks.linkedin && (
              <a 
                href={person.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">💼</span>
                <span className="social-label">LinkedIn</span>
              </a>
            )}
            {person.socialLinks.github && (
              <a 
                href={person.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">💻</span>
                <span className="social-label">GitHub</span>
              </a>
            )}
          </div>
        </div>
      )}

      <div className="project-footer">
        <Link to="/team" className="pixel-btn">← Back to Team</Link>
      </div>
    </motion.article>
  );
};

export default PersonDetail;

