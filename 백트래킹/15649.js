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
  const [N, M] = input[0].split(" ").map((v) => +v);
  const output = [];
  returnFunc(N, M, []);
  console.log(output.join("\n"));
  function returnFunc(N, M, exceptionNum) {
    for (let i = 1; i <= N; i++) {
      if (exceptionNum.indexOf(i) === -1) {
        if (M === 1) {
          output.push([...exceptionNum, i].join(" "));
        } else returnFunc(N, M - 1, [...exceptionNum, i]);
      }
    }
  }
}
