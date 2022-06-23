var readline = require("readline");
const { resourceLimits } = require("worker_threads");
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
  const loopCnt = +input.shift();
  for (let i = 0; i < loopCnt; i++) {
    let cnt = 0;
    const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
    const circleCnt = +input.shift();
    for (let j = 0; j < circleCnt; j++) {
      const [cx, cy, r] = input.shift().split(" ").map(Number);
      const A = Math.abs(cx - x1);
      const B = Math.abs(cy - y1);
      const C = Math.abs(cx - x2);
      const D = Math.abs(cy - y2);
      if ((A * A + B * B < r * r) ^ (C * C + D * D < r * r)) cnt++;
    }
    console.log(cnt);
  }
}
