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
  input.forEach((line) => {
    const [num1, num2] = line.split(" ").map((v) => +v);
    if (!num1 && !num2) return;
    if (num2 % num1 === 0) console.log("factor");
    else if (num1 % num2 === 0) console.log("multiple");
    else console.log("neither");
  });
}
