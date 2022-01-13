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
  const [x, y, w, h] = input[0].split(" ").map((v) => +v);
  const tempArray = [Math.abs(0 - x), Math.abs(0 - y), w - x, h - y];
  console.log(Math.min(...tempArray));
}
