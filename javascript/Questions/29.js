// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.


for (var x = 0; x <= 100; x++) {
  if (x === 0) {
    console.log(x + " is even");
  } else if (x % 2 === 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}