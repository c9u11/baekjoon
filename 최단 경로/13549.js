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
  const [N, K] = input[0].split(" ").map(Number);
  const visited = new Array(100001);
  let [queue, tempQueue] = [[{ time: 0, position: N }], []];
  while (visited[K] === undefined) {
    for ({ time, position } of queue) {
      if (visited[position] < time) continue;
      visited[position] = time;
      if (position <= 50000)
        tempQueue.push({ time: time, position: position * 2 });
      if (position < 100000)
        tempQueue.push({ time: time + 1, position: position + 1 });
      if (position > 0)
        tempQueue.push({ time: time + 1, position: position - 1 });
    }
    [queue, tempQueue] = [tempQueue, []];
  }
  console.log(visited[K]);
}
