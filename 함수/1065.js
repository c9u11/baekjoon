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
  let han = 0;
  const num = input[0] * 1;
  for (let i = 0; i <= num; i++) {
    han = ishan(i) ? han + 1 : han + 0;
  }
  console.log(han);
}

function ishan(i) {
  if (0 < i && i < 100) return true;
  if (1000 <= i || i == 0) return false;
  const string = String(i);
  if (+string[0] - +string[1] == +string[1] - +string[2]) return true;
  return false;
}
