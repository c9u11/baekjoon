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
  const [cnt, num] = input[0].split(" ").map((v) => +v);
  const numArray = input[1].split(" ").map((v) => +v);
  let possibleNum = 0;
  for (let i = 0; i < cnt; i++) {
    if (numArray[i] >= num) continue;
    for (let j = i + 1; j < cnt; j++) {
      if (numArray[i] + numArray[j] >= num) continue;
      for (let k = j + 1; k < cnt; k++) {
        const sum = numArray[i] + numArray[j] + numArray[k];
        if (possibleNum < sum && sum <= num) possibleNum = sum;
      }
    }
  }
  console.log(possibleNum);
}
