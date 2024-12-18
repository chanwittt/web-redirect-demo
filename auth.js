// Simple Authentication Logic
const validUser = { username: "admin", password: "password123" };

// Redirect to login page if not authenticated
if (!localStorage.getItem("isAuthenticated") && window.location.pathname !== "/login.html") {
  window.location.href = "login.html";
}

// Handle login
if (window.location.pathname === "/login.html") {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUser.username && password === validUser.password) {
      localStorage.setItem("isAuthenticated", "true");
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password!");
    }
  });
}

// Handle logout
if (window.location.pathname === "/index.html") {
  document.getElementById("logoutButton").addEventListener("click", function () {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "login.html";
  });
}
