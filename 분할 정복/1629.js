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
  const [A, B, C] = input[0].split(" ").map((v) => BigInt(v));
  let cnt = B;
  let output = 1n;
  const oper = [];
  while (cnt) {
    if (cnt % 2n) {
      oper.push("+");
      cnt--;
    } else {
      oper.push("*");
      cnt /= 2n;
    }
  }
  for (let i = oper.length - 1; i > -1; i--) {
    if (oper[i] === "+") {
      output = (output * A) % C;
    } else {
      output = (output * output) % C;
    }
  }
  console.log(Number(output));
}
