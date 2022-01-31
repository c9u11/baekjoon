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
  const outputArray = new Array(10001);
  for (let i = 1; i <= cnt; i++) {
    const value = +input[i];
    const cnt = outputArray[value];
    outputArray[value] = cnt ? cnt + 1 : 1;
  }
  let output = "";
  outputArray.forEach((v, idx) => {
    if (idx) {
      for (let i = 0; i < v; i++) {
        output += `${idx}\n`;
      }
    }
  });
  console.log(output);
}
