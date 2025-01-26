import { Adventure } from '../../types/types';
import printContent from '../../utils/printContent';

interface Props {
  content: Adventure;
}

const Session = ({ content }: Props) => {
  const { title, description, content: story } = content;

  return (
    <div className="main-content">
      <div className="heading">
        <h1>{title}</h1>
        <h4 style={{ borderBottom: '5px dotted #000', paddingBottom: '20px' }}>
          {description}
        </h4>
      </div>
      <div className="text">{printContent(story)}</div>
    </div>
  ); // Add the closing '}' for the 'return' statement
};

export default Session;
