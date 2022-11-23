export function circleOfNumbers(n: number, firstNumber: number) {
  return n / 2 + firstNumber >= n ? firstNumber - n / 2 : n / 2 + firstNumber;
}

import { assert } from "chai";

describe("basic tests", function () {
  it("circleOfNumbers(10, 2)", () => assert.strictEqual(circleOfNumbers(10, 2), 7));
  it("circleOfNumbers(10, 7)", () => assert.strictEqual(circleOfNumbers(10, 7), 2));
  it("circleOfNumbers(4, 1)", () => assert.strictEqual(circleOfNumbers(4, 1), 3));
  it("circleOfNumbers(6, 3)", () => assert.strictEqual(circleOfNumbers(6, 3), 0));
  it("circleOfNumbers(20, 0)", () => assert.strictEqual(circleOfNumbers(20, 0), 10));
});