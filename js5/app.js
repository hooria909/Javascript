// Extra Question: Password Generator
// function generatePassword() {
//   const length = document.getElementById("length").value || 12;

//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   const numbers = "0123456789";
//   const symbols = "!@#$%^&*()_+{}[]<>?/|";

//   const allChars = letters + numbers + symbols;
//   let password = "";

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * allChars.length);
//     password += allChars[randomIndex];
//   }

//   document.getElementById("password").innerText =
//     "Generated Password: " + password;

//   return password;
// }


// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt(
//   "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
// ).toLowerCase();

// var itemFound = false;
// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     itemFound = true;
//     alert(userInput + " is available at index " + i + " in our bakery.");
//     break;
//   }
// }
// if (!itemFound) {
//   alert("We are sorry. " + userInput + " is not available in our bakery.");
// }


// var password = prompt("Enter a password:");
// var isValid = true;

// if (password.length < 6) {
//   alert("Password must be at least 6 characters long.");
//   isValid = false;
// }

// if (!isValid) {
//   alert("Please enter a valid password.");
// }


// var university = "University of Karachi";
// var chars = university.split(""); 
// for (var i = 0; i < chars.length; i++) {
//   document.write(chars[i] + "<br>");
// }


// var userInput = prompt("Enter a string:");
// var LastChar = userInput.charAt(userInput.length - 1);
// document.write("User input: " + userInput + "<br>");
// document.write("Last character of input: " + LastChar);