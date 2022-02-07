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
  const [cnt, ...numArray] = input;
  numArray.sort((a, b) => {
    const [aX, aY] = a.split(" ").map((v) => +v);
    const [bX, bY] = b.split(" ").map((v) => +v);
    if (aY === bY) {
      return aX - bX;
    } else {
      return aY - bY;
    }
  });
  console.log(numArray.join("\n"));
}
