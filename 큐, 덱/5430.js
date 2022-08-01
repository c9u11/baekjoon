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
  for (let i = 0; i < +input[0]; i++) {
    const cmds = input[i * 3 + 1];
    const N = +input[i * 3 + 2];
    const nums = JSON.parse(input[i * 3 + 3]);
    let reversed = false;
    let idx = 0;
    let error = false;
    for (let cmd of cmds) {
      if (cmd === "R") reversed = !reversed;
      if (cmd === "D") {
        if (!reversed) idx++;
        else if (nums.pop() === undefined) error = true;
      }
    }
    if (error || nums.length - idx < 0) result.push("error");
    else {
      let output = "";
      if (!reversed)
        for (let i = idx; i < nums.length; i++) {
          output += nums[i];
          if (i < nums.length - 1) output += ",";
        }
      else
        for (let i = nums.length - 1; i >= idx; i--) {
          output += nums[i];
          if (i !== idx) output += ",";
        }
      result.push("[" + output + "]");
    }
  }
  console.log(result.join("\n"));
}
