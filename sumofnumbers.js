const testNum = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNum));

function sumWhile(num) {
  let total = 0;
  let index = 0;
  while (index < num.length) {
    total += num[index];
    index++;
  }
  return total;
}

console.log(sumWhile(testNum));

function sumRecursion(num) {
  if (num.length === 0) {
    return true;
  }
  return num[0] + sumRecursion(num.slice(1, num.length));
}

console.log(sumRecursion(testNum));

function sumTheSimpleWay(num) {
  return _.reduce(num, function (memo, val) { return memo + val; }, 0);
}

console.log(sumTheSimpleWay(testNum));
