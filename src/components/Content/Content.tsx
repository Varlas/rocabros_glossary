import './Content.css';
import DefaultTemplate from '../DefaultTemplate/DefaultTemplate';
import { Adventure, NPC, Places } from '../../types/types';
import Session from '../Session/Session';
import Character from '../Character/Character';
import Place from '../Place/Place';
interface Props {
  selectedId: number | null;
  list: Adventure[] | NPC[] | Places[] | null;
  option: Option;
}

type Option = 'AVENTURAS' | 'PERSONAJES' | 'LUGARES';

const Content = ({ selectedId, list: listBulk, option }: Props) => {
  /**
    > selectedId es el id de la aventura o personaje seleccionado
    > listBulk es el objeto completo de aventuras o personajes
    > option es el tipo de contenido que se está mostrando (AVENTURAS o PERSONAJES) 
  */

  const existList = Boolean(listBulk);
  const list = existList ? listBulk : null;

  const contentToShow =
    !!list && selectedId
      ? list.filter((item) => item.id === selectedId)[0]
      : null;

  if (!selectedId || !contentToShow) {
    return <DefaultTemplate />;
  }

  switch (option) {
    case 'AVENTURAS':
      return <Session content={contentToShow as Adventure} />;
    case 'PERSONAJES':
      return <Character content={contentToShow as NPC} />;
    case 'LUGARES':
      return <Place content={contentToShow as Places} />;
    default:
      return <DefaultTemplate />;
  }
};

export default Content;
