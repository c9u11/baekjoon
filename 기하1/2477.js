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
  const unit = +input.shift();
  const numArray = input.map((v) => +v.split(" ")[1]);
  let max = 0,
    maxIndex,
    fullArea,
    minusArea,
    smallIndex,
    bigIndex;
  numArray.forEach((v, i) => {
    if (max < v) {
      max = v;
      maxIndex = i;
    }
  });
  const prevIndex = maxIndex === 0 ? 5 : maxIndex - 1;
  const prev = numArray[prevIndex];
  const nextIndex = maxIndex === 5 ? 0 : maxIndex + 1;
  const next = numArray[nextIndex];
  if (prev > next) {
    fullArea = max * prev;
    smallIndex = prevIndex;
    bigIndex = maxIndex;
  } else {
    fullArea = max * next;
    smallIndex = maxIndex;
    bigIndex = nextIndex;
  }

  minusArea =
    numArray[smallIndex < 2 ? smallIndex + 4 : smallIndex - 2] *
    numArray[bigIndex > 3 ? bigIndex - 4 : bigIndex + 2];
  console.log((fullArea - minusArea) * unit);
}
