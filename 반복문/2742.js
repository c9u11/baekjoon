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
  for (let i = cnt; i > 0; i--) {
    answer += i + "\n";
  }
  console.log(answer);
}
