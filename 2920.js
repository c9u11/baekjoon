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
  switch (input[0]) {
    case "1 2 3 4 5 6 7 8":
      console.log("ascending");
      break;
    case "8 7 6 5 4 3 2 1":
      console.log("descending");
      break;
    default:
      console.log("mixed");
  }
}
