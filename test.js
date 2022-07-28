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
  const connectedMap = new Array(N + 1).fill(true).map((v) => []);
  let cnt = 0,
    result = [undefined, undefined];
  for (let i = 1; i <= M; i++) {
    const [s, e] = input[i].split(" ").map(Number);
    connectedMap[s].push(e);
    connectedMap[e].push(s);
  }
  for (let i = 1; i <= N; i++) {
    cnt = 0;
    bfs(i);
    if (result[0] === undefined || result[0] > cnt) {
      result[0] = cnt;
      result[1] = i;
    }
  }
  console.log(result[1]);
  function bfs(start) {
    visited = new Array(N + 1).fill(false);
    visited[start] = true;
    let queue = new Set();
    let tempQueue = new Set();
    connectedMap[start].forEach((v) => {
      queue.add(v);
    });
    let deps = 0;
    while (queue.size) {
      deps++;
      queue.forEach((v) => {
        if (visited[v]) return;
        visited[v] = true;
        cnt += deps;
        for (let val of connectedMap[v]) {
          tempQueue.add(val);
        }
      });
      queue = tempQueue;
      tempQueue = new Set();
    }
  }
}
