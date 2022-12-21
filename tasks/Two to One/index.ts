export const longest = (s1: string, s2: string): string => {
  let set = new Set(s1.split('').map(el => el.charCodeAt(0)));
  s2.split('').forEach(el => set.add(el.charCodeAt(0)));
  return [...set].sort((a, b) => a - b).map(el => String.fromCharCode(el)).join('');
}


import { assert } from "chai";
describe("Two to One, test", function () {
  it("Basic tests longest", function () {
    assert.deepEqual(longest("aretheyhere", "yestheyarehere"), "aehrsty");
    assert.deepEqual(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
    assert.deepEqual(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
    assert.deepEqual(longest("lordsofthefallen", "gamekult"), "adefghklmnorstu");
  });
});
