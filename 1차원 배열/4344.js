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
  const Output = [];
  for (let i = 1; i <= +input[0]; i++) {
    const Scores = input[i].split(" ").slice(1);
    let sum = 0,
      cnt = 0;
    Scores.forEach((s) => (sum += +s));
    Scores.forEach((s) => (cnt = sum / Scores.length < +s ? cnt + 1 : cnt));
    console.log(`${((cnt / Scores.length) * 100).toFixed(3)}%`);
  }
}
