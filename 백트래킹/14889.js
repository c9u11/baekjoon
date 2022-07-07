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
  const N = +input.shift();
  const numMap = input.map((v) => v.split(" ").map(Number));
  const check = new Array(N).fill(false);
  let result = Infinity;
  dfs(0, 0);
  console.log(result);
  function dfs(cnt, idx) {
    if (cnt === N / 2) {
      const linkTeam = [];
      const startTeam = [];
      let linkPower = 0,
        startPower = 0;

      check.forEach((v, i) => {
        if (v) linkTeam.push(i);
        else startTeam.push(i);
      });

      for (let i = 0; i < N / 2; i++) {
        for (let j = i + 1; j < N / 2; j++) {
          linkPower +=
            numMap[linkTeam[i]][linkTeam[j]] + numMap[linkTeam[j]][linkTeam[i]];
          startPower +=
            numMap[startTeam[i]][startTeam[j]] +
            numMap[startTeam[j]][startTeam[i]];
        }
      }

      result = Math.min(result, Math.abs(linkPower - startPower));

      return;
    } else {
      for (let i = idx; i < N; i++) {
        check[i] = true;
        dfs(cnt + 1, i + 1);
        check[i] = false;
      }
    }
  }
}
