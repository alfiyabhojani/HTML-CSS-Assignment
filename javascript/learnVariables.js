// To store any data we use variables

// with var keyword
var age = 20;
// REASSIGN
age = 30;
// REDECLARE
var age = 40;

// with let keyword
let money = 200;
// REASSIGN
money = 900;
// Redeclare
let money = 500;

// with const keyword
const PI = 3.142;
// CANNOT REASSIGN
PI = 90;
// CANNOT REDECLARE
const PI = 3.142;

// Block scope
const a = 20;
{
  const a = 10;
  console.log(a); // 10
  console.log(b); // undefined
}
