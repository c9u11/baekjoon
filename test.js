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
  const result = [];
  let cnt = 0;
  let heap;
  input.forEach((v, i) => {
    if (!i) return;
    if (!cnt) {
      heap = new Heap();
      cnt = +v;
      return;
    }
    cnt--;
    const [oper, val] = v.split(" ");
    if (oper === "I") heap.push(+val);
    else heap.pop(+val);
    if (!cnt) {
      if (heap) result.push(heap.getMinMax());
    }
  });
  console.log(result.join("\n"));
}

class Heap {
  constructor() {
    this.maxHeap = [null];
    this.minHeap = [null];
    this.exist = [];
  }
  getMinMax() {
    let min, max;
    while (min === undefined) {
      if (this.minHeap.length !== 1 && !this.exist[this.minHeap[1]])
        this.minPop();
      else min = this.minHeap[1] ?? 0;
    }
    while (max === undefined) {
      if (this.maxHeap.length !== 1 && !this.exist[this.maxHeap[1]])
        this.maxPop();
      else max = this.maxHeap[1] ?? 0;
    }
    return this.minHeap.length === 1 && this.maxHeap.length === 1
      ? "EMPTY"
      : `${max} ${min}`;
  }
  push(val) {
    this.maxPush(val);
    this.minPush(val);
    this.exist[val] = this.exist[val] ? this.exist[val] + 1 : 1;
  }
  pop(val) {
    let output = undefined;
    while (output === undefined) {
      if (val === 1) {
        const temp = this.maxPop();
        if (temp === 0) output = 0;
        else if (this.exist[temp]) {
          this.exist[temp]--;
          output = temp;
        }
      } else if (val === -1) {
        const temp = this.minPop();
        if (temp === 0) output = 0;
        else if (this.exist[temp]) {
          this.exist[temp]--;
          output = temp;
        }
      }
    }
    return output;
  }
  minPush(val) {
    this.minHeap.push(val);
    let curIdx = this.minHeap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.minHeap[parIdx] > this.minHeap[curIdx]) {
      [this.minHeap[parIdx], this.minHeap[curIdx]] = [
        this.minHeap[curIdx],
        this.minHeap[parIdx],
      ];
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }
  minPop() {
    const min = this.minHeap[1] ?? 0;
    if (this.minHeap.length <= 2) this.minHeap = [null];
    else this.minHeap[1] = this.minHeap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.minHeap[leftIdx]) return min;
    if (!this.minHeap[rightIdx]) {
      if (this.minHeap[leftIdx] < this.minHeap[curIdx]) {
        [this.minHeap[leftIdx], this.minHeap[curIdx]] = [
          this.minHeap[curIdx],
          this.minHeap[leftIdx],
        ];
      }
      return min;
    }

    while (
      this.minHeap[leftIdx] < this.minHeap[curIdx] ||
      this.minHeap[rightIdx] < this.minHeap[curIdx]
    ) {
      const minIdx =
        this.minHeap[leftIdx] > this.minHeap[rightIdx] ? rightIdx : leftIdx;
      [this.minHeap[minIdx], this.minHeap[curIdx]] = [
        this.minHeap[curIdx],
        this.minHeap[minIdx],
      ];
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return min;
  }
  maxPush(val) {
    this.maxHeap.push(val);
    let curIdx = this.maxHeap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    while (curIdx > 1 && this.maxHeap[parIdx] < this.maxHeap[curIdx]) {
      [this.maxHeap[parIdx], this.maxHeap[curIdx]] = [
        this.maxHeap[curIdx],
        this.maxHeap[parIdx],
      ];
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }
  maxPop() {
    const min = this.maxHeap[1] ?? 0;
    if (this.maxHeap.length <= 2) this.maxHeap = [null];
    else this.maxHeap[1] = this.maxHeap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.maxHeap[leftIdx]) return min;
    if (!this.maxHeap[rightIdx]) {
      if (this.maxHeap[leftIdx] > this.maxHeap[curIdx]) {
        [this.maxHeap[leftIdx], this.maxHeap[curIdx]] = [
          this.maxHeap[curIdx],
          this.maxHeap[leftIdx],
        ];
      }
      return min;
    }

    while (
      this.maxHeap[leftIdx] > this.maxHeap[curIdx] ||
      this.maxHeap[rightIdx] > this.maxHeap[curIdx]
    ) {
      const minIdx =
        this.maxHeap[leftIdx] < this.maxHeap[rightIdx] ? rightIdx : leftIdx;
      [this.maxHeap[minIdx], this.maxHeap[curIdx]] = [
        this.maxHeap[curIdx],
        this.maxHeap[minIdx],
      ];
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return min;
  }
}
