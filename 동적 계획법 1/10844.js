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
    const N = Number(input[0]);
    const memo = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
    let t = N - 1;
    while (t--) {
      memo.push([...Array(10)]);
    }
    for (let n = 1; n < N; n++) {
      for (let i = 0; i <= 9; i++) {
        memo[n][i] =
          ((memo[n - 1][i - 1] || 0) + (memo[n - 1][i + 1] || 0)) % 1000000000;
      }
    }
    const result = memo[N - 1].reduce((acc, curr) => {
      return (acc + curr) % 1000000000;
    }, 0);

    console.log(result);
}
