// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// - What is the year today?

const years = new Date();
const year = years.getFullYear();
console.log(year);

//  - What is the month today as a number?
const months = new Date();
const month = months.getMonth();
console.log(month);

//  - What is the date today?
const dates = new Date();
const date = dates.getDate();
console.log(date);

// - What is the day today as a number?
const today = new Date();
const day = today.getDay();
console.log(day);

// - What is the hours now?
const hour = new Date();
const hours = hour.getHours();
console.log(hours);

// - What is the minutes now?
const minutes = new Date();
const minute = minutes.getMinutes();
console.log(minute);

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
let newDate = new Date("January 1, 1970");
let myDate = new Date();
console.log((myDate - newDate) / 1000);

