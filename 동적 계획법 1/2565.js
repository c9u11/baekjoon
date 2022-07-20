const { maxHeaderSize } = require("http");
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
  nums.sort((a, b) => a[0] - b[0]);
  const dp = [];
  for (let i = 0; i < N; i++) {
    let cnt = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i][1] > nums[j][1]) {
        cnt = Math.max(cnt, dp[j]);
      }
    }
    dp[i] = cnt + 1;
  }
  console.log(N - Math.max(...dp));
}
