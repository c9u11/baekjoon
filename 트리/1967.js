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
  if (N === 1) {
    console.log(0);
    return;
  }
  const connectedMap = new Array(N + 1).fill().map(() => new Object());
  for (let i = 1; i < input.length; i++) {
    const [parent, child, distance] = input[i].split(" ");
    connectedMap[parent][child] = +distance;
    connectedMap[child][parent] = +distance;
  }
  const queue = [
    {
      preNode: 0,
      curNode: "1",
      total: 0,
      distance: 0,
    },
  ];
  const max = {
    total: 0,
    lastNode: -1,
  };
  for (let i = 0; i < 2; i++) {
    const visited = new Array(N + 1).fill(false);
    while (queue.length) {
      const info = queue.pop();
      if (visited[info.curNode]) continue;
      visited[info.curNode] = true;
      if (max.total < info.total + info.distance) {
        max.total = info.total + info.distance;
        max.lastNode = info.curNode;
      }
      queue.push(
        ...Object.keys(connectedMap[info.curNode]).map((v) => {
          return {
            preNode: info.curNode,
            curNode: v,
            total: info.total + info.distance,
            distance: connectedMap[info.curNode][v],
          };
        })
      );
    }
    queue.push({
      preNode: 0,
      curNode: max.lastNode,
      total: 0,
      distance: 0,
    });
  }
  console.log(max.total);
}
