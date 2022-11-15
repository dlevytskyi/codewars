export const primeFactors = (n: number): string => {
  let result: string = '';

  const primeNumbers: any = {};

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      primeNumbers[i] = primeNumbers[i] !== undefined ? primeNumbers[i] + 1 : 1;
      n = n / i;
      i--;
    }
  }

  for (const [key, value] of Object.entries(primeNumbers)) {
    result = (Number(value) > 1) ? result + `(${key}**${value})` : result + `(${key})`;
  }

  return result;
}

import { assert } from "chai";

function testing(n: number, expected: string) {
  assert.strictEqual(primeFactors(n), expected);
}

describe("Primes in numbers, test", function () {
  it("Basic tests primeFactors", function () {
    testing(7775460, "(2**2)(3**3)(5)(7)(11**2)(17)");
    testing(7919, "(7919)");
    testing(17 * 17 * 93 * 677, "(3)(17**2)(31)(677)");
  });
});
