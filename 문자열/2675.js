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
  for (let i = 1; i <= +input[0]; i++) {
    const cnt = input[i].split(" ")[0];
    const string = input[i].split(" ")[1];
    let line = "";
    for (let j = 0; j < string.length; j++) {
      for (let k = 0; k < cnt; k++) {
        line += string[j];
      }
    }
    console.log(line);
  }
}
