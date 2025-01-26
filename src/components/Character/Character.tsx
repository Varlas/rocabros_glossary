import { NPC } from '../../types/types';
import './Character.css';
import printContent from '../../utils/printContent';

interface Props {
  content: NPC;
}
const Character = ({ content: contentToShow }: Props) => {
  const { content, race, tagline, title, description } = contentToShow;

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
              <strong>Raza: </strong>
              {race}
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
