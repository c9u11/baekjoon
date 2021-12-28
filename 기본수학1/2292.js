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
  let temp = 0;
  let i;
  for (i = 0; num > temp; i++) {
    temp += temp ? 6 * i : 1;
  }
  console.log(i);
}
