import CalendarIcon from './CalendarIcon';
import { LabUpdate } from '../data/updates';

interface UpdateEntryProps {
  update: LabUpdate;
  index: number;
}

const formatUpdateDate = (dateString: string): string => {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const UpdateEntry = ({ update, index }: UpdateEntryProps) => {
  const rotation = index % 2 === 0 ? -1.5 : 1.5;

  return (
    <>
      {update.media && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '12px 0' }}>
          <a
            href={update.media.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              width: '60%',
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${rotation}deg)`)}
          >
            {update.media.type === 'video' ? (
              <video
                src={update.media.src}
                autoPlay
                loop
                muted
                playsInline
                className="news-media"
                style={{ width: '100%', borderRadius: '4px', display: 'block' }}
              />
            ) : (
              <img
                src={update.media.src}
                alt={update.media.alt}
                className="news-media"
                style={{ width: '100%', borderRadius: '4px', display: 'block' }}
              />
            )}
          </a>
        </div>
      )}
      <p>
        <strong className="news-date">
          <CalendarIcon />
          {formatUpdateDate(update.date)}:
        </strong>{' '}
        {update.isNew && (
          <>
            <span className="new-tag">NEW</span>{' '}
          </>
        )}
        {update.renderContent()}
      </p>
    </>
  );
};

export default UpdateEntry;
