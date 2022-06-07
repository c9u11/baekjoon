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
  const N = input[0].split(" ")[0] * 1;
  const X = input[0].split(" ")[1] * 1;
  const Array = input[1].split(" ");
  let answer = "";
  for (let i = 0; i < Array.length; i++) {
    answer += X > Array[i] ? `${Array[i]} ` : "";
  }
  console.log(answer);
}
