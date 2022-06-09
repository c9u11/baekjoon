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
  const xArray = [];
  const yArray = [];
  for (let i = 0; i < 3; i++) {
    const [x, y] = input[i].split(" ").map((v) => +v);
    if (xArray.indexOf(x) === -1) xArray.push(x);
    else xArray.splice(xArray.indexOf(x), 1);
    if (yArray.indexOf(y) === -1) yArray.push(y);
    else yArray.splice(yArray.indexOf(y), 1);
  }
  console.log(`${xArray[0]} ${yArray[0]}`);
}
