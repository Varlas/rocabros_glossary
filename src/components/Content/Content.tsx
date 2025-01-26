import './Content.css';
import DefaultTemplate from '../DefaultTemplate/DefaultTemplate';
import { Adventure, NPC } from '../../types/types';
import Session from '../Session/Session';
import Character from '../Character/Character';
interface Props {
  selectedId: number | null;
  list: Adventure[] | NPC[] | null;
  option: Option;
}

type Option = 'AVENTURAS' | 'PERSONAJES';

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

  // Si existe un id seleccionado y el contenido a mostrar es verdadero, se muestra el contenido
  return selectedId && contentToShow ? (
    option === 'AVENTURAS' ? (
      <Session content={contentToShow as Adventure} />
    ) : (
      <Character content={contentToShow as NPC} />
    )
  ) : (
    <DefaultTemplate />
  );
};

export default Content;
