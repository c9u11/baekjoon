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
  const nums = input[1].split(" ").map((n) => +n);
  const MAX = Math.max(...nums);
  let SUM = 0;
  nums.forEach((n) => {
    SUM += (n / MAX) * 100;
  });
  console.log(SUM / nums.length);
}
