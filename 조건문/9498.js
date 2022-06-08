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

  if (90 <= num && num <= 100) console.log("A");
  else if (80 <= num && num <= 89) console.log("B");
  else if (70 <= num && num <= 79) console.log("C");
  else if (60 <= num && num <= 69) console.log("D");
  else console.log("F");
}
