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

let output = [0];

function main(input) {
  returnFunc(+input[0], 1, 3, 2);
  console.log(output.join("\n"));
}

function returnFunc(N, from, to, via) {
  if (N === 1) {
    output[0]++;
    output.push(`${from} ${to}`);
  } else {
    returnFunc(N - 1, from, via, to);
    output[0]++;
    output.push(`${from} ${to}`);
    returnFunc(N - 1, via, to, from);
  }
}
