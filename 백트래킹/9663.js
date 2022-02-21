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
  const num = Number(input[0]);
  const rows = new Array(num + 1).fill(0).map((el) => 0);

  const isAble = (row) => {
    for (let i = 1; i < row; i++) {
      if (rows[i] === rows[row] || Math.abs(rows[row] - rows[i]) === row - i) {
        return false;
      }
    }
    return true;
  };

  let count = 0;
  const queen = (numOfQueen) => {
    if (isAble(numOfQueen)) {
      if (numOfQueen === num) {
        count++;
      } else {
        for (let i = 1; i <= num; i++) {
          rows[numOfQueen + 1] = i;
          queen(numOfQueen + 1);
        }
      }
    }
  };
  queen(0);
  console.log(count);
}
