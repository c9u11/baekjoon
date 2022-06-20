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
  const hasMap = {};
  for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < input[0].length - i; j++) {
      hasMap[input[0].slice(j, j + i + 1)] = true;
    }
  }
  console.log(Object.keys(hasMap).length);
}
