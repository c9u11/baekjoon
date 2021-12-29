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
  const num = +input[0];
  for (let i = 1; i <= num; i++) {
    const status = [];
    const floor = +input[i * 2 - 1];
    const ho = +input[i * 2];
    for (let i = 0; i < ho; i++) status.push(i + 1);
    for (let i = 0; i < floor; i++) {
      for (let j = 0; j < ho; j++) {
        if (j !== 0) status[j] = status[j - 1] + status[j];
      }
    }
    console.log(status[status.length - 1]);
  }
}
