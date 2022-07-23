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
  const nums = input[1].split(" ").map(Number);
  const cumsum = [0];
  const result = [];
  nums.forEach((v, i) => {
    cumsum[i + 1] = cumsum[i] + v;
  });
  for (let i = 2; i < M + 2; i++) {
    const [s, e] = input[i].split(" ").map(Number);
    result.push(cumsum[e] - cumsum[s - 1]);
  }
  console.log(result.join("\n"));
}
