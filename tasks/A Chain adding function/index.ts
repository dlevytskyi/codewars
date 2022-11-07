const add = (x: number): any => {
  let curr: number = x || 0;
  let fn = function (num: number) {
    curr += num;
    return fn;
  }
  fn.toString = function () {
    return String(curr);
  }
  return fn;
}

export default add;

import { assert } from "chai";

describe('A Chain adding function test', () => {
  it('should work when called once', () => {
    assert(add(1) == 1);
  });
  it('should work when called twice', () => {
    assert(add(1)(2) == 3);
  });
  it('should work when called 5 times', () => {
    assert(add(1)(2)(3)(4)(5) == 15);
  });
});