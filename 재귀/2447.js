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
  const output = returnFunc(+input[0]);
  output.forEach((v) => console.log(v));
}

function returnFunc(n) {
  const output = [];
  const prev = n === 3 ? ["*", "*", "*"] : returnFunc(n / 3);
  const third = n / 3;
  const blank = "".padEnd(n / 3, " ");
  for (let i = 0; i < n; i++) {
    const unit = prev[i % (n / 3)];
    for (let j = 0; j < 3; j++) {
      if (!output[i]) output[i] = "";
      output[i] += j === 1 && i >= third && i < third * 2 ? blank : unit;
    }
  }
  return output;
}
