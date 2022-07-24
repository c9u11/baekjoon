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
  const heap = new Heap();
  const result = [];
  for (let i = 1; i <= N; i++) {
    const num = +input[i];
    if (num) heap.heapPush(num);
    else result.push(heap.heapPop());
  }
  console.log(result.join("\n"));
}

class Heap {
  constructor() {
    this.heap = [null];
  }

  heapPush(val) {
    this.heap.push(val);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
      [this.heap[parIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[parIdx],
      ];
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  heapPop() {
    const min = this.heap[1] ?? 0;
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[curIdx]) {
        [this.heap[leftIdx], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[leftIdx],
        ];
      }
      return min;
    }

    while (
      this.heap[leftIdx] > this.heap[curIdx] ||
      this.heap[rightIdx] > this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
      [this.heap[minIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[minIdx],
      ];
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return min;
  }
}
