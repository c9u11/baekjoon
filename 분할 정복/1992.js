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
  const N = +input.shift();
  const map = input.map((v) => v.split(""));
  const result = quadTree(map, N);
  console.log(result.join(""));
}

function quadTree(curMap, unit) {
  const result = [];
  if (unit < 2) return curMap;
  else {
    for (let i = 0; i < unit; i = i + 2) {
      result[i / 2] = [];
      for (let j = 0; j < unit; j = j + 2) {
        result[i / 2][j / 2] =
          "(" +
          curMap[i][j] +
          curMap[i][j + 1] +
          curMap[i + 1][j] +
          curMap[i + 1][j + 1] +
          ")";
        if (result[i / 2][j / 2] === "(0000)") result[i / 2][j / 2] = "0";
        if (result[i / 2][j / 2] === "(1111)") result[i / 2][j / 2] = "1";
      }
    }
    return quadTree(result, unit / 2);
  }
}
