import './App.css';
import RgbDisplay from './Components/RgbDisplay';

function App() {
  return (
    <div className='App'>
      <h1>Color Picker Game</h1>
      <RgbDisplay RGB='RGB(255,255,255)' />
    </div>
  );
}

export default App;
