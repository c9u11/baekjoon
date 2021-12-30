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
  const num = +input[0];
  const ableNum = [];
  for (let i = 1; i < num / 3 + 1; i++) {
    if (!((num - 3 * i) % 5)) ableNum.push(i + (num - 3 * i) / 5);
    if (!(num - 5 * i)) ableNum.push(i);
  }
  if (ableNum.length) console.log(Math.min(...ableNum));
  else console.log(-1);
}
