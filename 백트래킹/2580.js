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
  const board = input.map((v) => v.split(" ").map((v) => +v));
  let checkList = [];

  // 9x9 Temp List
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      if (board[x][y] === 0) checkList.push(`${x} ${y}`);
    }
  }

  sudoku();

  function sudoku() {
    // 다찾으면 종료
    if (!checkList.length) {
      console.log(board.map((v) => v.join(" ")).join("\n"));
      process.exit(0);
    }

    const [findX, findY] = checkList
      .pop()
      .split(" ")
      .map((v) => +v);

    for (let i = 1; i <= 9; i++) {
      if (findNum(findX, findY, i)) {
        board[findX][findY] = i;
        sudoku();
        board[findX][findY] = 0;
      }
    }
    checkList.push(`${findX} ${findY}`);
  }

  function findNum(findX, findY, value) {
    // x 고정하고 찾기
    for (let y = 0; y < 9; y++) {
      if (board[findX][y] === value) return false;
    }
    // y 고정하고 찾기
    for (let x = 0; x < 9; x++) {
      if (board[x][findY] === value) return false;
    }
    // 3*3 안에서 찾기
    const rangeX = Math.floor(findX / 3) * 3,
      rangeY = Math.floor(findY / 3) * 3;
    for (let x = rangeX; x < rangeX + 3; x++) {
      for (let y = rangeY; y < rangeY + 3; y++) {
        if (board[x][y] === value) return false;
      }
    }
    return true;
  }
}
