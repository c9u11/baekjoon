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
  const primeNums = [];
  for (let num = +input[0]; num <= +input[1]; num++) {
    let isPrimeNum = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrimeNum = false;
        break;
      }
    }
    if (isPrimeNum && num !== 1) primeNums.push(num);
  }
  if (primeNums.length) {
    console.log(primeNums.reduce((a, b) => a + b, 0));
    console.log(primeNums[0]);
  } else {
    console.log(-1);
  }
}
