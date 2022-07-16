const search = function (nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  // low and high pointers in the array
  let low = 0;
  let high = nums.length - 1;
  // First step is to find the pivot where the
  // array is rotated
  while (low < high) {
    // Middle pointer
    let middle = low + parseInt((high - low) / 2);
    // If the element at the mid is greater than
    // the element at the high then we can say that
    // the array is rotated after middle index
    if (nums[middle] > nums[high]) {
      low = middle + 1;
    }
    // Else, the pivot is in the low part
    else {
      high = middle;
    }
  }
  // After the above loop is completed, then the
  // low index will point to the pivot
  const pivot = low;
  low = 0;
  high = nums.length - 1;
  // Now we will find in which half of the array,
  // our target is present
  if (target >= nums[pivot] && target <= nums[high]) {
    low = pivot;
  } else {
    high = pivot;
  }
  // Now perform normal binary search
  while (low <= high) {
    let middle = low + parseInt((high - low) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (target < nums[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
};

nums = [2, 1, 0, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3];
target = 0;
console.log(search(nums, target));
