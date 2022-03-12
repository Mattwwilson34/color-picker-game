import './ColorBlock.css';
import React from 'react';

const ColorBlock = (props) => {
  const { color } = props;
  return (
    <div style={{ backgroundColor: `${color}` }} className='ColorBlock'></div>
  );
};

export default ColorBlock;
