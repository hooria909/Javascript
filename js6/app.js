// chapter 26-30

// q1

// var positiveInt = +prompt("Enter a Positive Integer");
// if (positiveInt > 0) {
//     document.write("Number =" + " " + positiveInt + "<br>");
//     document.write("Round off value: " + Math.round(positiveInt) + "<br>");
//     document.write("Floor value: " + Math.floor(positiveInt) + "<br>");
//     document.write("Ceil value: " + Math.ceil(positiveInt) + "<br>");
// } else {
//     document.write("<h3>Please enter a positive integer.</h3>");
// }



// q2

// let negativeNum = +prompt("Enter a negative floating point number");

// if (negativeNum < 0 && !Number.isInteger(negativeNum)) {
//   document.write("Number: " + negativeNum + "<br>");
//   document.write("Round off value: " + Math.round(negativeNum) + "<br>");
//   document.write("Floor value: " + Math.floor(negativeNum) + "<br>");
//   document.write("Ceil value: " + Math.ceil(negativeNum) + "<br>");
// } else {
//   document.write("<h3>Please enter a valid negative floating point number.</h3>");
// }


// q3

// let num = +prompt("Enter any number (positive or negative):");

// let absoluteValue = Math.abs(num);
// document.write("Number: " + num + "<br>");
// document.write("Absolute Value: " + absoluteValue);


// q4

// let dice = Math.floor(Math.random() * 6) + 1;

// document.write("You rolled: " + dice);


// q5

// let toss = Math.floor(Math.random() * 2);

// let result = (toss === 0) ? "Heads" : "Tails";
// document.write("You got: " + result);

// q6

// let randomNumber = Math.floor(Math.random() * 100) + 1;

// document.write("Random number between 1 and 100: " + randomNumber);


// q7

// let secretNumber = Math.floor(Math.random() * 10) + 1;

// let userGuess = +prompt("Guess the secret number (between 1 and 10):");

// if (userGuess === secretNumber) {
//   document.write("<h2> Congratulations! You guessed it right.</h2>");
// } else {
//   document.write("<h2> Wrong guess! The secret number was " + secretNumber + ".</h2>");
// }


// chapter 31-34

// q1

// let currentDate = new Date();

// document.write(currentDate);

// q2

// let currentDate = new Date();

// let months = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// let currentMonthIndex = currentDate.getMonth();

// let currentMonth = months[currentMonthIndex];

// alert("Current Month: " + currentMonth);


// q3

// let currentDate = new Date();

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// let currentDayIndex = currentDate.getDay();

// let fullDay = days[currentDayIndex];

// let shortDay = fullDay.substring(0, 3);

// alert("Today is: " + shortDay);


// q4

// let currentDate = new Date();

// let currentDayIndex = currentDate.getDay();

// if (currentDayIndex === 0 || currentDayIndex === 6) {
//   alert("It's Fun day");
// } else {
//   alert("It's a working day");
// }


// q5

// let currentDate = new Date();

// let todayDate = currentDate.getDate();

// if (todayDate < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }


// q6

// let myDate = new Date();

// let milliSeconds = myDate.getTime();

// minutesSince1970 = milliSeconds / (1000 * 60); 

// document.write("<h2>Minutes since midnight, Jan 1, 1970</h2>");
// document.write(minutesSince1970);


// q7

// let currentDate = new Date();

// let currentHour = currentDate.getHours();

// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


// q8

// let laterDate = new Date(2020, 11, 31); 

// document.write(laterDate);


// q9


// let ramadanStart = new Date(2015, 5, 18);

// let today = new Date();


// let diff = today - ramadanStart;

// let daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));

// alert(daysPassed + " days have passed since 1st Ramadan, 2015.");


// q10


// let referenceDate = new Date();

// let beginning2015 = new Date(2015, 0, 1); 

// let diff = referenceDate - beginning2015;

// let secondsElapsed = Math.floor(diff / 1000);

// document.write("<h2>Reference Date: " + referenceDate + "</h2>");
// document.write("<h2>Beginning of 2015: " + beginning2015 + "</h2>");
// document.write("<h2>Seconds elapsed since beginning of 2015: " + secondsElapsed + "</h2>");


// q11

// let currentDate = new Date();


// let currentHour = currentDate.getHours();

// currentDate.setHours(currentHour + 1);

// document.write("<h2>1 Hour Ahead: " + currentDate + "</h2>");


// q12


// let currentDate = new Date();

// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("Date 100 years back: " + currentDate);


// q13


// let age = prompt("Enter your age:");
// age = Number(age);
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;

// document.write("<h2>Your age is: " + age + "</h2>");
// document.write("<h2>Your birth year is: " + birthYear + "</h2>");

// q14


let customerName = "XYZ";  
let currentMonth = new Date().toLocaleString("default", { month: "long" });
let numberOfUnits = 410;
let chargesPerUnit = 16;
let latePaymentSurcharge = 350;

let netAmountPayable = numberOfUnits * chargesPerUnit;
let grossAmountPayable = netAmountPayable + latePaymentSurcharge;


netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);

document.write("<h1>K-Electric Bill</h1>");
document.write("<p><b>Customer Name: </b>" + customerName + "</p>");
document.write("<p><b>Current Month: </b>" + currentMonth + "</p>");
document.write("<p><b>Number of Units: </b>" + numberOfUnits + "</p>");
document.write("<p><b>Charges per Unit: </b>" + chargesPerUnit + "</p>");
document.write("<p><b>Net Amount Payable (within Due Date): </b>" + netAmountPayable + "</p>");
document.write("<p><b>Late Payment Surcharge: </b>" + latePaymentSurcharge + "</p>");
document.write("<p><b>Gross Amount Payable (after Due Date): </b>" + grossAmountPayable + "</p>");