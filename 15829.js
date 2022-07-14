const { sign } = require("crypto");
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
  let sum = 0,
    M = 1;
  for (let i = 0; i < N; i++) {
    sum += (input[1].charCodeAt(i) - 96) * M;
    M *= 31;
    M %= 1234567891;
    sum %= 1234567891;
  }
  console.log(sum);
}
