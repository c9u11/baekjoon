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
  const result = [];
  input.forEach((string) => {
    if (string === ".") return;
    let brackets = [];
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (char === "(" || char === "[") {
        brackets.push(char);
      } else if (char === ")") {
        const preBracket = brackets.pop();
        if (preBracket !== "(") {
          brackets.push(char);
          break;
        }
      } else if (char === "]") {
        const preBracket = brackets.pop();
        if (preBracket !== "[") {
          brackets.push(char);
          break;
        }
      }
    }
    result.push(!brackets.length ? "yes" : "no");
  });
  console.log(result.join("\n"));
}
