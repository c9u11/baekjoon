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
  const [N, K] = input[0].split(" ").map(Number);
  const D = Array.from(Array(1001), () => new Array(1001));
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= i; j++) {
      if (!j || i === j) D[i][j] = 1;
      else D[i][j] = (D[i - 1][j] + D[i - 1][j - 1]) % 10007;
    }
  }
  console.log(D[N][K]);
}
