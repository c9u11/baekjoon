const { maxHeaderSize } = require("http");
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
  const [N, r, c] = input[0].split(" ").map(Number);
  const width = Math.pow(2, N);
  let cnt = Math.pow(width, 2);
  let isHorizen = true;
  let low = [0, 0, 0],
    high = [cnt - 1, width - 1, width - 1],
    mid = [
      Math.round(high[0] / 2),
      Math.round(high[1] / 2),
      Math.round(high[2] / 2),
    ];
  while (cnt != 1) {
    if (isHorizen) {
      if (r >= mid[1]) {
        low = low.map((v, i) => (i !== 2 ? mid[i] : low[i]));
        mid = mid.map((v, i) =>
          i !== 2 ? Math.round((high[i] - low[i]) / 2) + low[i] : mid[i]
        );
      } else {
        high = high.map((v, i) => (i !== 2 ? mid[i] - 1 : high[i]));
        mid = mid.map((v, i) =>
          i !== 2 ? Math.round((high[i] - low[i]) / 2) + low[i] : mid[i]
        );
      }
    } else {
      if (c >= mid[2]) {
        low = low.map((v, i) => (i !== 1 ? mid[i] : low[i]));
        mid = mid.map((v, i) =>
          i !== 1 ? Math.round((high[i] - low[i]) / 2) + low[i] : mid[i]
        );
      } else {
        high = high.map((v, i) => (i !== 1 ? mid[i] - 1 : high[i]));
        mid = mid.map((v, i) =>
          i !== 1 ? Math.round((high[i] - low[i]) / 2) + low[i] : mid[i]
        );
      }
    }
    isHorizen = !isHorizen;
    cnt /= 2;
  }
  console.log(mid[0]);
}
