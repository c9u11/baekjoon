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
  let N = +input[0];
  const nums = input[1].split(" ").map(Number);
  nums.sort((a,b)=>a-b);
  const dp = [nums[0]];
  for(let i=1;i<N;i++){
    dp[i] = dp[i-1] + nums[i];
  }
  console.log(dp.reduce((a,b)=>a+b))
}
