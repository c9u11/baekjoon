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
  const [N, M] = input[0].split(" ").map(Number);

  const two = getPower(N, 2) - getPower(N - M, 2) - getPower(M, 2);
  const five = getPower(N, 5) - getPower(N - M, 5) - getPower(M, 5);

  console.log(two > five ? five : two);

  function getPower(num, power) {
    let cnt = 0;
    while (num >= power) {
      num /= power;
      cnt += Math.floor(num);
    }
    return cnt;
  }
}
