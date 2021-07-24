import { vec2 } from '../index';

describe('placeholder', () => {
  it('passes', () => {
    expect(vec2.dot([1, 2], [3, 5])).toBeCloseTo(13);
  });
});
