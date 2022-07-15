function maxSubArray(nums) {
  let bestSum = Number.MIN_VALUE;
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum =
      nums[i] > currentSum + nums[i] ? nums[i] : currentSum + nums[i];
    bestSum = bestSum > currentSum ? bestSum : currentSum;
  }
  return bestSum;
}

let best = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(best);
