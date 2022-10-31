export class Challenge {
  static solution(number: number) {
    let count: number = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) count += i;
    }

    return count; //change this
  }
}

import { assert } from 'chai';

function test(num: number, expected: number) {
  assert.strictEqual(Challenge.solution(num), expected);
}

describe('Multiples of 3 or 5 test', function () {
  it('should handle basic tests', function () {
    test(10, 23);
  });
});
