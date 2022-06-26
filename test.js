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
    let cnt = 0;
    const dressNum = +input[index];
    const dressMap = {};
    for (let j = index + 1; j < index + 1 + dressNum; j++) {
      const type = input[j].split(" ")[1];
      if (!dressMap[type]) dressMap[type] = 1;
      else dressMap[type]++;
    }
    const typeArray = Object.keys(dressMap);
    for (let j = 0; j < typeArray.length; j++) {
      for (let k = 0; k < typeArray.length - j; k++) {
        let tempCnt = 1;
        for (let l = 0; l < j + 1; l++) {
          tempCnt *= dressMap[typeArray[k + l]];
        }
        cnt += tempCnt;
      }
    }
    index += dressNum + 1;
    result.push(cnt);
  }
  console.log(result.join("\n"));
}
