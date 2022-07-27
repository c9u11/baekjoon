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
  const [N, M, V] = input[0].split(" ").map(Number);
  const connectedMap = new Array(N + 1).fill(true).map((v) => []);
  const visited = {
    bfs: new Array(N + 1).fill(false),
    dfs: new Array(N + 1).fill(false),
  };
  const result = {
    bfs: [],
    dfs: [],
  };
  for (let i = 1; i <= M; i++) {
    const [s, e] = input[i].split(" ").map(Number);
    connectedMap[s].push(e);
    connectedMap[e].push(s);
  }
  connectedMap.forEach((v) => {
    v.sort((a, b) => a - b);
  });

  dfs(V);
  bfs(V);

  console.log(result.dfs.join(" "));
  console.log(result.bfs.join(" "));

  function dfs(start) {
    if (visited.dfs[start]) return;
    visited.dfs[start] = true;
    result.dfs.push(start);
    connectedMap[start].forEach((v) => dfs(v));
  }
  function bfs(start) {
    if (visited.bfs[start]) return;
    visited.bfs[start] = true;
    result.bfs.push(start);
    const stack = [...connectedMap[start]];
    while (stack.length) {
      const node = stack.shift();
      if (visited.bfs[node]) continue;
      visited.bfs[node] = true;
      result.bfs.push(node);
      stack.push(...connectedMap[node]);
    }
  }
}
