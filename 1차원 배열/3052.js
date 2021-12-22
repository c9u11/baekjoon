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
  const count = {};
  for (let i = 0; i < input.length; i++) {
    count[input[i] % 42] = true;
  }
  console.log(Object.keys(count).length);
}
