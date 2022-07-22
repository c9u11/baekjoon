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
  const connectNum = +input[1];
  const visited = [true, ...new Array(N - 1).fill(false)];
  const map = [...visited].map((v) => []);
  const stack = [];
  let cnt = 0;
  for (let i = 0; i < connectNum; i++) {
    const [m, s] = input[i + 2].split(" ").map((v) => Number(v) - 1);
    map[m].push(s);
    map[s].push(m);
  }
  stack.push(...map[0]);
  while (stack.length > 0) {
    const num = stack.pop();
    if (visited[num]) continue;
    stack.push(...map[num]);
    visited[num] = true;
    cnt++;
  }
  console.log(cnt);
}
