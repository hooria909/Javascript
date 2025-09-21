
// Chapter 1


// Question 1
alert("Hello Sir, welcome to our site! Hope you enjoy exploring our website. I'm sure this experience will be awesome for you.");
console.log("Hello Sir, welcome to our site! Hope you enjoy exploring our website. I'm sure this experience will be awesome for you.");

// Question 2
alert("Error! Please enter a valid password");
console.log("Error! Please enter a valid password");

// Question 3
alert("Welcome to JS Land...\nHappy Coding!");
console.log("Welcome to JS Land...\nHappy Coding!");

// Question 4
alert("Welcome to JS Land");
console.log("Welcome to JS Land");

alert("Happy Coding!");
console.log("Happy Coding!");

// Question 5
alert("Hello... I can run JS through my web browser's console");
console.log("Hello... I can run JS through my web browser's console");


// Chapter 2

// Question 1
var username; 

// Question 2
var myName = "Hooria Rameen";

// Question 3
var message = "Hello World";
alert(message);
console.log(message);

// Question 4
var studentName = "Jhone Doe";
alert(studentName);
console.log(studentName);

var age = "15 years old";
alert(age);
console.log(age);

var course = "Certified Mobile Application Development";
alert(course);
console.log(course);

// Question 5
var pizza = "Pizza\nPizz\nPiz\nPi\nP";
alert(pizza);
console.log(pizza);

// Question 6
var email = "example@example.com";
alert("My email address is " + email);
console.log("My email address is " + email);

// Question 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);
console.log("I am trying to learn from the book " + book);

// Question 8
document.write("Yah! I can write HTML content through JavaScript<br>");

// Question 9
document.write("<br>");
alert("");
console.log("");

// Chapter 3

// Question 1
var myAge = 17;
alert("I am " + myAge + " years old");
console.log("I am " + myAge + " years old");

// Question 2
var numberOfVisits = 14;
alert("You have visited this site " + numberOfVisits + " times");

// Question 3
var birthYear = 2005;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear + "<br>");

// Question 4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.<br>");


// Chapter 4

// Question 1
var a = 5, b = 10, c = a + b;
document.write("Sum: " + c + "<br>");

// Question 2
// Legal variable names
var firstName, _totalItems, $price, user1, user_name;

// Illegal variable names (examples only, not actual code):
// var 2ndPlace;
// var first name;
// var my-variable;
// var const;
// var user#id;

// Question 3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, underscores, and dollar signs.<br>");
document.write("Variable names must start with a letter, underscore, or dollar sign.<br>");
document.write("Variable names are case sensitive.<br>");
document.write("Variable names cannot be reserved keywords.<br>");

// Chapter 5


// Question 1
var x = 3, y = 5;
document.write("Sum of " + x + " and " + y + " is " + (x + y) + "<br>");

// Question 2
document.write("Difference of " + x + " and " + y + " is " + (x - y) + "<br>");
document.write("Product of " + x + " and " + y + " is " + (x * y) + "<br>");
document.write("Division of " + x + " and " + y + " is " + (x / y) + "<br>");
document.write("Remainder of " + x + " and " + y + " is " + (x % y) + "<br>");

// Question 3
var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
document.write("The remainder is: " + (num % 3) + "<br>");

// Question 4
var ticketPrice = 600;
var ticketQuantity = 5;
var totalCost = ticketPrice * ticketQuantity;
document.write("Total cost of " + ticketQuantity + " tickets is " + totalCost + " PKR<br>");

// Chapter 6–9

// Question 1
document.write("<h1>Result:</h1>");
var a = 10;
document.write("The value of a is: " + a + "<br><br>");
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Question 2
var a = 2, b = 3;
var result = --a - --b + ++b + b--;
document.write("a is: 2<br>");
document.write("b is: 3<br>");
document.write("Result of --a - --b + ++b + b-- is: " + result + "<br>");