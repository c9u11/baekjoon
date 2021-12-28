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
  const num = +input[0];
  let i = 0,
    temp = 0;
  while (num > temp) {
    i++;
    temp += i;
  }
  if (i % 2 === 0) {
    console.log(`${i - (temp - num)}/${temp - num + 1}`);
  } else {
    console.log(`${temp - num + 1}/${i - (temp - num)}`);
  }
}
