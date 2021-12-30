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
  const MNum = +input[1];
  const brokenList = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  if (!!MNum)
    input[2].split(" ").map((m) => {
      brokenList[+m] = true;
    });

  let output = 0;
  const array = [Math.abs(N - 100)];

  if (!MNum) {
    array.push(String(N).length);
    output = Math.min(...array);
  } else if (N === 100) {
    output = 0;
  } else if (MNum === 10) {
    output = array[0];
  } else {
    let bigNum = "";
    let smallNum = "";
    let bigDisable = false;
    let smallDisable = false;
    let bigPreSame = true;
    let smallPreSame = true;
    for (let i = 0; i < String(N).length; i++) {
      if (!bigDisable) {
        let b;
        if (bigPreSame) {
          b = findNum(true, +String(N)[i]);
          if (b !== +String(N)[i]) {
            bigPreSame = false;
          }
          if (b < +String(N)[i]) {
            if (!i) {
              let overNum = findNum(true, 1);
              b = findNum(true, 0);
              bigNum += overNum;
            } else {
              let preb = findNum(true, +String(N)[i - 1] + 1);
              b = findNum(true, 0);
              bigPreSame = false;
              bigNum = bigNum.slice(0, bigNum.length - 1);
              bigNum += preb;
            }
          }
        } else b = findNum(true, 0);
        bigNum += b;
      }
      if (!smallDisable) {
        let s;
        if (smallPreSame) {
          s = findNum(false, +String(N)[i]);
          if (s !== +String(N)[i]) {
            smallPreSame = false;
          }
          if (s > +String(N)[i]) {
            if (!i) s = "0";
            else {
              let stateBroken0 = !!brokenList[0];
              if (i === 1) {
                brokenList[0] = false;
              }
              let pres = findNum(false, +String(N)[i - 1] - 1);
              if (i === 1) {
                brokenList[0] = stateBroken0;
              }
              s = findNum(false, 9);
              smallPreSame = false;
              smallNum = smallNum.slice(0, smallNum.length - 1);
              smallNum += pres;
            }
          }
        } else s = findNum(false, 9);
        smallNum += s;
      }
    }
    // console.log(bigDisable, bigNum, smallDisable, smallNum);
    if (
      !smallDisable &&
      +smallNum <= N &&
      !(smallNum === "0" && brokenList[0])
    ) {
      // console.log("small push");
      const plusCnt = String(+smallNum).length + (N - +smallNum);
      if (plusCnt > 0) array.push(plusCnt);
    }
    if (!bigDisable && +bigNum >= N) {
      // console.log("big push");
      const minusCnt = String(+bigNum).length + Math.abs(+bigNum - N);
      if (minusCnt > 0) array.push(minusCnt);
    }
    // console.log(array);
    output = Math.min(...array);
  }
  console.log(output);
  function findNum(up, num) {
    let i = num;
    while (true) {
      if (!brokenList[i]) return i;
      if ((up && i === 9) || (!up && i === 0)) {
        up = !up;
        i = num;
      }
      if (up) i++;
      else i--;
    }
  }
}
