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
  let [cnt, ...array] = input;
  array = array.map((v) => v.split(" ").map((v) => +v));
  const rank = array.map((v) => 1);
  for (let i = 0; i < +cnt; i++) {
    for (let j = i + 1; j < +cnt; j++) {
      if (array[i][0] > array[j][0] && array[i][1] > array[j][1]) rank[j]++;
      else if (array[i][0] < array[j][0] && array[i][1] < array[j][1])
        rank[i]++;
    }
  }
  console.log(rank.join(" "));
}
