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
  const N = +input[0];
  const nums = input[1].split(" ").map(Number);
  const opers = input[2].split(" ").map(Number);
  let min = +Infinity,
    max = -Infinity,
    result = nums[0];
  returnFunc(0);
  console.log(`${max}\n${min}`);
  function returnFunc(index) {
    if (index === N - 1) {
      min = min > result ? result : min;
      max = max < result ? result : max;
      return;
    }
    for (let i = 0; i < 4; i++) {
      if (!opers[i]) continue;
      const preNum = result;
      opers[i]--;

      const nextNum = nums[index + 1];
      if (i === 0) result += nextNum;
      else if (i === 1) result -= nextNum;
      else if (i === 2) result *= nextNum;
      else result = parseInt(result / nextNum);
      returnFunc(index + 1);
      opers[i]++;
      result = preNum;
    }
  }
}
