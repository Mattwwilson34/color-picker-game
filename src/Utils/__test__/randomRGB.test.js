import randomRGB from '../randomRGB';

describe('RandomRGB generator', () => {
  it('Generated a random RGB string', () => {
    const RGB = randomRGB();

    expect(typeof RGB).toBe('string');
    expect(RGB).toMatch(/rgb/i);
  });
});
