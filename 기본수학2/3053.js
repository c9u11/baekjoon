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
  const uclid = num * num * Math.PI;
  const taxi = num * num * 2;
  console.log(`${uclid.toFixed(6)}\n${taxi.toFixed(6)}`);
}
