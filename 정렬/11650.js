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
    if (aX === bX) {
      return aY - bY;
    } else {
      return aX - bX;
    }
  });
  console.log(numArray.join("\n"));
}
