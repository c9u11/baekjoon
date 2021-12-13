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

  if (num2 - 45 >= 0) console.log(`${num1} ${num2 - 45}`);
  else console.log(`${num1 === 0 ? "23" : num1 - 1} ${num2 + 15}`);
}
