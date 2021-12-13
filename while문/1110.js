const { mainModule } = require("process");
var readline = require("readline");
var r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r.on("line", function (line) {
  main(line);
  r.close();
});
r.on("close", function () {
  process.exit();
});

function main(input) {
  const num = input.padStart(2, "0");
  let temp = num;
  let cnt = 0;
  do {
    const num0 = temp[0] * 1;
    const num1 = temp[1] * 1;
    temp = num1 + "" + ((num0 + num1) % 10);
    cnt++;
  } while (temp !== num);
  console.log(cnt);
}
