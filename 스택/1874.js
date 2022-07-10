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
  const nums = new Array(N).fill(true).map((v, i) => N - i);
  const stack = [];
  const result = [];
  for (let i = 1; i <= N; i++) {
    const findNum = +input[i];
    let num = 0;
    while (true) {
      if (findNum >= nums.at(-1)) {
        num = nums.pop();
        stack.push(num);
        result.push("+");
      } else {
        num = stack.pop();
        result.push("-");
        break;
      }
    }
    if (num !== findNum) {
      console.log("NO");
      return;
    }
  }
  console.log(result.join("\n"));
}
