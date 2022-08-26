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
  const [N, M] = input.shift().split(" ").map(Number);
  const map = input.map((v) => v.split("").map(Number));
  const visited = {
    true: new Array(N).fill().map(() => new Array(M)),
    false: new Array(N).fill().map(() => new Array(M)),
  };
  let [queue, tempQueue] = [[{ x: 0, y: 0, isBreak: false }], []];
  let cnt = 0;
  let isFind = false;
  while (queue.length && !isFind) {
    cnt++;
    for (let { x, y, isBreak } of queue) {
      if (visited[isBreak][y][x]) continue;
      visited[isBreak][y][x] = true;
      if (x === M - 1 && y === N - 1) {
        isFind = true;
        break;
      }
      if (x) {
        if (!map[y][x - 1]) tempQueue.push({ x: x - 1, y: y, isBreak });
        else if (!isBreak) tempQueue.push({ x: x - 1, y: y, isBreak: true });
      }
      if (y) {
        if (!map[y - 1][x]) tempQueue.push({ x: x, y: y - 1, isBreak });
        else if (!isBreak) tempQueue.push({ x: x, y: y - 1, isBreak: true });
      }
      if (x + 1 < M) {
        if (!map[y][x + 1]) tempQueue.push({ x: x + 1, y: y, isBreak });
        else if (!isBreak) tempQueue.push({ x: x + 1, y: y, isBreak: true });
      }
      if (y + 1 < N) {
        if (!map[y + 1][x]) tempQueue.push({ x: x, y: y + 1, isBreak });
        else if (!isBreak) tempQueue.push({ x: x, y: y + 1, isBreak: true });
      }
    }
    [queue, tempQueue] = [tempQueue, []];
  }
  console.log(isFind ? cnt : -1);
}
