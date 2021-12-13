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
  var A = input[0] * 1;
  var B = input[1];

  console.log(A * (B[2] * 1));
  console.log(A * (B[1] * 1));
  console.log(A * (B[0] * 1));
  console.log(A * (B * 1));
}
