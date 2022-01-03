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
  const cnt = +input[0];
  const output = [];
  for (let i = 1; i <= cnt; i++) {
    const num = Math.abs(+input[i].split(" ")[0] - +input[i].split(" ")[1]);
    let pre = 3,
      current = 4,
      j = 1;
    if (num < 4) {
      output.push(num);
      continue;
    } else
      while (current < num) {
        j++;
        pre = current + 1;
        current += j * 2 + 1;
      }
    output.push(num <= current - (j + 1) ? j * 2 : j * 2 + 1);
  }

  output.forEach((v) => console.log(v));
}
