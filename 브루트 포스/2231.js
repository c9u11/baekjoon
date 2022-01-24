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
  const N = +input[0];
  let output = 0;
  for (let i = 0; i < N; i++) {
    const stringI = i + "";
    let sum = i;
    stringI.split("").forEach((v) => (sum += +v));
    if (sum === N) {
      output = i;
      break;
    }
  }
  console.log(output);
}
