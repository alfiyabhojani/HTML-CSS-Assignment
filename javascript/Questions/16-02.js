// circumference of a circle
const r = prompt("Enter Radius of a circle");

const area = calculateCircumferenceOfCircle(r);
const p = print();
function calculateCircumferenceOfCircle(r) {
  return 2 * 3.14 * r;
}

function print() {
  console.log("Circumference of Circle is ", area);
  return null;
}
