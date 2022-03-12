import './App.css';
import React, { useState, useEffect } from 'react';
import RgbDisplay from './Components/RgbDisplay';
import ColorBlock from './Components/ColorBlock';
import Button from './Components/Button';
import randomRGB from './Utils/randomRGB';
import generateColorArray from './Utils/generate-color-array';
import checkWin from './Utils/checkWin';

function App() {
  const [winColor, setWinColor] = useState(randomRGB());
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    setColorArray(generateColorArray(6, winColor));
  }, [winColor]);

  const handleBlockClick = (e) => {
    checkWin(e, winColor);
  };

  const reset = () => {
    setWinColor(randomRGB());
    document.querySelector('body').style.backgroundColor = '#2c2d2d';
  };

  return (
    <div className='App'>
      <h1>RGB GUESSING GAME</h1>
      <RgbDisplay RGB={winColor} />
      <div className='ColorBlockContainer'>
        {colorArray.map((color) => {
          return (
            <ColorBlock key={color} color={color} onClick={handleBlockClick} />
          );
        })}
      </div>
      <Button label='RESET' onClick={() => reset()} />
    </div>
  );
}

export default App;
