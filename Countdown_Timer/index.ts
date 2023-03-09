let currentTime = Date.now();

let days: string [];
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let months: string [];
months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];

let dateObj = new Date(currentTime);
let currentDate = dateObj.getDate();
let currentDay = dateObj.getDay() - 1;
let currentMonth = dateObj.getMonth();
let currentYear = dateObj.getFullYear()

console.log(`Day -> ${days[currentDay]}, Date -> ${currentDate}, Month -> ${months[currentMonth]}, Year -> ${currentYear}`);
