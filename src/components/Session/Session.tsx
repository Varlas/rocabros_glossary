import React from 'react';
import { Adventure } from '../../types/types';
import formatStringToJSX from '../../utils/getStringToJSXcontent';

interface Props {
  contentInParagraphs: Array<string>;
  content: Adventure;
}

const Session = ({ contentInParagraphs, content }: Props) => {
  const { title, description } = content;

  return (
    <div className="main-content">
      <div className="heading">
        <h1>{title}</h1>
        <h4 style={{ borderBottom: '5px dotted #000', paddingBottom: '20px' }}>
          {description}
        </h4>
      </div>
      <div className="text">
        {contentInParagraphs.map(
          (
            str: string,
            index: number, // Add explicit types for the 'str' and 'index' parameters
          ) => (
            <React.Fragment key={index}>
              {formatStringToJSX(str)}
            </React.Fragment> // Use 'str' instead of 'content' in formatStringToJSX
          ),
        )}
      </div>
    </div>
  ); // Add the closing '}' for the 'return' statement
};

export default Session;
