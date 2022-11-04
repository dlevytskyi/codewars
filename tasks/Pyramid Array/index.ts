export function pyramid(n: number) {
  let array: number[][] = [];
  for (let i = 1; i <= n; i++) {
    array.push(new Array(i).fill(1, 0, i));
  }
  return array;
}

import { assert } from 'chai';

describe('Pyramid Array test', () => {
  it('Testing for 0', () => assert.deepEqual(pyramid(0), []));
  it('Testing for 1', () => assert.deepEqual(pyramid(1), [[1]]));
  it('Testing for 2', () => assert.deepEqual(pyramid(2), [[1], [1, 1]]));
  it('Testing for 3', () =>
    assert.deepEqual(pyramid(3), [[1], [1, 1], [1, 1, 1]]));
});
