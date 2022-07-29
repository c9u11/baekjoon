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
  let map = input.map((v) => v.split(" "));
  while (N > 1) {
    const tempMap = [];
    for (let i = 0; i < N; i = i + 3) {
      tempMap[i / 3] = [];
      for (let j = 0; j < N; j = j + 3) {
        let string =
          "" +
          map[i][j] +
          map[i + 1][j] +
          map[i + 2][j] +
          map[i][j + 1] +
          map[i + 1][j + 1] +
          map[i + 2][j + 1] +
          map[i][j + 2] +
          map[i + 1][j + 2] +
          map[i + 2][j + 2];
        if (string === "111111111") string = "1";
        if (string === "-1-1-1-1-1-1-1-1-1") string = "-1";
        if (string === "000000000") string = "0";
        tempMap[i / 3].push(string);
      }
    }
    map = tempMap;
    N /= 3;
  }
  let isMinus = false;
  const cnt = [0, 0, 0];
  for (char of map[0][0]) {
    if (char === "-") isMinus = true;
    else {
      if (char === "1") {
        if (isMinus) cnt[0]++;
        else cnt[2]++;
      } else cnt[1]++;
      isMinus = false;
    }
  }
  console.log(cnt.join("\n"));
}
