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
  const N = +input[0];
  const nums = input[1].split(" ").map(Number);
  const dp = [];
  for (let i = 0; i < N; i++) {
    const possibleArray = [];
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) possibleArray.push(dp[j]);
    }
    if (possibleArray.length) dp[i] = Math.max(...possibleArray) + 1;
    else dp[i] = 1;
  }
  console.log(Math.max(...dp));
}
