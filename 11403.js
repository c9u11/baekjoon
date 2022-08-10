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
  const connected = [];
  const result = [];
  for (let i = 1; i <= +input[0]; i++) {
    connected.push([]);
    input[i].split(" ").forEach((v, idx) => {
      if (v === "1") connected[i - 1].push(idx);
    });
  }

  for (let i = 0; i < +input[0]; i++) {
    const visited = new Array(+input[0]).fill(0);
    const queue = [...connected[i]];
    while (queue.length) {
      const node = queue.pop();
      if (visited[node]) continue;
      visited[node] = 1;
      queue.push(...connected[node]);
    }
    result.push(visited.join(" "));
  }
  console.log(result.join("\n"));
}
