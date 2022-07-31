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
  const map = input.map((v) => v.split(""));
  const visited = new Array(N).fill(false).map((v) => new Array(M).fill(false));
  let queue = [[0, 0]],
    tempQueue = [];
  let cnt = 1;
  while (queue.length || tempQueue.length) {
    if (!queue.length) {
      [queue, tempQueue] = [tempQueue, queue];
      cnt++;
    }
    const [y, x] = queue.pop();
    if (visited[y][x]) continue;
    visited[y][x] = true;
    if (y < N - 1) {
      if (x === M - 1 && y + 1 === N - 1) break;
      if (map[y + 1][x] === "1") tempQueue.push([y + 1, x]);
    }
    if (x < M - 1) {
      if (x + 1 === M - 1 && y === N - 1) break;
      if (map[y][x + 1] === "1") tempQueue.push([y, x + 1]);
    }
    if (y > 0) {
      if (map[y - 1][x] === "1") tempQueue.push([y - 1, x]);
    }
    if (x > 0) {
      if (map[y][x - 1] === "1") tempQueue.push([y, x - 1]);
    }
  }
  console.log(++cnt);
}
