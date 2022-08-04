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
  const [M, N, H] = input.shift().split(" ").map(Number);
  let queue = [];
  let tempQueue = [];
  let cnt = 0;
  let dayCnt = 0;
  const map = [];
  const visited = [];
  for (let i = 0; i < H; i++) {
    map[i] = [];
    visited[i] = [];
    for (let j = 0; j < N; j++) {
      const row = input[i * N + j].split(" ");
      map[i].push(row);
      visited[i].push(new Array(M).fill(false));
      for (let k = 0; k < M; k++) {
        const cell = row[k];
        if (cell === "0") cnt++;
        else if (cell === "1") queue.push([i, j, k]);
      }
    }
  }
  while (cnt > 0 && queue.length) {
    dayCnt++;
    for (let node of queue) {
      const [z, y, x] = node;
      if (visited[z][y][x]) continue;
      visited[z][y][x] = true;
      tempQueuePush(x + 1 < M, z, y, x + 1);
      tempQueuePush(y + 1 < N, z, y + 1, x);
      tempQueuePush(z + 1 < H, z + 1, y, x);
      tempQueuePush(x > 0, z, y, x - 1);
      tempQueuePush(y > 0, z, y - 1, x);
      tempQueuePush(z > 0, z - 1, y, x);
    }
    [queue, tempQueue] = [tempQueue, []];
  }

  console.log(cnt ? -1 : dayCnt);

  function tempQueuePush(condition, z, y, x) {
    if (condition && map[z][y][x] === "0") {
      tempQueue.push([z, y, x]);
      map[z][y][x] = "1";
      cnt--;
    }
  }
}
