import shuffleArray from '../shuffleArray';

describe('Shuffle Array', () => {
  it('Shuffles an Array', () => {
    let array = [1, 2, 3, 4, 5];
    array = shuffleArray(array);
    expect(array).not.toBe([1, 2, 3, 4, 5]);
  });
});
