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
  const stack = [];
  for (let i = 0; i < N; i++) {
    const num = +input[i + 1];
    if (!num) stack.pop();
    else stack.push(num);
  }
  console.log(stack.length ? stack.reduce((a, b) => a + b) : 0);
}
