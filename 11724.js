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
  const connectMap = new Array(N + 1).fill(true).map((v) => []);
  const visited = new Array(N + 1).fill(false);
  let cnt = 0;
  for (let i = 1; i <= M; i++) {
    const [s, t] = input[i].split(" ").map(Number);
    connectMap[s].push(t);
    connectMap[t].push(s);
  }
  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    cnt++;
    const queue = [...connectMap[i]];
    while (queue.length) {
      const node = queue.pop();
      if (visited[node]) continue;
      visited[node] = true;
      queue.push(...connectMap[node]);
    }
  }
  console.log(cnt);
}
