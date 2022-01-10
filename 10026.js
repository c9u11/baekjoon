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
  const N = +input[0];
  const rgbMap = [];
  const rrbMap = [];
  const tempMap = [];
  for (let i = 1; i <= N; i++) {
    rrbMap.push(input[i].replaceAll("G", "R").split(""));
    rgbMap.push(input[i].split(""));
    tempMap.push(new Array(N));
  }

  console.log(returnCnt(rgbMap, tempMap));
  console.log(returnCnt(rrbMap, tempMap));
}

function returnCnt(rgbMap, TEMPMAP) {
  let cnt = 1;
  const tempMap = JSON.parse(JSON.stringify(TEMPMAP));
  let findList = [];
  for (let i = 0; i < tempMap.length; i++) {
    for (let j = 0; j < tempMap.length; j++) {
      if (!tempMap[i][j]) {
        findList.push(`${i},${j}`);
        while (findList.length > 0) {
          const [i, j] = findList.pop().split(",");
          findSection(+i, +j);
        }
        cnt++;
      }
    }
  }
  return cnt - 1;

  function findSection(i, j) {
    const me = rgbMap[i][j];
    let up, left, right, down;
    if (!!i) up = rgbMap[i - 1][j];
    if (j !== rgbMap.length - 1) right = rgbMap[i][j + 1];
    if (!!j) left = rgbMap[i][j - 1];
    if (i !== rgbMap.length - 1) down = rgbMap[i + 1][j];

    tempMap[i][j] = cnt;

    if (!!up && !tempMap[i - 1][j] && up === me) {
      findList.push(`${i - 1},${j}`);
    }
    if (!!right && !tempMap[i][j + 1] && right === me) {
      findList.push(`${i},${j + 1}`);
    }
    if (!!left && !tempMap[i][j - 1] && left === me) {
      findList.push(`${i},${j - 1}`);
    }
    if (!!down && !tempMap[i + 1][j] && down === me) {
      findList.push(`${i + 1},${j}`);
    }
  }
}
