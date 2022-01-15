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
  input.forEach((line) => {
    const array = line.split(" ").map((v) => +v * +v);
    if (!array[0]) return;
    const max = Math.max(...array);
    let sum = 0;
    array.forEach((v) => (sum += v));
    console.log(`${max === sum - max ? "right" : "wrong"}`);
  });
}
