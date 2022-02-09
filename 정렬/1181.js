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
  const [cnt, ...stringArray] = input;
  const uniqueArray = [...new Set(stringArray)];
  uniqueArray.sort();
  uniqueArray.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(uniqueArray.join("\n"));
}
