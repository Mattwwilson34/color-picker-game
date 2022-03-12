import './App.css';
import RgbDisplay from './Components/RgbDisplay';
import randomRGB from './Utils/randomRGB';

function App() {
  return (
    <div className='App'>
      <h1>Color Picker Game</h1>
      <h2>{randomRGB()}</h2>
      <RgbDisplay RGB='RGB(255,255,255)' />
    </div>
  );
}

export default App;
