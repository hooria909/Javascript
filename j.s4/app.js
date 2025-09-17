

// let matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
//   [3, 2, 1, 0],
// ];
// console.log(matrix);

// Question 3
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Question 4
// let table = +prompt("Enter a number to show its multiplication table ");
// let length = +prompt("Enter length of multiplication table");
// console.log("Multiplication table of " + table);
// console.log("Length " + length);
// for (let i = 1; i <= length; i++) {
//   console.log(table + " x " + i + " = " + table * i);
// }

// Question 5
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // Question 6
// document.write("<h1>Counting, Reverse Counting, Even, Odd, Series</h1>");

// document.write("<h2>Counting:</h2>");
// for (let i = 1; i <= 10; i++) {
//   document.write(i + " ");
// }

// document.write("<h2>Reverse Counting:</h2>");
// for (let i = 10; i >= 1; i--) {
//   document.write(i + " ");
// }

// document.write("<h2>Even:</h2>");
// for (let i = 0; i <= 20; i += 2) {
//   document.write(i + " ");
// }

// document.write("<h2>Odd:</h2>");
// for (let i = 1; i < 20; i += 2) {
//   document.write(i + " ");
// }

// document.write("<h2>Series:</h2>");
// for (let i = 2; i <= 20; i += 2) {
//   document.write(i + "k ");
// }

// // Question 7
// let A = ["cake", "apple", "cookie", "chips", "patties"];
// let search = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
// let found = false;
// for (let i = 0; i < A.length; i++) {
//   if (A[i] === search) {
//     found = true;
//     document.write("<br>" + search + " is available at index " + i + " in our bakery");
//     break;
//   }
// }
// if (!found) {
//   document.write("<br>We are sorry. " + search + " is not available in our bakery");
// }

// // Question 8
// let B = [24, 53, 78, 91, 12];
// let largest = B[0];
// for (let i = 1; i < B.length; i++) {
//   if (B[i] > largest) {
//     largest = B[i];
//   }
// }
// document.write("<br>The Largest number is " + largest);

// // Question 9
// let C = [24, 53, 78, 91, 12];
// let smallest = C[0];
// for (let i = 1; i < C.length; i++) {
//   if (C[i] < smallest) {
//     smallest = C[i];
//   }
// }
// document.write("<br>The smallest number is " + smallest);

// // Question 10
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     document.write(i + " ");
//   }
// }