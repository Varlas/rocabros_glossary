import './Content.css';
import DefaultTemplate from '../DefaultTemplate/DefaultTemplate';
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
      ? list.filter((item) => item.id === selectedId)[0].description
      : null;
  return selectedId && contentToShow ? (
    <div className="main-content">{contentToShow}</div>
  ) : (
    <DefaultTemplate />
  );
};

export default Content;
