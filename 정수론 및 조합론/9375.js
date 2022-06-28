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
  let index = 1;
  const result = [];
  const testCaseNum = +input[0];
  for (let i = 1; i <= testCaseNum; i++) {
    let cnt = 1;
    const dressNum = +input[index];
    const dressMap = {};
    for (let j = index + 1; j < index + 1 + dressNum; j++) {
      const type = input[j].split(" ")[1];
      if (!dressMap[type]) dressMap[type] = 1;
      else dressMap[type]++;
    }
    Object.keys(dressMap).forEach((v) => {
      cnt *= dressMap[v] + 1;
    });
    index += dressNum + 1;
    result.push(cnt - 1);
  }
  console.log(result.join("\n"));
}
