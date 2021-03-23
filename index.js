const map = (arr, callBack) => {
  const newArr = [...arr]
  for (let i = 0; i < newArr.length; i++) {
    if(newArr[i]) newArr[i] = callBack(newArr[i]);
  }
  return newArr
};

const filter = (arr, callBack) => {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    if(callBack(arr[i]) === true) {
      const lastIndex = newArr.length
      newArr[lastIndex] = arr[i]
    }
  }
  return newArr
}

const findIndex = (arr, callback) => {
  
}

module.exports = {
  map,
  filter,
  findIndex,
}
