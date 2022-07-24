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
  const [N, K] = input.shift().split(" ").map(Number);
  let tomatoCnt = 0;
  let dayCnt = 0;
  const queue = [];
  const visited = [];
  const map = input.map((row, rowIdx) => {
    visited[rowIdx] = new Array(N).fill(false);
    return row.split(" ").map((cell, colIdx) => {
      if (cell === "0") tomatoCnt++;
      if (cell === "1") {
        queue.push([rowIdx, colIdx]);
        visited[rowIdx][colIdx] = true;
      }
      return +cell;
    });
  });
  while (queue.length && tomatoCnt > 0) {
    const tempQueue = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [rowIdx, colIdx] = queue.pop();
      if (!map[rowIdx][colIdx]) tomatoCnt--;
      map[rowIdx][colIdx] = 1;
      if (
        rowIdx > 0 &&
        !map[rowIdx - 1][colIdx] &&
        !visited[rowIdx - 1][colIdx]
      ) {
        tempQueue.push([rowIdx - 1, colIdx]);
        visited[rowIdx - 1][colIdx] = true;
      }
      if (
        rowIdx < K - 1 &&
        !map[rowIdx + 1][colIdx] &&
        !visited[rowIdx + 1][colIdx]
      ) {
        tempQueue.push([rowIdx + 1, colIdx]);
        visited[rowIdx + 1][colIdx] = true;
      }
      if (
        colIdx > 0 &&
        !map[rowIdx][colIdx - 1] &&
        !visited[rowIdx][colIdx - 1]
      ) {
        tempQueue.push([rowIdx, colIdx - 1]);
        visited[rowIdx][colIdx - 1] = true;
      }
      if (
        colIdx < N - 1 &&
        !map[rowIdx][colIdx + 1] &&
        !visited[rowIdx][colIdx + 1]
      ) {
        tempQueue.push([rowIdx, colIdx + 1]);
        visited[rowIdx][colIdx + 1] = true;
      }
    }
    queue.push(...tempQueue);
    if (tempQueue.length) dayCnt++;
  }
  console.log(!tomatoCnt ? dayCnt : -1);
}
