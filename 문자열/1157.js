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
  const cntMap = {};
  const many = ["?", 0];
  const string = input[0];
  for (let i = 0; i < string.length; i++) {
    const key = string[i].toUpperCase();
    cntMap[key] = key in cntMap ? cntMap[key] + 1 : 1;
    if (many[1] === cntMap[key]) many[0] = "?";
    else if (many[1] < cntMap[key]) {
      many[0] = key;
      many[1] = cntMap[key];
    }
  }
  console.log(many[0]);
}
