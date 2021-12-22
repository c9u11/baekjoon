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
  const MAX = [0, 0];
  for (let i = 0; i < input.length; i++) {
    if (MAX[0] < +input[i]) {
      MAX[0] = input[i];
      MAX[1] = i + 1;
    }
  }
  console.log(`${MAX[0]}\n${MAX[1]}`);
}
