/* Test program that gives the sum of an array of numbers */

const testNum = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

function sumWhile(nums) {
  let total = 0;
  let index = 0;
  while (index < nums.length) {
    total += nums[index];
    index++;
  }
  return total;
}

function sumRecursive(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursive(nums.slice(1, nums.length));
}

function sumTheEasyWay(nums) {
  return _.reduce(nums, function (memo, val) { return memo + val; }, 0);
}

console.log(sumFor(testNum));
console.log(sumWhile(testNum));
console.log(sumRecursive(testNum));
console.log(sumTheEasyWay(testNum));

// eslint-disable-next-line max-len
/* Attempt 1: 30 minutes - DNF: While I finished the code on time, I spent a bulk of the time attempting to get the console to run, but with no avail. Ultimately, however, the code DOES compile properly. */
// eslint-disable-next-line max-len
/* Attempt 2: 21:57 - Still trying to figure out how to use IntelliJ. Still a bit of a foreign IDE, even after practicing a little. Need to brush up more on Recursion */
// eslint-disable-next-line max-len
/* Attempt 3: 18:55 - Will continue practicing over the week, hoping to execute tasks much faster */
/* Attempt 4: 15:21 - Ditto, need more practice with recursion. */
