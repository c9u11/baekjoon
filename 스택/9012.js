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
  const result = [];
  for (let i = 1; i <= +input[0]; i++) {
    result.push(isVPS(input[i]) ? "YES" : "NO");
  }
  console.log(result.join("\n"));

  function isVPS(string) {
    let cnt = 0;
    for (let i = 0; i < string.length; i++) {
      if (cnt < 0) break;
      if (string[i] === "(") cnt++;
      else cnt--;
    }
    return cnt === 0;
  }
}
