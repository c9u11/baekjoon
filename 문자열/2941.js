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
  let string = input[0];
  const secArray = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  secArray.forEach((v) => {
    string = string.split(v).join("!");
  });
  console.log(string.length);
}
