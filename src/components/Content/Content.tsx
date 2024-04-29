import './Content.css';
import DefaultTemplate from '../DefaultTemplate/DefaultTemplate';
import Item from '../Item/Item';
import { Adventure, NPC } from '../../types/types';
interface Props {
  selectedId: number | null;
  list: Adventure[] | NPC[] | null;
}
const Content = ({ selectedId, list: listBulk }: Props) => {
  const existList = Boolean(listBulk);
  const list = existList ? listBulk : null;

  const contentToShow =
    !!list && selectedId
      ? list.filter((item) => item.id === selectedId)[0]
      : null;
  return selectedId && contentToShow ? (
    <Item content={contentToShow} />
  ) : (
    <DefaultTemplate />
  );
};

export default Content;
