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
  let output = 0;
  input[0].split(" ").forEach((v) => {
    output += v * v;
  });
  console.log(output % 10);
}
