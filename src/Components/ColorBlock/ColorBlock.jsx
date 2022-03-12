import './ColorBlock.css';
import React from 'react';

const ColorBlock = (props) => {
  const { color, onClick, testID } = props;
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='ColorBlock'
      onClick={onClick}
      data-test-id={testID}>
      {''}
    </div>
  );
};

export default ColorBlock;
