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
  const N = +input[0];
  const connectedMap = new Array(N + 1).fill().map(() => new Array());
  const visited = new Array(N + 1);
  let [queue, tempQueue] = [[{ parent: "-1", current: "1" }], []];
  for (let i = 1; i < N; i++) {
    const [s, e] = input[i].split(" ");
    connectedMap[s].push(e);
    connectedMap[e].push(s);
  }
  while (queue.length) {
    for (let { parent, current } of queue) {
      if (visited[current]) continue;
      visited[current] = parent;
      tempQueue.push(
        ...connectedMap[current].map((v) => ({ parent: current, current: v }))
      );
    }
    [queue, tempQueue] = [tempQueue, []];
  }
  console.log(visited.filter((v) => v !== "-1" && v).join("\n"));
}
