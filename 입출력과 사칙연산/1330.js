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
  const num1 = input[0].split(" ")[0] * 1;
  const num2 = input[0].split(" ")[1] * 1;

  if (num1 > num2) console.log(">");
  else if (num1 < num2) console.log("<");
  else if (num1 === num2) console.log("==");
}
