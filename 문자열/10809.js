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
  const string = input[0];
  const ABC = `abcdefghijklmnopqrstuvwxyz`;
  let output = "";
  for (let i = 0; i < ABC.length; i++) {
    output += `${string.indexOf(ABC[i])} `;
  }
  console.log(output);
}
