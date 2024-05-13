import { NPC, Adventure } from '../../types/types';
import './Character.css';
import formatStringToJSX from '../../utils/getStringToJSXcontent';

interface Props {
  contentInParagraphs: Array<string>;
  content: NPC | Adventure;
}
const Character = ({ contentInParagraphs, content: contentToShow }: Props) => {
  const { content, image, race, tagline, tags, title, description } =
    contentToShow;

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
      <div className="character-content">{content}</div>
    </div>
  );
};

export default Character;
