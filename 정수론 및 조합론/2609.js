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
  const [A, B] = input[0].split(" ").map((v) => +v);
  const num1 = returnNum1(A, B);
  const num2 = num1 * (A / num1) * (B / num1);
  console.log(`${num1}\n${num2}`);

  function returnNum1(a, b) {
    if (!b) return a;
    else return returnNum1(b, a % b);
  }
}
