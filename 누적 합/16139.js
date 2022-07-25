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
  const S = input[0];
  const q = +input[1];
  const cumsum = {};
  const result = [];

  function getCumsum(char, s, e) {
    if (cumsum[char] === undefined) cumsum[char] = [];
    for (let i = cumsum[char].length; i <= +e; i++) {
      if (!i) cumsum[char][i] = 0;
      else cumsum[char][i] = cumsum[char][i - 1];
      if (S[i] === char) cumsum[char][i]++;
    }
    startValue = !+s ? 0 : cumsum[char][+s - 1];
    return cumsum[char][+e] - startValue;
  }

  for (let i = 2; i < q + 2; i++) {
    result.push(getCumsum(...input[i].split(" ")));
  }
  console.log(result.join("\n"));
}
