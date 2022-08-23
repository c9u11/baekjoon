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
  const arr = input[0].split("");
  let cnt = 0;
  for (letter of arr) if (letter === "(") cnt++;
  while (cnt) {
    let [s, e] = [-1, -1];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") s = i;
      else if (s !== -1 && arr[i] === ")") {
        e = i;
        const temp = [];
        for (let j = s + 1; j < e; j++) temp.push(arr[j]);
        arr[e] = calculate(temp)[0];
        arr.splice(s, e - s);
        cnt--;
        s = -1;
        e = -1;
      }
    }
  }
  console.log(calculate(arr)[0]);
}

function calculate(arr) {
  let cnt = {
    "+-": 0,
    "*/": 0,
  };
  for (letter of arr) {
    if (letter === "+" || letter === "-") cnt["+-"]++;
    else if (letter === "*" || letter === "/") cnt["*/"]++;
  }
  while (cnt["*/"] || cnt["+-"]) {
    for (let i = 0; i < arr.length; i++) {
      const letter = arr[i];
      if (cnt["*/"]) {
        if (letter === "*" || letter === "/") {
          arr[i + 1] = arr[i - 1] + arr[i + 1] + arr[i];
          arr.splice(i - 1, 2);
          cnt["*/"]--;
          break;
        }
      } else {
        if (letter === "+" || letter === "-") {
          arr[i + 1] = arr[i - 1] + arr[i + 1] + arr[i];
          arr.splice(i - 1, 2);
          cnt["+-"]--;
          break;
        }
      }
    }
  }
  return arr;
}
