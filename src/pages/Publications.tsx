import { publications } from '../data/publications';
import PublicationItem from '../components/PublicationItem';

const Publications = () => {
  return (
    <>
      <h2 className="section-title">Publications</h2>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <PublicationItem key={pub.id} pub={pub} index={index} />
        ))}
      </div>
    </>
  );
};

export default Publications;
