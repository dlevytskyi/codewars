import { expect } from 'chai';

export function narcissistic(value: number): boolean {
  let array:Array<number> = value.toString().split('').map(el => Number(el));
  let num:number = 0;
  for (let i = 0; i < array.length; i++) {
    num += Math.pow(array[i], array.length);
  }
  
  return (num === value);
}

describe('Basic tests for Does my number look big in this?', () => {
  it('Basic test should work', () => {
    expect(narcissistic(7)).to.equal(true, '7 is narcissistic');
    expect(narcissistic(153)).to.equal(true, '153 is narcissistic');
    expect(narcissistic(1634)).to.equal(true, '1634 is narcissistic');
  });
});