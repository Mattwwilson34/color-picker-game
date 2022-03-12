import './App.css';
import RgbDisplay from './Components/RgbDisplay';
import randomNumber from './Utils/random-number';

function App() {
  return (
    <div className='App'>
      <h1>Color Picker Game</h1>
      <h2>{randomNumber(0, 255)}</h2>
      <RgbDisplay RGB='RGB(255,255,255)' />
    </div>
  );
}

export default App;
