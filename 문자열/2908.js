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
  const numArray = input[0]
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .map((s) => +s);
  console.log(Math.max(...numArray));
}
