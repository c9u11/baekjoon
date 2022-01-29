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
  const [cnt, ...numArray] = input;
  const output = numArray.map((v) => +v).sort((a, b) => a - b);
  console.log(output.join("\n"));
}
