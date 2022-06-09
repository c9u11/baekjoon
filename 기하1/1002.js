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
  const [cnt, ...cases] = input;
  for (let i = 0; i < +cnt; i++) {
    const [X1, Y1, R1, X2, Y2, R2] = cases[i].split(" ").map((v) => +v);
    const between = Math.sqrt(
      Math.pow(Math.abs(X1 - X2), 2) + Math.pow(Math.abs(Y1 - Y2), 2)
    );
    if (X1 === X2 && Y1 === Y2 && R1 === R2) console.log(-1);
    else if (between > R1 + R2 || between + R1 < R2 || between + R2 < R1)
      console.log(0);
    else if (between === R1 + R2 || between + R1 === R2 || between + R2 === R1)
      console.log(1);
    else console.log(2);
  }
}
