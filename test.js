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
  console.log(factorial(+input[0]));
}

function factorial(n) {
  if (!n) return 1;
  else {
    return n * factorial(n - 1);
  }
}
