// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// take input from user
const number = prompt("Enter your number");

// ternary operator
const result = number % 2 == 0 ? "even number" : "odd number";

// display result
console.log(`The number is ${result}`);
