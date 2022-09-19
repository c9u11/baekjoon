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
  const queue = [
    {
      inOrderStart: 0,
      inOrderEnd: N - 1,
      postOrderStart: 0,
      postOrderEnd: N - 1,
    },
  ];
  while (queue.length) {
    const { inOrderStart, inOrderEnd, postOrderStart, postOrderEnd } =
      queue.pop();
    const root = postOrder[postOrderEnd];
    result += `${root} `;
    const leftCnt = inOrderIdx[root] - inOrderStart;
    const rightCnt = inOrderEnd - inOrderIdx[root];
    if (rightCnt)
      queue.push({
        inOrderStart: inOrderIdx[root] + 1,
        inOrderEnd: inOrderEnd,
        postOrderStart: postOrderStart + leftCnt,
        postOrderEnd: postOrderStart + leftCnt + rightCnt - 1,
      });
    if (leftCnt)
      queue.push({
        inOrderStart: inOrderStart,
        inOrderEnd: inOrderIdx[root] - 1,
        postOrderStart: postOrderStart,
        postOrderEnd: postOrderStart + leftCnt - 1,
      });
  }
  console.log(result);
}
