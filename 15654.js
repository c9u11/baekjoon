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
  let [N, M] = input[0].split(" ").map(Number);
  const nums = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(returnFunc(M).join("\n"));

  function returnFunc(n, ignore = {}) {
    const output = [];
    nums.forEach((v) => {
      if (ignore[v]) return;
      if (n === 1) output.push(v);
      else {
        ignore[v] = true;
        output.push(...returnFunc(n - 1, ignore).map((val) => `${v} ${val}`));
        ignore[v] = false;
      }
    });
    return output;
  }
}
