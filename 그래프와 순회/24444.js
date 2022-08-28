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
  const [N, M, R] = input[0].split(" ").map(Number);
  const connectedMap = new Array(N + 1).fill().map(() => new Array());
  const visited = new Array(N + 1).fill(0);
  let [queue, tempQueue] = [[R], []];
  let cnt = 0;
  for (let i = 1; i <= M; i++) {
    const [s, e] = input[i].split(" ");
    connectedMap[s].push(e);
    connectedMap[e].push(s);
  }
  connectedMap.map((v) => v.sort((a, b) => a - b));
  while (queue.length) {
    for (let node of queue) {
      if (visited[node]) continue;
      visited[node] = ++cnt;
      connectedMap[node].forEach((v) => {
        if (!visited[v]) tempQueue.push(v);
      });
    }
    [queue, tempQueue] = [tempQueue, []];
  }
  console.log(visited.filter((_, i) => i).join("\n"));
}
