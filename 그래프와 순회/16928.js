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
  const visited = new Array(100 + 1).fill(false);
  const map = visited.map((v, i) => i);
  let [queue, tempQueue] = [[1], []];
  let cnt = 0;
  for (let i = 1; i <= N + M; i++) {
    const [s, e] = input[i].split(" ").map(Number);
    map[s] = e;
  }
  while (queue.length) {
    cnt++;
    for (let node of queue) {
      if (visited[node]) continue;
      visited[node] = true;
      if (node >= 94) {
        tempQueue = [];
        break;
      }
      for (let i = 1; i <= 6 && i <= 100 - node; i++) {
        tempQueue.push(map[node + i]);
      }
    }
    [queue, tempQueue] = [tempQueue, []];
  }
  console.log(cnt);
}
