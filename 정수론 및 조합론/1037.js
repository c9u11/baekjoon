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
  if (+input[0] === 1) return console.log(+input[1] * +input[1]);
  const numArray = input[1].split(" ").map((v) => +v);
  numArray.sort((a, b) => a - b);
  console.log(numArray[0] * numArray.pop());
}
