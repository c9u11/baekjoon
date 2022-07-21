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
  const string1 = input[0];
  const string2 = input[1];
  const dp = [];
  for (let i = 0; i <= string1.length; i++) {
    dp[i] = [];
    for (let j = 0; j <= string2.length; j++) {
      if (!i || !j) dp[i][j] = 0;
      else {
        if (string1[i - 1] === string2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
        else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp.at(-1).at(-1));
}
