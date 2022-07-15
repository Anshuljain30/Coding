function getMinMax(arr, n) {
  let minmax = {};
  if (n == 1) {
    minmax.max = arr[0];
    minmax.min = arr[0];
    return minmax;
  }

  if (arr[0] > arr[1]) {
    minmax.max = arr[0];
    minmax.min = arr[1];
  } else {
    minmax.max = arr[1];
    minmax.min = arr[0];
  }

  for (let i = 2; i < n; i++) {
    if (arr[i] > minmax.max) {
      minmax.max = arr[i];
    } else if (arr[i] < minmax.min) {
      minmax.min = arr[i];
    }
  }

  return minmax;
}

let arr = [1000, 11, 445, 1, 3300, 3000];
let arr_size = 6;
minmax = getMinMax(arr, arr_size);
console.log("Minimum element is ", minmax.min + "\n");
console.log("Maximum element is ", minmax.max);
