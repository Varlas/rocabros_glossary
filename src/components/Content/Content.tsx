import './Content.css';
import DefaultTemplate from '../DefaultTemplate/DefaultTemplate';

const Content = ({ selectedId, list: listBulk }) => {
  const list = !!listBulk ? listBulk : null;

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