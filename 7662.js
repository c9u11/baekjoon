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
  const tempArray = [];
  let end = 0;
  for (let i = 1; i < input.length; i++) {
    if (isNaN(+input[i])) {
      const alpha = input[i].split(" ")[0];
      const num = +input[i].split(" ")[1];
      if (alpha === "D") {
        tempArray.splice(num === -1 ? 0 : tempArray.length - 1, 1);
      } else {
        let temp = null;
        for (let j = 0; j < tempArray.length; j++) {
          if (tempArray[j] < num) temp = j + 1;
        }
        tempArray.splice(temp === null ? tempArray.length - 1 : temp, 0, num);
      }
      if (i === end) {
        if (tempArray.length) {
          console.log(`${tempArray[tempArray.length - 1]} ${tempArray[0]}`);
        } else {
          console.log("EMPTY");
        }
        tempArray.splice(0, tempArray.length - 1);
      }
    } else {
      end += +input[i] + 1;
    }
  }
}
