// export function going(n: number): number {
//   // your code
//   const fp = (1 / factorial(n));

//   console.log('test', factorial(n - 1));
//   const sp = [...Array(n + 1).keys()].reduce((prev, curr): number => {
//     return prev + factorial(curr)
//   });
//   console.log(fp, sp);
//   return Math.trunc(1000000 * (fp * sp)) / 1000000;
// }

// const factorial = function (n: number): number {
//   if (n <= 2) return n;
//   return n * factorial(n - 1);
// }


export function going(n: number): number {

  let sum = 1;
  let memf = n;
  for (let f = n - 1; f > 0; f--) {
    sum += 1 / memf;
    memf *= f;
  }

  return Math.trunc(sum * 1e6) / 1e6;
}

console.log(going(200));