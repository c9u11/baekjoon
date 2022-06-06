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
  const [N, M] = input[0].split(" ").map((v) => +v);
  const tempArray = [N];
  const visitArray = [];
  visitArray[N] = N;
  let waitArray = [];
  let output = 0;
  while (tempArray.indexOf(M) === -1) {
    const current = tempArray.pop();
    let plus = current + 1;
    let gop = current * 2;
    let minus = current - 1;
    if (current < M && plus <= 100000 && !visitArray[plus]) {
      visitArray[plus] = plus;
      waitArray.push(plus);
    }
    if (minus >= 0 && !visitArray[minus]) {
      visitArray[minus] = minus;
      waitArray.push(minus);
    }
    if (current < M && gop <= 100000 && !visitArray[gop]) {
      visitArray[gop] = gop;
      waitArray.push(gop);
    }
    if (!tempArray.length) {
      tempArray.push(...waitArray);
      waitArray = [];
      // console.log(tempArray, visitArray);
      output++;
    }
  }
  console.log(output);
}
