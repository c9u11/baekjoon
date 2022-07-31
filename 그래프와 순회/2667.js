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
  const N = +input.shift();
  const map = input.map((v) => v.split(""));
  const visited = new Array(N).fill(false).map((v) => new Array(N).fill(false));
  const result = [];
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] || map[i][j] === "0") continue;
      dfs(i, j);
      result.push(cnt);
      cnt = 0;
    }
  }
  console.log(result.length);
  console.log(result.sort((a, b) => a - b).join("\n"));
  function dfs(y, x) {
    if (visited[y][x]) return;
    visited[y][x] = true;
    cnt++;
    if (y < N - 1) {
      if (map[y + 1][x] === "1") dfs(y + 1, x);
    }
    if (x < N - 1) {
      if (map[y][x + 1] === "1") dfs(y, x + 1);
    }
    if (y > 0) {
      if (map[y - 1][x] === "1") dfs(y - 1, x);
    }
    if (x > 0) {
      if (map[y][x - 1] === "1") dfs(y, x - 1);
    }
  }
}
