var readline = require("readline");
const { resourceLimits } = require("worker_threads");
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
  let cnt = 0;
  const result = [];
  while (true) {
    const string = input[cnt++];
    if (string === "0") break;
    let tempBool = true;
    for (let i = 0; i < parseInt(string.length / 2); i++) {
      if (string[i] !== string[string.length - 1 - i]) {
        tempBool = false;
        break;
      }
    }
    if (tempBool) result.push("yes");
    else result.push("no");
  }
  console.log(result.join("\n"));
}
