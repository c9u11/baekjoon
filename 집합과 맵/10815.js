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
  const result = [];
  input[1].split(" ").forEach((val) => {
    hasMap[val] = true;
  });

  input[3].split(" ").forEach((val) => {
    result.push(!!hasMap[val] ? 1 : 0);
  });
  console.log(...result);
}
