console.log("dates");

var currentDT = new Date(1695274001810);
console.log(currentDT);

var current =currentDT.getMonth()
console.log(currentDT.getTime());
var fullYear = currentDT.getFullYear();
var day = currentDT.getDay();
var month = currentDT.getMonth();
var dateString = currentDT.toDateString();
console.log(fullYear);
console.log(day);
console.log(month);
console.log(dateString);

console.log(currentDT.getMilliseconds());
console.log(currentDT.getTimezoneOffset());
console.log(currentDT.getUTCDay());
console.log(currentDT.toLocaleString());
console.log(currentDT);

var dates = "12/12/2022";
var newDate = new Date(dates).getTime();
console.log(newDate);