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
  const num = +input[0] * +input[1] * +input[2] + "";
  const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let output = "";
  for (let i = 0; i < num.length; i++) {
    count[+num[i]]++;
  }
  count.forEach((v) => (output += v + "\n"));
  console.log(output);
}
