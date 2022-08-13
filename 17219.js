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
  const map = {};
  const result = [];
  for (let i = 1; i <= N; i++) {
    const [site, pw] = input[i].split(" ");
    map[site] = pw;
  }
  for (let i = N + 1; i <= N + M; i++) {
    result.push(map[input[i]]);
  }
  console.log(result.join("\n"));
}
