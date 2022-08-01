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
  const queue = [];
  const result = [];
  let idx = 0;
  for (let i = 1; i <= N; i++) {
    const [cmd, val] = input[i].split(" ");
    switch (cmd) {
      case "push":
        queue.push(val);
        break;
      case "pop":
        result.push(queue[idx] ?? -1);
        if (queue.length - idx > 0) idx++;
        break;
      case "size":
        result.push(queue.length - idx);
        break;
      case "empty":
        result.push(queue.length - idx ? 0 : 1);
        break;
      case "front":
        result.push(queue[idx] ?? -1);
        break;
      case "back":
        result.push(queue.length - idx - 1 < 0 ? -1 : queue.at(-1));
        break;
    }
  }
  console.log(result.join("\n"));
}
