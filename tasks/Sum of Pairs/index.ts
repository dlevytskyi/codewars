export function sumPairs(ints: number[], s: number): [number, number] | void {
  const seen = new Set();
  for (const el of ints) {
    if (seen.has(s - el)) {
      return [s - el, el]
    }
    seen.add(el)
  }
}

import { assert } from "chai";
const l1: number[] = [1, 4, 8, 7, 3, 15],
  l2: number[] = [1, -2, 3, 0, -6, 1],
  l3: number[] = [20, -13, 40],
  l4: number[] = [1, 2, 3, 4, 1, 0],
  l5: number[] = [10, 5, 2, 3, 7, 5],
  l6: number[] = [4, -2, 3, 3, 4],
  l7: number[] = [0, 2, 0],
  l8: number[] = [5, 9, 13, -3];

describe("Sum of Paris, test", function () {
  it("test", () => {
    assert.deepEqual(sumPairs(l1, 8), [1, 7], "Basic: [" + l1 + "] should return [1, 7] for sum = 8");
  });
  it("test", () => {
    assert.deepEqual(sumPairs(l2, -6), [0, -6], "Negatives: [" + l2 + "] should return [0, -6] for sum = -6");
  });
  it("test", () => {
    assert.deepEqual(sumPairs(l3, -7), undefined, "No Match: [" + l3 + "] should return undefined for sum = -7");
  });
  it("test", () => {
    assert.deepEqual(sumPairs(l4, 2), [1, 1], "First Match From Left: [" + l4 + "] should return [1, 1] for sum = 2 ");
  });
  it("test", () => {
    assert.deepEqual(sumPairs(l5, 10), [3, 7], "First Match From Left REDUX!: [" + l5 + "] should return [3, 7] for sum = 10 ");
  });
  it("test", () => {
    assert.deepEqual(sumPairs(l6, 8), [4, 4], "Duplicates: [" + l6 + "] should return [4, 4] for sum = 8");
  });
  it("test", () => {
    assert.deepEqual(sumPairs(l7, 0), [0, 0], "Zeroes: [" + l7 + "] should return [0, 0] for sum = 0");
  });
  it("test", () => {
    assert.deepEqual(sumPairs(l8, 10), [13, -3], "Subtraction: [" + l8 + "] should return [13, -3] for sum = 10");
  });
});
