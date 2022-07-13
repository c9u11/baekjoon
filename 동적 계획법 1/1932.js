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
    for (let j = 0; j <= i; j++) {
      nums[i][j] = Math.max(
        nums[i][j] + (nums[i - 1][j - 1] || 0),
        nums[i][j] + (nums[i - 1][j] || 0)
      );
    }
  }
  console.log(Math.max(...nums[N - 1]));
}
