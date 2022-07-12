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
  const [N, M] = input[0].split(" ").map(Number);
  const nums = input[1].split(" ").map(Number);
  let low = 0,
    high = Math.max(...nums) - 1,
    mid = Math.ceil((high - low) / 2);

  while (low !== mid) {
    if (check(mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
    mid = low + Math.ceil((high - low) / 2);
  }

  console.log(mid);

  function check(max) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
      if (max < nums[i]) cnt += nums[i] - max;
    }
    if (cnt >= M) return true;
    else false;
  }
}
