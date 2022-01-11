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
  const [Y, X] = input[0].split(" ");
  let max = 0;
  const numMap = [];
  for (let i = 1; i <= +Y; i++) {
    numMap.push(input[i].split(" ").map((v) => +v));
  }

  // console.log(numMap);

  for (let i = 0; i < numMap.length; i++) {
    for (let j = 0; j < numMap[i].length; j++) {
      const down = numMap.length - 1 - i;
      const right = numMap[i].length - 1 - j;
      if (down >= 1 && right >= 1) {
        let num =
          numMap[i][j] +
          numMap[i + 1][j] +
          numMap[i][j + 1] +
          numMap[i + 1][j + 1];
        max = max > num ? max : num;
      }
      if (down >= 2 && right >= 1) {
        const sum =
          numMap[i][j] +
          numMap[i][j + 1] +
          numMap[i + 1][j] +
          numMap[i + 1][j + 1] +
          numMap[i + 2][j] +
          numMap[i + 2][j + 1];
        const tempArray = [
          numMap[i][j] + numMap[i + 1][j],
          numMap[i][j] + numMap[i + 2][j],
          numMap[i][j] + numMap[i][j + 1],
          numMap[i][j] + numMap[i + 2][j + 1],
          numMap[i][j + 1] + numMap[i + 1][j + 1],
          numMap[i][j + 1] + numMap[i + 2][j + 1],
          numMap[i][j + 1] + numMap[i + 2][j],
          numMap[i + 1][j] + numMap[i + 2][j],
          numMap[i + 2][j] + numMap[i + 2][j + 1],
          numMap[i + 1][j + 1] + numMap[i + 2][j + 1],
        ];
        let num = sum - Math.min(...tempArray);
        max = max > num ? max : num;
      }
      if (down >= 1 && right >= 2) {
        const sum =
          numMap[i][j] +
          numMap[i][j + 1] +
          numMap[i][j + 2] +
          numMap[i + 1][j] +
          numMap[i + 1][j + 1] +
          numMap[i + 1][j + 2];
        let tempArray = [
          numMap[i][j] + numMap[i][j + 1],
          numMap[i][j] + numMap[i][j + 2],
          numMap[i][j] + numMap[i + 1][j],
          numMap[i][j] + numMap[i + 1][j + 2],
          numMap[i][j + 1] + numMap[i][j + 2],
          numMap[i][j + 2] + numMap[i + 1][j],
          numMap[i][j + 2] + numMap[i + 1][j + 2],
          numMap[i + 1][j] + numMap[i + 1][j + 1],
          numMap[i + 1][j] + numMap[i + 1][j + 2],
          numMap[i + 1][j + 1] + numMap[i + 1][j + 2],
        ];
        let num = sum - Math.min(...tempArray);
        max = max > num ? max : num;
      }
      if (down >= 3) {
        let num =
          numMap[i][j] + numMap[i + 1][j] + numMap[i + 2][j] + numMap[i + 3][j];
        max = max > num ? max : num;
      }
      if (right >= 3) {
        let num =
          numMap[i][j] + numMap[i][j + 1] + numMap[i][j + 2] + numMap[i][j + 3];
        max = max > num ? max : num;
      }
    }
  }
  console.log(max);
}
