// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

const base = prompt("Enter base of traingle ?");
const height = prompt("Enter height of traingle");

const area = calculateAreaOfTraingle(height, base);
const p = print();
console.log(p);
// with return
function calculateAreaOfTraingle(hei, base) {
  // all calcs here
  return 0.5 * hei * base;
}

// without return
function print() {
  console.log("Area of traingle is ", area);
  return null;
}
