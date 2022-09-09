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

class Node {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }
  insert(v) {
    if (v < this.value) {
      if (!this.left) this.left = new Node(v);
      else this.left.insert(v);
    } else {
      if (!this.right) this.right = new Node(v);
      else this.right.insert(v);
    }
  }
}

function main(input) {
  const root = new Node(+input[0]);
  let result = "";
  for (let i = 1; i < input.length; i++) {
    root.insert(+input[i]);
  }
  postOrder(root);
  console.log(result);

  function postOrder(node) {
    node.left && postOrder(node.left);
    node.right && postOrder(node.right);
    result += node.value + "\n";
  }
}
