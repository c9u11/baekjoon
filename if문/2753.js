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

  if (num % 4 === 0 && (num % 100 != 0 || num % 400 === 0)) console.log("1");
  else console.log("0");
}
