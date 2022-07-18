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
  let cnt = 1;
  for (let i = 0; i < N; i++) {
    const [M, N, K] = input[cnt++].split(" ").map(Number);
    const map = [];
    let output = 0;

    for (let j = 0; j < N; j++) {
      map[j] = [];
      for (let k = 0; k < M; k++) {
        map[j][k] = false;
      }
    }

    const stack = [];
    for (let j = cnt; j < cnt + K; j++) {
      const [x, y] = input[j].split(" ").map(Number);
      stack.push([x, y]);
      map[y][x] = true;
    }

    while (stack.length !== 0) {
      const [x, y] = stack.pop();
      if (map[y][x]) {
        clear(x, y);
        output++;
      }
    }
    cnt += K;
    result.push(output);
    function clear(x, y) {
      map[y][x] = false;
      if (x < M - 1 && map[y][x + 1]) clear(x + 1, y);
      if (x > 0 && map[y][x - 1]) clear(x - 1, y);
      if (y < N - 1 && map[y + 1][x]) clear(x, y + 1);
      if (y > 0 && map[y - 1][x]) clear(x, y - 1);
    }
  }
  console.log(result.join("\n"));
}
