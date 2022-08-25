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
  const treeMap = { A: 1 };
  const tree = [, "A"];
  for (let i = 1; i <= N; i++) {
    const [p, l, r] = input[i].split(" ");
    if (l !== ".") {
      treeMap[l] = treeMap[p] * 2;
      tree[treeMap[l]] = l;
    }
    if (r !== ".") {
      treeMap[r] = treeMap[p] * 2 + 1;
      tree[treeMap[r]] = r;
    }
  }
  console.log(`${preorder()}\n${inorder()}\n${postorder()}`);

  function preorder(idx = 1) {
    let visited = "";
    visited += tree[idx];
    if (tree[idx * 2]) visited += preorder(idx * 2);
    if (tree[idx * 2 + 1]) visited += preorder(idx * 2 + 1);
    return visited;
  }
  function inorder(idx = 1) {
    let visited = "";
    if (tree[idx * 2]) visited += inorder(idx * 2);
    visited += tree[idx];
    if (tree[idx * 2 + 1]) visited += inorder(idx * 2 + 1);
    return visited;
  }
  function postorder(idx = 1) {
    let visited = "";
    if (tree[idx * 2]) visited += postorder(idx * 2);
    if (tree[idx * 2 + 1]) visited += postorder(idx * 2 + 1);
    visited += tree[idx];
    return visited;
  }
}
