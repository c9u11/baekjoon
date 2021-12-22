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
    let sum = 0;
    let plus = 0;
    for (let j = 0; j <= input[i].length; j++) {
      if (input[i][j] === "O") {
        plus++;
        sum += plus;
      } else {
        plus = 0;
      }
    }
    Output.push(sum);
  }
  Output.forEach((v) => console.log(v));
}
