document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.getElementById("loginButton");
    if (loginButton) {
        loginButton.addEventListener("click", function() {
            window.location.href = "/notherLogin/index.html";
        });
    }
});
//  eye change -----------

const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye-icon');
let eyetrue = true;

eyeIcon.addEventListener("click", function() {
    if (eyetrue) {
        passwordInput.type = 'text';
        eyeIcon.textContent = 'visibility_off';
        eyetrue = false;
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = 'visibility';
        eyetrue = true;
    }
});




























