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
  const isGroupWord = (word) => {
    const alphaArray = [];
    for (let i = 0; i < word.length; i++) {
      if (
        alphaArray[alphaArray.length ? alphaArray.length - 1 : 0] !== word[i] &&
        alphaArray.indexOf(word[i]) !== -1
      )
        return false;
      alphaArray.push(word[i]);
    }
    return true;
  };
  let cnt = 0;
  for (let i = 0; i < +input[0]; i++) {
    if (isGroupWord(input[i + 1])) cnt++;
  }
  console.log(cnt);
}
