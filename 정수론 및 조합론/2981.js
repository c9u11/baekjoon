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
  const numLen = +input.shift();
  const numArray = input.map(Number);
  const result = [];

  numArray.sort();

  let GCD = numArray[1] - numArray[0];

  for (let i = 2; i < numLen; i++) {
    GCD = findGCD(GCD, numArray[i] - numArray[i - 1]);
  }

  for (let i = 2; i <= GCD; i++) {
    if (GCD % i === 0) result.push(i);
  }
  console.log(result.join(" "));

  function findGCD(a, b) {
    if (!b) return a;
    else return findGCD(b, a % b);
  }
}
