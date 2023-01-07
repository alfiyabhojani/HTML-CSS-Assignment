// 30. Write a script which generates a random hexadecimal number.

const genRanHex = (size) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 14).toString(14))
    .join("");

console.log(genRanHex(10));
console.log(genRanHex(15));
console.log(genRanHex(30));