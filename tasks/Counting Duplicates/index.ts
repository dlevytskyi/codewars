// FIRST SOLUTION
// export function duplicateCount(text: string): number {
//   //...
//   if (text.length == 0) return 0;
//   let countMap: Map<string, string> = new Map<string, string>();
//   text = text.toLowerCase();
//   let array: string[] = text.split('');
//   while (array.length > 0) {
//     const currentElement = array.pop();
//     if (currentElement != undefined && array.indexOf(currentElement) > -1) {
//       countMap.set(currentElement, 'dublicates');
//     }
//   }
//   return countMap.size;
// }

//SECOND SOLUTION
export function duplicateCount(text: string): number {
  //...
  if (text.length == 0) return 0;
  let array: string[] = text.toLowerCase().split('');
  return [...new Set(array.filter((e, i) => array.indexOf(e) !== i))].length;
}

// See https://www.chaijs.com for how to use Chai.
import { assert } from 'chai';

describe('Counting Duplicates test', function () {
  it('test', function () {
    assert.equal(duplicateCount(''), 0);
    assert.equal(duplicateCount('abcde'), 0);
    assert.equal(duplicateCount('aabbcde'), 2);
    assert.equal(duplicateCount('aabBcde'), 2, 'should ignore case');
    assert.equal(duplicateCount('Indivisibility'), 1);
    assert.equal(
      duplicateCount('Indivisibilities'),
      2,
      'characters may not be adjacent'
    );
  });
});
