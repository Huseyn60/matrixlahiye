function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "shop.html";
    } else {

        alert("Invalid email or password. Please try again.");
    }
}

document.getElementById("loginBtn").addEventListener("click", login);