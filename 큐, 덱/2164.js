var readline = require("readline");
const { resourceLimits } = require("worker_threads");
var r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

r.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  main(input);
  process.exit();
});

function main(input) {
  let nums = [];
  for (let i = 1; i <= +input[0]; i++) {
    nums.push(i);
  }

  console.log(returnFunc()[0]);

  function returnFunc() {
    if (nums.length === 1) return nums;
    const tempNums = [];
    let temp = null;
    for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 1) {
        if (i === 1 && nums.length % 2 === 1) temp = nums[i];
        else tempNums.push(nums[i]);
      }
    }
    if (temp !== null) tempNums.push(temp);
    nums = tempNums;
    return returnFunc();
  }
}
