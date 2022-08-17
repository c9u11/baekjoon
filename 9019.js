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
  const result = new Array(+input[0]);
  for (let i = 1; i <= +input[0]; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    const dslr = DSLR(A);
    let visited = new Array(10000);
    visited[dslr[0]] = "D";
    visited[dslr[1]] = "S";
    visited[dslr[2]] = "L";
    visited[dslr[3]] = "R";
    let [queue, tempQueue] = [dslr, []];
    while (queue.length && !visited[B]) {
      for (let i = 0; i < queue.length; i++) {
        const [d, s, l, r] = DSLR(queue[i]);
        if (!visited[d]) {
          visited[d] = visited[queue[i]] + "D";
          tempQueue[tempQueue.length] = d;
        }
        if (!visited[s]) {
          visited[s] = visited[queue[i]] + "S";
          tempQueue[tempQueue.length] = s;
        }
        if (!visited[l]) {
          visited[l] = visited[queue[i]] + "L";
          tempQueue[tempQueue.length] = l;
        }
        if (!visited[r]) {
          visited[r] = visited[queue[i]] + "R";
          tempQueue[tempQueue.length] = r;
        }
      }
      [queue, tempQueue] = [tempQueue, []];
    }
    result[i - 1] = visited[B];
  }
  console.log(result.join("\n"));
}

function DSLR(num) {
  const D = (num * 2) % 10000;
  const S = !num ? 9999 : +num - 1;
  const L = (num % 1000) * 10 + Math.floor(num / 1000);
  const R = (num % 10) * 1000 + Math.floor(num / 10);
  return [D, S, L, R];
}
