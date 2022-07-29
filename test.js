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
  console.log(
    input[0]
      .split("-")
      .map((v) => v.split("+").reduce((a, b) => +a + +b, 0))
      .reduce((a, b) => (a === undefined ? b : a - b), undefined)
  );
}
