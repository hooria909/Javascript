// // Chapter 14 to 16

// // Question 1
// var studentNames = [];

// // Question 2
// var studentNames = new Array();

// // Question 3
// var stringArray = ["apple", "banana", "cherry"];

// // Question 4
// var numberArray = [1, 2, 3, 4, 5];

// // Question 5
// var booleanArray = [true, false, true];

// // Question 6
// var mixedArray = ["apple", 1, true, "banana", 2, false];

// // Question 7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. phil", "Ph.D"];
// document.write("<h1>Qualifications:</h1>");
// document.write("<ol>");
// for (var i = 0; i < qualifications.length; i++) {
//   document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");

// // Question 8
// var studentNames = ["Michael", "John", "Tony"];
// var studentScores = [320, 230, 480];
// var totalMarks = 500;
// for (var i = 0; i < studentNames.length; i++) {
//   var percentage = (studentScores[i] / totalMarks) * 100;
//   document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
// }

// // Question 9
// var colorNames = ["red", "green", "blue"];
// document.write(colorNames + "<br>");

// var usercolor = prompt("Enter a color to add to the beginning:");
// colorNames.unshift(usercolor);
// document.write(colorNames + "<br>");

// usercolor = prompt("Enter a color to add to the end:");
// colorNames.push(usercolor);
// document.write(colorNames + "<br>");

// colorNames.unshift("yellow", "purple");
// document.write(colorNames + "<br>");

// colorNames.shift();
// document.write(colorNames + "<br>");

// colorNames.pop();
// document.write(colorNames + "<br>");

// var index = prompt("Enter the index to add a color:");
// usercolor = prompt("Enter a color to add:");
// colorNames.splice(index, 0, usercolor);
// document.write(colorNames + "<br>");

// index = prompt("Enter the index to delete color(s):");
// var count = prompt("Enter the number of colors to delete:");
// colorNames.splice(index, count);
// document.write(colorNames + "<br>");

// // Question 10
// var studentScores = [320, 230, 480, 120];
// document.write("Scores of students: " + studentScores + "<br>");
// studentScores.sort();
// document.write("Ordered scores of students: " + studentScores + "<br>");

// // Question 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list: <br>" + cities + "<br>");
// var selectedCities = cities.slice(2, 4);
// document.write("Selected cities list: <br>" + selectedCities + "<br>");

// // Question 12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array: <br>" + arr + "<br>");
// var str = arr.join(" ");
// document.write("String: <br>" + str + "<br>");

// // THE END
