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
  const [M, N] = input[0].split(" ");
  const tempArray = new Array(+N + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i <= +N; i++) {
    if (!tempArray[i]) continue;
    for (let temp = 2; temp * i <= N; temp++) {
      if (tempArray[temp * i]) tempArray[temp * i] = false;
    }
    if (+M <= i && i <= +N) console.log(i);
  }
}
