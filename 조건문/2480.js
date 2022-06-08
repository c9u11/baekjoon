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
  const [A, B, C] = input[0]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);
  if (A === B && B === C) console.log(10000 + 1000 * C);
  else if (A === B || B === C || A === C)
    console.log(1000 + 100 * (A === B ? A : C));
  else console.log(100 * C);
}
