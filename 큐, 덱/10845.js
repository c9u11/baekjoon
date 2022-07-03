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
  const stack = [];
  const result = [];
  for (let i = 1; i <= +input[0]; i++) {
    const [oper, num] = input[i].split(" ");
    switch (oper) {
      case "push":
        stack.push(+num);
        break;
      case "pop":
        if (stack.length) result.push(stack.shift());
        else result.push(-1);
        break;
      case "size":
        result.push(stack.length);
        break;
      case "empty":
        result.push(stack.length ? 0 : 1);
        break;
      case "front":
        if (stack.length) result.push(stack[0]);
        else result.push(-1);
        break;
      case "back":
        if (stack.length) result.push(stack[stack.length - 1]);
        else result.push(-1);
        break;
    }
  }
  console.log(result.join("\n"));
}
