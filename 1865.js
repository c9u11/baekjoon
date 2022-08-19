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
  let idx = 1;
  for (let TC = 1; TC <= +input[0]; TC++) {
    const [N, M, W] = input[idx++].split(" ").map(Number);
    const connectList = [];
    for (let j = 0; j < M + W; idx++, j++) {
      const [start, end, time] = input[idx].split(" ").map(Number);
      connectList.push([start, end, j < M ? +time : -time]);
      if (j < M) connectList.push([end, start, time]);
    }
    const distance = new Array(N + 1).fill(10001);
    distance[1] = 0;

    for (let i = 0; i < N - 1; i++) {
      for (let [start, end, time] of connectList) {
        if (distance[start] + time < distance[end])
          distance[end] = distance[start] + time;
      }
    }
    let output = "NO";
    for (let [start, end, time] of connectList) {
      if (distance[start] + time < distance[end]) {
        output = "YES";
        break;
      }
    }
    result.push(output);
  }
  console.log(result.join("\n"));
}
