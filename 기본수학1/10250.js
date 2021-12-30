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
  const num = +input[0];
  for (let i = 1; i <= num; i++) {
    const H = +input[i].split(" ")[0];
    const W = +input[i].split(" ")[1];
    const N = +input[i].split(" ")[2];
    console.log(
      `${N % H === 0 ? H : N % H}${String(Math.ceil(N / H)).padStart(2, "0")}`
    );
  }
}
