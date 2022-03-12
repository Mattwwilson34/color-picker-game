import './ColorBlock.css';
import React from 'react';

const ColorBlock = (props) => {
  const { color, onClick } = props;
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='ColorBlock'
      onClick={onClick}></div>
  );
};

export default ColorBlock;
