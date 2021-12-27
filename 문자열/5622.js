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
  const secArray = [
    3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10,
    10, 10,
  ];
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const string = input[0].toUpperCase();
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    total += secArray[alpha.indexOf(string[i])];
  }
  console.log(total);
}
