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
  const [W, H, X, Y, P] = input[0].split(" ").map(Number);
  let result = 0;
  for (let i = 1; i <= P; i++) {
    const [pX, pY] = input[i].split(" ").map(Number);
    if (isIn(pX, pY)) result++;
  }
  console.log(result);

  function isIn(pX, pY) {
    if (Y <= pY && pY <= Y + H) {
      if (X <= pX && pX <= X + W) return true;
      else {
        const xLen = Math.abs((X > pX ? X : X + W) - pX);
        const yLen = Math.abs(Y + H / 2 - pY);
        if (H / 2 >= Math.sqrt(xLen * xLen + yLen * yLen)) return true;
        else return false;
      }
    }
  }
}
