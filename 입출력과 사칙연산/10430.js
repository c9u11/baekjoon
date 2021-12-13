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
  var A = line.split(" ")[0] * 1;
  var B = line.split(" ")[1] * 1;
  var C = line.split(" ")[2] * 1;

  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}
