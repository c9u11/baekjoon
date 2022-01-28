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
  let num = 666,
    cnt = 0;
  while (cnt !== +input[0]) {
    if (String(num).indexOf("666") !== -1) cnt++;
    num++;
  }
  console.log(num - 1);
}
