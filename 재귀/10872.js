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
  let num = 1;
  for (i = 1; i <= +input[0]; i++) {
    num *= i;
  }
  console.log(num);
}
