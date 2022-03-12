import './App.css';
import RgbDisplay from './Components/RgbDisplay';
import ColorBlock from './Components/ColorBlock';
import randomRGB from './Utils/randomRGB';
import React, { useState, useEffect } from 'react';

function App() {
  const [winColor, setWinColor] = useState(randomRGB());
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    generateColorArray(6);
  }, []);

  const generateColorArray = (numOfBlocks) => {
    const colors = [];
    for (let i = 0; i < numOfBlocks; i++) {
      colors.push(randomRGB());
    }
    setColorArray(colors);
  };

  return (
    <div className='App'>
      <h1>Color Picker Game</h1>
      <RgbDisplay RGB={winColor} />
      {colorArray.map((color) => {
        return <ColorBlock key={color} color={color} />;
      })}
    </div>
  );
}

export default App;
