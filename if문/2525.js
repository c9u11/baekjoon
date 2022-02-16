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
  const [A, B] = input[0].split(" ").map((v) => +v);
  const C = +input[1];

  const hour = A + Math.floor((B + C) / 60);
  const min = (B + C) % 60;
  console.log(hour >= 24 ? hour - 24 : hour, min);
}
