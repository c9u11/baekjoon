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
  const set = [1, 1, 2, 2, 2, 8];
  console.log(
    input[0]
      .split(" ")
      .map((v, i) => set[i] - +v)
      .join(" ")
  );
}
