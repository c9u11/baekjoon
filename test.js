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
  const tree = [0, +input[0]];
  const prev = { index: 1, value: +input[0] };
  for (let i = 1; i < input.length; i++) {
    const val = +input[i];
    if (prev.value < val) {
    }
    if (prev.value > val) {
      prev.index = prev.index * 2;
      prev.value = val;
    } else {
      let parent = 1;
      while (tree[parent]) {
        if (val > tree[parent]) parent = parent * 2 + 1;
        else parent *= 2;
      }
      prev.index = parent;
      prev.value = val;
    }
    tree[prev.index] = prev.value;
  }
  console.log(postorder());
  function postorder(idx = 1) {
    let visited = "";
    let tempIdx = idx;
    while (tree[tempIdx * 2]) {
      tempIdx *= 2;
    }
    while (tempIdx >= idx) {
      if (tree[tempIdx * 2 + 1]) visited += postorder(tempIdx * 2 + 1);
      visited += `${tree[tempIdx]}\n`;
      tempIdx /= 2;
    }
    return visited;
  }
}
