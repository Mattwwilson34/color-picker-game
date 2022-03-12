import randomNumber from '../random-number';

describe('Random number function', () => {
  it('Generates random number between 0-255 inclusive', () => {
    const randomNum = randomNumber(0, 255);
    expect(typeof randomNum).toBe('number');
    expect(randomNum).toBeGreaterThanOrEqual(0);
    expect(randomNum).toBeLessThanOrEqual(255);
  });
});
