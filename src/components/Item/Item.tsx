import React from 'react'; // Add the missing import statement for React
import { Adventure, NPC } from '../../types/types';
import Session from '../Session/Session';
import Character from '../Character/Character';

interface Props {
  content: Adventure | NPC;
  option: string;
}

const Item = ({ content: contentToShow, option }: Props) => {
  const { content } = contentToShow;
  const contentInParagraphs = content.split('//');

  return option === 'AVENTURAS' ? (
    <Session
      contentInParagraphs={contentInParagraphs}
      content={contentToShow}
    />
  ) : (
    <Character />
  );
};

export default Item;
