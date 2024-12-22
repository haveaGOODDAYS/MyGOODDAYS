// Script untuk perlindungan kata sandi
const password = "haveagoodday12345"; // Ganti dengan kata sandi pilihanmu
const loginButton = document.getElementById("login-button");
const errorMessage = document.getElementById("error-message");
const blogContent = document.getElementById("blog-content");
const loginScreen = document.getElementById("login-screen");

loginButton.addEventListener("click", () => {
    const inputPassword = document.getElementById("password").value;
    if (inputPassword === password) {
        loginScreen.style.display = "none";
        blogContent.style.display = "block";
    } else {
        errorMessage.style.display = "block";
    }
});
