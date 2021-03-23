const {
  map,
  filter,
  findIndex,
  reduce,
  every,
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

  it('REDUCE', () => {
    const testArr = [1, 2, 3, 4];
    const testFunc = (acc, item) => (acc + item);

    const reducedArrPlusOne = reduce(testArr, testFunc, [1])

    expect(reducedArrPlusOne).toEqual(11)
  })

  it('EVERY', () => {
    const trueArr = [2, 4, 6];
    const falseArr = [2, 4, 5];
    const testFunc = (number) => number % 2 === 0;

    const everyTrue = every(trueArr, testFunc);
    const everyFalse = every(falseArr, testFunc);

    expect(everyTrue).toEqual(true);
    expect(everyFalse).toEqual(false);
  })
})
