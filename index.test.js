const {
  map,
} = require('./index');

describe('array method functions', () => {
  it('Takes an Array and callback and creates a new Array with the return value of each callback.', () => {
    const testArr = [1, 2, 3, 4];
    const testFunc = (a) => (a + 1);
    
    const mappedArr = map(testArr, testFunc);

    expect(mappedArr).toEqual([2, 3, 4, 5]);
  })
})
