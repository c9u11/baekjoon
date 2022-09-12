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
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getLen() {
    return this.heap.length - 1;
  }

  insert(val) {
    this.heap.push(val);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.heap[curIdx] < this.heap[parIdx]) {
      [this.heap[curIdx], this.heap[parIdx]] = [
        this.heap[parIdx],
        this.heap[curIdx],
      ];
      [curIdx, parIdx] = [parIdx, Math.floor(parIdx / 2)];
    }
  }

  pop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;
    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx])
        [this.heap[leftIdx], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[leftIdx],
        ];
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
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
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  getLen() {
    return this.heap.length - 1;
  }

  insert(val) {
    this.heap.push(val);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.heap[curIdx] > this.heap[parIdx]) {
      [this.heap[curIdx], this.heap[parIdx]] = [
        this.heap[parIdx],
        this.heap[curIdx],
      ];
      [curIdx, parIdx] = [parIdx, Math.floor(parIdx / 2)];
    }
  }

  pop() {
    const max = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;
    if (!this.heap[leftIdx]) return max;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[curIdx])
        [this.heap[leftIdx], this.heap[curIdx]] = [
          this.heap[curIdx],
          this.heap[leftIdx],
        ];
      return max;
    }

    while (
      this.heap[leftIdx] > this.heap[curIdx] ||
      this.heap[rightIdx] > this.heap[curIdx]
    ) {
      const maxIdx =
        this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
      [this.heap[maxIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[maxIdx],
      ];
      curIdx = maxIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return max;
  }
}
class MidHeap {
  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }

  getMid() {
    if (this.minHeap.getLen() > this.maxHeap.getLen())
      return this.minHeap.heap[1];
    else return this.maxHeap.heap[1];
  }

  insert(val) {
    const mid = this.getMid();
    if (mid === undefined) this.maxHeap.insert(val);
    else {
      if (mid < val) {
        if (this.minHeap.getLen() - this.maxHeap.getLen() > 0)
          this.maxHeap.insert(this.minHeap.pop());
        this.minHeap.insert(val);
      } else {
        if (this.maxHeap.getLen() - this.minHeap.getLen() > 0)
          this.minHeap.insert(this.maxHeap.pop());
        this.maxHeap.insert(val);
      }
    }
  }
}

function main(input) {
  const N = +input[0];
  const midHeap = new MidHeap();
  const result = [];
  for (let i = 1; i <= N; i++) {
    midHeap.insert(+input[i]);
    result.push(midHeap.getMid());
  }
  console.log(result.join("\n"));
}
