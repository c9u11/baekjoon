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
  let N = +input.shift();
  let preMap = input.map((v) => v.split(" "));
  const result = [0, 0];
  while (N > 1) {
    const curMap = [];
    for (let i = 0; i < N; i = i + 2) {
      curMap[i / 2] = [];
      for (let j = 0; j < N; j = j + 2) {
        curMap[i / 2][j / 2] =
          "" +
          preMap[i][j] +
          preMap[i][j + 1] +
          preMap[i + 1][j] +
          preMap[i + 1][j + 1];
        if (curMap[i / 2][j / 2] === "1111") curMap[i / 2][j / 2] = "1";
        if (curMap[i / 2][j / 2] === "0000") curMap[i / 2][j / 2] = "0";
      }
    }
    N /= 2;
    preMap = curMap;
  }
  for (let i = 0; i < preMap[0][0].length; i++) {
    result[+preMap[0][0][i]]++;
  }
  console.log(result.join("\n"));
}
