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
  const nums = input[1].split(" ").map(Number);
  const cumsum = [0];
  let result = -Infinity;
  nums.forEach((v, i) => {
    cumsum[i + 1] = cumsum[i] + v;
  });
  for (let i = K; i <= N; i++) {
    result = Math.max(result, cumsum[i] - cumsum[i - K]);
  }
  console.log(result);
}
