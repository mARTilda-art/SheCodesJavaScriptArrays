// Challenge 1
// Create an array weekDays with all days of the week, console log the array

// Challenge 2
// Log ‘Monday’ and ‘Sunday’

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array

// Challenge 4
// Remove Monday and Tuesday
// Log the array

// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’

let weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
console.log(weekDays);

console.log(weekDays[0]);
console.log(weekDays[6]);

weekDays[6] = "Funday";
console.log(weekDays);

weekDays[0] = "";
weekDays[1] = "";
console.log(weekDays);

function showTemperature(dayElement) {
  console.log("Temperature on " + dayElement + " is 18 degrees.");
}
weekDays.forEach(showTemperature);
