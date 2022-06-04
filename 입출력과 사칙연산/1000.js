const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const num1 = Number(input.split(" ")[0]);
const num2 = Number(input.split(" ")[1]);

console.log(num1 + num2);
