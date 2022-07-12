var readline = require("readline");
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
  const N = +input.shift();
  const nums = input.map((v) => v.split(" ").map(Number));
  for (let i = 1; i < N; i++) {
    nums[i][0] += Math.min(nums[i - 1][1], nums[i - 1][2]);
    nums[i][1] += Math.min(nums[i - 1][0], nums[i - 1][2]);
    nums[i][2] += Math.min(nums[i - 1][0], nums[i - 1][1]);
  }
  console.log(Math.min(...nums.at(-1)));
}
