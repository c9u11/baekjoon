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
  const [N, K] = input[0].split(" ").map(Number);

  console.log(factorial(N) / (factorial(N - K) * factorial(K)));

  function factorial(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
      sum *= i;
    }
    return sum;
  }
}
