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
  const [N, K] = input[0].split(" ").map(Number);
  let max = N;
  let cnt = 0;
  let goal = K;
  for (let i = 1; i <= N; i++) {
    if (K < +input[i]) {
      max = i - 1;
      break;
    }
  }
  for (let i = max; i > 0; i--) {
    if (goal === 0) break;
    cnt += Math.floor(goal / +input[i]);
    goal %= +input[i];
  }
  console.log(cnt);
}
