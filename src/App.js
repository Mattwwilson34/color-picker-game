import './App.css';
import React, { useState, useEffect } from 'react';
import RgbDisplay from './Components/RgbDisplay';
import ColorBlock from './Components/ColorBlock';
import Button from './Components/Button';
import randomRGB from './Utils/randomRGB';
import shuffleArray from './Utils/shuffleArray';

function App() {
  const [winColor, setWinColor] = useState(randomRGB());
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    generateColorArray(6);
  }, [winColor]);

  const generateColorArray = (numOfBlocks) => {
    let colors = [];
    for (let i = 0; i < numOfBlocks - 1; i++) {
      colors.push(randomRGB());
    }
    colors.push(winColor);
    colors = shuffleArray(colors);
    setColorArray(colors);
  };

  const checkWin = (e) => {
    const colorBlock = e.target;
    const RGB = e.target.style.backgroundColor;
    console.log(RGB, winColor);
    if (RGB === winColor) return console.log('Correct!');
    colorBlock.style.opacity = '0';
  };

  const reset = () => {
    setWinColor(randomRGB());
  };

  return (
    <div className='App'>
      <h1>Color Picker Game</h1>
      <RgbDisplay RGB={winColor} />
      <div className='ColorBlockContainer'>
        {colorArray.map((color) => {
          return <ColorBlock key={color} color={color} onClick={checkWin} />;
        })}
      </div>
      <Button label='RESET' onClick={() => reset()} />
    </div>
  );
}

export default App;
