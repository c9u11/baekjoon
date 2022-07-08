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
  const board = [];
  for (let i = 0; i < 21; i++) {
    board[i] = [];
    for (let j = 0; j < 21; j++) {
      board[i][j] = [];
      for (let k = 0; k < 21; k++) {
        board[i][j][k] = 0;
      }
    }
  }
  let i = 0;
  while (true) {
    const [a, b, c] = input[i].split(" ").map(Number);
    if (a === -1 && b === -1 && c === -1) break;
    console.log(`w(${a}, ${b}, ${c}) = ` + w(a, b, c));
    i++;
  }
  function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
    if (board[a][b][c]) return board[a][b][c];
    if (a < b && b < c)
      return (board[a][b][c] =
        w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c));
    else
      return (board[a][b][c] =
        w(a - 1, b, c) +
        w(a - 1, b - 1, c) +
        w(a - 1, b, c - 1) -
        w(a - 1, b - 1, c - 1));
  }
}
