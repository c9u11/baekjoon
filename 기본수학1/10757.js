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
  const A = BigInt(input[0].split(" ")[0]);
  const B = BigInt(input[0].split(" ")[1]);
  let sum = A + B;
  console.log(sum.toString());
}
