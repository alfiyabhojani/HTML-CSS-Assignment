// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

const mark = 55;
if (mark > 80) {
  console.log("Grade : A");
} else if (mark > 70) {
  console.log("Grade : B");
} else if (mark > 60) {
  console.log("Grade : C");
} else if (mark > 50) {
  console.log("Grade : D");
} else if (mark < 40) {
  console.log("Grade : F");
}
