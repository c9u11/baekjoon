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
  const heap = new absHeap();
  const result = [];
  for (let i = 1; i <= +input[0]; i++) {
    const num = +input[i];
    if (num !== 0) heap.push(num);
    else result.push(heap.pop());
  }
  console.log(result.join("\n"));
}

class absHeap {
  constructor() {
    this.heap = [null];
  }

  push(num) {
    this.heap.push(num);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (
      curIdx > 1 &&
      Math.abs(this.heap[parIdx]) >= Math.abs(this.heap[curIdx])
    ) {
      if (
        Math.abs(this.heap[parIdx]) === Math.abs(this.heap[curIdx]) &&
        this.heap[parIdx] < this.heap[curIdx]
      )
        break;
      [this.heap[parIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[parIdx],
      ];
      [curIdx, parIdx] = [parIdx, Math.floor(parIdx / 2)];
    }
  }

  pop() {
    const min = this.heap[1] ?? 0;
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (
        Math.abs(this.heap[leftIdx]) < Math.abs(this.heap[curIdx]) ||
        (this.heap[leftIdx] < this.heap[curIdx] &&
          Math.abs(this.heap[leftIdx]) === Math.abs(this.heap[curIdx]))
      ) {
        [this.heap[leftIdx], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[leftIdx],
        ];
      }
      return min;
    }
    while (
      Math.abs(this.heap[leftIdx]) < Math.abs(this.heap[curIdx]) ||
      (this.heap[leftIdx] < this.heap[curIdx] &&
        Math.abs(this.heap[leftIdx]) === Math.abs(this.heap[curIdx])) ||
      Math.abs(this.heap[rightIdx]) < Math.abs(this.heap[curIdx]) ||
      (this.heap[rightIdx] < this.heap[curIdx] &&
        Math.abs(this.heap[rightIdx]) === Math.abs(this.heap[curIdx]))
    ) {
      const minIdx =
        Math.abs(this.heap[leftIdx]) > Math.abs(this.heap[rightIdx])
          ? rightIdx
          : Math.abs(this.heap[leftIdx]) === Math.abs(this.heap[rightIdx]) &&
            this.heap[leftIdx] > this.heap[rightIdx]
          ? rightIdx
          : leftIdx;
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
