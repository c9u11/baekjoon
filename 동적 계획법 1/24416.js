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

  console.log(fib(N), N - 2);

  function fib(n) {
    const array = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      array.push(array[i - 1] + array[i - 2]);
    }
    return array[n];
  }
}
