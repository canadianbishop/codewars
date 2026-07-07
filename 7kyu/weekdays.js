// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

const weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

function whatday(num) {
  switch (num) {
    case 1:
      return "sunday";

    case 2:
      return "monday";

    case 3:
      return "tuesday";

    case 4:
      return "wednesday";

    case 5:
      return "thursday";

    case 6:
      return "friday";

    case 7:
      return "saturday";

    default:
      return "Wrong, please enter a number between 1 and 7";
  }
}

console.log(whatday(2));
