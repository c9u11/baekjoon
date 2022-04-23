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
  const nums = input[1].split(" ").map(Number);
  for (let i = 1; i < +input[0]; i++) {
    const unit = returnNum1(nums[0], nums[i]);
    console.log(`${nums[0] / unit}/${nums[i] / unit}`);
  }

  function returnNum1(a, b) {
    if (!b) return a;
    else return returnNum1(b, a % b);
  }
}
