import generateColorArray from '../generate-color-array';

describe('Generate Color Array', () => {
  it('Generates an array of RGB colors', () => {
    const colorArray = generateColorArray(6, 'rgb(255, 255, 255)');

    expect(colorArray.length).toBe(6);
  });
});
