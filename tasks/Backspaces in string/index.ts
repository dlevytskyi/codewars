/*FIRST SOLUTION

export function cleanString(s: string): string {
  if (s.length == 0) return '';
  return s.split('').reduce((prev, curr) => {
    if (prev === '#') return curr !== '#' ? curr : '';
    if (curr === '#' && prev.length > 0) {
      return prev.substring(0, prev.length - 1);
    }
    if (curr === '#') {
      return '';
    }
    return prev + curr;
  })
}
*/

export function cleanString(s: string) {
  return Array.from(s).reduce((a, b) => b == '#' ? a.slice(0, -1) : a.concat(b), '')
}


// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

// TODO Add your tests here
describe("Backspaces in string, test", function () {
  it("test", function () {
    assert.equal(cleanString('abc#d##c'), "ac")
    assert.equal(cleanString('abc####d##c#'), "")
  });
});