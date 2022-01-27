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
  const [num, ...board] = input;
  const [h, w] = num.split(" ").map((v) => +v);
  let min = 32;
  for (let y = 0; y <= h - 8; y++) {
    for (let x = 0; x <= w - 8; x++) {
      let BF = 0,
        WF = 0;
      for (let i = 0 + y; i < 8 + y; i++) {
        for (let j = 0 + x; j < 8 + x; j++) {
          const color = board[i][j];
          if (color === "B") {
            if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1))
              WF++;
            else BF++;
          } else {
            if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1))
              BF++;
            else WF++;
          }
        }
      }
      min = min > BF ? BF : min > WF ? WF : min;
    }
  }
  console.log(min);
}
