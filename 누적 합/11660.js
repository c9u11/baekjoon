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
  const [N, M] = input[0].split(" ").map(Number);
  const cumsum = [new Array(N + 1).fill(0)];
  const result = [];
  for (let i = 1; i <= N; i++) {
    cumsum[i] = [];
    input[i].split(" ").forEach((val, idx) => {
      if (!idx) cumsum[i].push(0, +cumsum[i - 1][idx + 1] + +val);
      else
        cumsum[i].push(
          cumsum[i][idx] + +val + cumsum[i - 1][idx + 1] - cumsum[i - 1][idx]
        );
    });
  }
  for (let i = N + 1; i <= N + M; i++) {
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    result.push(
      cumsum[x2][y2] -
        cumsum[x1 - 1][y2] -
        cumsum[x2][y1 - 1] +
        cumsum[x1 - 1][y1 - 1]
    );
  }
  console.log(result.join("\n"));
}
