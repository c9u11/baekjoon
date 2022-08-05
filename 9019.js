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
  const result = [];
  for (let i = 1; i <= +input[0]; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    const dslr = DSLR(A);
    let visited = [];
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
          tempQueue.push(d);
        }
        if (!visited[s]) {
          visited[s] = visited[queue[i]] + "S";
          tempQueue.push(s);
        }
        if (!visited[l]) {
          visited[l] = visited[queue[i]] + "L";
          tempQueue.push(l);
        }
        if (!visited[r]) {
          visited[r] = visited[queue[i]] + "R";
          tempQueue.push(r);
        }
      }
      [queue, tempQueue] = [tempQueue, []];
    }
    result.push(visited[B]);
  }
  console.log(result.join("\n"));
}

function DSLR(num) {
  const D = (num * 2) % 10000;
  const S = !num ? 9999 : +num - 1;
  const one = Math.floor((num / 1000) % 10);
  const two = Math.floor((num / 100) % 10);
  const three = Math.floor((num / 10) % 10);
  const four = Math.floor((num / 1) % 10);
  const L = two * 1000 + three * 100 + four * 10 + one;
  const R = four * 1000 + one * 100 + two * 10 + three;
  return [D, S, L, R];
}
