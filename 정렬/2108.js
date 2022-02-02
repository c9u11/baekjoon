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
  const [cnt, ...numArray] = input.map((v) => +v);
  let sum = 0,
    min = 4000,
    max = -4000,
    cntArray = new Array(8001).fill(0);

  numArray.sort((a, b) => a - b);
  numArray.forEach((num) => {
    sum += num;
    cntArray[num + 4000]++;
  });

  const A = Math.round(sum / cnt);
  const B = numArray[Math.floor(numArray.length / 2)];
  const maxCnt = Math.max(...cntArray);
  let C = cntArray.indexOf(maxCnt);
  if (cntArray.indexOf(maxCnt, C + 1) !== -1) {
    C = cntArray.indexOf(maxCnt, C + 1);
  }

  const D = Math.max(...numArray) - Math.min(...numArray);
  console.log(`${A}\n${B}\n${C - 4000}\n${D}\n`);
}
