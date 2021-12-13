const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  main(line);
  rl.close();
}).on("close", function () {
  process.exit();
});

function main(line) {
  var num1 = line.split(" ")[0] * 1;
  var num2 = line.split(" ")[1] * 1;

  console.log(num1 + num2);
  console.log(num1 - num2);
  console.log(num1 * num2);
  console.log(Math.floor(num1 / num2));
  console.log(num1 % num2);
}
