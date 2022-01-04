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
  const numArray = input[1].split(" ").map((v) => +v);
  let cnt = 0;
  numArray.forEach((num) => {
    let isPrimeNum = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrimeNum = false;
        break;
      }
    }
    if (isPrimeNum && num !== 1) cnt++;
  });
  console.log(cnt);
}
