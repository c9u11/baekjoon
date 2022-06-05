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
  const unit = +input[0];
  let max = 0,
    maxIndex = 0;
  for (let i = 1; i <= 6; i++) {
    const num = +input[i].split(" ")[1];
    if (max < num) {
      max = num;
      maxIndex = i;
    }
  }
  const prevIndex = maxIndex > 1 ? maxIndex - 1 : 6;
  const nextIndex = maxIndex < 7 ? maxIndex + 1 : 1;
  const prev = +input[prevIndex].split(" ")[1];
  const next = +input[nextIndex].split(" ")[1];
  console.log(prev, next, prevIndex, nextIndex);
  if (prev > next) {
    const area = max * prev;
    const minusArea =
      +input[prevIndex < 3 ? prevIndex + 4 : prevIndex - 2].split(" ")[1] *
      +input[maxIndex > 4 ? maxIndex - 4 : maxIndex + 2].split(" ")[1];
    console.log((area - minusArea) * unit);
  } else {
    const area = max * next;
    const minusArea =
      +input[maxIndex < 3 ? maxIndex + 4 : maxIndex - 2].split(" ")[1] *
      +input[nextIndex > 4 ? nextIndex - 4 : nextIndex + 2].split(" ")[1];
    console.log((area - minusArea) * unit);
  }
}
