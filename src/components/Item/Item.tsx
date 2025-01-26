import { Adventure, NPC } from '../../types/types';
import Session from '../Session/Session';
import Character from '../Character/Character';

type Props =
  | { option: 'AVENTURAS'; content: Adventure }
  | { option: 'PERSONAJES'; content: NPC };

const Item = ({ content, option }: Props) => {
  /**
    > content es el objeto de la aventura o personaje seleccionado
    > option es el tipo de contenido que se está mostrando (AVENTURAS o PERSONAJES)
   */

  return option === 'AVENTURAS' ? (
    <Session content={content} />
  ) : (
    <Character content={content} />
  );
};

export default Item;
