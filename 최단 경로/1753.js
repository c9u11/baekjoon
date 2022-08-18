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
  const [V, E] = input[0].split(" ").map(Number);
  const connectedMap = new Array(V + 1).fill().map(() => Object());
  const start = +input[1];
  for (let i = 2; i < input.length; i++) {
    const [s, e, w] = input[i].split(" ").map(Number);
    if (!connectedMap[s][e] || connectedMap[s][e] > w) connectedMap[s][e] = w;
  }
  const distance = new Array(V + 1).fill(Infinity);
  const visited = new Array(V + 1).fill(false);
  const queue = new Heap();
  distance[0] = false;
  distance[start] = 0;
  queue.push({
    vertex: start,
    cost: 0,
  });
  while (queue.size()) {
    const { vertex: node } = queue.pop();
    if (visited[node]) continue;
    visited[node] = true;
    Object.keys(connectedMap[node]).forEach((key) => {
      if (distance[key] > distance[node] + connectedMap[node][key]) {
        distance[key] = distance[node] + connectedMap[node][key];
        queue.push({
          vertex: key,
          cost: distance[key],
        });
      }
    });
  }
  console.log(
    distance
      .filter((v) => typeof v === "number")
      .map((v) => (v === Infinity ? "INF" : v))
      .join("\n")
  );
}
class Heap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  size() {
    return this.heap.length - 1;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.heap[parIdx].cost > this.heap[curIdx].cost) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curidx = 1;
    let leftidx = curidx * 2;
    let rightidx = curidx * 2 + 1;

    if (!this.heap[leftidx]) return min;
    if (!this.heap[rightidx]) {
      if (this.heap[leftidx].cost < this.heap[curidx].cost) {
        this.swap(leftidx, curidx);
      }
      return min;
    }

    while (
      leftidx < this.size() &&
      (this.heap[leftidx].cost < this.heap[curidx].cost ||
        this.heap[rightidx].cost < this.heap[curidx].cost)
    ) {
      const minidx =
        this.heap[leftidx].cost > this.heap[rightidx].cost ? rightidx : leftidx;
      this.swap(minidx, curidx);
      curidx = minidx;
      leftidx = curidx * 2;
      rightidx = curidx * 2 + 1;
    }

    return min;
  }
}
