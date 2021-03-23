const map = (arr, callBack) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callBack(arr[i]);
  }
  return arr
};

module.exports = {
  map,
}
