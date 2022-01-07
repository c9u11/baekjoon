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
  let num = +input[0];
  let unit = 2;
  while (num > 1) {
    if (num % unit === 0) {
      console.log(unit);
      num = num / unit;
      unit = 2;
    } else {
      unit = unit === 2 ? 3 : unit + 2;
    }
  }
}
