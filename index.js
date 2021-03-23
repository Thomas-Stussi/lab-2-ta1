const map = (arr, callback) => {
  const newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {
    if(newArr[i]) newArr[i] = callback(newArr[i]);
  }
  return newArr
};

const filter = (arr, callback) => {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i]) === true) {
      const lastIndex = newArr.length
      newArr[lastIndex] = arr[i]
    }
  }
  return newArr
}

const findIndex = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i]) === true) return i
  }
}

module.exports = {
  map,
  filter,
  findIndex,
}
