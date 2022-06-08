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
  const num1 = input[0] * 1;
  const num2 = input[1] * 1;

  if (num1 > 0 && num2 > 0) console.log("1");
  else if (num1 < 0 && num2 > 0) console.log("2");
  else if (num1 < 0 && num2 < 0) console.log("3");
  else if (num1 > 0 && num2 < 0) console.log("4");
}
