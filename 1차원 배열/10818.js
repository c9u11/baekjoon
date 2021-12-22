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
  const A = +input[0];
  const B = input[1].split(" ").map((c) => +c);
  B.sort((a, b) => a - b);
  console.log(`${B[0]} ${B[A - 1]}`);
}
