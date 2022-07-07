var readline = require("readline");
const { resourceLimits } = require("worker_threads");
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
  let deck = [];
  const result = [];
  for (let i = 1; i <= +input[0]; i++) {
    const [oper, num] = input[i].split(" ");
    switch (oper) {
      case "push_front":
        deck = [+num, ...deck];
        break;
      case "push_back":
        deck.push(+num);
        break;
      case "pop_front":
        if (deck.length) result.push(deck.shift());
        else result.push(-1);
        break;
      case "pop_back":
        if (deck.length) result.push(deck.pop());
        else result.push(-1);
        break;
      case "size":
        result.push(deck.length);
        break;
      case "empty":
        result.push(deck.length ? 0 : 1);
        break;
      case "front":
        if (deck.length) result.push(deck[0]);
        else result.push(-1);
        break;
      case "back":
        if (deck.length) result.push(deck[deck.length - 1]);
        else result.push(-1);
        break;
    }
  }
  console.log(result.join("\n"));
}
