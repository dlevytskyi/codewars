export const isPangram = (phrase: string): boolean => {
  return new Set(phrase.toLowerCase().replace(/([^a-z])+/g, '').split('')).size == 26;
}


import { assert } from "chai";

describe("Detect Program test", function () {
  it("test", function () {
    assert.strictEqual(isPangram("The quick brown fox jumps over the lazy dog."), true);
    assert.strictEqual(isPangram("This is not a pangram."), false);
  });
});