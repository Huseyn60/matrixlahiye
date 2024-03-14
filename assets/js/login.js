function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        window.location.href = "home.html";
    } else {

        alert("Invalid email or password. Please try again.");
    }
}

document.getElementById("loginBtn").addEventListener("click", login);