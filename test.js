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
  const N = +input[0];
  const inOrderIdx = {};
  input[1].split(" ").forEach((v, i) => {
    inOrderIdx[v] = i;
    return v;
  });
  const postOrder = {};
  input[2].split(" ").forEach((v, i) => {
    postOrder[i] = v;
    return v;
  });
  let result = "";
  const queue = [{ start: 0, end: N - 1 }];
  while (queue.length) {
    const { start, end } = queue.pop();
    if (start < 0 || end < 0 || start >= N || end >= N || start > end) continue;
    const root = postOrder[end];
    result += root + " ";
    if (start === end) continue;

    const inOrderRootIdx = inOrderIdx[root];
    const inOrderLeftStartIdx = inOrderIdx[postOrder[start]];

    // right
    queue.push({
      start:
        inOrderLeftStartIdx < inOrderRootIdx
          ? start + inOrderRootIdx - inOrderLeftStartIdx
          : start,
      end: end - 1,
    });

    // left
    queue.push({
      start: start,
      end: start + inOrderRootIdx - inOrderLeftStartIdx - 1,
    });
  }
  console.log(result);
}
