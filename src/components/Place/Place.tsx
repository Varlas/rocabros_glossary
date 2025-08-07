import { Places } from '../../types/types';
import './Place.css';
import printContent from '../../utils/printContent';

interface Props {
  content: Places;
}
const Character = ({ content: contentToShow }: Props) => {
  const { content, description, tagline, title, type } = contentToShow;

  return (
    <div className="character-item">
      <div
        className="character-heading"
        style={{ borderBottom: '5px dotted #000', paddingBottom: '20px' }}
      >
        <div className="character-title">
          <h1>{title}</h1>
          <h3>{tagline}</h3>
        </div>
        <div className="character-text">
          <div className="character-image">
            <img src="" alt="" />
          </div>
          <div className="character-data">
            <p>
              <strong>Tipo: </strong>
              {type}
            </p>
            <p>
              <strong>Aspecto: </strong>
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="character-content">{printContent(content)}</div>
    </div>
  );
};

export default Character;
