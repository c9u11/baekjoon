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
  const [K, N] = input[0].split(" ").map(Number);
  let sum = 0;
  for (let i = 1; i <= K; i++) {
    sum += +input[i];
  }
  let min = 1,
    max = Math.floor(sum / N),
    center = min + Math.floor(max / 2);

  while (min !== center) {
    let cnt = 0;
    for (let i = 1; i <= K; i++) {
      cnt += Math.floor(+input[i] / center);
    }
    if (cnt >= N) {
      min = center;
      center = min + Math.ceil((max - min) / 2);
    } else {
      max = center - 1;
      center = min + Math.ceil((max - min) / 2);
    }
  }
  console.log(min);
}
