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
  const V = +input[0];
  const connectedMap = new Array(V + 1).fill().map(() => new Object());
  for (let i = 1; i <= V; i++) {
    const array = input[i].split(" ").map(Number);
    for (let j = 1; j < array.length; j = j + 2) {
      if (array[j] === -1) continue;
      connectedMap[array[0]][array[j]] = array[j + 1];
    }
  }
  const queue = [
    {
      curNode: 0,
      nextNode: 1,
      distance: 0,
      total: 0,
    },
  ];
  let max = 0,
    point = 0;
  for (let i = 0; i < 2; i++) {
    const visited = new Array(V + 1).fill(false);
    while (queue.length) {
      const info = queue.pop();
      if (visited[info.nextNode]) {
        if (max < info.total) {
          max = info.total;
          point = info.curNode;
        }
        continue;
      }
      visited[info.nextNode] = true;
      queue.push(
        ...Object.keys(connectedMap[info.nextNode]).map((v) => {
          return {
            curNode: info.nextNode,
            nextNode: v,
            distance: connectedMap[info.nextNode][v],
            total: info.distance + info.total,
          };
        })
      );
    }
    queue.push({
      curNode: 0,
      nextNode: point,
      distance: 0,
      total: 0,
    });
  }
  console.log(max);
}
