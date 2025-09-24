// chapter 35-38

// q1

// function dateTime() {
//     var dates = new Date ;
//     document.write(dates) ;
// }
// dateTime()

// q2

// function name(){
//     var firstName = prompt("Enter Your First Name");
//     var lasttName = prompt("Enter Your Last Name");
//     document.write("Welcome" + " " + firstName + " " +  lasttName + " !");
// }
// name();


// q3

// function addNumbers(num1, num2) {
//   return num1 + num2;
// }
// var a = parseFloat(prompt("Enter first number:"));
// var b = parseFloat(prompt("Enter second number:"));

// var sum = addNumbers(a, b);
// document.write(sum)


// q4


// function calculate(num1, num2, operator) {
//   let result;

//   if (operator === "+") {
//     result = num1 + num2;
//   } 
//   else if (operator === "-") {
//     result = num1 - num2;
//   } 
//   else if (operator === "*") {
//     result = num1 * num2;
//   } 
//   else if (operator === "/") {
//     result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
//   } 
//   else if (operator === "%") {
//     result = num1 % num2;
//   } 
//   else {
//     result = "Invalid Operator";
//   }

//   return result;
// }

// let result = calculate(+prompt("enter first number"), + prompt("enter second number"), +prompt("enter operator"));

// document.write( result );


// q5
 

// function square(){
//     var num = +prompt("Enter number");
//     var result = num * num;
//     document.write(result);
// }
// square();


// q6

// function counting() {
//     var start = +prompt("Enter starting number");
//     var end = +prompt("Enter ending number");

//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

// counting();


// q7


// function calculateHypotenuse() {
//   var base = +prompt("Enter base of triangle:");
//   var perpendicular = +prompt("Enter perpendicular of triangle:");

//   function square(num) {
//     return num * num;
//   }
//   var hypotenuse = Math.sqrt(square(base) + square(perpendicular));

//   document.write(hypotenuse);
// }
// calculateHypotenuse();

// q8

// function calculateArea() {

//   var width = +prompt("Enter width of rectangle:");
//   var height = +prompt("Enter height of rectangle:");

//   var area = width * height;

//   document.write( area);
// }

// calculateArea();


// q9

// function checkPalindrome() {
//   var str = prompt("Enter a word to check if it's a palindrome:");
//   str = str.toLowerCase();

//   if (str === str.split("").reverse().join("")) {
//     document.write(str + " is a Palindrome");
//   } else {
//     document.write(str + " is NOT a Palindrome");
//   }
// }

// checkPalindrome();


// q10

// function countOccurrences(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === letter.toLowerCase()) { 
//             count++;
//         }
//     }
//     return count;
// }
// var result = countOccurrences('JSResourceS.com', 'o');
// document.write("Occurrences of 'o': " + result);


// q11

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference.toFixed(2)+ "<br>");
// }
// calcCircumference(5);

// function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write("The area is " + area.toFixed(2));
// }
// calcArea(5);

// chapter 38-42

// q1


// function power(a, b) {
//     var result = 1;
//     for (var i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }

// document.write(power(2, 3)+ "<br>");
// document.write(power(5, 4));


// q2


// function LeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         alert(year + " is a leap year.");
//     } else {
//         alert(year + " is not a leap year.");
//     }
// }
// var year = +(prompt("Enter a year:"));
// LeapYear(year);


// q3



// function calcSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calcArea(a, b, c) {
//     var s = calcSemiPerimeter(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     alert("The area of the triangle is " + area.toFixed(2));
// }

// var a = +(prompt("Enter side a:"));
// var b = +(prompt("Enter side b:"));
// var c = +(prompt("Enter side c:"));

// calcArea(a, b, c);

// q4


// function calcAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3;
// }

// function calcPercentage(m1, m2, m3) {
//     var totalMarks = 300;
//     var obtainedMarks = m1 + m2 + m3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// function mainFunction() {

//     var m1 = +(prompt("Enter marks of Subject 1 (out of 100):"));
//     var m2 = +(prompt("Enter marks of Subject 2 (out of 100):"));
//     var m3 = +(prompt("Enter marks of Subject 3 (out of 100):"));

//     var avg = calcAverage(m1, m2, m3);
//     var perc = calcPercentage(m1, m2, m3);

//     alert("Average Marks: " + avg.toFixed(2) + "\nPercentage: " + perc.toFixed(2) + "%");
// }

// mainFunction();


// q5


// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1; 
// }

// console.log(customIndexOf("Hello", "e"));
// console.log(customIndexOf("Hello", "l")); 
// console.log(customIndexOf("Hello", "z")); 


// q6

// function deleteVowels(sentence) {
//     var result = "";
//     var vowels = "aeiouAEIOU";

//     for (var i = 0; i < sentence.length; i++) {
//         if (vowels.indexOf(sentence[i]) === -1) {
//             result += sentence[i];
//         }
//     }

//     return result;
// }

// console.log(deleteVowels("Hello World")); 
// console.log(deleteVowels("JavaScript Fun")); 


// q7


// function countSuccessiveVowels(text) {
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
//         var firstChar = text[i].toLowerCase();
//         var secondChar = text[i + 1].toLowerCase();

//         switch (firstChar) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 switch (secondChar) {
//                     case "a":
//                     case "e":
//                     case "i":
//                     case "o":
//                     case "u":
//                         count++;
//                         break;
//                 }
//                 break;
//         }
//     }

//     return count;
// }
// var sentence = "Pleases read this application and give me gratuity";
// console.log("Number of successive vowels: " + countSuccessiveVowels(sentence));


// q8


// function toMeters(km) {
//     return km * 1000;
// }

// function toFeet(km) {
//     return km * 3280.84;
// }
// function toInches(km) {
//     return km * 39370.1;
// }

// function toCentimeters(km) {
//     return km * 100000;
// }
// var km = +(prompt("Enter distance between two cities in kilometers:"));

// alert(
//     "Distance Conversions:\n" +
//     "Meters: " + toMeters(km).toFixed(2) + "\n" +
//     "Feet: " + toFeet(km).toFixed(2) + "\n" +
//     "Inches: " + toInches(km).toFixed(2) + "\n" +
//     "Centimeters: " + toCentimeters(km).toFixed(2)
// );


// q9

// function calculateOvertime(hoursWorked) {
//     var overtimeRate = 12; 
//     var overtimeHours = 0;
//     var overtimePay = 0;

//     if (hoursWorked > 40) {
//         overtimeHours = hoursWorked - 40;
//         overtimePay = overtimeHours * overtimeRate;
//     }

//     return overtimePay;
// }

// var hoursWorked = +(prompt("Enter total hours worked by the employee:"));

// var overtime = calculateOvertime(hoursWorked);

// if (overtime > 0) {
//     alert("Overtime Pay: Rs. " + overtime);
// } else {
//     alert("No overtime. Employee worked " + hoursWorked + " hours.");
// }

// q10

// function calculateNotes(amount) {
//     var hundreds = Math.floor(amount / 100);
//     var remaining = amount % 100;

//     var fifties = Math.floor(remaining / 50);
//     remaining = remaining % 50;

//     var tens = Math.floor(remaining / 10);

//     alert(
//         "Currency Notes Distribution:\n" +
//         "100 Notes: " + hundreds + "\n" +
//         "50 Notes: " + fifties + "\n" +
//         "10 Notes: " + tens
//     );
// }

// var amount = +(prompt("Enter amount to withdraw (in Rs.):"));

// calculateNotes(amount);
