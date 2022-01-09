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
  numArray.splice(0, 1);
  const maxNum = Math.max(...numArray);
  const cntArray = new Array(numArray.length - 1).fill(0);
  const tempArray = new Array(maxNum + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i <= maxNum; i++) {
    if (!tempArray[i]) continue;
    for (let temp = 2; temp * i <= maxNum; temp++) {
      if (tempArray[temp * i]) tempArray[temp * i] = false;
    }
  }
  numArray.forEach((v) => {
    let output = "";
    for (let i = 2; i <= v / 2; i++) {
      if (tempArray[i] && tempArray[v - i]) {
        output = `${i} ${v - i}`;
      }
    }
    console.log(output);
  });
}
