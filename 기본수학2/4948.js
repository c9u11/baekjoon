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
  const numArray = input.map((v) => +v);
  const maxNum = Math.max(...numArray);
  const cntArray = new Array(numArray.length - 1).fill(0);
  const tempArray = new Array(maxNum * 2 + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i <= maxNum * 2; i++) {
    if (!tempArray[i]) continue;
    for (let temp = 2; temp * i <= maxNum * 2; temp++) {
      if (tempArray[temp * i]) tempArray[temp * i] = false;
    }
    // console.log(i);
    for (let j = 0; j < numArray.length - 1; j++) {
      if (numArray[j] < i && i <= numArray[j] * 2) cntArray[j]++;
    }
  }
  console.log(cntArray.join("\n"));
}
