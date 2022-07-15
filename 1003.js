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
  const [N, ...nums] = input;
  const dp = [
    [1, 0],
    [0, 1],
  ];
  const result = [];
  let max = Math.max(...nums);
  for (let i = 2; i <= max; i++) {
    dp.push([dp[i - 2][0] + dp[i - 1][0], dp[i - 2][1] + dp[i - 1][1]]);
  }
  nums.forEach((v) => {
    result.push(dp[v].join(" "));
  });
  console.log(result.join("\n"));
}
