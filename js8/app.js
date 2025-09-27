
function submitForm(){
    var username = document.getElementById("name").value;
    var fullName = document.getElementById("fullName").value;
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;


     document.getElementById("information").innerHTML = `
        <h3>Form Data:</h3>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Password:</strong> ${userPassword}</p>
    `;
}
