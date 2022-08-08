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
  const map = [];
  const N = +input.shift();
  let shark = [];
  let [queue, tempQueue] = [[], []];
  let visited = new Array(N).fill(false).map((v) => new Array(N).fill(false));
  let cnt = 0,
    tempCnt = 0;

  for (let i = 0; i < N; i++) {
    map.push([]);
    const row = input[i].split(" ");
    for (let j = 0; j < N; j++) {
      map[i][j] = +row[j];
      if (map[i][j] === 9) {
        shark = [i, j, 2, 0];
        map[i][j] = 0;
      }
    }
  }

  if (shark[0] > 0 && map[shark[0] - 1][shark[1]] <= shark[2])
    queue.push([shark[0] - 1, shark[1]]);
  if (shark[1] > 0 && map[shark[0]][shark[1] - 1] <= shark[2])
    queue.push([shark[0], shark[1] - 1]);
  if (shark[1] < N - 1 && map[shark[0]][shark[1] + 1] <= shark[2])
    queue.push([shark[0], shark[1] + 1]);
  if (shark[0] < N - 1 && map[shark[0] + 1][shark[1]] <= shark[2])
    queue.push([shark[0] + 1, shark[1]]);

  while (queue.length) {
    tempCnt++;
    for (node of queue) {
      const [y, x] = node;
      if (visited[y][x]) continue;
      visited[y][x] = true;
      if (map[y][x] && shark[2] > map[y][x]) {
        cnt = tempCnt;
        map[y][x] = 0;
        shark[0] = y;
        shark[1] = x;
        if (shark[2] <= ++shark[3]) {
          shark[2]++;
          shark[3] = 0;
        }
        tempQueue = [];
        if (shark[0] > 0 && map[shark[0] - 1][shark[1]] <= shark[2])
          tempQueue.push([shark[0] - 1, shark[1]]);
        if (shark[1] > 0 && map[shark[0]][shark[1] - 1] <= shark[2])
          tempQueue.push([shark[0], shark[1] - 1]);
        if (shark[1] < N - 1 && map[shark[0]][shark[1] + 1] <= shark[2])
          tempQueue.push([shark[0], shark[1] + 1]);
        if (shark[0] < N - 1 && map[shark[0] + 1][shark[1]] <= shark[2])
          tempQueue.push([shark[0] + 1, shark[1]]);
        visited = new Array(N).fill(false).map((v) => new Array(N).fill(false));
        break;
      }
      if (y > 0 && map[y - 1][x] <= shark[2] && !visited[y - 1][x]) {
        tempQueue.push([y - 1, x]);
      }
      if (x < N - 1 && map[y][x + 1] <= shark[2] && !visited[y][x + 1]) {
        tempQueue.push([y, x + 1]);
      }
      if (x > 0 && map[y][x - 1] <= shark[2] && !visited[y][x - 1]) {
        tempQueue.push([y, x - 1]);
      }
      if (y < N - 1 && map[y + 1][x] <= shark[2] && !visited[y + 1][x]) {
        tempQueue.push([y + 1, x]);
      }
    }

    [queue, tempQueue] = [
      tempQueue.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])),
      [],
    ];
  }

  console.log(cnt);
}
