const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  main(input);
  process.exit();
});

function main(input) {
  const num = input[0] * 1;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i + 1;
  }
  console.log(sum);
}
