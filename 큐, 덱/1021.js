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
  const [N, M] = input[0].split(" ").map(Number);
  const outList = input[1].split(" ").map(Number);
  let queue = new Array(N).fill(true).map((v, i) => i + 1);
  let cnt = 0;
  for (let val of outList) {
    const idx = queue.indexOf(val);
    while (queue[0] !== val) {
      if (idx < queue.length / 2) queue.push(queue.shift());
      else queue = [queue.pop(), ...queue];
      cnt++;
    }
    queue.shift();
  }
  console.log(cnt);
}
