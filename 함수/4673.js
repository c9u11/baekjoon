const N = 10000;
const isSelfNum = Array(N + 1).fill(true);
function returnD_N(i) {
  let num = i;
  while (i) {
    num += i % 10;
    i = Math.floor(i / 10);
  }
  return num;
}
for (let i = 0; i <= N; i++) {
  const d_n = returnD_N(i);
  if (d_n > N) continue;
  isSelfNum[d_n] = false;
}

for (let i = 0; i <= N; i++) {
  if (isSelfNum[i]) console.log(i);
}
