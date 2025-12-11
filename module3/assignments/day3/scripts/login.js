const btn = document.getElementById("loginBtn");

btn.addEventListener("click", () => {
    let user = JSON.parse(localStorage.getItem("user"));

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (user && user.email === email && user.password === pass) {
        alert("Login Successful!");
        localStorage.setItem("loggedIn", true);
        window.location.href = "todos.html";
    } else {
        alert("Invalid Credentials");
    }
});
