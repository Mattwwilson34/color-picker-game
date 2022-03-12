import './RgbDisplay.css';
import React from 'react';

const RgbDisplay = (props) => {
  const { RGB } = props;
  return <h2 className='RGBHeader'>{RGB}</h2>;
};

export default RgbDisplay;
