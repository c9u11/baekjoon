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
  let outputObject = {};
  let output = [];
  const numArray = input[1].split(" ").map((v) => +v);
  let uniqueArray = new Set();
  numArray.forEach((v) => uniqueArray.add(v));
  uniqueArray = Array.from(uniqueArray).sort((a, b) => a - b);

  uniqueArray.forEach((v, i) => {
    outputObject[v] = i;
  });
  numArray.forEach((v) => {
    output.push(outputObject[v]);
  });

  console.log(output.join(" "));
}
