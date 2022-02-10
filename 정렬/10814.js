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
  const [cnt, ...infoArray] = input;
  infoArray.sort((a, b) => {
    return +a.split(" ")[0] - +b.split(" ")[0];
  });
  console.log(infoArray.join("\n"));
}
