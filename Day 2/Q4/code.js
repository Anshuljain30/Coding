const containsDuplicate = (nums) => {
  const set = new Set();
  for (let i = 0; i < nums.length; ++i) {
    if (set.has(nums[i])) return true;
    else set.add(nums[i]);
  }

  return false;
};

let x = containsDuplicate([1, 24, 5, 5, 53, 2, 56, 3]);
console.log(x);
