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
  const N = +input[0];
  const result = [];
  const stack = [];
  const nums = input[1].split(" ").map(Number);
  for (let i = 0; i < N; i++) {
    if (stack.length && stack.at(-1)[1] < nums[i]) {
      const len = stack.length;
      for (let j = 0; j < len; j++) {
        const pop = stack.pop();
        if (pop[1] < nums[i]) result[pop[0]] = nums[i];
        else {
          stack.push(pop);
          break;
        }
      }
    }
    stack.push([i, nums[i]]);
  }
  stack.forEach((v) => (result[v[0]] = "-1"));
  console.log(result.join(" "));
}
