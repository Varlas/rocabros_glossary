import { NPC } from '../../types/types';

interface Props {
  contentInParagraphs: Array<string>;
  content: NPC;
}
const Character = ({ contentInParagraphs, content: contentToShow }: Props) => {
  const { content, image, race, tagline, tags, title } = contentToShow;

  return <div>Hello</div>;
};

export default Character;
