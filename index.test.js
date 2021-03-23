const {
  map,
  filter,
  findIndex,
} = require('./index');

describe('array method functions', () => {
  it('MAP', () => {
    const testArr = [1, 2, 3, 4];
    const testFunc = (a) => (a + 1);

    const mappedArr = map(testArr, testFunc);

    expect(mappedArr).toEqual([2, 3, 4, 5]);
  })

  it('FILTER', () => {
    const testArr = [1, 2, 3, 4];
    const testFunc = (number) => number % 2 === 0;

    const filteredArr = filter(testArr, testFunc);

    expect(filteredArr).toEqual([2, 4]);
  })

  it('FIND INDEX', () => {
    const testArr = [1, 2, 3, 4];
    const testFunc = (number) => number % 2 === 0;

    const foundIndex = findIndex(testArr, testFunc);

    expect(foundIndex).toEqual(1);
  })
})
