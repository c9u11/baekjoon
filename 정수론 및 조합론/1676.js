var readline = require("readline");
const { resourceLimits } = require("worker_threads");
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
  let result = 0;
  if (num != 0) {
    result += parseInt(num / 5);
    result += parseInt(num / 25);
    result += parseInt(num / 125);
    console.log(result);
  } else {
    console.log(0);
  }
}
