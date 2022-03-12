import './App.css';
import React, { useState, useEffect } from 'react';
import RgbDisplay from './Components/RgbDisplay';
import ColorBlock from './Components/ColorBlock';
import randomRGB from './Utils/randomRGB';
import Button from './Components/Button';

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
      <div className='ColorBlockContainer'>
        {colorArray.map((color) => {
          return <ColorBlock key={color} color={color} />;
        })}
      </div>
      <Button label='RESET' onClick={() => console.log('Clicked')} />
    </div>
  );
}

export default App;
