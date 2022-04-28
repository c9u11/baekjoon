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
  for (let i = 1; i <= +input[0]; i++) {
    const [N, M] = input[i].split(" ").map(Number);

    console.log(Math.round(factorial(M) / (factorial(M - N) * factorial(N))));
  }

  function factorial(num) {
    let sum = 1;
    for (let i = 1; i <= num; i++) {
      sum *= i;
    }
    return sum;
  }
}
