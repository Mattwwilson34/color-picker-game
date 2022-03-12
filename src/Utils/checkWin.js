const checkWin = (e, winColor) => {
  const docBody = document.querySelector('body');
  const colorBlock = e.target;
  const blockRGB = e.target.style.backgroundColor;

  if (blockRGB === winColor) {
    colorBlock.textContent = 'CORRECT';
    docBody.style.backgroundColor = blockRGB;
    return;
  }
  colorBlock.style.opacity = '0';
  colorBlock.textContent = 'INCORRECT';

  return colorBlock;
};

export default checkWin;
