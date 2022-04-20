// ASSIGNMENT NO 2
// Print True if it is a weekday ,else print False, if it is Sunday and Saturday
 
let isWeekday = day => (day == "Sunday" || day == "Saturday" ? "False" : "True");

console.log(isWeekday("Tuesday"));