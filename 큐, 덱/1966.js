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
  const result = [];
  for (let i = 0; i < +input[0]; i++) {
    const [N, M] = input[i * 2 + 1].split(" ").map(Number);
    const queue = input[i * 2 + 2].split(" ").map(Number);
    let index = M;
    let cnt = 0;
    while (true) {
      const max = Math.max(...queue);
      const num = queue.shift();
      index--;
      if (max === num) {
        cnt++;
        if (index === -1) {
          result.push(cnt);
          break;
        }
      } else {
        queue.push(num);
        if (index === -1) {
          index = queue.length - 1;
        }
      }
    }
  }
  console.log(result.join("\n"));
}
