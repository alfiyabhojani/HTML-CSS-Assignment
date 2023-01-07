// 23. Write a program which tells the number of days in a month, now consider leap year.

var getDaysInMonth = function (month, year) {
  // Here January is 1 based
  //Day 0 is the last day in the previous month
  return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
};
console.log(getDaysInMonth(11, 2022));

// 2017, 2021 was a leap year
console.log(getDaysInMonth(2, 2021));
