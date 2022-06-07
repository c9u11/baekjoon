const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  main(input);
  process.exit();
});

function main(input) {
  const cnt = input[0] * 1;
  let answer = "";
  for (let i = 0; i < cnt; i++) {
    const A = input[i + 1].split(" ")[0] * 1;
    const B = input[i + 1].split(" ")[1] * 1;
    answer += `Case #${i + 1}: ${A} + ${B} = ${A + B}\n`;
  }
  console.log(answer);
}
