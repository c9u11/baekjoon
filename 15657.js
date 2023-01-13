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
  const [N, M] = input[0].split(" ").map(Number);
  const nums = input[1].split(" ").map(Number).sort((a, b) => b - a);
  const queue = [...nums.map(v => [v])];
  const result = [];
  while (queue.length) {
    const array = queue.pop();
    if (array.length >= M) {
      result.push(array.join(" "));
    }
    else {
      for (let j = 0; j <= nums.indexOf(array[array.length - 1]); j++) {
        queue.push([...array, nums[j]]);
      }
    }
  }
  console.log(result.join("\n"));
}
