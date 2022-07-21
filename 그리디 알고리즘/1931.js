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
  const nums = input
    .map((v) => v.split(" ").map(Number))
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let startTime = 0;
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    if (startTime <= nums[i][0]) {
      startTime = nums[i][1];
      cnt++;
    }
  }
  console.log(cnt);
}
