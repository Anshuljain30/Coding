const reverseIt = (arr, start, end) => {
  if (start >= end) return;
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  reverseIt(arr, start + 1, end - 1);
};

const array = [7, 2, 6, 3, 4, 9, 5];
reverseIt(array, 0, array.length - 1);
console.log(array);
