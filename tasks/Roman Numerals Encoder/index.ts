const romanNumbers: any = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

const nums: any = Object.keys(romanNumbers).reverse();

export function solution(number: number): string {
  let result: string = '';

  if (number === 0) return result;

  for (let i = 0; i < nums.length; i++) {
    if (number / nums[i] >= 1) {
      number -= nums[i];
      result += romanNumbers[nums[i]]
      i--;
    }
  }

  return result;
}


import { assert } from 'chai';

describe('Roman Numerals Encoder, test', function () {
  it('basic', function () {
    assert.strictEqual(solution(1000), 'M')
    assert.strictEqual(solution(4), 'IV')
    assert.strictEqual(solution(1), 'I')
    assert.strictEqual(solution(1990), 'MCMXC')
    assert.strictEqual(solution(2008), 'MMVIII')
    assert.strictEqual(solution(1444), 'MCDXLIV')
  });
});