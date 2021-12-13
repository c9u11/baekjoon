const { mainModule } = require("process");
var readline = require("readline");
var r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r.on("line", function (line) {
  main(line);
});
r.on("close", function () {
  process.exit();
});

function main(input) {
  const A = input.split(" ")[0] * 1;
  const B = input.split(" ")[1] * 1;
  if (!(A || B)) r.close();
  console.log(A + B);
}
