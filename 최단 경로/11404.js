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
  const M = +input[1];
  const connectedMap = new Array(N).fill().map(v => new Array(N).fill(Infinity));
  for (let i = 2; i < M + 2; i++) {
    const [s, e, c] = input[i].split(" ");
    connectedMap[s - 1][e - 1] = Math.min(connectedMap[s - 1][e - 1], +c);
  }
  for (let i = 0; i < N; i++) {
    connectedMap[i][i] = 0;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j === i) continue;
      for (let k = 0; k < N; k++) {
        if (k === i || k === j) continue;
        connectedMap[j][k] = Math.min(connectedMap[j][k], connectedMap[j][i] + connectedMap[i][k])
      }
    }
  }
  console.log(connectedMap.map(v => v.map(v => v === Infinity ? 0 : v).join(" ")).join("\n"))
}
