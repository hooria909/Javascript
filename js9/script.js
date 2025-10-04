// chapter 58-67

// q1

// i. 

var mainContent = document.getElementById("main-content");
console.log("Main content:", mainContent);

// ii.

console.log("Children of main-content:", mainContent.children);

// iii.

var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  document.write(renderElements[i].innerHTML + "<br>");
}

// iv.

document.getElementById("first-name").value = "Alex";

// v.

document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";


// q2


// i. 

var formContent = document.getElementById("form-content");
console.log("Node type of form-content:", formContent.nodeType); 

// ii. 

var lastName = document.getElementById("lastName");
console.log("Node type of lastName element:", lastName.nodeType); 
console.log("Node type of lastName child:", lastName.firstChild.nodeType); 

// iii. 

lastName.firstChild.nodeValue = "Last Name: John"; 
console.log("Updated lastName:", lastName.innerHTML);

// iv.

var mainContent = document.getElementById("main-content");
console.log("First child of main-content:", mainContent.firstElementChild);
console.log("Last child of main-content:", mainContent.lastElementChild);

// v.

console.log("Next sibling of lastName:", lastName.nextElementSibling);
console.log("Previous sibling of lastName:", lastName.previousElementSibling);

// vi. 

var emailField = document.getElementById("email");
console.log("Parent node of email:", emailField.parentNode);
console.log("Node type of email:", emailField.nodeType);