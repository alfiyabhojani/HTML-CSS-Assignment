/*27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let arr1 = ages.sort();
console.log(arr1);

let minValue = Math.min(...arr1);
console.log(minValue);

let maxValue = Math.max(...arr1);
console.log(maxValue);

// - Find the median age(one middle item or two middle items divided by two)

//declare median variable
let median;

//if else block to check for even or odd
if (arr1.length % 2 != 0) {
  //odd case

  //find middle index
  let middleIndex = Math.floor(arr1.length / 2);

  //find median
  median = arr1[middleIndex];
} else {
  //even case

  //find middle index
  let middleIndex = Math.floor(arr1.length / 2);
  console.log(middleIndex);
  //find median
  median = arr1[middleIndex] + arr1[middleIndex + 1];
}

//print median
console.log(median);

// - Find the average age(all items divided by number of items)
const average = arr1.reduce((a, b) => a + b, 0) / arr1.length;
console.log(average);

//  - Find the range of the ages(max minus min)
let range = `${ maxValue }` -` ${ minValue }`;
console.log(range);

// - Compare the value of (min - average) and (max - average), use abs() method
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(`difference ${minValue}, ${maxValue}`);
