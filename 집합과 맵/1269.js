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
  let result = 0;
  input[1].split(" ").forEach((v) => {
    hasMap[v] = true;
  });
  input[2].split(" ").forEach((v) => {
    hasMap[v] = !hasMap[v];
  });
  Object.keys(hasMap).forEach((v) => {
    if (hasMap[v]) result++;
  });
  console.log(result);
}
