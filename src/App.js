import './App.css';
import RgbDisplay from './Components/RgbDisplay';
import ColorBlock from './Components/ColorBlock';
import randomRGB from './Utils/randomRGB';
import React, { useState } from 'react';

function App() {
  const [winColor, setWinColor] = useState(randomRGB());

  return (
    <div className='App'>
      <h1>Color Picker Game</h1>
      <RgbDisplay RGB={winColor} />
      <ColorBlock />
    </div>
  );
}

export default App;
