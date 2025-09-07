// question1

// var userCity = prompt("Enter Your City").toLowerCase("karachi");
// if(userCity == "karachi"){
//     document.write("Welcome to the city of lights")
// }


// question2

// var userGender = prompt("Enter Your Gender")
// if (userGender.toLowerCase() === "male") {
//     document.write("Good Morning Sir");
// }
// else {
//     document.write("Good Morning ma'm");
// }


// question3

// var signalColor = prompt("Enter Traffic Signal Color")
// if (signalColor.toLowerCase() === "red") {
//     document.write("Must Stop");
// }
// else if (signalColor.toLowerCase() === "yellow") {
//     document.write("Ready To Move");
// }
// else if (signalColor.toLowerCase() === "yellow") {
//     document.write("Move");
// }
// else {
//     document.write("Invald color");
// }


// question4

// var fuel = +prompt("Fuel In Your Car (In Litres)");
// if (fuel < 0.25){
//     document.write("please refill the fuel");
// }
// else {
//     document.write("great!");
// }


// question5

// a) displayed

// b) not displayed

// c) 1) not displayed  2) not displayed 3) displayed  4) not displayed  5) displayed  6) displayed 7) displayed


// question6

// var marksObtained = +prompt("Enter Obtained Marks");
// var totalMarks = +prompt("Enter Total Marks");
// var percentage = (marksObtained / totalMarks) * 100;


// document.write("<h1>Marks Sheet</h1>");
// document.write("<h3>Total Marks: " + totalMarks + "</h3>");
// document.write("<h3>Marks Obtained: " + marksObtained + "</h3>");
// document.write("<h3>Percentage: " + percentage + "%</h3>");
// document.write("<h3>Remarks: ")


// if (percentage >= 80){
//     document.write("<h3>Grade: A+</h3>");
//     document.write("<h3>Remarks: Excellent")
// } else if (percentage >= 70){
//     document.write("<h3>Grade: A</h3>");
//     document.write("<h3>Remarks: Good")
// } else if (percentage >= 60){
//     document.write("<h3>Grade: B</h3>");
//     document.write("<h3>Remarks: Need Improvement")
// } else {
//     document.write("<h3>Grade: Fail</h3>");
//     document.write("<h3>Remarks: Sorry")
// }


// question7

// var number = 5;
// var userGuess = +prompt("Guess The Number");
// if(userGuess === 5){
//    document.write("Bingo! Correct Answer");
// }
// else if (userGuess === 6){
//     document.write("Close Enough To The Correct Answer");
// }
// else{
//     document.write("Best Of Luck Next Time")
// }


//question8

// var number = 3;
// var userNumber = +prompt("number want to divide by 3");
// var answer = number / userNumber ;
// document.write(answer);


// question9

// var number = +prompt("Enter a number:");
// if (number % 2 === 0) {
//     document.write(number + " is an Even number.");
// } else {
//     document.write(number + " is an Odd number.");
// }


// question10

// var temperature = +prompt("Enter the temperature in °C:");
// if (temperature > 40) {
//     document.write("It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("The weather today is normal.");
// } else if (temperature > 20) {
//     document.write("Today's weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today's weather is so cool.");
// } else {
//     document.write("It's very cold outside!");
// }

//question11

// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result;

// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     if (num2 === 0) {
//         result = "Error! Division by zero is not allowed.";
//     } else {
//         result = num1 / num2;
//     }
// } else if (operation === "%") {
//     if (num2 === 0) {
//         result = "Error! Modulus by zero is not allowed.";
//     } else {
//         result = num1 % num2;
//     }
// } else {
//     result = "Invalid operation!";
// }
// document.write("<h2>Calculator Result:</h2>");
// document.write("<p>" + num1 + " " + operation + " " + num2 + " = " + result + "</p>");


//question12


//question13

// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//     document.write("The larger number is: " + num1);
// } else if (num2 > num1) {
//     document.write("The larger number is: " + num2);
// } else {
//     document.write("Both numbers are equal: " + num1);
// }


// question14

// var number = parseFloat(prompt("Enter a number:"));

// if (number > 0) {
//     document.write(number + " is a Positive number.");
// } else if (number < 0) {
//     document.write(number + " is a Negative number.");
// } else {
//     document.write("The number is Zero.");
// }

//question15

// var char = prompt("Enter a single character:").toLowerCase();
// if (char.length !== 1) {
//     document.write("Please enter only a single character.");
// } else {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         document.write(true);
//     } else {
//         document.write(false);
//     }
// }


// question16

// var correctPassword = "MySecret123";
// var userPassword = prompt("Enter your password:");
// if (!userPassword) {
//     document.write("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     document.write("Correct! The password you entered matches the original password.");
// } else {
//     document.write("Incorrect password.");
// }

// question17

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// document.write(greeting);


// question18

var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

if (time >= 0 && time < 1200) {
    document.write("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon!");
} else if (time >= 1700 && time < 2100) {
    document.write("Good Evening!");
} else if (time >= 2100 && time <= 2359) {
    document.write("Good Night!");
} else {
    document.write("Invalid time entered. Please enter time between 0000 and 2359.");
}