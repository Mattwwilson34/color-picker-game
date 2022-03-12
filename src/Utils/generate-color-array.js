import randomRGB from './randomRGB';
import shuffleArray from './shuffleArray';

const generateColorArray = (numOfBlocks, winColor) => {
  let colors = [];
  for (let i = 0; i < numOfBlocks - 1; i++) {
    colors.push(randomRGB());
  }
  colors.push(winColor);
  colors = shuffleArray(colors);
  return colors;
};

export default generateColorArray;
