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
  const [N, M] = input[0].split(" ").map(Number);
  const hasMap = {};
  const hasArray = [];

  for (let i = 1; i < N + 1; i++) {
    addPokemon(input[i]);
  }

  for (let i = N + 1; i < N + M + 1; i++) {
    if (isNaN(input[i])) console.log(hasMap[input[i]]);
    else console.log(hasArray[input[i] - 1]);
  }

  function addPokemon(name) {
    hasArray.push(name);
    hasMap[name] = hasArray.length;
  }
}
