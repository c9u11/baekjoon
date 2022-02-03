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
  const outputArray = new Array(10);
  for (let i = 0; i < input[0].length; i++) {
    const value = +input[0][i];
    outputArray[value] = outputArray[value] ? outputArray[value] + 1 : 1;
  }
  let output = "";
  for (let i = 9; i >= 0; i--) {
    for (let j = 0; j < outputArray[i]; j++) {
      output += `${i}`;
    }
  }
  console.log(output);
}
