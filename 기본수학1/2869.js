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
  const A = +input[0].split(" ")[0];
  const B = +input[0].split(" ")[1];
  const V = +input[0].split(" ")[2];
  console.log(Math.ceil((V - A) / (A - B)) + 1);
}
