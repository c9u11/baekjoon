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
  const numString = input[1];
  let sum = 0;
  for (let i = 0; i < numString.length; i++) {
    sum += +numString[i];
  }
  console.log(sum);
}
