var readline = require("readline");
const { resourceLimits } = require("worker_threads");
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
  const [N, M, B] = input.shift().split(" ").map(Number);
  const result = [Infinity];
  let min = +Infinity,
    max = -Infinity;
  for (let i = 0; i < N; i++) {
    input[i] = input[i].split(" ").map(Number);
    for (let j = 0; j < M; j++) {
      min = Math.min(min, input[i][j]);
      max = Math.max(max, input[i][j]);
    }
  }

  for (let floor = min; floor <= max; floor++) {
    const cnt = setFloor(floor);
    if (result[0] >= cnt) {
      result[0] = cnt;
      result[1] = floor;
    }
  }

  console.log(result.join(" "));

  function setFloor(floor) {
    let cnt = 0;
    let block = B;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        const currentFloor = input[i][j];
        if (currentFloor > floor) {
          cnt += (currentFloor - floor) * 2;
          block += currentFloor - floor;
        } else if (currentFloor < floor) {
          cnt += floor - currentFloor;
          block -= floor - currentFloor;
        }
      }
    }

    return block >= 0 ? cnt : Infinity;
  }
}
