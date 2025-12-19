import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProjectById } from '../data/hooks';

const projectMarkdownFiles = import.meta.glob('../content/projects/*.md', {
  as: 'raw',
  eager: true,
});

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = useProjectById(id);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <Link to="/" className="pixel-btn">
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Simple markdown-like parsing for headers and paragraphs
  const parseContent = (content: string) => {
    const lines = content.split('\n').filter((line) => line.trim());
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let listKey = 0;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`} className="blog-ul">
            {listItems.map((item, idx) => (
              <li key={idx} className="blog-li">
                {item}
              </li>
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
        elements.push(
          <h1 key={index} className="blog-h1">
            {trimmed.substring(2)}
          </h1>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="blog-h2">
            {trimmed.substring(3)}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="blog-h3">
            {trimmed.substring(4)}
          </h3>
        );
      } else if (trimmed.startsWith('- ')) {
        listItems.push(trimmed.substring(2));
      } else if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
        flushList();
        elements.push(
          <p key={index} className="blog-emphasis">
            <em>{trimmed.slice(1, -1)}</em>
          </p>
        );
      } else if (trimmed) {
        flushList();
        elements.push(
          <p key={index} className="blog-p">
            {trimmed}
          </p>
        );
      }
    });

    flushList(); // Flush any remaining list items
    return elements;
  };

  const getProjectContent = (projectId: string | undefined): string | null => {
    if (!projectId) return null;
    const path = `../content/projects/${projectId}.md`;
    const file = projectMarkdownFiles[path] as string | undefined;
    return file ?? null;
  };

  return (
    <motion.article
      className="project-detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="back-link">
        ← Back to Projects
      </Link>

      <div className="project-header">
        <div className="project-icon-large">
          <div className={`space-invader-${project.iconType === 'invader1' ? '1' : '2'}`}></div>
        </div>
        <div className="project-header-info">
          <h1 className="project-title-large">{project.title}</h1>
          <div className="project-meta">
            {project.date && <span className="project-date">📅 {project.date}</span>}
            {project.author && <span className="project-author">✍️ {project.author}</span>}
            <span className="project-type">{project.type}</span>
          </div>
          {project.tags && project.tags.length > 0 && (
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="project-description-box">
        <p className="project-description-large">{project.description}</p>
      </div>

      {getProjectContent(project.id) && (
        <div className="project-content">
          {parseContent(getProjectContent(project.id) as string)}
        </div>
      )}

      <div className="project-footer">
        <Link to="/" className="pixel-btn">
          ← Back to All Projects
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectDetail;
