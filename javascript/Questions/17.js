// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm



// format date javascript
// - YYYY-MM-DD HH:mm

function dateFormater(date, separator) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();

  // show date and month in two digits
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + hour;
  }

  // now we have day, month and year
  // use the separator to join them
  return year + separator + month + separator + day + " " + hour + ":" + minute;
}

var now = new Date();
console.log("yyyy-mm-dd hh:mm => " + dateFormater(now, "-"));

// - DD-MM-YYYY HH:mm
function dateFormate(date, separator) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();

  // show date and month in two digits
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + hour;
  }

  // now we have day, month and year
  // use the separator to join them
  return day + separator + month + separator + year + " " + hour + ":" + minute;
}

var now = new Date();
console.log("dd-mm-yyyy hh:mm => " + dateFormate(now, "-"));

// - DD/MM/YYYY HH:mm
function dateFormaters(date, separator) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();

  // show date and month in two digits
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + hour;
  }

  // now we have day, month and year
  // use the separator to join them
  return day + separator + month + separator + year + " " + hour + ":" + minute;
}

var now = new Date();
console.log("dd/mm/yyyy hh:mm => " + dateFormaters(now, "/"));
