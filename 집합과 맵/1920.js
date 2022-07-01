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
  const hasMap = {},
    result = [];
  input[1].split(" ").forEach((v) => {
    hasMap[v] = true;
  });
  input[3].split(" ").forEach((v) => {
    if (hasMap[v]) result.push(1);
    else result.push(0);
  });
  console.log(result.join("\n"));
}
