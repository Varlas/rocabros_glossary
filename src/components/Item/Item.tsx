import { Adventure, NPC } from '../../types/types';

interface Props {
  content: Adventure | NPC;
}

const Item = ({ content: contentToShow }: Props) => {
  const { title, content } = contentToShow;
  return (
    <div>
      {title} {content}
    </div>
  );
};

export default Item;
